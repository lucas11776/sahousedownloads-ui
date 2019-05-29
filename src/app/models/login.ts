export interface Login {
    username:string;
    password:string;
}

export interface LoginResponse {
    response:boolean;
    data: {
        message:string,
        token:string
    }
}
