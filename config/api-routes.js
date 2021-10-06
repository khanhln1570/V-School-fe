export default {
  api: {
    // getInfoByCode: '/info/:code',
    login: "/login",


    //invoice
    getInvoices: "/invoices",
    getProfile: "/profile",
    getInvoiceById:"/invoices/:id",
    getAllInvoices:"/invoices",
    getAllInvoicesByChild:"/invoices",


    //school
    getSchools: "/schools",
    getSchoolDetails: "/schools/:id",


    //student
    getStudentsByPhone: "/students",
    getStudentsByMST: "/students/MST/:mst",
    getAllStudents: "/students",
    addStudentsByExcel: "/students",
    getStudentById: "/students/:id",

    //notification
    setNotificationRead: "/notifications",
    addNotificationRead: "/notifications",

    //payment
    getCustomer: "/students/noToken/:BHYT",
    getPublicSchool: "/schools/public/noToken",
    getPublicStudentBHYT: "/students/public/noToken",
  }
}