import Image from "next/image";

export default function UserControl() {
  return (
    <div
      className="user-control-banner"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 20,
      }}
    >
      <div
        className="table-break-700"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flex: 1,
        }}
      >
        <div
          className="start"
          style={{
            flex: 1,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ fontWeight: 500, marginBottom: 0 }}>
            How it <br></br>
            <span className="h1-span" style={{ fontSize: 72, fontWeight: 700 }}>
              Works ?
            </span>
          </h1>
          <p style={{ marginBottom: 10 }}>
            <b>1. Automated Plant irrigation : </b>On the basis of moisture
            level and other conditions the machine automatically waters plants.
          </p>
          <p style={{ marginBottom: 10 }}>
            <b>2. Manual Control : </b> Through a mobile app, users can monitor
            soil moisture levels, adjust settings, and manually control the
            irrigation system.
          </p>
        </div>{" "}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src="/assets/raw/UserControl.png"
            width={300}
            height={400}
          ></Image>
        </div>
      </div>
    </div>
  );
}
