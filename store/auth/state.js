export default () => ({
  isLoggedIn: false,
  currentUser: {
    id: 1,
    name: 'Lam',
    role: 'parent',
    childs: [
      {
        id: 1,
        name: "Trần Thị Tố Trinh",
        invoices: [],
      }, {
        id: 2,
        name: "Hoàng Việt Cường",
        invoices: [],
      },
    ]
  }
});
