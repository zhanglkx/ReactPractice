import { useReducer } from "react";


function reducer(state, action) {
    switch (action.type) {
        case 'add': {
            const a = {
                num: state.num - action.num
            }
            // debugger
            return a
        }


            break;

        default:
            break;
    }
}


function App() {

    const [state, dispatch] = useReducer(reducer, { num: 0 });


    return (
        <div>
            <h1>useReducer</h1>
            <button onClick={() => dispatch({ type: 'add', num: 1 })}>+</button>
            <button onClick={() => dispatch({ type: 'add', num: -1 })}>-</button>
            <p>{state.num}</p>
        </div>
    )


}

export default App;
