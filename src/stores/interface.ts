export interface FetchTest {
    bears: number
}



export type State = {
    loginType: string,
    token: string
    password: string,
    router: string
}

export type Action = {
    updateLoginType: (loginType: State['loginType']) => void
    routerChange: (router: State['router']) => void
    increase: (router: State['router']) => string
    getAi: () => Promise<string>
}
