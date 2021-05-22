function makerandom(length) {
  var result           = [];
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }

  return result.join('');
}

function randomBetween(from, to) {
  return Math.round(Math.random() * to) + from;
}

const objInvoice = (i) => {
  return {
    id: i,
    MST: makerandom(8),
    amount: Math.floor(Math.random() * (999999 - 1)),
    description: 'Invoice ' + i,
    BHYT: makerandom(8),
    status: randomBetween(0, 1) ? 'SUCCESS' : 'PENDING',
  };
}



const invoices = () => {
  let data = [];

  for (let i = 0; i <= 16; i++) {
    const invoice = objInvoice(i);

    data = [
      ...data,
      invoice
    ]
  }

  return data;
}

export default (axios, resource) => ({
  getInvoices(params = { page: 1, size: 10, search: null }) {
    const list = invoices();
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
      }, 700)
    })
  },
});
