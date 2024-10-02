export enum LoginRole{
    USER,
    SELLER,
    WORKER
}

export interface ILoginData{
    email: string,
    password: string, 
    role: LoginRole
}

