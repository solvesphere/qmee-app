"use client"
import { useState } from "react";
import { auth } from "@/config/firebase"; // Make sure auth is imported from the correct config file
import {
  signInWithPhoneNumber,
  RecaptchaVerifier,
  ConfirmationResult,
} from "firebase/auth"; // Import required Firebase modules

export default function AuthForm() {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [confirmation, setConfirmation] = useState<ConfirmationResult | null>(
    null
  ); // Correctly typing the confirmation state

  const sendOTP = async () => {
    try {
      // Initialize reCAPTCHA verifier
      const recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
        }
      );
      window.recaptchaVerifier = recaptchaVerifier; // Save the verifier on window

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phone,
        recaptchaVerifier
      );
      setConfirmation(confirmationResult); // Save confirmation result
    } catch (error) {
      console.error("Error during OTP send", error);
    }
  };

  const verifyOTP = async () => {
    try {
      await confirmation?.confirm(code); // Ensure confirmation exists before calling confirm
      alert("Login Successful!");
    } catch (error) {
      console.error("Invalid OTP", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        className="border p-2 m-2"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={sendOTP} className="bg-blue-500 text-white p-2 rounded">
        Send OTP
      </button>

      {confirmation && (
        <>
          <input
            className="border p-2 m-2"
            placeholder="Enter OTP"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            onClick={verifyOTP}
            className="bg-green-500 text-white p-2 rounded"
          >
            Verify OTP
          </button>
        </>
      )}
      <div id="recaptcha-container"></div>
    </div>
  );
}
