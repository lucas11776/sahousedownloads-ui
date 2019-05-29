export interface Register {
    username:string;
    email:string;
    name:string;
    surname:string;
    password:string;
    confirm_password:string;
}

export interface RegisterResponse {
    response: boolean;
    data: {
        message: string;
        username:string;
        email:string;
        name:string;
        surname:string;
        password:string;
        confirm_password:string;
    }
}