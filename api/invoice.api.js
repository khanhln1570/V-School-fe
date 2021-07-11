function makerandom(length) {
  var result = [];
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 ';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }

  return result.join('');
}

function randomBetween(from, to) {
  return Math.round(Math.random() * to) + from;
}

function randomInvoiceType() {
  const invoiceTypeIds = [{
    id: "EXTRA_TUITION",
    label: "Phụ đạo"
  },
  {
    id: "TUITION",
    label: "Học phí"
  },];

  return invoiceTypeIds[randomBetween(0, (invoiceTypeIds.length - 1))];
}

function randomInvoiceUnit() {
  const invoiceUnitIds = ["1 tháng", "1 học kì", "1 năm học"];

  return invoiceUnitIds[randomBetween(0, (invoiceUnitIds.length - 1))];
}

const objInvoice = (i) => {
  return {
    id: i,
    MST: makerandom(8),
    amount: Math.floor(Math.random() * (999999 - 1)),
    description: 'Invoice ' + i,
    BHYT: makerandom(8),
    studentName: 'Student ' + i,
    status: randomBetween(0, 1) ? 'SUCCESS' : 'PENDING',
    type: randomInvoiceType(),
    unit: randomInvoiceUnit(),
  };
}



const invoices = () => {
  let data = [];

  for (let i = 0; i <= 26; i++) {
    const invoice = objInvoice(i);

    data = [
      ...data,
      invoice
    ]
  }

  return data;
}

export default (axios, resource) => ({
  getInvoices(params = { page: 1, size: 10, search: null, status: null }) {

    const list = invoices();
    let items = list;
    if (params.search) {
      items = items.filter(value => value.studentName.search(params.search) > -1);
    }

    if (params.status) {
      items = items.filter(value => value.status === params.status);
    }

    const count = items.length;
    console.log(items);

    items = items.slice((params.page - 1) * params.size, params.page * params.size);

    const response = {
      count: count,
      items
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(response)
      }, 700)
    })
  },
  // getInvoices(payload) {
  //   return axios.post(resource.getInvoices, payload);
  // },
});
