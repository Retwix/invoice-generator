import { View } from "@react-pdf/renderer";
import { YourDetailsPDF } from "./yourDetails/yourDetailsPdf";
import { InvoiceTermsPdf } from "./invoiceTerms/InvoiceTermsPdf";
import { CompanyDetailsPdf } from "./companyDetails/companyDetailsPdf";
import { InvoiceDetailsPdf } from "./invoiceDetails/invoiceDetailsPdf";
import { PaymentDetailsPdf } from "./paymentDetails/paymentDetailsPdf";
import { pdfUtils } from "@/lib/pdfStyles";
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
      <View>
        <View style={pdfUtils.borderBottom}>
          <InvoiceDetailsPdf {...invoiceDetails} />
        </View>
        <View>
          <PaymentDetailsPdf {...paymentDetails} countryImageUrl={countryImageUrl} />
        </View>
      </View>
    </View>
    {/* Footer */}
    <FooterDetailsPdf />
  </View>
);
