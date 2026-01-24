import { createContext, useContext, useReducer } from "react";
import { initialState, productReducer } from "../public/store/reducer";
import { loadProducts } from "../public/store/action";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const loadMore = () => dispatch(loadProducts());

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        loadMore,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);