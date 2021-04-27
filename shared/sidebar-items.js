const sidebarItems = [
  {
    title: "Summary",
    to: "/",
    id: "summary"
  },
  {
    group: {
      title: 'Reports',
      id: 'reports',
      items: [
        {
          title: "Overview",
          to: "/reports",
        },
        {
          title: "Farmers",
          to: "/reports/farmers",
        },
        {
          title: "Collection Centres",
          to: "/reports/collection-centers",
        },
        {
          title: "Archive",
          to: "/reports/archive",
        },
      ]
    }
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
        {
          title: "Farmer",
          to: "/user-management/farmer",
        },
      ]
    }
  },
  {
    group: {
      title: 'Settings',
      id: 'settings',
      items: [
        {
          title: "Durians",
          to: "/settings/durians",
        },
        {
          title: "Collection Centre",
          to: "/settings/collections",
        },
      ]
    }
  },
];

export default sidebarItems;