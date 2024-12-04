"use client";
import CustomTextInput from "@/app/component/ui/customTextInput";
import CurrencyInput from "@/app/component/ui/currencyInput";
import { currencyList } from "@/lib/currency";
import { Input } from "@/app/component/ui/input";
import { Plus, Trash2 } from "lucide-react";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import { useGetValue } from "@/app/hooks/useGetValue";
import { Controller } from "react-hook-form";
import { getItemValue } from "@/lib/getInitialValue";

export const InvoiceDetailsForm = () => {
  const value = useGetValue("currency", "EUR");
  const currencyDetails = currencyList.find(
    (currency) => currency.value.toLowerCase() === value.toLowerCase()
  )?.details;

  return (
    <Controller
      render={({ field: { onChange, value } }) => (
        <div className="pt-24">
          <p className="text-2xl font-semibold pb-3">Détails de la facture</p>
          <div className="flex flex-col gap-6">
            <div>
              <p className="pt-3 font-medium text-neutral-500">Sélectionner une devise</p>
              <CurrencyInput />
            </div>
            <div>
              <p className="py-3 font-medium text-sm text-neutral-500">Produits</p>
              {value.map(({ itemDescription, amount, qty }: Item, index: number) => (
                <div className="flex relative items-center group -ml-8" key={index}>
                  <div className={`w-9 h-7 ${value.length === 1 && "invisible"}`}>
                    <button
                      onClick={() => {
                        const newList = [...value];
                        newList.splice(index, 1);
                        localStorage.setItem("items", JSON.stringify(newList));
                        onChange(newList);
                      }}
                      type="button"
                      className="flex-shrink-0 rounded-md p-1.5 group-hover:bg-gray-50 hidden group-hover:block"
                    >
                      <Trash2 className="w-4 text-gray-500 h-4 group-hover:text-red-400" />
                    </button>
                  </div>
                  <div className="w-full flex-1">
                    <Input
                      placeholder="Nom du produit"
                      value={itemDescription}
                      type="text"
                      onChange={(e) => {
                        const updatedArray = [...value];
                        updatedArray[index] = {
                          itemDescription: e.target.value,
                          amount,
                          qty,
                        };
                        localStorage.setItem("items", JSON.stringify(updatedArray));
                        onChange(updatedArray);
                      }}
                    />
                  </div>
                  <div className="w-14">
                    <Input
                      placeholder="Qté"
                      value={`${qty || ""}`}
                      type="text"
                      pattern="[0-9]*"
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (/^-?\d*\.?\d*$/.test(inputValue) || inputValue === "") {
                          const updatedArray = [...value];
                          updatedArray[index] = {
                            itemDescription,
                            amount,
                            qty: +inputValue,
                          };
                          localStorage.setItem("items", JSON.stringify(updatedArray));
                          onChange(updatedArray);
                        }
                      }}
                    />
                  </div>
                  <div className="w-14">
                    <Input
                      placeholder="Prix"
                      value={`${amount || ""}`}
                      type="text"
                      pattern="[0-9]*"
                      onChange={(e) => {
                        const inputValue = e.target.value;
                        if (/^-?\d*\.?\d*$/.test(inputValue) || inputValue === "") {
                          const updatedArray = [...value];
                          updatedArray[index] = {
                            itemDescription,
                            amount: +inputValue,
                            qty,
                          };
                          localStorage.setItem("items", JSON.stringify(updatedArray));
                          onChange(updatedArray);
                        }
                      }}
                    />
                  </div>
                </div>
              ))}
              <div className="py-3 border-dashed border-b border-gray-300">
                <button
                  onClick={() => {
                    localStorage.setItem("items", JSON.stringify([...value, { itemDescription: "" }]));
                    onChange([...value, { itemDescription: "" }]);
                  }}
                  type="button"
                  className="flex justify-center items-center text-orange-500 font-medium text-sm gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <p>Ajouter un produit</p>
                </button>
              </div>
            </div>
            <div>
              <p className="pt-3 font-medium text-sm text-neutral-500 pb-5">Note</p>
              <CustomTextInput placeholder="Add a note" variableName="note" />
            </div>
            <div>
              <p className="pt-3 font-medium text-sm text-neutral-500 pb-5">Options</p>
              <CustomNumberInput
                label="Réduction"
                placeholder={`0${currencyDetails?.currencySymbol}`}
                variableName="discount"
              />
              <CustomNumberInput label="Taxes" placeholder="0%" variableName="tax" />
            </div>
          </div>
        </div>
      )}
      name="items"
      defaultValue={getItemValue()}
    />
  );
};
