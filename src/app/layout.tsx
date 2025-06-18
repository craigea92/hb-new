import { GlobalBanner } from "@/components/GlobalBanner/GlobalBanner";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalBanner variant="teal" />
        {children}
      </body>
    </html>
  );
}
