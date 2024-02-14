import { BOOK_STATUS } from "../assets/enums";
import { COLORS } from "../assets/styles/styleGuide";

const getGreetings = () => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
    let greeting;
    if (currentHour >= 5 && currentHour < 12) {
        greeting = 'Good morning!';
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = 'Good afternoon!';
    } else if (currentHour >= 18 && currentHour < 22) {
        greeting = 'Good evening!';
    } else {
        greeting = 'Good night!';
    }
    return greeting
}
/**
 * EMAIL VAILDATION
 * **/
const vaildateEmail = (text: string) => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (emailRegex.test(text)) {
        return true
    } else {
        return false
    }
};

const getAssetColor = (status: string) => {
    switch (status) {
        case BOOK_STATUS.BOOKED:
            return COLORS.DANGER
        case BOOK_STATUS.OCCUPIED:
            return COLORS.ORANGE
        case BOOK_STATUS.EMPTY:
            return COLORS.SUCCESS

        default:
            return COLORS.SUCCESS
    }
}

const getChairColor = (data: any, index: number) => {
    const status = data.chairs[index]?.chairStatus
    if (data.tableStatus == BOOK_STATUS.EMPTY) {
        return COLORS.SUCCESS
    }
    if (data.tableStatus == BOOK_STATUS.BOOKED) {
        return COLORS.DANGER
    }
    else {
        switch (status) {
            case BOOK_STATUS.BOOKED:
                return COLORS.DANGER
            case BOOK_STATUS.OCCUPIED:
                return COLORS.ORANGE
            case BOOK_STATUS.EMPTY:
                return COLORS.SUCCESS

            default:
                return COLORS.SUCCESS
        }
    }
}

const getChairStatus = (data: any, index: number) => {
    const status = data.chairs[index]?.chairStatus
    if (data.tableStatus == BOOK_STATUS.EMPTY) {
        return 'Empty'
    }
    if (data.tableStatus == BOOK_STATUS.BOOKED) {
        if (status == BOOK_STATUS.OCCUPIED) {
            return "Occupied"
        } else {
            return "Booked"
        }
    }
    else {
        switch (status) {
            case BOOK_STATUS.BOOKED:
                return "Booked"
            case BOOK_STATUS.OCCUPIED:
                return "Occupied"
            case BOOK_STATUS.EMPTY:
                return 'Empty'

            default:
                return 'Empty'
        }
    }
}

const getNumberOfOccupiedChairs = (data: any,) => {
    const filtered = data.chairs?.filter((chair: any) => chair.chairStatus != BOOK_STATUS.EMPTY)
    return filtered?.length

}

const generateRandomId = (length: number = 32) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomId += characters.charAt(randomIndex);
    }

    return randomId;
}



export {
    getGreetings,
    vaildateEmail,
    getAssetColor,
    getChairColor,
    getNumberOfOccupiedChairs,
    getChairStatus,
    generateRandomId
};

