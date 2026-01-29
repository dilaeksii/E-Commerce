import { useHistory } from "react-router-dom";


export const ProductCard = ({product}) => {
    let history = useHistory();

    return (<div onClick={() => history.push(`/product/${product.imageId}`)}>
        <img src={`/images/clothes${product.imageId}.jpg`} alt="" />
        <div className="flex flex-col items-center">
            <p className="text-[#252B42] text-base leading-[24px]">{product.title}</p>
            <p className="text-[#737373] text-sm leading-[24px]">{product.department}</p>
            <p><span className="text-[#BDBDBD] font-bold text-base leading-[24px]">{product.price}</span>
            {" "}<span className="text-[#23856D] font-bold text-base leading-[24px]">{product.salePrice}</span></p>
        </div>
    </div>);
}