export interface IUser {
    domain: string;
    api_user: string;
    api_pass: string;
}

export interface IUserData {
    _id?: string;
    email?: string;
    AgendaId?: string;
    customerName?: string;
    deviceId?: string;
    MACAddress?: string;
    expiresIn?: number;
}   
