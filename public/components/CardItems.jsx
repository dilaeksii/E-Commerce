import { useSelector } from "react-redux";

export const CardItems = () => {
  const cartItems = useSelector((state) => state.card.product); // [{id, price, count}]
  const products = useSelector((state) => state.products.products); // [{id, name, ...}]

  return (
    <div className="flex flex-col gap-3 min-w-[220px]">
      {cartItems.length === 0 ? (
        <div className="text-sm text-gray-500">Sepet boş</div>
      ) : (
        cartItems.map((item) => {
          const p = products.find((x) => String(x.id) === String(item.id));

          return (
            <div key={item.id} className="flex items-center gap-3">
              <img
                src={item.img}
                alt=""
                className="w-12 h-12 object-cover rounded-md flex justify-center items-center"
              />

              <div className="text-sm">
                <div className="font-semibold">
                  {p ? p.name : `Ürün ID: ${item.id}`}
                </div>
                <div>
                  {item.count} x ${item.price}
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
