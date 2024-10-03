export enum LoginRole{
    Pekerja,
    Penjual,
    User
}

export interface ILoginData{
    email: string,
    password: string, 
    role: LoginRole
}

