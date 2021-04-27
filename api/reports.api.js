function makerandom(length) {
  var result           = [];
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }

  return result.join('');
}


const objFarmer = (i) => {
  return {
    id: i,
    name: 'Name ' + i,
    location: makerandom(12),
    cultivar_supplied: Math.floor(Math.random() * (99999 - 1) + 2),
    cultivar_rejectd: Math.floor(Math.random() * (99999 - 1) + 12),
    centre: 'CENTRE' + makerandom(3),
    cultivar_detail: [
      {
        name: 'Musang Kings',
        total: '100 kg'
      },
      {
        name: 'D24',
        total: '10 kg'
      },
      {
        name: 'IOI',
        total: '10 kg'
      },
      {
        name: 'Others',
        total: '5 kg'
      },
      {
        name: 'Rejected',
        total: '50 kg'
      },
    ]
  };
}


const farmers = () => {
  let data = [];

  for (let i = 0; i <= 5000; i++) {
    const farmer = objFarmer(i);

    data = [
      ...data,
      farmer
    ]
  }

  return data;
}

export default (axios, resource) => ({
  getFarmers(params = { page: 1, size: 10, search: null }) {
    const list = farmers();
    let items = list;
    if (params.search) {
      items = items.filter(value => value.title.search(params.search) > -1);
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

  getFarmerDetail(id) {
    const list = farmers();
    const farmer = list.find(item => item.id === parseInt(id));


    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(farmer)
      }, 300)
    })
  }
});
