export interface IChat {
    id: number;
    email: string;
    username: string;
    password: string;
    name: IName;
    phone: string;

    
    avatar: string;
    state: string;
    lastDate: string;
    lastMessage: string;
}

interface IName {
    firstname: string;
    lastname: string;
}