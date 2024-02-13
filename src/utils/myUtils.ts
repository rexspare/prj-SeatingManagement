import {
    Alert,
    Linking,
    PermissionsAndroid,
    Platform
} from 'react-native';
import { hp } from '../assets/styles/styleGuide';
import { IAgenda, IPlayList, ISong } from '../models/app';

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



export {
    getGreetings,
    vaildateEmail,
};
