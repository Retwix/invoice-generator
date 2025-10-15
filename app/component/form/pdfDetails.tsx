import { View, Text } from "@react-pdf/renderer";
import { YourDetailsPDF } from "./yourDetails/yourDetailsPdf";
import { InvoiceTermsPdf } from "./invoiceTerms/InvoiceTermsPdf";
import { CompanyDetailsPdf } from "./companyDetails/companyDetailsPdf";
import { InvoiceDetailsPdf } from "./invoiceDetails/invoiceDetailsPdf";
import { PaymentDetailsPdf } from "./paymentDetails/paymentDetailsPdf";
import { pdfUtils, pdfTypography } from "@/lib/pdfStyles";
import { FooterDetailsPdf } from "./footerDetail/invoiceDetailsPdf";

export const PdfDetails = ({
  yourDetails,
  companyDetails,
  invoiceDetails,
  paymentDetails,
  invoiceTerms,
  countryImageUrl,
}: {
  yourDetails: YourDetails;
  companyDetails: CompanyDetails;
  invoiceDetails: InvoiceItemDetails;
  paymentDetails: PaymentDetails;
  invoiceTerms: InvoiceTerms;
  countryImageUrl: string;
}) => (
  <View style={{ position: "relative", height: "100%" }}>
    <InvoiceTermsPdf {...invoiceTerms} />
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          ...pdfUtils.borderTop,
          ...pdfUtils.borderBottom,
        }}
      >
        <YourDetailsPDF {...yourDetails} />
        <CompanyDetailsPdf {...companyDetails} />
      </View>
      {/* <View style={pdfUtils.borderBottom}>
        <View style={{ paddingVertical: 20, paddingHorizontal: 40 }}>
          <Text style={[pdfTypography.title, { paddingBottom: 10 }]}>Description des prestations</Text>
          <Text style={pdfTypography.itemDescription}>
            Ce devis couvre un abonnement mensuel comprenant 1 journée de travail dédiée à vos besoins, notamment
            l'intégration d'images, mises à jour du site, optimisation des performances, SEO, intégration de contenu, et
            utilisation de Google Console, ainsi que d'autres tâches prioritaires définies ensemble.
          </Text>
        </View>
      </View> */}
      <View>
        <View style={pdfUtils.borderBottom}>
          <InvoiceDetailsPdf {...invoiceDetails} />
        </View>
        <View>
          <PaymentDetailsPdf {...paymentDetails} countryImageUrl={countryImageUrl} />
        </View>
        {/* <View style={{ paddingVertical: 20, paddingHorizontal: 40 }}>
          <Text style={[pdfTypography.title, { paddingBottom: 10 }]}>Conditions générales</Text>
          <Text style={pdfTypography.itemDescription}>
            • Abonnement mensuel, facturé en fin de mois selon le crédit utilisé.
          </Text>
          <Text style={pdfTypography.itemDescription}>
            • Toute demande sortant du cadre prévu nécessitera un devis complémentaire.
          </Text>
        </View> */}
      </View>
    </View>
    {/* Footer */}
    <FooterDetailsPdf />
  </View>
);
