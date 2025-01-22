import type { Metadata } from "next";
import "./globallogin.css";


export const metadata: Metadata = {
  title: "Login | TripMate",
  description: "Log in to start onboarding clients",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
