"use client";

import Image from "next/image";
import { useState } from "react";

const arr = [
  [
    "User Control",
    "Through a mobile app, users can monitor soil moisture levels, adjust settings, and manually control the irrigation system.",
    "/assets/raw/UserControl.png",
  ],
  [
    "Smart Sensors",
    "Annotsav uses advanced soil moisture sensors to monitor the exact water needs of your plants",
    "/assets/raw/SmartSensors.png",
  ],
  [
    "Weather Integration",
    "The system integrates real-time weather data to adjust watering schedules, preventing over-watering or under-watering.",
    "/assets/raw/WeatherIntegration.png",
  ],
  [
    "Automated Irrigation",
    "Annotsav automates the watering process, ensuring plants receive the right amount of water at the right time",
    "/assets/raw/AutomatedIrrigation.png",
  ],
];

export default function UserControl() {
  const [page, setPage] = useState(0);
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
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <Image
              src="/assets/raw/plant.png"
              style={{
                backgroundColor: page == 0 ? "green" : "lightgreen",
                cursor: "pointer",
                marginLeft: 10,
                borderRadius: "100%",
              }}
              width={40}
              height={40}
              onClick={(e) => setPage(1 - 1)}
            ></Image>{" "}
            <Image
              src="/assets/raw/plant.png"
              style={{
                backgroundColor: page == 1 ? "green" : "lightgreen",
                cursor: "pointer",
                marginLeft: 10,
                borderRadius: "100%",
              }}
              width={40}
              height={40}
              onClick={(e) => setPage(2 - 1)}
            ></Image>{" "}
            <Image
              src="/assets/raw/plant.png"
              style={{
                backgroundColor: page == 2 ? "green" : "lightgreen",
                cursor: "pointer",
                marginLeft: 10,
                borderRadius: "100%",
              }}
              width={40}
              height={40}
              onClick={(e) => setPage(3 - 1)}
            ></Image>{" "}
            <Image
              src="/assets/raw/plant.png"
              style={{
                backgroundColor: page == 3 ? "green" : "lightgreen",
                cursor: "pointer",
                marginLeft: 10,
                borderRadius: "100%",
              }}
              width={40}
              height={40}
              onClick={(e) => setPage(4 - 1)}
            ></Image>
          </div>
          <p style={{ marginBottom: 10, fontSize: 32 }}>
            <b>{arr[page][0]}</b>
          </p>
          <p style={{ marginBottom: 10 }}>{arr[page][1]} </p>
        </div>{" "}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image src={arr[page][2]} width={300} height={400}></Image>
        </div>
      </div>
    </div>
  );
}
