const sidebarItems = [
  {
    role: 'SCHOOL',
    title: "Summary",
    to: "/dashboard",
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
          title: "Thanh toán",
          to: "/bills",
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
