import { useReducer,createContext ,useContext} from "react";
import { wishReducerFunction } from "../hooks/Wishlist/wishlist-controller";

const WishListContext=createContext();
export const useWishListContext=()=>useContext(WishListContext);

export const WishListProvider=({children})=>{

const [wishListState,wishDispatch]=useReducer(wishReducerFunction,{
wishCount:0,
wishItems:[],
addToishListMessage:false,
inWishlist:false
})
    return <WishListContext.Provider value={{wishListState,wishDispatch}}>
        {children}
    </WishListContext.Provider>
}