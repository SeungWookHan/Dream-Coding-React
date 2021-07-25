import React, { useState, useEffect } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";
import * as config from "./config";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    console.log("useEffect");
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?key=${config.API_KEY}&part=snippet&chart=mostPopular&maxResults=25`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []); // 마운트가 되었을때만 호출

  return <VideoList videos={videos} />;
}

export default App;
