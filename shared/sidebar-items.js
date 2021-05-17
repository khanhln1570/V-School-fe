const sidebarItems = [
  // {
  //   title: "Summary",
  //   to: "/",
  //   id: "summary"
  // },
  {
    group: {
      title: 'Con của bạn',
      id: 'your-child',
      items: [
        {
          title: "Trần Thị Tố Trinh",
          to: "/students/studentId",
        },
        {
          title: "Hoàng Việt Cường",
          to: "/students/studentId",
        },
      ]
    }
  },
  {
    group: {
      title: 'Quản Lý',
      id: 'management',
      items: [
        {
          title: "Phí thu",
          to: "/invoices",
        },
      ]
    }
  },
  {
    group: {
      title: 'Tài Khoản',
      id: 'account',
      items: [
        {
          title: "Cài đặt",
          to: "/account/settings",
        },
      ]
    }
  },
];

export default sidebarItems;