import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Contact Us - Annotsav",
  description:
    "Get in touch with the Annotsav team for inquiries, support, or partnership opportunities. We're here to assist you with our smart irrigation solutions.",
  applicationName: "Annotsav",
  referrer: "origin-when-cross-origin",
  keywords: [
    "enactus",
    "nsut",
    "annotsav",
    "contact us",
    "support",
    "inquiries",
    "partnership",
    "smart irrigation",
    "sustainable farming",
  ],
  authors: [{ name: "Enactus NSUT", url: "https://www.enactus.in/" }],
  creator: "Annotsav",
  publisher: "Annotsav",
  openGraph: {
    title: "Contact Us - Annotsav",
    description:
      "Get in touch with the Annotsav team for inquiries, support, or partnership opportunities. We're here to assist you with our smart irrigation solutions.",
    url: "https://annotsav.enactus.in/contact-us",
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
    title: "Contact Us - Annotsav",
    description:
      "Get in touch with the Annotsav team for inquiries, support, or partnership opportunities. We're here to assist you with our smart irrigation solutions.",
    images: ["https://annotsav.enactus.in/logo_500x500.png"],
  },
};

export default function ContactLayout({ children }) {
  return children;
}
