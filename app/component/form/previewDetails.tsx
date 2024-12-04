import { CompanyDetailsPreview } from "@/app/component/form/companyDetails/companyDetailsPreview";
import { InvoiceDetailsPreview } from "@/app/component/form/invoiceDetails/invoiceDetailsPreview";
import { InvoiceTermsPreview } from "@/app/component/form/invoiceTerms/InvoiceTermsPreview";
import { PaymentDetailsPreview } from "@/app/component/form/paymentDetails/paymentDetailsPreview";
import { YourDetailsPreview } from "@/app/component/form/yourDetails/yourDetailsPreview";
import { ChevronDown } from "lucide-react";

export const PreviewDetails = ({
  yourDetails,
  companyDetails,
  invoiceDetails,
  paymentDetails,
  invoiceTerms,
  onClick,
}: {
  yourDetails: YourDetails;
  companyDetails: CompanyDetails;
  invoiceDetails: InvoiceItemDetails;
  paymentDetails: PaymentDetails;
  invoiceTerms: InvoiceTerms;
  onClick?: (step: string) => void;
}) => (
  <div className="overflow-x-auto">
    <div className="w-[595px] h-[842px] bg-white rounded-2xl border border-dashed flex flex-col">
      {/* Invoice Terms */}
      <InvoiceTermsPreview {...invoiceTerms} onClick={onClick} />

      {/* Header Section */}
      <div className="border-b grid grid-cols-2 justify-between border-dashed">
        <div
          className="py-4 px-10 border-r border-dashed cursor-pointer relative group"
          onClick={() => onClick && onClick("1")}
        >
          {!!onClick && (
            <>
              <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 rotate-[135deg] group-hover:block hidden absolute top-0 left-0" />
              <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 -rotate-[135deg] group-hover:block hidden absolute top-0 right-0" />
              <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 rotate-45 group-hover:block hidden absolute bottom-0 left-0" />
              <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 -rotate-45 group-hover:block hidden absolute bottom-0 right-0 " />
            </>
          )}
          <YourDetailsPreview {...yourDetails} />
        </div>
        <div className="py-4 px-10 border-dashed cursor-pointer relative group" onClick={() => onClick && onClick("2")}>
          {!!onClick && (
            <>
              <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 rotate-[135deg] group-hover:block hidden absolute top-0 left-0" />
              <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 -rotate-[135deg] group-hover:block hidden absolute top-0 right-0" />
              <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 rotate-45 group-hover:block hidden absolute bottom-0 left-0" />
              <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 -rotate-45 group-hover:block hidden absolute bottom-0 right-0 " />
            </>
          )}
          <CompanyDetailsPreview {...companyDetails} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="border-b justify-between border-dashed">
          <InvoiceDetailsPreview {...invoiceDetails} onClick={onClick} />
        </div>
        <div>
          <PaymentDetailsPreview {...paymentDetails} onClick={onClick} />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto py-4 px-10 border-t border-dashed text-center text-sm text-neutral-500">
        <p>SIREN: 890 574 536 - APE: 6201Z</p>
        <p className="text-left text-xs italic mt-2">
          En cas de retard de paiement, un taux d’intérêt correspondant au taux directeur de la BCE majoré de 10 points
          sera appliqué, ainsi qu’une indemnité forfaitaire de 40 € pour frais de recouvrement.
        </p>
      </div>
    </div>
  </div>
);
