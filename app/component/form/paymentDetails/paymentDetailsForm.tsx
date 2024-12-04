import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";

export const PaymentDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Détails de paiement</p>
    <CustomTextInput label="Banque" placeholder="HSBC" variableName="bankName" />
    <CustomTextInput label="IBAN" placeholder="8920804195" variableName="accountNumber" />
    {/* <CustomTextInput label="Propriétaire" placeholder="Pranav" variableName="accountName" /> */}
    {/* <CustomTextInput label="IFSSC code" placeholder="HSBC0560002" variableName="ifscCode" /> */}
    {/* <CustomTextInput label="Routing number" placeholder="0804189592" variableName="routingCode" /> */}
    <CustomNumberInput label="SWIFT" placeholder="CICMFUEY" variableName="swiftCode" />
  </div>
);
