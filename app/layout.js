import localFont from "next/font/local";
import "./globals.css";

const charlie = localFont({
  src: [
    {
      path: "../public/font/charlie-text-3.ttf",
      weight: "700",
    },
  ],
  variable: "--font-charlie",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${charlie.variable}  antialiased`}>{children}</body>
    </html>
  );
}
