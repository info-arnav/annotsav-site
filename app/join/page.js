"use client";

import Image from "next/image";
import { useState } from "react";

const URL =
  "https://script.google.com/macros/s/AKfycbyKpttN-LlMKOr4xSYCfc2XC4mI78cXGmBG1b249-1DlXF29O1B-j64QGw02oFE1kvw/exec";

export default function Join() {
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        name: name,
        email: email,
        company: company,
        companySize: number,
        number: pnumber,
        designation: designation,
        message: message,
        formType: "OrganisationForm",
      }).toString(),
    })
      .then((e) => {
        setName("");
        setEmail("");
        setNumber("");
        setDesignation("");
        setMessage("");
        setPnumber("");
        setCompany("");
        setLoading(false);
      })
      .catch((e) => {
        setName("");
        setEmail("");
        setNumber("");
        setDesignation("");
        setMessage("");
        setPnumber("");
        setCompany("");
        setLoading(false);
      });
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [designation, setDesignation] = useState("");
  const [pnumber, setPnumber] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <main
      className="banner contact"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Image
          src="/assets/raw/img2.png"
          className="contact-icon"
          height={400}
          width={400}
        ></Image>
      </div>
      <div
        className="form-parent"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
          width: "100%",
        }}
      >
        <h1>Get Annotsav for your Organisation</h1>
        <form onSubmit={submit}>
          <input
            required={true}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
          ></input>
          <input
            required={true}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          ></input>
          <input
            required={true}
            value={pnumber}
            onChange={(e) => setPnumber(e.target.value)}
            placeholder="Phone Number"
            type="number"
          ></input>
          <input
            required={true}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="company"
            type="text"
          ></input>
          <input
            required={true}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Company Size"
            type="number"
          ></input>
          <input
            required={true}
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            placeholder="designation"
            type="text"
          ></input>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            type="text"
          ></textarea>
          <button disabled={loading}>
            {loading ? "Sending...." : "Send Message"}
          </button>
        </form>
      </div>
    </main>
  );
}
