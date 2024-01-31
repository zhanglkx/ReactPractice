export interface FetchTest {
    bears: number
}



export type State = {
    loginType: string,
    token: string
    password: string
}

export type Action = {
    updateLoginType: (loginType: State['loginType']) => void
    // updateLastName: (lastName: State['lastName']) => void
}
