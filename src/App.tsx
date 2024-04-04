import "./App.css";

function App() {
  const CLIENT_ID =
    "f4800a4aebd84afea912381167963d0b";
  const REDIRECT_URI =
    "http://localhost:5173/callback";
  const AUTH_ENDPOINT =
    "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  return (
    <>
      <div className="App">
        <h1>Spotify React</h1>

        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      </div>
    </>
  );
}

export default App;
