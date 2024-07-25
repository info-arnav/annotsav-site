"use client";

export default function NotFound({ error, reset }) {
  return (
    <div
      id="error"
      className="banner"
      style={{
        paddingTop: 20,
        width: "100%",
        paddingBottom: 20,
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        id="error-text"
        style={{
          flex: 1,
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1
          style={{
            fontSize: 100,
            margin: 0,
            lineHeight: 1,
            fontWeight: 700,
            textAlign: "left",
          }}
        >
          ERROR 404
        </h1>
        <h2 style={{ margin: 0, fontSize: 22, fontWeight: 400, marginTop: 20 }}>
          Page Not Found
        </h2>
        <p style={{ marginTop: 20, textAlign: "left" }}>
          Try searching a valid URL next time.....
        </p>
      </div>
    </div>
  );
}
