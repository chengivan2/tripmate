"use client";

import { useState } from "react";
import { supabase } from "../../../utils/supabase/supabaseClient";
import "./page.module.css";

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
    <div className="container">
      <h1 className="login-page-title">Login</h1>
      <form id="login-page-login-form" onSubmit={handleSignIn}>
        <label className="login-page-login-form-email-label" htmlFor="email">Email:</label>
        <input className="login-page-login-form-email-input"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button id="login-page-login-form-submit-button" type="submit">Send Magic Link</button>
      </form>
      {message && <p className="login-page-login-form-error-message">{message}</p>}
    </div>
  );
}
