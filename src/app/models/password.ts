export interface RecoverPassword {
    username:string;
}

export interface RecoverPasswordResponse {
    response:boolean;
    data: {
        message:string
    }
}

export interface ResetPassword {
    token:string;
    password:string;
    confirm_passowr:string;
}

export interface ResetPasswordReponse {
    response:boolean;
    data: {
        message:string;
        token:string;
        password:string;
        confirm_password:string;
    }
}