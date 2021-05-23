const sidebarItems = [
  // {
  //   title: "Summary",
  //   to: "/",
  //   id: "summary"
  // },
  {
    role: 'PARENT',
    group: {
      title: 'Con của bạn',
      id: 'your-child',
      items: [
        
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
        {
          title: "Phụ huynh",
          to: "/parents",
          role: "SCHOOL"
        },
        {
          title: "Trường học",
          to: "/schools",
          role: "SUPERADMIN"
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
          to: "/settings",
        },
      ]
    }
  },
];

export default sidebarItems;