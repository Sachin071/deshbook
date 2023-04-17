import { createContext, useContext, useReducer } from "react";
import { initialState } from "../component/Reducer";

 const StateContext = createContext(initialState);

 const StateProvider = ({reducer, initialState,children})=>{
    console.log("reducer",reducer);
    console.log("initialState",initialState);

    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
};

 const UseStateValue = ()=> useContext(StateContext);
 console.log(UseStateValue);

export {StateContext,StateProvider,UseStateValue}

