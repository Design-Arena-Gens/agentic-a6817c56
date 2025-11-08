import "./globals.css";
import { Montserrat, Noto_Naskh_Arabic } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans"
});

const notoArabic = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic"
});

export const metadata = {
  title: "Islamic Q&A Reels Poster",
  description:
    "A ready-to-use Islamic Q&A poster layout designed for Instagram Reels."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${notoArabic.variable}`}>
        {children}
      </body>
    </html>
  );
}
