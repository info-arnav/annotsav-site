import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Annotsav",
  description:
    "Annotsav empowers farmers and gardeners with smart irrigation solutions, conserving water and improving crop yields.",
  applicationName: "Annotsav",
  referrer: "origin-when-cross-origin",
  keywords: [
    "enactus",
    "nsut",
    "annotsav",
    "farmers",
    "water",
    "plant",
    "smart",
    "irrigation",
    "sustainable farming",
  ],
  authors: [{ name: "Enactus NSUT", url: "https://www.enactus.in/" }],
  creator: "Annotsav",
  publisher: "Annotsav",
  openGraph: {
    title: "Annotsav",
    description:
      "Annotsav empowers farmers and gardeners with smart irrigation solutions, conserving water and improving crop yields.",
    url: "https://annotsav.enactus.in/",
    siteName: "Annotsav",
    images: [
      {
        url: "/logo_500x500.png",
        width: 500,
        height: 500,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Annotsav",
    description:
      "Annotsav empowers farmers and gardeners with smart irrigation solutions, conserving water and improving crop yields.",
    images: ["https://annotsav.enactus.in/logo_500x500.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navigation></Navigation>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
