export interface FetchTest {
    bears: number
}



export type State = {
    loginType: string,
    token: string
    password: string,
    router: string,
    agreePolicy:boolean
}

export type Action = {
    updateLoginType: (loginType: State['loginType']) => void
    updateAgreePolicy: (agreePolicy: State['agreePolicy']) => void
    routerChange: (router: State['router']) => void
    increase: (router: State['router']) => string
    getAi: () => Promise<string>
}
