"use client";

import { useState } from "react";
import { supabase } from "../../../utils/supabase/supabaseClient";
import "./login.css";
import Image from "next/image";
import tripmate from "./tripmate.png";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,
        shouldCreateUser: false,
      },
    });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Check your email for the login link!");
    }
  };

  return (
    <main className="login-page-main">
      <div className="login-page-container">
        <div className="login-page-title-and-logo-container">
          <h2 className="login-page-title">Log In</h2>
          <div className="login-page-image-container">
            <Image src={tripmate} alt="Login" width={100} height={100} />
          </div>
        </div>
        <form id="login-page-login-form" onSubmit={handleSignIn}>
          {message && (
            <p className="login-page-login-form-error-message">{message}</p>
          )}
          <label className="login-page-login-form-email-label" htmlFor="email">
            Email:
          </label>
          <input
            className="login-page-login-form-email-input"
            placeholder="Enter your Nisena work email"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button id="login-page-login-form-submit-button" type="submit">
            Send Magic Link
          </button>
        </form>
      </div>
    </main>
  );
}
