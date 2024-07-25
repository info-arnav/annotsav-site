import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Join Annotsav",
  description:
    "Become a part of Annotsav and contribute to empowering farmers with smart irrigation solutions. Help us conserve water and boost crop yields.",
  applicationName: "Annotsav",
  referrer: "origin-when-cross-origin",
  keywords: [
    "enactus",
    "nsut",
    "annotsav",
    "join",
    "farmers",
    "water",
    "smart irrigation",
    "sustainable farming",
    "volunteer",
    "support",
  ],
  authors: [{ name: "Enactus NSUT", url: "https://www.enactus.in/" }],
  creator: "Annotsav",
  publisher: "Annotsav",
  openGraph: {
    title: "Join Annotsav",
    description:
      "Become a part of Annotsav and contribute to empowering farmers with smart irrigation solutions. Help us conserve water and boost crop yields.",
    url: "https://annotsav.enactus.in/join",
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
    title: "Join Annotsav",
    description:
      "Become a part of Annotsav and contribute to empowering farmers with smart irrigation solutions. Help us conserve water and boost crop yields.",
    images: ["https://annotsav.enactus.in/logo_500x500.png"],
  },
};

export default function JoinLayout({ children }) {
  return children;
}
