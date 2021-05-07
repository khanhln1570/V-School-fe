const sidebarItems = [
  {
    title: "Summary",
    to: "/",
    id: "summary"
  },
  {
    group: {
      title: 'Flagged entry',
      id: 'flagged-entry',
      items: [
        {
          title: "Incoming Flags",
          to: "/flagged/incoming",
        },
        {
          title: "Flag History",
          to: "/flagged/history",
        },
      ]
    }
  },
  {
    group: {
      title: 'User management',
      id: 'user-management',
      items: [
        {
          title: "Admin",
          to: "/user-management/admin",
        },
        {
          title: "Supervisor",
          to: "/user-management/supervisor",
        },
      ]
    }
  },
];

export default sidebarItems;