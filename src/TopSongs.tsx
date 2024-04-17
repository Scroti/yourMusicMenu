import {
  useEffect,
  useState,
} from "react";

const TopSongs = (token) => {
  const [topSongs, setTopSongs] =
    useState([]);

  useEffect(() => {
    const fetchTopSongs = async () => {
      try {
        // Fetching the access token (replace with your authentication method)
        const accessToken = token;
        // Implement your own function to get access token

        // Fetching top tracks
        const response = await fetch(
          "https://api.spotify.com/v1/me/top/tracks?limit=5",
          {
            headers: {
              Authorization:
                "Bearer " + accessToken,
            },
          }
        );

        if (response.ok) {
          const data =
            await response.json();
          setTopSongs(data.items); // Extracting top 5 songs from the response
        } else {
          console.error(
            "Failed to fetch top songs:",
            response.statusText
          );
        }
      } catch (error) {
        console.error(
          "Error fetching top songs:",
          error
        );
      }
    };

    fetchTopSongs();
  }, []);

  return (
    <div>
      <h2>Top 5 Songs</h2>

      <ul>
        {topSongs.map((song, index) => (
          <li key={index}>
            {song.name} by{" "}
            {song.artists
              .map(
                (artist) => artist.name
              )
              .join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSongs;
