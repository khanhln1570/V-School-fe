#Deployment guides


- ######Install fabric on develop machine

	```
	pip install fabric
	```


- ######Redirect to `deployment` folder

	```
	cd /home/tradies/app/backend/deployment
	```


- ######Run deploy command

	```
	fab deploy:<server_name> (devel/staging/production)
	```

- ######List all fabric's commands

	```
	fab -l
	```