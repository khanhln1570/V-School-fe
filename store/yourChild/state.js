export default () => ({
    children: [
        { id: 1, name: 'Trần Thị Tố Trinh', address: "8C5 Hoàng Diệu", classCode: "10A9", schoolId: "DE12", status: "", isActive: true },
        { id: 2, name: 'Nguyễn Quốc Cường', address: "365 Nguyễn Tri Phương", classCode: "10A12", schoolId: "DE12", status: "", isActive: true },
        { id: 3, name: 'Khánh Mooi', address: "12 Phan Bội Châu", classCode: "10A15", schoolId: "DE12", status: "", isActive: false }
    ],
    currentChild: { id: 1, name: 'Trần Thị Tố Trinh', address: "8C5 Hoàng Diệu", classCode: "10A9", schoolId: "DE12", status: "", isActive: true },
    currentChildInvoices: [
        {
            id: 1,
            total: 340000,
            note: "Tháng 2",
            type: "EXTRA_TUITION"
        },
        {
            id: 2,
            total: 340000,
            note: "Tháng 2",
            type: "TUITION"
        },
        {
            id: 3,
            total: 340000,
            note: "Tháng 2",
            type: "TUITION"
        },
        {
            id: 4,
            total: 340000,
            note: "Tháng 2",
            type: "EXTRA_TUITION"
        },
        {
            id: 5,
            total: 340000,
            note: "Tháng 2",
            type: "EXTRA_TUITION"
        },
    ],
});