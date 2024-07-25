import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margiin: 20,
          flex: 4,
        }}
      >
        <Link href="/">
          <Image src="/assets/logo_hands.png" height={100} width={100}></Image>
        </Link>
        <h1 style={{ lineHeight: 0.1, marginTop: 50 }}>Annotsav</h1>
        <p>Copyright Enactus NSUT @ 2024</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margiin: 20,
          flex: 3,
        }}
      >
        <h2>Quick Links</h2>
        <Link style={{ marginBottom: 15 }} href="/">
          Home
        </Link>
        <Link style={{ marginBottom: 15 }} href="/join">
          Join
        </Link>
        <Link style={{ marginBottom: 15 }} href="/volunteer">
          Volunteer
        </Link>
        <Link style={{ marginBottom: 15 }} href="/contact-us">
          Contact Us
        </Link>
        <a
          style={{ marginBottom: 15 }}
          href="https://docs.google.com/forms/d/e/1FAIpQLSevQPFRiWAjyjNbJ3tUtMXqBRtIjLzzP4V-amMAE8o7R-N1AQ/viewform"
        >
          Survey
        </a>
        <a href="https://www.enactus.in">Enactus NSUT</a>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          margiin: 20,
          flex: 3,
        }}
      >
        <h2>Contact</h2>
        <b>Address</b>
        <p style={{ margin: 0, textAlign: "center" }}>
          Netaji Subhas University of Technology
        </p>
        <p style={{ margin: 0, textAlign: "center" }}>New Delhi, India</p>
        <br></br>
        <b>Phone</b>
        <p style={{ margin: 0, textAlign: "center" }}>+91 85956 22774</p>{" "}
        <br></br>
        <b>Email</b>
        <p style={{ margin: 0, textAlign: "center" }}>enactus@nsut.ac.in</p>
      </div>
    </footer>
  );
}
