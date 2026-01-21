export const LOAD_CLOTHES = "LOAD_CLOTHES";


export const loadClothes = () => {
    const imgId = [];
    for(let i = 0; i < 5; i++) {
        imgId.push(Math.floor(Math.random() * 7) + 1);
    }
    return { type: LOAD_CLOTHES, payload: imgId };
}