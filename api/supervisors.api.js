function makerandom(length) {
  var result           = [];
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }

  return result.join('');
}


const objSupervisor = (i) => {
  return {
    id: i,
    name: 'Name ' + i,
    mobileNumber: '+' + Math.floor(Math.random() * (89 - 1) + 10) +' '+ Math.floor(Math.random() * (99999999 - 1) + 2),
    login: Math.floor(Math.random() * (99999999 - 1) + 12),
    password: makerandom(12),
  };
}


const supervisors = () => {
  let data = [];

  for (let i = 0; i <= 16; i++) {
    const supervisor = objSupervisor(i);

    data = [
      ...data,
      supervisor
    ]
  }

  return data;
}

export default (axios, resource) => ({
  getSupervisors(params = { page: 1, size: 10, search: null }) {
    const list = supervisors();
    let items = list;
    if (params.search) {
      items = items.filter(value => value.name.search(params.search) > -1);
    }

    items = items.slice((params.page - 1) * params.size, params.page * params.size);

    const response = {
      count: list.length,
      items
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response)
      }, 1000)
    })
  },

  // getFarmerDetail(id) {
  //   const list = farmers();
  //   const farmer = list.find(item => item.id === parseInt(id));


  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(farmer)
  //     }, 300)
  //   })
  // }
});
