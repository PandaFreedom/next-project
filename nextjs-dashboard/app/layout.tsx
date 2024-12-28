import "../app/ui/global.css";
import { inter as fontsStyle } from "../app/ui/fonts";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fontsStyle.className}antialiased`}>{children}</body>
      {/* antialiased 抗锯齿 */}
    </html>
  );
}
