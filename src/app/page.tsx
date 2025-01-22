import "./page.module.css";

export default function Home() {
  return (
      <main className="home-main">
        <div className="home-title-container">
          <h2 className="home-main-title">Hello, Nisena Agent. Welcome.</h2>
          <h6 className="home-sub-title">Login to continue</h6>
        </div>

        <div className="home-sign-in-button">
          <div><a href="/login">Sign In</a></div>
        </div>
      </main>
  );
}
