"use client";

import React from "react";
import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabase/supabaseClient";
import "./dashboard.css"

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (data) {
        setUser(data.user);
      }
    };

    fetchUser();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Nisena Agent Dashboard</h1>

      <div>
        <p>Hello, {user?.user_metadata?.given_name || user?.email}</p>
      </div>
      
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{ width: "30%", padding: "10px", border: "1px solid #ccc" }}
        >
          <h2>Upcoming Trips</h2>
          <ul>
            <li>Trip to Paris - 12/12/2023</li>
            <li>Trip to New York - 01/15/2024</li>
            <li>Trip to Tokyo - 03/22/2024</li>
          </ul>
        </div>
        <div
          style={{ width: "30%", padding: "10px", border: "1px solid #ccc" }}
        >
          <h2>Recent Bookings</h2>
          <ul>
            <li>John Doe - Paris</li>
            <li>Jane Smith - New York</li>
            <li>Bob Johnson - Tokyo</li>
          </ul>
        </div>
        <div
          style={{ width: "30%", padding: "10px", border: "1px solid #ccc" }}
        >
          <h2>Messages</h2>
          <ul>
            <li>Message from John Doe</li>
            <li>Message from Jane Smith</li>
            <li>Message from Bob Johnson</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
