import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import {
  addressInfo,
  addressAdd,
  addressDelete,
  selectAddress,
  addressUpdate,
} from "../features/users/addressSlice";

import {
  cardInfo,
  selectCard,
  cardAdd,
  cardUpdate,
  cardDelete,
} from "../features/users/paymentSlice.js";

export const Checkout = () => {
  const dispatch = useDispatch();
  const BLUE = "#23A6F0";

  const { addresses, selectedAddressId } = useSelector((s) => s.address);
  const { cards, selectedcardId } = useSelector((s) => s.payment);
  const cartItems = useSelector((state) => state.card.product);

  const productTotal = cartItems.reduce(
    (sum, i) => sum + Number(i.price || 0) * Number(i.count || 0),
    0
  );

  const shipping = productTotal >= 150 ? 0 : cartItems.length ? 29.99 : 0;
  const shippingDiscount = productTotal >= 150 ? -29.99 : 0;
  const grandTotal = productTotal + shipping;

  const [step, setStep] = useState(1);

  const [mode, setMode] = useState("add");
  const [editingId, setEditingId] = useState(null);
  const [isAddOpen, setIsAddOpen] = useState(false);

  const [sameInvoice, setSameInvoice] = useState(true);

  const [agreementsOk, setAgreementsOk] = useState(false);

  const [isCardFormOpen, setIsCardFormOpen] = useState(false);
  const [cardMode, setCardMode] = useState("add");
  const [editingCardId, setEditingCardId] = useState(null);
  const [is3D, setIs3D] = useState(false);

  const [cardForm, setCardForm] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    cvv: "",
    name_on_card: "",
  });

  const [formData, setFormData] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",
  });

  useEffect(() => {
    dispatch(addressInfo());
  }, [dispatch]);

  useEffect(() => {
    if (step === 2) dispatch(cardInfo());
  }, [step, dispatch]);

  const selectedAddress = useMemo(() => {
    if (!addresses?.length) return null;
    return (
      addresses.find((a) => String(a.id) === String(selectedAddressId)) ||
      addresses[0]
    );
  }, [addresses, selectedAddressId]);

  const selectedCard = useMemo(() => {
    if (!cards?.length) return null;
    return cards.find((c) => String(c.id) === String(selectedcardId)) || cards[0];
  }, [cards, selectedcardId]);

  const onChangeAddress = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const openEditAddress = (addr) => {
    setMode("edit");
    setEditingId(addr.id);
    setIsAddOpen(true);

    setFormData({
      title: addr.title || "",
      name: addr.name || "",
      surname: addr.surname || "",
      phone: addr.phone || "",
      city: addr.city || "",
      district: addr.district || "",
      neighborhood: addr.neighborhood || "",
      address: addr.address || "",
    });
  };

  const onSubmitAddress = async (e) => {
    e.preventDefault();

    if (mode === "edit") {
      await dispatch(addressUpdate({ id: editingId, ...formData }));
    } else {
      await dispatch(addressAdd(formData));
    }

    setIsAddOpen(false);
    setMode("add");
    setEditingId(null);

    setFormData({
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    });

    dispatch(addressInfo());
  };

  const openEditCard = (card) => {
    setIsCardFormOpen(true);
    setCardMode("edit");
    setEditingCardId(card.id);

    setCardForm({
      card_no: card.card_no ? String(card.card_no) : "",
      expire_month: card.expire_month
        ? String(card.expire_month).padStart(2, "0")
        : "",
      expire_year: card.expire_year ? String(card.expire_year) : "",
      cvv: "",
      name_on_card: card.name_on_card || "",
    });
  };

  const submitCard = async (e) => {
    e.preventDefault();

    const payload = {
      card_no: cardForm.card_no,
      expire_month: Number(cardForm.expire_month),
      expire_year: Number(cardForm.expire_year),
      name_on_card: cardForm.name_on_card,
    };

    if (cardMode === "edit") {
      await dispatch(cardUpdate({ id: editingCardId, ...payload }));
    } else {
      await dispatch(cardAdd(payload));
    }

    setIsCardFormOpen(false);
    setCardMode("add");
    setEditingCardId(null);

    setCardForm({
      card_no: "",
      expire_month: "",
      expire_year: "",
      cvv: "",
      name_on_card: "",
    });

    dispatch(cardInfo());
  };

  const removeCard = async (cardId) => {
    await dispatch(cardDelete(cardId));
    dispatch(cardInfo());
  };

  const goNext = () => {
    if (!selectedAddress) {
      setIsAddOpen(true);
      return;
    }
    setStep(2);
  };

  const goBack = () => setStep(1);

  return (
    <div className="w-full bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-10 max-sm:px-3 max-sm:py-6">
        <div className="grid grid-cols-3 gap-6 max-sm:grid-cols-1 max-sm:gap-4">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6 max-sm:space-y-4">
            {/* TAB BAR */}
            <div className="rounded-2xl bg-white border shadow-sm p-2 flex gap-2 max-sm:flex-col">
              <button
                type="button"
                onClick={() => setStep(1)}
                className={`flex-1 rounded-2xl py-3 font-extrabold transition max-sm:py-2 max-sm:text-sm ${
                  step === 1 ? "text-white" : "text-gray-600 hover:bg-gray-50"
                }`}
                style={{ backgroundColor: step === 1 ? BLUE : "transparent" }}
              >
                Adres Bilgileri
              </button>

              <button
                type="button"
                onClick={() => {
                  if (!selectedAddress) {
                    setStep(1);
                    setIsAddOpen(true);
                    return;
                  }
                  setStep(2);
                }}
                className={`flex-1 rounded-2xl py-3 font-extrabold transition max-sm:py-2 max-sm:text-sm ${
                  step === 2 ? "text-white" : "text-gray-600 hover:bg-gray-50"
                }`}
                style={{ backgroundColor: step === 2 ? BLUE : "transparent" }}
              >
                Ödeme Seçenekleri
              </button>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <>
                <div
                  className={`rounded-2xl bg-white border shadow-sm overflow-hidden ${
                    step === 1 ? "ring-2" : ""
                  }`}
                  style={{ ringColor: step === 1 ? `${BLUE}55` : undefined }}
                >
                  <div className="flex items-center justify-between px-6 py-5 border-b max-sm:flex-col max-sm:items-start max-sm:gap-3 max-sm:px-4 max-sm:py-4">
                    <div className="flex items-start gap-4 max-sm:gap-3">
                      <div
                        className="h-10 w-10 rounded-full flex items-center justify-center text-white font-extrabold max-sm:h-9 max-sm:w-9"
                        style={{ backgroundColor: BLUE }}
                      >
                        1
                      </div>

                      <div>
                        <div className="text-xl font-bold max-sm:text-lg">
                          Adres Bilgileri
                        </div>
                        <div className="text-sm text-gray-500">
                          Teslimat adresini seç veya yeni adres ekle
                        </div>

                        {selectedAddress && (
                          <div className="pt-3">
                            <div
                              className="text-sm font-semibold"
                              style={{ color: BLUE }}
                            >
                              Seçili Teslimat Adresi
                            </div>

                            <div className="text-sm text-gray-700 mt-1">
                              {selectedAddress.name} {selectedAddress.surname}
                            </div>
                            <div className="text-sm text-gray-600">
                              {selectedAddress.phone}
                            </div>

                            <div className="text-sm text-gray-700 mt-1">
                              {selectedAddress.city}, {selectedAddress.district}
                            </div>
                            <div className="text-sm text-gray-600">
                              {selectedAddress.neighborhood}
                            </div>
                            <div className="text-sm text-gray-700">
                              {selectedAddress.address}
                            </div>

                            <label className="mt-3 flex items-center gap-2 text-sm text-gray-700">
                              <input
                                type="checkbox"
                                checked={sameInvoice}
                                onChange={(e) => setSameInvoice(e.target.checked)}
                              />
                              Faturamı aynı adrese gönder
                            </label>
                          </div>
                        )}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setIsAddOpen(true);
                        setMode("add");
                        setEditingId(null);
                        setFormData({
                          title: "",
                          name: "",
                          surname: "",
                          phone: "",
                          city: "",
                          district: "",
                          neighborhood: "",
                          address: "",
                        });
                      }}
                      className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-bold hover:bg-gray-50 max-sm:w-full max-sm:justify-center"
                      style={{ borderColor: BLUE, color: BLUE }}
                    >
                      <FaPlus />
                      Yeni Adres Ekle
                    </button>
                  </div>

                  <div className="p-6 max-sm:p-4">
                    {!addresses?.length ? (
                      <div className="text-gray-500 text-lg max-sm:text-base">
                        Kayıtlı adres bulunamadı. “Yeni Adres Ekle” ile
                        ekleyebilirsin.
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-sm:grid-cols-1">
                        <button
                          type="button"
                          onClick={() => {
                            setIsAddOpen(true);
                            setMode("add");
                            setEditingId(null);
                          }}
                          className="h-[160px] rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-2 hover:bg-gray-50 max-sm:h-[140px]"
                          style={{ borderColor: `${BLUE}66` }}
                        >
                          <div
                            className="h-10 w-10 rounded-full flex items-center justify-center text-white"
                            style={{ backgroundColor: BLUE }}
                          >
                            <FaPlus />
                          </div>
                          <div className="font-bold">Yeni Adres Ekle</div>
                        </button>

                        {addresses.map((a) => (
                          <label
                            key={a.id}
                            onClick={() => dispatch(selectAddress(a.id))}
                            className={`relative rounded-xl border p-4 cursor-pointer hover:shadow-sm ${
                              String(a.id) === String(selectedAddressId)
                                ? "shadow-sm"
                                : ""
                            }`}
                            style={{
                              borderColor:
                                String(a.id) === String(selectedAddressId)
                                  ? BLUE
                                  : undefined,
                            }}
                          >
                            <div className="flex items-start gap-3">
                              <input
                                type="radio"
                                name="address"
                                className="mt-1"
                                checked={String(a.id) === String(selectedAddressId)}
                                onChange={() => dispatch(selectAddress(a.id))}
                              />

                              <div className="flex-1">
                                <div className="absolute right-4 top-4 flex items-center gap-3">
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      openEditAddress(a);
                                    }}
                                    className="text-gray-400 hover:text-gray-700"
                                    title="Düzenle"
                                  >
                                    <FaPen className="text-lg" />
                                  </button>

                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      dispatch(addressDelete(a.id));
                                    }}
                                    className="text-gray-400 hover:text-red-500"
                                    title="Sil"
                                  >
                                    <FaTrash className="text-lg" />
                                  </button>
                                </div>

                                <div className="mt-1 text-sm text-gray-700">
                                  {a.name} {a.surname}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {a.phone}
                                </div>

                                <div className="mt-2 text-sm text-gray-700">
                                  {a.city}, {a.district}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {a.neighborhood}
                                </div>

                                <div className="mt-2 text-sm text-gray-700">
                                  {a.address}
                                </div>
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Address Form */}
                {isAddOpen && (
                  <form
                    onSubmit={onSubmitAddress}
                    className="rounded-2xl bg-white border shadow-sm p-6 max-sm:p-4"
                  >
                    <div className="flex items-center justify-between mb-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
                      <div className="text-xl font-bold max-sm:text-lg">
                        {mode === "edit" ? "Adresi Düzenle" : "Yeni Adres"}
                      </div>
                      <button
                        type="button"
                        className="text-sm text-gray-500 hover:text-gray-800 max-sm:underline"
                        onClick={() => setIsAddOpen(false)}
                      >
                        Kapat
                      </button>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-sm:grid-cols-1">
                      <Input
                        label="Başlık"
                        name="title"
                        value={formData.title}
                        onChange={onChangeAddress}
                      />
                      <Input
                        label="Ad"
                        name="name"
                        value={formData.name}
                        onChange={onChangeAddress}
                      />
                      <Input
                        label="Soyad"
                        name="surname"
                        value={formData.surname}
                        onChange={onChangeAddress}
                      />
                      <Input
                        label="Telefon"
                        name="phone"
                        value={formData.phone}
                        onChange={onChangeAddress}
                      />
                      <Input
                        label="Şehir"
                        name="city"
                        value={formData.city}
                        onChange={onChangeAddress}
                      />
                      <Input
                        label="İlçe"
                        name="district"
                        value={formData.district}
                        onChange={onChangeAddress}
                      />
                      <Input
                        label="Mahalle"
                        name="neighborhood"
                        value={formData.neighborhood}
                        onChange={onChangeAddress}
                      />
                      <div className="md:col-span-2">
                        <Textarea
                          label="Açık Adres"
                          name="address"
                          value={formData.address}
                          onChange={onChangeAddress}
                        />
                      </div>
                    </div>

                    <div className="mt-5 flex justify-end max-sm:justify-stretch">
                      <button
                        type="submit"
                        className="rounded-xl px-6 py-3 text-white font-bold shadow-sm hover:opacity-90 max-sm:w-full"
                        style={{ backgroundColor: BLUE }}
                      >
                        {mode === "edit" ? "Güncelle" : "Kaydet"}
                      </button>
                    </div>
                  </form>
                )}
              </>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div
                className="rounded-2xl bg-white border shadow-sm overflow-hidden ring-2"
                style={{ ringColor: `${BLUE}55` }}
              >
                <div className="flex items-center justify-between px-6 py-5 border-b max-sm:flex-col max-sm:items-start max-sm:gap-2 max-sm:px-4 max-sm:py-4">
                  <div className="flex items-center gap-4 max-sm:gap-3">
                    <div
                      className="h-10 w-10 rounded-full flex items-center justify-center text-white font-extrabold max-sm:h-9 max-sm:w-9"
                      style={{ backgroundColor: BLUE }}
                    >
                      2
                    </div>
                    <div>
                      <div className="text-xl font-bold max-sm:text-lg">
                        Kart ile Öde
                      </div>
                      <div className="text-sm text-gray-500">
                        Kart ile ödemeyi seçiniz. Banka/Kredi Kartı kullanarak
                        ödemenizi güvenle yapabilirsiniz.
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={goBack}
                    className="text-sm font-bold underline text-gray-500 hover:text-gray-800 max-sm:self-end"
                  >
                    Adrese geri dön
                  </button>
                </div>

                <div className="p-6 max-sm:p-4">
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 max-sm:grid-cols-1 max-sm:gap-4">
                    {/* LEFT */}
                    <div className="lg:col-span-2">
                      <div className="flex items-center justify-between mb-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
                        <div className="text-lg font-extrabold">
                          Kart Bilgileri
                        </div>

                        <button
                          type="button"
                          onClick={() => {
                            setIsCardFormOpen((p) => !p);
                            setCardMode("add");
                            setEditingCardId(null);
                            setCardForm({
                              card_no: "",
                              expire_month: "",
                              expire_year: "",
                              cvv: "",
                              name_on_card: "",
                            });
                          }}
                          className="text-sm font-extrabold underline max-sm:text-sm"
                          style={{ color: BLUE }}
                        >
                          {isCardFormOpen
                            ? "Kayıtlı kartımla ödeme yap"
                            : "Başka bir Kart ile Ödeme Yap"}
                        </button>
                      </div>

                      {!isCardFormOpen && (
                        <div className="rounded-2xl border p-4 max-sm:p-3">
                          {!cards?.length ? (
                            <div className="text-gray-500">
                              Kayıtlı kart bulunamadı.
                            </div>
                          ) : (
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-sm:grid-cols-1">
                              {cards.map((c) => (
                                <label
                                  key={c.id}
                                  onClick={() => dispatch(selectCard(c.id))}
                                  className={`relative cursor-pointer rounded-xl border p-4 hover:shadow-sm ${
                                    String(c.id) === String(selectedcardId)
                                      ? "shadow-sm"
                                      : ""
                                  }`}
                                  style={{
                                    borderColor:
                                      String(c.id) === String(selectedcardId)
                                        ? BLUE
                                        : undefined,
                                  }}
                                >
                                  <div className="absolute right-4 top-4 flex items-center gap-3">
                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        openEditCard(c);
                                      }}
                                      className="text-gray-400 hover:text-gray-700"
                                      title="Düzenle"
                                    >
                                      <FaPen className="text-lg" />
                                    </button>

                                    <button
                                      type="button"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        removeCard(c.id);
                                      }}
                                      className="text-gray-400 hover:text-red-500"
                                      title="Sil"
                                    >
                                      <FaTrash className="text-lg" />
                                    </button>
                                  </div>

                                  <div className="flex items-start gap-3">
                                    <input
                                      type="radio"
                                      name="card"
                                      className="mt-1"
                                      checked={String(c.id) === String(selectedcardId)}
                                      onChange={() => dispatch(selectCard(c.id))}
                                    />

                                    <div className="flex-1">
                                      <div className="font-extrabold">
                                        {c.title || "Kartım"}
                                      </div>
                                      <div className="text-sm text-gray-600 mt-1">
                                        {c.name_on_card || ""}
                                      </div>
                                      <div className="text-sm text-gray-700 mt-2">
                                        {c.card_no
                                          ? String(c.card_no).replace(
                                              /\d(?=\d{4})/g,
                                              "*"
                                            )
                                          : "**** **** **** ****"}
                                      </div>
                                      <div className="text-sm text-gray-600 mt-1">
                                        {c.expire_month}/{c.expire_year}
                                      </div>
                                    </div>
                                  </div>
                                </label>
                              ))}
                            </div>
                          )}
                        </div>
                      )}

                      {isCardFormOpen && (
                        <form
                          onSubmit={submitCard}
                          className="rounded-2xl border p-5 max-sm:p-4"
                        >
                          <div className="flex items-center justify-between mb-4 max-sm:flex-col max-sm:items-start max-sm:gap-2">
                            <div className="text-lg font-extrabold">
                              {cardMode === "edit"
                                ? "Kartı Düzenle"
                                : "Yeni Kart Ekle"}
                            </div>
                            <button
                              type="button"
                              className="text-sm text-gray-500 hover:text-gray-800 max-sm:underline"
                              onClick={() => {
                                setIsCardFormOpen(false);
                                setCardMode("add");
                                setEditingCardId(null);
                                setCardForm({
                                  card_no: "",
                                  expire_month: "",
                                  expire_year: "",
                                  cvv: "",
                                  name_on_card: "",
                                });
                              }}
                            >
                              Kapat
                            </button>
                          </div>

                          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-sm:grid-cols-1">
                            <Input
                              label="Kart Numarası"
                              name="card_no"
                              value={cardForm.card_no}
                              onChange={(e) =>
                                setCardForm((p) => ({
                                  ...p,
                                  card_no: e.target.value,
                                }))
                              }
                            />

                            <Input
                              label="Kart Üzerindeki İsim"
                              name="name_on_card"
                              value={cardForm.name_on_card}
                              onChange={(e) =>
                                setCardForm((p) => ({
                                  ...p,
                                  name_on_card: e.target.value,
                                }))
                              }
                            />

                            <Select
                              label="Son Kullanma Ay"
                              value={cardForm.expire_month}
                              onChange={(v) =>
                                setCardForm((p) => ({ ...p, expire_month: v }))
                              }
                              options={Array.from({ length: 12 }, (_, i) => {
                                const mm = String(i + 1).padStart(2, "0");
                                return { label: mm, value: mm };
                              })}
                            />

                            <Select
                              label="Son Kullanma Yıl"
                              value={cardForm.expire_year}
                              onChange={(v) =>
                                setCardForm((p) => ({ ...p, expire_year: v }))
                              }
                              options={Array.from({ length: 12 }, (_, i) => {
                                const yy = String(new Date().getFullYear() + i);
                                return { label: yy, value: yy };
                              })}
                            />

                            <div className="md:col-span-2">
                              <Input
                                label="CVV"
                                name="cvv"
                                value={cardForm.cvv}
                                onChange={(e) =>
                                  setCardForm((p) => ({
                                    ...p,
                                    cvv: e.target.value,
                                  }))
                                }
                              />
                            </div>
                          </div>

                          <label className="mt-4 flex items-center gap-3 text-sm text-gray-700">
                            <input
                              type="checkbox"
                              checked={is3D}
                              onChange={(e) => setIs3D(e.target.checked)}
                            />
                            3D Secure ile ödeme yapmak istiyorum.
                          </label>

                          <div className="mt-5 flex justify-end max-sm:justify-stretch">
                            <button
                              type="submit"
                              className="rounded-xl px-6 py-3 text-white font-extrabold hover:opacity-90 max-sm:w-full"
                              style={{ backgroundColor: BLUE }}
                            >
                              {cardMode === "edit" ? "Güncelle" : "Kaydet"}
                            </button>
                          </div>
                        </form>
                      )}
                    </div>

                    {/* RIGHT */}
                    <div className="lg:col-span-1">
                      <div className="rounded-2xl border p-5 max-sm:p-4">
                        <div className="text-lg font-extrabold">
                          Taksit Seçenekleri
                        </div>
                        <div className="text-sm text-gray-500 mt-1">
                          Kartınıza uygun taksit seçeneğini seçiniz
                        </div>

                        <div className="mt-4 rounded-xl border overflow-hidden">
                          <div className="grid grid-cols-2 bg-gray-50 border-b">
                            <div className="p-3 text-sm font-extrabold">
                              Taksit
                            </div>
                            <div className="p-3 text-sm font-extrabold">
                              Aylık
                            </div>
                          </div>

                          <label className="grid grid-cols-2 items-center p-3 cursor-pointer">
                            <div className="flex items-center gap-2">
                              <input
                                type="radio"
                                name="installment"
                                defaultChecked
                              />
                              <span className="text-sm font-bold">
                                Tek Çekim
                              </span>
                            </div>
                            <div
                              className="text-sm font-extrabold text-right"
                              style={{ color: BLUE }}
                            >
                              —
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {selectedCard && !isCardFormOpen && (
                    <div className="mt-5 text-sm text-gray-600">
                      Seçili kart:{" "}
                      <span className="font-bold">
                        {selectedCard.title || "Kart"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-5 max-sm:space-y-4">
            <div className="rounded-2xl bg-white border shadow-sm p-6 max-sm:p-4">
              <div className="text-2xl font-extrabold mb-5 max-sm:text-xl max-sm:mb-4">
                Sipariş Özeti
              </div>

              <Row label="Ürünün Toplamı" value={productTotal.toFixed(2)} />
              <Row label="Kargo Toplam" value={shipping.toFixed(2)} />
              <Row
                label="Kargo İndirimi"
                value={
                  shippingDiscount !== 0 ? `${shippingDiscount.toFixed(2)}` : "-"
                }
              />

              <div className="my-4 border-t" />

              <div className="flex items-center justify-between text-lg font-extrabold max-sm:text-base">
                <div>Toplam</div>
                <div style={{ color: BLUE }}>${grandTotal.toFixed(2)}</div>
              </div>
            </div>

            <label className="rounded-2xl bg-white border shadow-sm p-4 flex gap-3 items-start max-sm:p-3">
              <input
                type="checkbox"
                checked={agreementsOk}
                onChange={(e) => setAgreementsOk(e.target.checked)}
                className="mt-1"
              />
              <span className="text-sm text-gray-700">
                Ön bilgilendirme koşullarını ve mesafeli satış sözleşmesini
                okudum, onaylıyorum.
              </span>
            </label>

            <button
              type="button"
              onClick={() => {
                if (step === 1) return goNext();
                alert("Ödeme adımı (UI) - burada sipariş tamamlanacak");
              }}
              disabled={!agreementsOk}
              className={`w-full rounded-2xl py-4 text-white font-extrabold shadow-md transition max-sm:py-3 ${
                agreementsOk ? "hover:opacity-90" : "opacity-50 cursor-not-allowed"
              }`}
              style={{ backgroundColor: BLUE }}
            >
              {step === 1 ? "Kaydet ve Devam Et" : "Siparişi Tamamla"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between text-sm text-gray-700 py-2 max-sm:text-sm">
      <div>{label}</div>
      <div className="font-bold">{value}</div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <label className="block">
      <div className="text-sm font-extrabold text-gray-700 mb-1">
        {label}
      </div>
      <input
        {...props}
        className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200 max-sm:px-3 max-sm:py-2"
      />
    </label>
  );
}

function Textarea({ label, ...props }) {
  return (
    <label className="block">
      <div className="text-sm font-extrabold text-gray-700 mb-1">
        {label}
      </div>
      <textarea
        {...props}
        rows={3}
        className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200"
      />
    </label>
  );
}

function Select({ label, value, onChange, options }) {
  return (
    <label className="block">
      <div className="text-sm font-extrabold text-gray-700 mb-1">
        {label}
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-200 bg-white"
      >
        <option value="">Seçiniz</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
