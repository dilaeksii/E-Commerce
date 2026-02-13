import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import {
  decrease,
  deleteProduct,
  increase,
} from "../../src/features/card/cardSlice";

export const ShopBag = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.card.product);
  const products = useSelector((state) => state.products.products);

  return (
    <div className="flex flex-col gap-3 min-w-[220px] py-10">
      {cartItems.length === 0 ? (
        <div className="text-2xl font-bold text-gray-500 flex items-center justify-center">Sepet boş</div>
      ) : (
        cartItems.map((item) => {
          const p = products.find((x) => String(x.id) === String(item.id));

          return (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white shadow-md rounded-xl p-6 mb-4 max-sm:flex-col max-sm:gap-4 max-sm:px-3"
            >
              <div className="flex items-center gap-5">
                <img
                  src={item.img}
                  alt=""
                  className="w-20 h-20 object-cover rounded-lg"
                />

                <div>
                  <div className="text-lg font-semibold">
                    {p ? p.name : `Ürün ID: ${item.id}`}
                  </div>

                  <div className="text-base text-gray-600 mt-1">
                    ${item.price}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center border rounded-lg overflow-hidden">
                  <button
                    className="px-4 py-2 text-lg font-bold hover:bg-gray-100"
                    onClick={() => dispatch(decrease(item.id))}
                  >
                    -
                  </button>

                  <div className="px-5 py-2 text-lg font-semibold">
                    {item.count}
                  </div>

                  <button
                    className="px-4 py-2 text-lg font-bold  hover:bg-blue-50"
                    onClick={() => dispatch(increase(item.id))}
                  >
                    +
                  </button>
                </div>

                <div className="text-lg font-semibold  min-w-[100px] text-right">
                  ${item.price * item.count}
                </div>

                <button
                  className="text-gray-400 hover:text-red-500 text-xl"
                  onClick={() => dispatch(deleteProduct(item.id))}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
