import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { resetCart } from "../features/card/cardSlice.js";

export const Order = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const BLUE = "#23A6F0";

  const status = useSelector((s) => s.order.status);
  const error = useSelector((s) => s.order.error);
  const data = useSelector((s) => s.order.data);

  useEffect(() => {
    if (status === "succeeded") {
      dispatch(resetCart());
    }
    if (status === "idle") {
      history.replace("/");
    }
  }, [status, dispatch, history]);

  const safeData = data || {};

  const maskedCard = useMemo(() => {
    const raw = String(safeData.card_no ?? "");
    if (!raw) return "**** **** **** ****";
    const last4 = raw.slice(-4).padStart(4, "*");
    return `**** **** **** ${last4}`;
  }, [safeData.card_no]);

  const orderNo = safeData.id ? `#${safeData.id}` : "#—";
  const orderDate = safeData.order_date
    ? new Date(safeData.order_date).toLocaleString("tr-TR")
    : "";

  if (status === "loading") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="w-full max-w-md rounded-2xl border bg-white shadow-sm p-6">
          <div className="flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-full animate-pulse"
              style={{ backgroundColor: `${BLUE}22` }}
            />
            <div className="flex-1">
              <div className="h-4 w-40 rounded bg-gray-200 animate-pulse" />
              <div className="mt-2 h-3 w-64 rounded bg-gray-100 animate-pulse" />
            </div>
          </div>
          <div className="mt-6 h-10 rounded-xl bg-gray-100 animate-pulse" />
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="w-full max-w-xl rounded-2xl border bg-white shadow-sm p-6">
          <div className="text-2xl font-extrabold">Sipariş oluşturulamadı</div>
          <div className="mt-2 text-sm text-gray-600">
            {error || "Bir hata oluştu. Lütfen tekrar deneyin."}
          </div>
          <div className="mt-6 flex gap-3 max-sm:flex-col">
            <button
              type="button"
              onClick={() => history.replace("/checkout")}
              className="rounded-xl px-5 py-3 font-extrabold border hover:bg-gray-50"
            >
              Ödemeye Geri Dön
            </button>
            <button
              type="button"
              onClick={() => history.replace("/")}
              className="rounded-xl px-5 py-3 font-extrabold text-white hover:opacity-90"
              style={{ backgroundColor: BLUE }}
            >
              Ana Sayfa
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (status !== "succeeded") return null;

  return (
    <div className="w-full bg-gray-50">
      <div className="mx-auto max-w-5xl px-4 py-10 max-sm:px-3 max-sm:py-6">
        <div className="rounded-2xl bg-white border shadow-sm overflow-hidden">
          <div className="p-7 max-sm:p-5 border-b">
            <div className="flex items-start gap-4 max-sm:gap-3">
              <div
                className="h-12 w-12 rounded-full flex items-center justify-center text-white font-extrabold text-xl max-sm:h-10 max-sm:w-10 max-sm:text-lg"
                style={{ backgroundColor: BLUE }}
              >
                ✓
              </div>

              <div className="flex-1">
                <div className="text-3xl font-extrabold max-sm:text-2xl">
                  Siparişiniz alındı 🎉
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Tebrikler! Siparişiniz başarıyla oluşturuldu. Sipariş
                  detaylarınızı aşağıda görebilirsiniz.
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-extrabold"
                    style={{ backgroundColor: `${BLUE}12`, color: BLUE }}
                  >
                    Sipariş No: {orderNo}
                  </span>

                  {orderDate ? (
                    <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
                      Tarih: {orderDate}
                    </span>
                  ) : null}

                  <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">
                    Ödeme: {maskedCard}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-10 max-sm:p-5">
            <div className="flex justify-center">
              <div className="w-full max-w-md rounded-2xl border p-6 max-sm:p-5">
                <div className="text-2xl font-extrabold">Sonraki Adımlar</div>

                <ul className="mt-4 space-y-3 text-sm text-gray-700">
                  <li className="flex gap-2">
                    <span style={{ color: BLUE }}>•</span>
                    Siparişiniz hazırlanıp kargoya verilecektir.
                  </li>
                  <li className="flex gap-2">
                    <span style={{ color: BLUE }}>•</span>
                    Sorunuz olursa destek ekibimizle iletişime geçebilirsiniz.
                  </li>
                </ul>

                <div className="mt-6 flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => history.replace("/")}
                    className="w-full rounded-xl px-5 py-3 font-extrabold text-white hover:opacity-90"
                    style={{ backgroundColor: BLUE }}
                  >
                    Alışverişe Devam Et
                  </button>

                  <button
                    type="button"
                    onClick={() => history.replace("/shop")}
                    className="w-full rounded-xl px-5 py-3 font-extrabold border hover:bg-gray-50"
                  >
                    Ürünlere Göz At
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
