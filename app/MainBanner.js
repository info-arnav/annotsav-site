export default function MainBanner() {
  return (
    <div
      className="home-banner"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      <div className="home-banner-content">
        <h1
          className="home-banner-title"
          style={{
            fontSize: 90,
            margin: 20,
            textAlign: "left",
            lineHeight: 1.3,
          }}
        >
          Let <br></br>Technology <br></br>Nourish The Soil
        </h1>
      </div>
    </div>
  );
}
