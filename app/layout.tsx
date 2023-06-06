import "./globals.scss";
import localFont from "next/font/local";
import Container from "@/components/share/container/container";

const yekanBakh = localFont({
  src: [
    {
      path: "../public/fonts/YekanBakh/YekanBakh-Thin.woff2",
      weight: "100",
    },
    {
      path: "../public/fonts/YekanBakh/YekanBakh-Light.woff2",
      weight: "200",
    },
    {
      path: "../public/fonts/YekanBakh/YekanBakh-Light.woff2",
      weight: "300",
    },
    {
      path: "../public/fonts/YekanBakh/YekanBakh-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/YekanBakh/YekanBakh-SemiBold.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/YekanBakh/YekanBakh-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../public/fonts/YekanBakh/YekanBakh-Bold.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/YekanBakh/YekanBakh-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "../public/fonts/YekanBakh/YekanBakh-Black.woff2",
      weight: "900",
    },
    // fa-numbers
    {
      path: "../public/fonts/YekanBakh/Yekan-Bakh-FaNum-04-Regular.woff",
      weight: "400",
    },
    {
      path: "../public/fonts/YekanBakh/Yekan-Bakh-FaNum-05-Medium.woff",
      weight: "500",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body dir="rtl" className={yekanBakh.className}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
