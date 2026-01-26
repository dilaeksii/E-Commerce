export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const LIKE = "LIKE";

export const createProduct = () => ({
  imageId: Math.floor(Math.random() * 7) + 1,
  title: "Graphic Design",
  department: "English Department",
  price: 16.48,
  salePrice: 6.48,
});


export const loadProducts = () => {
    const imgId = [];
    for(let i = 0; i < 5; i++) {
        imgId.push(Math.floor(Math.random() * 7) + 1);
    }
    return { type: LOAD_PRODUCTS, payload: Array.from({ length: 5 }, createProduct) };
}

export const likeProduct = (id) => {
  return { type: LIKE, payload: id   };
}