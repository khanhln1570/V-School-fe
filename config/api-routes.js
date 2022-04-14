export default {
  api: {
    // getInfoByCode: '/info/:code',
    login: "/login",
    updateProfile:"/updateProfile",


    //invoice
    getInvoices: "/invoices",
    getCurrentInvoice: "/invoices/:id",
    getInvoicesByToken: "/invoices",
    getProfile: "/profile",
    getInvoiceById:"/invoices/:id",
    getAllInvoices:"/invoices",
    getAllInvoicesByChild: "/invoices",

    //Bill
    getAllBills: "/bills/getAllByToken",
    getBillDetails: "/bills/:id",


    //school
    getSchools: "/schools",
    getSchoolDetails: "/schools/:id",
    resetpassParent: "/schools/reset-password-user",


    //student
    getStudentsByPhone: "/students",
    getStudentsByMST: "/students/MST/:mst",
    getAllStudents: "/students",
    addStudentsByExcel: "/students",
    getStudentById: "/students/:id",

    //parent
    getParents: "/parents",
    getParentDetails: "/parents/:id",
    banParent: "parents/:id/ban",
    unbanParent: "parents/:id/unban",

    //notification
    setNotificationRead: "/notifications",
    addNotificationRead: "/notifications",

    //payment
    getCustomer: "/students/noToken/:BHYT",
    getPublicSchool: "/schools/public/noToken",
    getPublicStudentBHYT: "/students/public/noToken",
    addBillPublic: "/bills/noToken",

    //Sync data
    
  }
}
