import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";

export const YourDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Vos informations (Prestataire)</p>
    <CustomTextInput label="Email" placeholder="e.g thibault.pras@hotmail.fr" variableName="yourEmail" />
    <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
      We&apos;ll fill the billing details automatically if we find the your.
    </p>
    <p className="pb-2 text-sm font-medium text-neutral-500">Information de facturation</p>
    <CustomTextInput label="Votre nom" placeholder="John Doe" variableName="yourName" />
    <CustomTextInput label="Adresse" placeholder="27 rue Saint-Michel" variableName="yourAddress" />
    <CustomTextInput label="Ville" placeholder="Lyon" variableName="yourCity" />
    {/* <CustomTextInput label="" placeholder="Karnataka" variableName="yourState" /> */}
    <CustomNumberInput label="Code postal" placeholder="69000" variableName="yourZip" />
    <CustomTextInput label="Pays" placeholder="France" variableName="yourCountry" />
    <CustomTextInput label="TVA" placeholder="GSTIN 1234" variableName="yourTaxId" />
  </div>
);
