export default {
  api: {
    // getInfoByCode: '/info/:code',
    login: "/login",


    //invoice
    getInvoices: "/invoices",
    getProfile: "/profile",


    //school
    getSchools: "/schools",
    getSchoolDetails: "/schools/:id",


    //student
    getStudentsByPhone: "/students/phone/:phone",
    getStudentsByMST: "/students/MST/:mst",
    addStudentsByExcel: "/students",

    //notification
    setNotificationRead: "/notifications",
    addNotificationRead: "/notifications",
  }
}