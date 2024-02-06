import { create } from 'zustand'
import { State, Action } from './interface';

const useLoginStore = create<State & Action>((set) => ({
    loginType: 'string',
    token: 'string',
    password: 'string',
    router: 'string',
    agreePolicy:false,
    updateLoginType: (loginType) => set(() => ({ loginType: loginType })),
    updateAgreePolicy: (agreePolicy) => set(() => ({ agreePolicy: agreePolicy })),
    routerChange: (router) => set(() => ({ router: router })),
    increase: (router) => {
        set(() => ({ router: router }))
        return router;
    },
    getAi: async () => {
        const res = await fetch('http://localhost:3000/api/getAi')
        const onwer = await res.json();
        return onwer.name as string;
    }
}
))

export { useLoginStore };