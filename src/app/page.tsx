import Link from "next/link";
import "./main.css";

export default function Home() {
  return (
    <main className="home-main">
      <div className="home-title-container">
        <h2 className="home-main-title">Hello, Nisena Agent. Welcome.</h2>
        <h4 className="home-sub-title">Login to continue</h4>
      </div>

      <div className="home-sign-in-button-container">
        <Link href="/login">
          <div className="home-sign-in-button">Sign In</div>
        </Link>
      </div>
    </main>
  );
}
