import { create } from 'zustand'

const useStore = create((set) => ({
    bears: 0,
    increasePopulation: () => set((state: { bears: number }) => {
        console.log(state)

        return { bears: state.bears + 1 }
    }),
    removeAllBears: () => set({ bears: 0 }),
}))

/**
 *  在这里，state内容是(set) => ({A})中对应的 A,在这里是bears、increasePopulation、removeAllBears
 * @returns UI
 */
function BearCounter() {
    const bears = useStore((state) => state.bears)
    console.log(bears);

    return <h1>{bears} around here...</h1>
}

function Controls() {
    const increasePopulation = useStore((state) => {
        console.log(state);

        return state.increasePopulation
    })
    console.log(increasePopulation);

    return <button onClick={increasePopulation}>one up</button>
}

export { BearCounter, Controls }