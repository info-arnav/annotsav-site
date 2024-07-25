import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav
      style={{
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Link href="/">
        <Image src="/logo_white.png" height={40} width={40}></Image>
      </Link>
      <div style={{ flex: 1, textAlign: "right" }}>
        <Link
          className="nav-link"
          style={{ fontSize: 16, fontWeight: "600", margin: 15 }}
          href="/"
        >
          Home
        </Link>
        <Link
          className="nav-link"
          style={{ fontSize: 16, fontWeight: "600", marginRight: 15 }}
          href="/join"
        >
          Join
        </Link>
        <Link
          className="nav-link"
          style={{ fontSize: 16, fontWeight: "600", marginRight: 15 }}
          href="/volunteer"
        >
          Volunteer
        </Link>
        <Link
          className="nav-link"
          style={{ fontSize: 16, fontWeight: "600" }}
          href="/contact-us"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
}
