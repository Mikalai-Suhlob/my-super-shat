export const loginRegExp = /^[a-z0-9\-_]{3,30}$/
export const passwordRegExp = /^[\w\W]+$/

export interface ILoginData{
    type: 0 | 1
    login: string
    password: string
    password2?: string
}

export const login = (v: string): {error: string} => {
    if(v.length < 3)
        return {error: 'Не верная длина логина'}
    if(v.length > 30)
        return {error: 'Не верная длина логина'}
    if(!loginRegExp.test(v))
        return {error: 'Логин содержит не верные символы'}

    return null
}

export const password = (v: string): {error: string} => {
    if(v.length < 6)
        return {error: 'Не верная длина пароля'}
    if(v.length > 50)
        return {error: 'Не верная длина пароля'}
    if(!passwordRegExp.test(v))
        return {error: 'Пароль содержит не верные символы'}

    return null
}

export const passwords = (v1: string, v2: string): {error: string} => {
    if(v2 && v1 !== v2)
        return {error: 'Введенные пароли не совпадают'}

    return null
}

export const loginData = (data: ILoginData): {error: string} => {
    if(data && typeof data.login === 'string')
        data.login = data.login.toLocaleLowerCase()

    return login(data.login) || password(data.password) || passwords(data.password, data.password2)
}