const sidebarItems = [
  {
    role: 'all',
    title: "Summary",
    to: "/",
    id: "summary"
  },
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
    role: 'all',
    group: {
      title: 'Quản Lý',
      id: 'management',
      items: [
        {
          title: "Phí thu",
          to: "/invoices",
          role: "PARENT"
        },
        {
          title: "Phí thu",
          to: "/invoicesSchool",
          role: "SCHOOL"
        },
        {
          title: "Học sinh",
          to: "/students",
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
    role: 'all',
    group: {
      title: 'Tài Khoản',
      id: 'account',
      items: [
        {
          title: "Cài đặt",
          to: "/settings",
        },
        {
          title: "Về chúng tôi",
          to: "/lp",
        },
      ]
    }
  },
];

export default sidebarItems;