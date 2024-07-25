import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Volunteer with Annotsav",
  description:
    "Join Annotsav as a volunteer and make a difference in sustainable farming. Help us implement smart irrigation solutions and support farmers in their journey towards better crop yields.",
  applicationName: "Annotsav",
  referrer: "origin-when-cross-origin",
  keywords: [
    "enactus",
    "nsut",
    "annotsav",
    "volunteer",
    "farmers",
    "water",
    "smart irrigation",
    "sustainable farming",
    "support",
    "community involvement",
  ],
  authors: [{ name: "Enactus NSUT", url: "https://www.enactus.in/" }],
  creator: "Annotsav",
  publisher: "Annotsav",
  openGraph: {
    title: "Volunteer with Annotsav",
    description:
      "Join Annotsav as a volunteer and make a difference in sustainable farming. Help us implement smart irrigation solutions and support farmers in their journey towards better crop yields.",
    url: "https://annotsav.enactus.in/volunteer",
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
    title: "Volunteer with Annotsav",
    description:
      "Join Annotsav as a volunteer and make a difference in sustainable farming. Help us implement smart irrigation solutions and support farmers in their journey towards better crop yields.",
    images: ["https://annotsav.enactus.in/logo_500x500.png"],
  },
};

export default function VolunteerLayout({ children }) {
  return children;
}
