export default {
  api: {
    // getInfoByCode: '/info/:code',
    login: "/login",


    //invoice
    getInvoices: "/invoices",
    getProfile: "/profile",
    getInvoiceById:"/invoices/:id",
    getAllInvoices:"/invoices",


    //school
    getSchools: "/schools",
    getSchoolDetails: "/schools/:id",


    //student
    getStudentsByPhone: "/students/phone/:phone",
    getStudentsByMST: "/students/MST/:mst",
    getAllStudents: "/students",
    addStudentsByExcel: "/students",

    //notification
    setNotificationRead: "/notifications",
    addNotificationRead: "/notifications",
  }
}