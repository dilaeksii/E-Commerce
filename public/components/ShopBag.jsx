import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { FiChevronRight, FiPlus } from "react-icons/fi";
import { decrease, deleteProduct, increase } from "../../src/features/card/cardSlice";


export const ShopBag = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.card.product);
  const products = useSelector((state) => state.products.products);

  const [showCoupon, setShowCoupon] = useState(false);

  const productTotal = cartItems.reduce(
    (sum, i) => sum + Number(i.price || 0) * Number(i.count || 0),
    0
  );

  const shipping = productTotal >= 150 ? 0 : (cartItems.length ? 29.99 : 0); 
  const shippingDiscount = productTotal >= 150 ? -29.99 : 0; 
  const grandTotal = productTotal + shipping; 

  return (
    <div className="w-full px-4 py-10">
      <div className="mx-auto max-w-6xl grid grid-cols-12 gap-6">
        <div className="col-span-7">
          {cartItems.length === 0 ? (
            <div className="text-2xl font-bold text-gray-500 flex items-center justify-center min-h-[200px] bg-white rounded-xl shadow-sm">
              Sepet boş
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => {
                const p = products.find((x) => String(x.id) === String(item.id));

                return (
                  <div
                    key={item.id}
                    className="flex items-center justify-between bg-white shadow-md rounded-xl p-6 max-sm:flex-col max-sm:gap-4 max-sm:px-3"
                  >
                    <div className="flex items-center gap-5 w-full">
                      <img
                        src={item.img}
                        alt=""
                        className="w-20 h-20 object-cover rounded-lg bg-gray-100"
                      />
                      <div className="flex-1">
                        <div className="text-lg font-semibold">
                          {p ? p.name : `Ürün ID: ${item.id}`}
                        </div>

                        <div className="text-base text-gray-600 mt-1">
                          ${Number(item.price || 0).toFixed(2)}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 max-sm:w-full max-sm:justify-between">
                      <div className="flex items-center border rounded-lg overflow-hidden">
                        <button
                          className="px-4 py-2 text-lg font-bold hover:bg-gray-100"
                          onClick={() => dispatch(decrease(item.id))}
                          aria-label="decrease"
                        >
                          -
                        </button>

                        <div className="px-5 py-2 text-lg font-semibold">
                          {item.count}
                        </div>

                        <button
                          className="px-4 py-2 text-lg font-bold hover:bg-blue-50"
                          onClick={() => dispatch(increase(item.id))}
                          aria-label="increase"
                        >
                          +
                        </button>
                      </div>
                      <div className="text-lg font-semibold min-w-[110px] text-right">
                        ${(Number(item.price || 0) * Number(item.count || 0)).toFixed(2)}
                      </div>
                      <button
                        className="text-gray-400 hover:text-red-500 text-xl"
                        onClick={() => dispatch(deleteProduct(item.id))}
                        aria-label="delete"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        <aside className="col-span-12 lg:col-span-4">
          <div className="sticky top-6">
            <div className="bg-white shadow-md rounded-xl p-6">
              <div className="text-xl font-semibold text-gray-800 mb-4">
                Sipariş Özeti
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between text-gray-600">
                  <span>Ürünün Toplamı</span>
                  <span className="font-semibold text-gray-800">
                    ${productTotal.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-gray-600">
                  <span>Kargo Toplam</span>
                  <span className="font-semibold text-gray-800">
                    ${shipping.toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-gray-600">
                  <span>150$ ve üzeri kargo bedava</span>
                  <span className="font-semibold" style={{ color: "#23A6F0" }}>
                    {shippingDiscount !== 0 ? `${shippingDiscount.toFixed(2)}` : "-"}
                  </span>
                </div>

                <div className="border-t pt-4 flex items-center justify-between">
                  <span className="text-gray-700 font-semibold">Toplam</span>
                  <span className="text-lg font-bold" style={{ color: "#23A6F0" }}>
                    ${grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <button
                  type="button"
                  onClick={() => setShowCoupon((s) => !s)}
                  className="w-full flex items-center justify-center gap-2 border rounded-lg py-3 text-sm font-semibold hover:bg-gray-50"
                >
                  <FiPlus style={{ color: "#23A6F0" }} />
                  <span className="tracking-wide">İNDİRİM KODU GİR</span>
                </button>

                {showCoupon && (
                  <div className="mt-3 flex gap-2">
                    <input
                      className="flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#23A6F0]/30"
                      placeholder="Kupon kodu"
                    />
                    <button
                      className="px-4 py-2 rounded-lg text-white font-semibold"
                      style={{ backgroundColor: "#23A6F0" }}
                      type="button"
                    >
                      Uygula
                    </button>
                  </div>
                )}
              </div>
            </div>
            <Link
              className="mt-4 w-full rounded-xl py-4 text-white font-bold flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
              style={{ backgroundColor: "#23A6F0" }}
              to="/checkout"
            >
              Sepeti Onayla <FiChevronRight className="text-xl" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};
