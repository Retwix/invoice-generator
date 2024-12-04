import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";

export const CompanyDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Client</p>
    <CustomTextInput label="Email" placeholder="e.g. pranav@prolab.sh" variableName="email" />
    <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
      We&apos;ll fill the billing details automatically if we find the company.
    </p>
    <p className="pb-2 text-sm font-medium text-neutral-500">Information de facturation</p>
    <CustomTextInput label="Entreprise" placeholder="Thib Inc" variableName="companyName" />
    {/* <ImageInput label="Logo" variableName="companyLogo" /> */}
    <CustomTextInput label="Adresse" placeholder="27 rue Saint-michel" variableName="companyAddress" />
    <CustomTextInput label="Ville" placeholder="Lyon" variableName="companyCity" />
    {/* <CustomTextInput label="State" placeholder="Karnataka" variableName="companyState" /> */}
    <CustomNumberInput label="Code postal" placeholder="69280" variableName="companyZip" />
    <CustomTextInput label="Ville" placeholder="France" variableName="companyCountry" />
    <CustomTextInput label="TVA" placeholder="GSTIN 1234" variableName="companyTaxId" />
  </div>
);
