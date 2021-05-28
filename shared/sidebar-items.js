const sidebarItems = [
  {
    role: 'all',
    title: "Summary",
    to: "/",
    id: "summary"
  },
  {
    role: 'parent',
    group: {
      title: 'Con của bạn',
      id: 'your-child',
      items: [
        
      ]
    }
  },
  {
    role: 'all',
    group: {
      title: 'Quản Lý',
      id: 'management',
      items: [
        {
          title: "Phí thu",
          to: "/invoices",
          role: "parent"
        },
        {
          title: "Phí thu",
          to: "/invoicesSchool",
          role: "school"
        },
        // {
        //   title: "Phụ huynh",
        //   to: "/parents",
        //   role: "school"
        // },
        {
          title: "Trường học",
          to: "/schools",
          role: "superAdmin"
        },
      ]
    }
  },
  {
    role: 'all',
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