import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./index.css";
function App() {
  const CLIENT_ID =
    "f4800a4aebd84afea912381167963d0b";
  const REDIRECT_URI =
    "http://localhost:5173/callback";
  const AUTH_ENDPOINT =
    "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      {/* <div className="App">
        <h1>Spotify React</h1>

        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=user-top-read`}
        >
          Login to Spotify
        </a>
      </div>
   */}
    </div>
  );
}

export default App;
