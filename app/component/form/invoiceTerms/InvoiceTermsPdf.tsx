import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { format } from "date-fns";
import { pdfTypography, pdfContainers, pdfUtils } from "@/lib/pdfStyles";
import { fr } from "date-fns/locale/fr";

export const InvoiceTermsPdf: React.FC<InvoiceTerms> = ({ invoiceNumber, issueDate, dueDate }) => {
  console.log(invoiceNumber?.startsWith("F"));
  return (
    <View style={pdfContainers.invoiceTerms}>
      <View style={{ flex: 1 }}>
        <Text style={pdfTypography.title}>
          {invoiceNumber?.startsWith("F") ? "Numéro de facture" : "Numéro de devis"}
        </Text>
        <Text style={pdfTypography.subTitle}>{invoiceNumber}</Text>
      </View>
      <View
        style={{
          ...pdfUtils.flexRowBetween,
          paddingRight: 20,
          paddingLeft: 100,
          flex: 1,
        }}
      >
        <View>
          <Text style={pdfTypography.title}>Date d'émission</Text>
          <Text style={pdfTypography.subTitle}>
            {issueDate ? format(issueDate, "do MMM yyyy'", { locale: fr }) : ""}
          </Text>
        </View>
        <View>
          <Text style={pdfTypography.title}>Date d'échéance</Text>
          <Text style={pdfTypography.subTitle}>{dueDate ? format(dueDate, "do MMM yyyy", { locale: fr }) : ""}</Text>
        </View>
      </View>
    </View>
  );
};
