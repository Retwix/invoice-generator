import { format } from "date-fns";
import { ChevronDown } from "lucide-react";
import { fr } from "date-fns/locale/fr";

export const InvoiceTermsPreview: React.FC<InvoiceTerms & { onClick?: (step: string) => void }> = ({
  invoiceNumber,
  issueDate,
  dueDate,
  onClick,
}) => (
  <div
    className="border-b py-4 px-10 grid grid-cols-2 justify-between border-dashed group cursor-pointer relative"
    onClick={() => onClick && onClick("5")}
  >
    {!!onClick && (
      <>
        <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 rotate-[135deg] group-hover:block hidden absolute top-0 left-0" />
        <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 -rotate-[135deg] group-hover:block hidden absolute top-0 right-0" />
        <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 rotate-45 group-hover:block hidden absolute bottom-0 left-0" />
        <ChevronDown className="animate-pulse w-5 h-5 text-orange-500 -rotate-45 group-hover:block hidden absolute bottom-0 right-0 " />
      </>
    )}
    <div>
      <p className="text-[11px] text-neutral-400 font-semibold uppercase">Numéro de facture</p>
      <p className="font-medium text-xs">{invoiceNumber}</p>
    </div>
    <div className="flex items-center justify-between pl-10">
      <div>
        <p className="text-[11px] text-neutral-400 font-semibold uppercase">Date d'émission</p>
        <p className="font-medium text-xs">
          {issueDate ? format(new Date(issueDate), "do MMM yyyy'", { locale: fr }) : ""}
        </p>
      </div>
      <div>
        <p className="text-[11px] text-neutral-400 font-semibold uppercase text-right">Date d'échéance</p>
        <p className="font-medium text-xs">
          {dueDate && !isNaN(new Date(dueDate).getTime())
            ? format(new Date(dueDate), "do MMM yyyy'", { locale: fr })
            : ""}
        </p>
      </div>
    </div>
  </div>
);
