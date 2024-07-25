import Image from "next/image";

export default function Transforming() {
  return (
    <div
      className="transforming-banner"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: 20,
      }}
    >
      <div style={{ maxWidth: 1000, textAlign: "center" }}>
        <h1
          style={{ fontSize: 50, textAlign: "center" }}
          className="trans-title"
        >
          Transforming Indian Agricultural Landscape
        </h1>
        <p style={{ fontWeight: 600 }}>
          Harnessing Millions Of Farm Level Data Points
        </p>
        <div
          className="mt"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 60,
            justifyContent: "center",
          }}
        >
          <div
            className="r"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <div
                style={{
                  border: "solid black",
                  borderRadius: 20,
                  padding: 20,
                  margin: 20,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: 250,
                }}
              >
                <Image
                  src="/assets/raw/RosterTree.png"
                  width={100}
                  height={100}
                  style={{ borderRadius: "100%", marginBottom: 20 }}
                ></Image>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Boost your cropn yield with our 150+ Agronomy models: multiple
                  crops in varied geographies.
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <div
                style={{
                  border: "solid black",
                  borderRadius: 20,
                  padding: 20,
                  margin: 20,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: 250,
                }}
              >
                <Image
                  src="/assets/raw/RosterBar.png"
                  width={100}
                  height={100}
                  style={{ borderRadius: "100%", marginBottom: 20 }}
                ></Image>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Informed crop decision with IoT device - real time crop data
                  for accurate advisory.
                </div>
              </div>
            </div>
          </div>
          <div
            className="r"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <div
                style={{
                  border: "solid black",
                  borderRadius: 20,
                  padding: 20,
                  margin: 20,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: 250,
                }}
              >
                <Image
                  src="/assets/raw/RosterLaptop.png"
                  width={100}
                  height={100}
                  style={{ borderRadius: "100%", marginBottom: 20 }}
                ></Image>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Take farm management to the next level with comprehensive
                  multi platform service.
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
              }}
            >
              <div
                style={{
                  border: "solid black",
                  borderRadius: 20,
                  padding: 20,
                  margin: 20,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: 250,
                }}
              >
                <Image
                  src="/assets/raw/RosterCloud.png"
                  width={100}
                  height={100}
                  style={{ borderRadius: "100%", marginBottom: 20 }}
                ></Image>
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Unlock the power of remote weather data and artificial
                  intelligence
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
