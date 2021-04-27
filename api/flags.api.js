function makerandom(length) {
  var result           = [];
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }

  return result.join('');
}


const objFlag = (i) => {
  return {
    id: i,
    noteNo: 'SR21-000-' + makerandom(3),
    reason: makerandom(12),
    farmerDetails: {
      id: Math.floor(Math.random() * (99999 - 1) + 2),
      name: 'Farmer ' + makerandom(6),
    },
    flaggedBy: {
      id: Math.floor(Math.random() * (99999 - 1) + 2),
      name: 'Supervisor ' + makerandom(6),
      role: 'Supervisor',
    },
    cultivars: [
      {
        name: "Musan King",
        originEntry: {
          A: 50,
          B: 40,
          C: 30,
          D: 10,
        },
        updateEntry: {
          C: 40,
        },
      },
      {
        name: "Musan Queen",
        originEntry: {
          A: 50,
          B: 50,
          C: 50,
        },
        updateEntry: {},
      },
      {
        name: "D10",
        originEntry: {
          A: 50,
          B: 50,
          C: 50,
        },
        updateEntry: {},
      },
      {
        name: "S22",
        originEntry: {
          A: 50,
          B: 50,
          C: 50,
        },
        updateEntry: {},
      },
    ]
  };
}


const flags = () => {
  let data = [];

  for (let i = 0; i <= 1000; i++) {
    const flag = objFlag(i);

    data = [
      ...data,
      flag
    ]
  }

  return data;
}

export default (axios, resource) => ({
  getFlags(params = { page: 1, size: 10, search: null }) {
    const list = flags();
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
      }, 300)
    })
  },

  getFlagDetails(id) {
    const list = flags();
    const flag = list.find(item => item.id === parseInt(id));

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(flag)
      }, 300)
    })
  }
});
