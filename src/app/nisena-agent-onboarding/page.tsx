"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../utils/supabase/supabaseClient";

export default function Onboarding() {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [userExists, setUserExists] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) {
        console.error(error);
        router.push("/login");
        return;
      }
      if (user) {
        const { first_name, last_name } = user.user_metadata || {};
        if (first_name && last_name) {
          router.push("/dashboard");
        } else {
          setUserExists(true);
        }
      } else {
        router.push("/login");
      }
      setLoading(false);
    };

    checkUser();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (user) {
      const { email } = user;

      const { error: updateError } = await supabase
        .from('nisena_agents')
        .update({
          first_name: firstName,
          last_name: lastName,
          email: email,
        })
        .eq('id', user.id);

      if (!updateError) {
        router.push("/dashboard");
      } else {
        console.error(updateError.message);
      }
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="onboarding-container">
      <h1>Welcome, Nisena Agent! Let's get you started.</h1>
      {userExists && (
        <form onSubmit={handleSubmit}>
          <label htmlFor="first_name">First Name:</label>
          <input
            type="text"
            id="first_name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <label htmlFor="last_name">Last Name:</label>
          <input
            type="text"
            id="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <button type="submit">Update my name</button>
        </form>
      )}
    </div>
  );
}