import { useHistory } from "react-router-dom";


export const ProductCard = ({product}) => {
    let history = useHistory();

    return (<div onClick={() => history.push(`/product/${product.id}`)}>
        <img src={product.images[0].url} alt="" />
        <div className="flex flex-col items-center">
            <p className="text-[#252B42] text-base leading-[24px]">{product.name}</p>
            <p className="text-[#737373] text-sm leading-[24px] text-center">{product.description}</p>
            <p><span className="text-[#BDBDBD] font-bold text-base leading-[24px]">{product.price}$</span></p>
            {/* {" "}<span className="text-[#23856D] font-bold text-base leading-[24px]">{product.salePrice}</span></p> */}
        </div>
    </div>);
}