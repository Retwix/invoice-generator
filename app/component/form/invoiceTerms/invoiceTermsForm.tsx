"use client";
import CustomTextInput from "@/app/component/ui/customTextInput";
import DateInput from "@/app/component/ui/dateInput";

export const InvoiceTermsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Conditions de facturation</p>
    <CustomTextInput label="Numéro de facture" placeholder="INVOICE-01" variableName="invoiceNo" />
    <DateInput label="Date d'émission" variableName="issueDate" />
    <DateInput label="Date d'échéance" variableName="dueDate" />
  </div>
);
