import axios from "axios";
import {
  useEffect,
  useState,
} from "react";

const Callback = () => {
  const [token, setToken] =
    useState("");
  const [searchKey, setSearchKey] =
    useState("");
  const [artists, setArtists] =
    useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token =
      window.localStorage.getItem(
        "token"
      );

    // getToken()

    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) =>
          elem.startsWith(
            "access_token"
          )
        )
        .split("=")[1];

      window.location.hash = "";
      window.localStorage.setItem(
        "token",
        token
      );
    }

    setToken(token);
    console.log(token);
  }, []);

  const logout = () => {
    setToken("");
    window.localStorage.removeItem(
      "token"
    );
  };

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(
      "https://api.spotify.com/v1/search",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          q: searchKey,
          type: "track",
        },
      }
    );

    setArtists(data.tracks.items);
    console.log(data.tracks.items);
  };

  const renderArtists = () => {
    return artists.map((artist) => (
      <div
        key={artist?.id}
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {artist.name}
        <img
          src={
            artist.album.images[0].url
          }
          width={150}
          height={150}
        />
        <audio controls>
          <source
            src={artist.preview_url}
          ></source>
        </audio>
      </div>
    ));
  };

  return (
    <>
      {token ? (
        <button onClick={logout}>
          Logout
        </button>
      ) : (
        <p>go log in</p>
      )}
      {token ? (
        <form onSubmit={searchArtists}>
          <input
            type="text"
            onChange={(e) =>
              setSearchKey(
                e.target.value
              )
            }
          />
          <button type={"submit"}>
            Search
          </button>
        </form>
      ) : (
        <h2>Please login</h2>
      )}

      {renderArtists()}
    </>
  );
};

export default Callback;
