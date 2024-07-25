import Image from "next/image";

export default function Celebrate() {
  return (
    <div
      className="celebrate-banner"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 20,
      }}
    >
      <div style={{ maxWidth: 1000, textAlign: "center" }} className="celb">
        <Image
          style={{ marginBottom: 50 }}
          src="/assets/logo_hands.png"
          height={200}
          width={200}
        ></Image>
        <h1 style={{ fontSize: 100, margin: 0, lineHeight: 0.5 }}>
          LET&apos;S CELEBRATE
        </h1>
        <h1 style={{ fontSize: 100, margin: 0, color: "rgb(54 94 50)" }}>
          ANN-OTSAV
        </h1>
      </div>
    </div>
  );
}
