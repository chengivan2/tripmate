import Link from "next/link";
import "./main.css";

export default function Home() {
  return (
    <main className="home-main">
      <div className="home-title-container">
        <h2 className="home-main-title">Hello, Nisena Agent. Welcome.</h2>
        <p className="home-sub-title">Log in to continue</p>
      </div>

      <div className="home-sign-in-button-container">
        <Link href="/login">
          <div className="home-sign-in-button">Sign In</div>
        </Link>
      </div>
    </main>
  );
}
