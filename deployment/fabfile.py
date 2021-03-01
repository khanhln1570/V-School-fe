# import fabric third-party
from fabric.api import local, run, env
from fabric.colors import green, red
from fabric.contrib.files import exists

# local env config
PATH_INSTALL_FILE = './bash/install_environment.sh'

SERVERS = dict(
    devel = dict(
        host = '103.157.198.53',
        user = 'crystal',
        branch = 'develop',
        src = '../',
        dest = '/home/dev/crystal/backend',
        excludeFile = '\'rsync_exclude.txt\'',
        sshKey = './ssh-keys/crystal-stag',
        frontendSrc = '../',
        frontendDest = '/home/crystal/frontend',
    ),
)

def connect(server_name='devel'):

    print(green('Connecting to %s server.....' % SERVERS[server_name]['host']))
    env.host_string = SERVERS[server_name]['host']
    env.user = SERVERS[server_name]['user']
    env['name'] = server_name
    if exists('/etc'):
        # run('[ -s "/home/dev/.nvm/nvm.sh" ] && \. "/home/dev/.nvm/nvm.sh" && pm2 restart fe-nuxt-dev')
        print(green('Connected to %s server.....' % server_name))
    

def prepare_env(server_name='devel'):
    print(green('Prepare environment %s server.....' % SERVERS[server_name]['host']))
    env.host_string = SERVERS[server_name]['host']
    env.user = SERVERS[server_name]['user']
    env['name'] = server_name
    if SERVERS[server_name]['sshKey']:
        env.key_filename = SERVERS[server_name]['sshKey']

def connect_server(server_name='devel'):
    """
    Script to connect to server
    """
    prepare_env(server_name)

    if exists('/etc'):
        print(green('Connected to %s server.....' % server_name))
        return True
    else:
        print(red('Can\'t connect to %s server. Please double check your list of IPs in hosts' % server_name))
        return False

def deploy_frontend(server_name='devel'):
    """
    Script to deploy panel
    """
    print(green('Start deploy Frontend %s.....' % server_name))
    
    # copy config file
    # local('cp ../deployment/env/%s/env.js ../src/config/env.js' % server_name)

    # run build frontend
    local('cd ../ && npm run build')

    # copy server.js file
    # local('cp ../../tradies-portal/server.js ../../tradies-portal/.next/server/server.js')

    local('echo ')
    if SERVERS[server_name]['sshKey']:
        local('rsync -avHPe ssh %s -e "ssh -i %s" %s@%s:%s --exclude-from %s' % (SERVERS[server_name]['frontendSrc'], SERVERS[server_name]['sshKey'], SERVERS[server_name]['user'], SERVERS[server_name]['host'], SERVERS[server_name]['frontendDest'], SERVERS[server_name]['excludeFile']))
    else:
        local('rsync -avHPe ssh %s -e ssh %s@%s:%s --exclude-from %s' % (SERVERS[server_name]['frontendSrc'], SERVERS[server_name]['user'], SERVERS[server_name]['host'], SERVERS[server_name]['frontendDest'], SERVERS[server_name]['excludeFile']))
    
    restart_server(server_name)
    # return local config file
    # local('cp ../deployment/env/local/env.js ../src/config/env.js')

def restart_server(server_name='devel'):
    """
    Script to restart server
    """
    print(green('Restart FE on %s server.....' % server_name))
    if connect_server(server_name):
        run('[ -s "/home/crystal/.nvm/nvm.sh" ] && \. "/home/crystal/.nvm/nvm.sh" && pm2 start ./frontend/ecosystem.config.js')
        print(green('Finished deploy on %s server.....' % server_name))

def frontend_npm_install(server_name='devel'):
    """
    Script to restart server
    """
    print(green('Restart FE on %s server.....' % server_name))
    if connect_server(server_name):
        run('cd /home/crystal/frontend && [ -s "/home/dev/.nvm/nvm.sh" ] && \. "/home/dev/.nvm/nvm.sh" && npm install')
        print(green('Finished deploy on %s server.....' % server_name))