import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../features/products/orderSlice.js";
import { useHistory } from "react-router-dom";

export const PrevOrders = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const BLUE = "#23A6F0";

  const orders = useSelector((s) => s.order.orders);
  const status = useSelector((s) => s.order.ordersStatus);
  const error = useSelector((s) => s.order.ordersError);

  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const rows = useMemo(() => {
    return (orders || []).map((o) => {
      const dateStr = o.order_date
        ? new Date(o.order_date).toLocaleString("tr-TR", {
            timeZone: "Europe/Istanbul",
          })
        : "—";

      const products = Array.isArray(o.products) ? o.products : [];
      const productCount = products.reduce(
        (acc, p) => acc + Number(p?.count ?? 1),
        0,
      );

      const cardRaw = String(o.card_no ?? "");
      const masked =
        cardRaw.length >= 4
          ? `**** **** **** ${cardRaw.slice(-4)}`
          : "**** **** **** ****";

      return {
        id: o.id,
        dateStr,
        price: Number(o.price ?? 0).toFixed(2),
        productCount,
        masked,
        raw: o,
      };
    });
  }, [orders]);

  if (status === "loading") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="rounded-2xl border bg-white shadow-sm p-6 w-full max-w-lg max-sm:p-4">
          <div className="text-xl font-extrabold max-sm:text-lg">
            Siparişleriniz yükleniyor…
          </div>
          <div className="mt-3 h-10 bg-gray-100 rounded-xl animate-pulse" />
          <div className="mt-3 h-10 bg-gray-100 rounded-xl animate-pulse" />
          <div className="mt-3 h-10 bg-gray-100 rounded-xl animate-pulse" />
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="rounded-2xl border bg-white shadow-sm p-6 w-full max-w-lg max-sm:p-4">
          <div className="text-xl font-extrabold max-sm:text-lg">
            Siparişler alınamadı
          </div>
          <div className="mt-2 text-sm text-gray-600">{error}</div>
          <div className="mt-5 flex gap-3 max-sm:flex-col">
            <button
              onClick={() => dispatch(fetchOrders())}
              className="rounded-xl px-5 py-3 font-extrabold text-white hover:opacity-90 max-sm:w-full"
              style={{ backgroundColor: BLUE }}
            >
              Tekrar Dene
            </button>
            <button
              onClick={() => history.replace("/")}
              className="rounded-xl px-5 py-3 font-extrabold border hover:bg-gray-50 max-sm:w-full"
            >
              Ana Sayfa
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 max-sm:px-3 max-sm:py-6">
        <div className="flex items-end justify-between gap-4 max-sm:flex-col max-sm:items-start">
          <div>
            <div className="text-3xl font-extrabold max-sm:text-2xl">
              Siparişlerim
            </div>
            <div className="mt-1 text-sm text-gray-600">
              Geçmiş siparişlerinizi ve detaylarını buradan
              görüntüleyebilirsiniz.
            </div>
          </div>
          <button
            onClick={() => history.push("/shop")}
            className="rounded-xl px-5 py-3 font-extrabold border hover:bg-gray-50 max-sm:w-full"
          >
            Alışverişe Devam
          </button>
        </div>

        {/* DESKTOP TABLE */}
        <div className="mt-6 rounded-2xl border bg-white shadow-sm overflow-hidden max-sm:hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left p-4 font-extrabold">Sipariş</th>
                  <th className="text-left p-4 font-extrabold">Tarih</th>
                  <th className="text-left p-4 font-extrabold">Ödeme</th>
                  <th className="text-right p-4 font-extrabold">Ürün</th>
                  <th className="text-right p-4 font-extrabold">Toplam</th>
                  <th className="text-right p-4 font-extrabold">Detay</th>
                </tr>
              </thead>

              <tbody>
                {!rows.length ? (
                  <tr>
                    <td className="p-6 text-gray-600" colSpan={6}>
                      Henüz siparişiniz yok.
                    </td>
                  </tr>
                ) : (
                  rows.map((r) => {
                    const isOpen = String(openId) === String(r.id);
                    const o = r.raw;

                    return (
                      <>
                        <tr key={r.id} className="border-b">
                          <td className="p-4 font-extrabold">#{r.id}</td>
                          <td className="p-4 text-gray-700">{r.dateStr}</td>
                          <td className="p-4 text-gray-700">{r.masked}</td>
                          <td className="p-4 text-right font-bold">
                            {r.productCount}
                          </td>
                          <td
                            className="p-4 text-right font-extrabold"
                            style={{ color: BLUE }}
                          >
                            ${r.price}
                          </td>
                          <td className="p-4 text-right">
                            <button
                              type="button"
                              onClick={() => setOpenId(isOpen ? null : r.id)}
                              className="rounded-xl px-4 py-2 font-extrabold border hover:bg-gray-50"
                            >
                              {isOpen ? "Kapat" : "Göster"}
                            </button>
                          </td>
                        </tr>

                        {isOpen ? (
                          <tr className="border-b bg-gray-50">
                            <td colSpan={6} className="p-4">
                              <div className="rounded-2xl border bg-white p-5">
                                <div className="text-lg font-extrabold">
                                  Sipariş Detayları
                                </div>

                                <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2 text-sm">
                                  <div className="rounded-xl border p-3">
                                    <div className="text-gray-500">
                                      Adres ID
                                    </div>
                                    <div className="font-extrabold">
                                      {o.address_id ?? "—"}
                                    </div>
                                  </div>
                                  <div className="rounded-xl border p-3">
                                    <div className="text-gray-500">Toplam</div>
                                    <div className="font-extrabold">
                                      ${Number(o.price ?? 0).toFixed(2)}
                                    </div>
                                  </div>
                                </div>

                                <details className="mt-4 rounded-xl border p-4">
                                  <summary className="cursor-pointer font-extrabold">
                                    Ürünler (
                                    {Array.isArray(o.products)
                                      ? o.products.length
                                      : 0}
                                    )
                                  </summary>

                                  <div className="mt-3 space-y-2 text-sm">
                                    {Array.isArray(o.products) &&
                                    o.products.length ? (
                                      o.products.map((p, idx) => (
                                        <div
                                          key={idx}
                                          className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
                                        >
                                          <div className="font-bold">
                                            Ürün ID:{" "}
                                            {p.product_id ?? p.id ?? "—"}
                                          </div>
                                          <div className="text-gray-700">
                                            Adet: {p.count ?? 1}
                                          </div>
                                          <div className="text-gray-500">
                                            {p.detail ?? ""}
                                          </div>
                                        </div>
                                      ))
                                    ) : (
                                      <div className="text-gray-600">
                                        Ürün detayı yok.
                                      </div>
                                    )}
                                  </div>
                                </details>
                              </div>
                            </td>
                          </tr>
                        ) : null}
                      </>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* MOBILE CARDS */}
        <div className="mt-6 hidden max-sm:block space-y-4">
          {!rows.length ? (
            <div className="rounded-2xl border bg-white shadow-sm p-4 text-gray-600">
              Henüz siparişiniz yok.
            </div>
          ) : (
            rows.map((r) => {
              const isOpen = String(openId) === String(r.id);
              const o = r.raw;

              return (
                <div
                  key={r.id}
                  className="rounded-2xl border bg-white shadow-sm overflow-hidden"
                >
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-lg font-extrabold">#{r.id}</div>
                        <div className="mt-1 text-xs text-gray-500">
                          {r.dateStr}
                        </div>
                      </div>
                      <div
                        className="text-lg font-extrabold"
                        style={{ color: BLUE }}
                      >
                        ${r.price}
                      </div>
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
                      <div className="rounded-xl border p-3">
                        <div className="text-xs text-gray-500">Ödeme</div>
                        <div className="font-bold">{r.masked}</div>
                      </div>
                      <div className="rounded-xl border p-3 text-right">
                        <div className="text-xs text-gray-500">Ürün</div>
                        <div className="font-bold">{r.productCount}</div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? null : r.id)}
                      className="mt-4 w-full rounded-xl px-4 py-3 font-extrabold border hover:bg-gray-50"
                    >
                      {isOpen ? "Detayı Kapat" : "Detayı Göster"}
                    </button>
                  </div>

                  {isOpen ? (
                    <div className="border-t bg-gray-50 p-4">
                      <div className="rounded-2xl border bg-white p-4">
                        <div className="text-base font-extrabold">
                          Sipariş Detayları
                        </div>

                        <div className="mt-3 grid grid-cols-1 gap-3 text-sm">
                          <div className="rounded-xl border p-3">
                            <div className="text-gray-500">Adres ID</div>
                            <div className="font-extrabold">
                              {o.address_id ?? "—"}
                            </div>
                          </div>
                          <div className="rounded-xl border p-3">
                            <div className="text-gray-500">Toplam</div>
                            <div className="font-extrabold">
                              ${Number(o.price ?? 0).toFixed(2)}
                            </div>
                          </div>
                        </div>

                        <details className="mt-3 rounded-xl border p-4">
                          <summary className="cursor-pointer font-extrabold">
                            Ürünler (
                            {Array.isArray(o.products) ? o.products.length : 0})
                          </summary>

                          <div className="mt-3 space-y-2 text-sm">
                            {Array.isArray(o.products) && o.products.length ? (
                              o.products.map((p, idx) => (
                                <div
                                  key={idx}
                                  className="rounded-lg bg-gray-50 p-3 border"
                                >
                                  <div className="font-bold">
                                    Ürün ID: {p.product_id ?? p.id ?? "—"}
                                  </div>
                                  <div className="mt-1 text-gray-700">
                                    Adet: {p.count ?? 1}
                                  </div>
                                  {p.detail ? (
                                    <div className="mt-1 text-gray-500">
                                      {p.detail}
                                    </div>
                                  ) : null}
                                </div>
                              ))
                            ) : (
                              <div className="text-gray-600">Ürün detayı yok.</div>
                            )}
                          </div>
                        </details>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
