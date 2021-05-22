export default () => ({
    yourChild: [
        {
            id: 1,
            name: "Trần Thị Tố Trinh",
            gender: "female",
            address: "8C5 Hoàng Diệu",
            classCode: "10A9",
            schoolId: "DE12",
            status: "",
            isActive: true,
        },
        {
            id: 2,
            name: "Nguyễn Quốc Cường",
            gender: "male",
            address: "365 Nguyễn Tri Phương",
            classCode: "10A12",
            schoolId: "DE12",
            status: "",
            isActive: true,
        },
        {
            id: 3,
            name: "Khánh Mooi",
            gender: "male",
            address: "12 Phan Bội Châu",
            classCode: "10A15",
            schoolId: "DE12",
            status: "",
            isActive: false,
        },
    ],
    currentChild: null,
    currentChildInvoices: [
        {
            id: 1,
            total: 340000,
            note: "Tháng 2",
            type: "EXTRA_TUITION",
            title: "Phụ đạo âm nhạc",
            status: "PENDING"
        },
        {
            id: 2,
            total: 340000,
            note: "Tháng 2",
            type: "TUITION",
            title: "Học phí học kì 2 - 2021",
            status: "PENDING"
        },
        {
            id: 3,
            total: 340000,
            note: "Tháng 2",
            type: "TUITION",
            title: "Học phí học kì 1 - 2021",
            status: "SUCCESS"

        },
        {
            id: 4,
            total: 340000,
            note: "Tháng 2",
            type: "EXTRA_TUITION",
            title: "Phụ đạo tiếng anh",
            status: "PENDING"

        },
        {
            id: 5,
            total: 340000,
            note: "Tháng 2",
            type: "EXTRA_TUITION",
            title: "Phụ đạo ngữ văn",
            status: "SUCCESS"

        },
    ],
});
