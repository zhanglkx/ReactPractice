import { create } from 'zustand'
import { State, Action } from './interface';

const useLoginStore = create<State & Action>((set) => ({
    loginType: 'string',
    token: 'string',
    password: 'string',
    updateLoginType: (loginType) => set(() => ({ loginType: loginType })),
}))

export { useLoginStore };