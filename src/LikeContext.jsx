import { createContext, useContext, useReducer } from "react";
import { initialLikes, likesReducer } from "../public/store/reducer";
import { likeProduct } from "../public/store/action";



const LikeContext = createContext();

export const LikeProvider = ({children}) => {
    const [state, dispatch] = useReducer(likesReducer, initialLikes);

    const likePro = () => dispatch(likeProduct());

    const value = {state, likePro}


    return (<LikeContext.Provider value={value}>{children}</LikeContext.Provider>);
};

export const useLikes = () => useContext(LikeContext)