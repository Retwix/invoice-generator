import React from "react";
import { Text, View } from "@react-pdf/renderer";
import { pdfTypography, pdfUtils } from "@/lib/pdfStyles";

export const FooterDetailsPdf: React.FC = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        padding: 10,
        ...pdfUtils.borderTop,
      }}
    >
      <Text style={pdfTypography.footerSiren}>SIREN: 890 574 536 - APE: 6201Z</Text>
      {/* <Text style={{ fontSize: 10, textAlign: "center" }}>Contact us at: support@example.com</Text> */}
      <Text style={pdfTypography.footerTextItalic}>
        En cas de retard de paiement, un taux d’intérêt correspondant au taux directeur de la BCE majoré de 10 points
        sera appliqué, ainsi qu’une indemnité forfaitaire de 40 € pour frais de recouvrement.
      </Text>
    </View>
  );
};
