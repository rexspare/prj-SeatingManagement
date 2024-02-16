import { BOOK_STATUS } from "../assets/enums";
import { hp, wp } from "../assets/styles/styleGuide";

const TABLES = [
    {
        id: 1,
        type: "2P",
        isRound: false,
        zone:1,
        xAxis: wp(5),
        yAxis: hp(5),
        tableStatus: BOOK_STATUS.OCCUPIED,
        chairs: [
            {
                id: 1,
                chairStatus: BOOK_STATUS.OCCUPIED
            },
            {
                id: 2,
                chairStatus: BOOK_STATUS.EMPTY
            },
        ]
    },

    {
        id: 2,
        type: "3P",
        isRound: true,
        zone:1,
        xAxis: wp(5),
        yAxis: hp(35),
        tableStatus: BOOK_STATUS.OCCUPIED,
        chairs: [
            {
                id: 1,
                chairStatus: BOOK_STATUS.OCCUPIED
            },
            {
                id: 2,
                chairStatus: BOOK_STATUS.EMPTY
            },
            {
                id: 3,
                chairStatus: BOOK_STATUS.OCCUPIED
            },
        ]
    },

    {
        id: 3,
        type: "3P",
        isRound: false,
        zone:1,
        xAxis: wp(15),
        yAxis: hp(15),
        tableStatus: BOOK_STATUS.BOOKED,
        chairs: [
            {
                id: 1,
                chairStatus: BOOK_STATUS.EMPTY
            },
            {
                id: 2,
                chairStatus: BOOK_STATUS.EMPTY
            },
            {
                id: 3,
                chairStatus: BOOK_STATUS.EMPTY
            },
        ]
    },
    {
        id: 4,
        type: "8P",
        isRound: false,
        zone:2,
        xAxis: wp(45),
        yAxis: hp(20),
        tableStatus: BOOK_STATUS.OCCUPIED,
        chairs: [
            {
                id: 1,
                chairStatus: BOOK_STATUS.OCCUPIED
            },
            {
                id: 2,
                chairStatus: BOOK_STATUS.EMPTY
            },
            {
                id: 3,
                chairStatus: BOOK_STATUS.OCCUPIED
            },
            {
                id: 4,
                chairStatus: BOOK_STATUS.OCCUPIED
            },
            {
                id: 5,
                chairStatus: BOOK_STATUS.EMPTY
            },
            {
                id: 6,
                chairStatus: BOOK_STATUS.OCCUPIED
            },
            {
                id: 7,
                chairStatus: BOOK_STATUS.OCCUPIED
            },
            {
                id: 8,
                chairStatus: BOOK_STATUS.EMPTY
            },

        ]
    },
    {
        id: 44,
        type: "8P",
        isRound: true,
        zone:2,
        xAxis: wp(45),
        yAxis: hp(60),
        tableStatus: BOOK_STATUS.OCCUPIED,
        chairs: [
            {
                id: 1,
                chairStatus: BOOK_STATUS.OCCUPIED
            },
            {
                id: 2,
                chairStatus: BOOK_STATUS.EMPTY
            },
            {
                id: 3,
                chairStatus: BOOK_STATUS.OCCUPIED
            },
            {
                id: 4,
                chairStatus: BOOK_STATUS.OCCUPIED
            },
            {
                id: 5,
                chairStatus: BOOK_STATUS.EMPTY
            },
            {
                id: 6,
                chairStatus: BOOK_STATUS.OCCUPIED
            },
            {
                id: 7,
                chairStatus: BOOK_STATUS.OCCUPIED
            },
            {
                id: 8,
                chairStatus: BOOK_STATUS.EMPTY
            },

        ]
    },
    {
        id: 5,
        type: "6P",
        isRound: false,
        zone:2,
        xAxis: wp(45),
        yAxis: hp(40),
        tableStatus: BOOK_STATUS.EMPTY,
        chairs: [
            {
                id: 1,
                chairStatus: BOOK_STATUS.EMPTY
            },
            {
                id: 2,
                chairStatus: BOOK_STATUS.EMPTY
            },
            {
                id: 3,
                chairStatus: BOOK_STATUS.EMPTY
            },
            {
                id: 4,
                chairStatus: BOOK_STATUS.EMPTY
            },
            {
                id: 5,
                chairStatus: BOOK_STATUS.EMPTY
            },
            {
                id: 6,
                chairStatus: BOOK_STATUS.EMPTY
            },
        ]
    },
    {
        id: 51,
        type: "6P",
        zone:2,
        isRound: true,
        xAxis: wp(65),
        yAxis: hp(40),
        tableStatus: BOOK_STATUS.EMPTY,
        chairs: [
            {
                id: 1,
                chairStatus: BOOK_STATUS.EMPTY
            },
            {
                id: 2,
                chairStatus: BOOK_STATUS.EMPTY
            },
            {
                id: 3,
                chairStatus: BOOK_STATUS.EMPTY
            },
            {
                id: 4,
                chairStatus: BOOK_STATUS.EMPTY
            },
            {
                id: 5,
                chairStatus: BOOK_STATUS.EMPTY
            },
            {
                id: 6,
                chairStatus: BOOK_STATUS.EMPTY
            },
        ]
    },
    {
        id: 6,
        type: "4P",
        isRound: false,
        zone:1,
        xAxis: wp(30),
        yAxis: hp(65),
        tableStatus: BOOK_STATUS.OCCUPIED,
        chairs: [
            {
                id: 1,
                chairStatus: BOOK_STATUS.OCCUPIED
            },
            {
                id: 2,
                chairStatus: BOOK_STATUS.EMPTY
            },
            {
                id: 3,
                chairStatus: BOOK_STATUS.OCCUPIED
            },
            {
                id: 4,
                chairStatus: BOOK_STATUS.OCCUPIED
            },
        ]
    },

    {
        id: 7,
        type: "4P",
        isRound: true,
        zone:1,
        xAxis: wp(25),
        yAxis: hp(50),
        tableStatus: BOOK_STATUS.OCCUPIED,
        chairs: [
            {
                id: 1,
                chairStatus: BOOK_STATUS.OCCUPIED
            },
            {
                id: 2,
                chairStatus: BOOK_STATUS.EMPTY
            },
            {
                id: 3,
                chairStatus: BOOK_STATUS.OCCUPIED
            },
            {
                id: 4,
                chairStatus: BOOK_STATUS.OCCUPIED
            },
        ]
    },
]

const ZONE_LIST = [
    {
        id: 0,
        title: "All"
    },
    {
        id: 1,
        title: "Zone 1"
    },
    {
        id: 2,
        title: "Zone 2"
    },
]

const TABLE_2P = {
    type: "2P",
    xAxis: wp(40),
    yAxis: hp(45),
    tableStatus: BOOK_STATUS.EMPTY,
    chairs: [
        {
            id: 1,
            chairStatus: BOOK_STATUS.EMPTY
        },
        {
            id: 2,
            chairStatus: BOOK_STATUS.EMPTY
        },
    ]
}

const TABLE_3P = {
    type: "3P",
    xAxis: wp(40),
    yAxis: hp(45),
    tableStatus: BOOK_STATUS.EMPTY,
    chairs: [
        {
            id: 1,
            chairStatus: BOOK_STATUS.EMPTY
        },
        {
            id: 2,
            chairStatus: BOOK_STATUS.EMPTY
        },
        {
            id: 3,
            chairStatus: BOOK_STATUS.EMPTY
        },
    ]
}

const TABLE_4P = {
    type: "4P",
    xAxis: wp(40),
    yAxis: hp(45),
    tableStatus: BOOK_STATUS.EMPTY,
    chairs: [
        {
            id: 1,
            chairStatus: BOOK_STATUS.EMPTY
        },
        {
            id: 2,
            chairStatus: BOOK_STATUS.EMPTY
        },
        {
            id: 3,
            chairStatus: BOOK_STATUS.EMPTY
        },
        {
            id: 4,
            chairStatus: BOOK_STATUS.EMPTY
        },
    ]
}

const TABLE_6P = {
    type: "6P",
    xAxis: wp(40),
    yAxis: hp(45),
    tableStatus: BOOK_STATUS.EMPTY,
    chairs: [
        {
            id: 1,
            chairStatus: BOOK_STATUS.EMPTY
        },
        {
            id: 2,
            chairStatus: BOOK_STATUS.EMPTY
        },
        {
            id: 3,
            chairStatus: BOOK_STATUS.EMPTY
        },
        {
            id: 4,
            chairStatus: BOOK_STATUS.EMPTY
        },
        {
            id: 5,
            chairStatus: BOOK_STATUS.EMPTY
        },
        {
            id: 6,
            chairStatus: BOOK_STATUS.EMPTY
        },
    ]
}

const TABLE_8P = {
    type: "8P",
    xAxis: wp(40),
    yAxis: hp(45),
    tableStatus: BOOK_STATUS.EMPTY,
    chairs: [
        {
            id: 1,
            chairStatus: BOOK_STATUS.EMPTY
        },
        {
            id: 2,
            chairStatus: BOOK_STATUS.EMPTY
        },
        {
            id: 3,
            chairStatus: BOOK_STATUS.EMPTY
        },
        {
            id: 4,
            chairStatus: BOOK_STATUS.EMPTY
        },
        {
            id: 5,
            chairStatus: BOOK_STATUS.EMPTY
        },
        {
            id: 6,
            chairStatus: BOOK_STATUS.EMPTY
        },
        {
            id: 7,
            chairStatus: BOOK_STATUS.EMPTY
        },
        {
            id: 8,
            chairStatus: BOOK_STATUS.EMPTY
        },

    ]
}

export {
    TABLES,
    ZONE_LIST,
    TABLE_2P,
    TABLE_3P,
    TABLE_4P,
    TABLE_6P,
    TABLE_8P
}