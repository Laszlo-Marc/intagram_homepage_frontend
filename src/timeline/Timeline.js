import React, { useState } from "react";
import Suggestions from "./Suggestions";
import "./Timeline.css";
import Post from "./posts/Posts";
function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "marc.laszlo",
      postImage:
        "https://media.istockphoto.com/id/1989931260/ro/fotografie/cap-uman-gol-%C8%99i-scar%C4%83-albastr%C4%83-peste-fundalul-peretelui-albastru-de-beton.jpg?s=612x612&w=0&k=20&c=FTrCAO-KPt8O16crgKEyjesUtS8rBFP8K0h745E5cwk=",
      likes: 21,
      timestamp: "12h",
    },
    {
      user: "jon.doe",
      postImage:
        "https://media.istockphoto.com/id/1977485498/ro/fotografie/conceptul-procesorului-creierului-de-inteligen%C8%9B%C4%83-artificial%C4%83-matrice-big-data.jpg?s=612x612&w=0&k=20&c=vC908P09nxfcQ9ntkyeuyRdnzbmA2d_cytFqNssrBYU=",
      likes: 340,
      timestamp: "15h",
    },
    {
      user: "harry_lewis",
      postImage:
        "https://media.istockphoto.com/id/1965039080/ro/fotografie/isla-cristina-carreras-gura-r%C3%A2ului-dron%C4%83-vedere-aerian%C4%83-%C3%AEn-huelva-din-andaluzia-spania.jpg?s=612x612&w=0&k=20&c=ECUae1W7XvYIip7dwSemezM5WmDychq10lWkPJ_P9OI=",
      likes: 2500,
      timestamp: "1d",
    },
    {
      user: "eli.bunny",
      postImage:
        "https://images.unsplash.com/photo-1589881787083-0fcfec1db918?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2V4eXxlbnwwfHwwfHx8MA%3D%3D",
      likes: 10000,
      timestamp: "4h",
    },
    {
      user: "reddison_22",
      postImage:
        "https://images.unsplash.com/photo-1568819317551-31051b37f69f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2V4eXxlbnwwfHwwfHx8MA%3D%3D",
      likes: 200,
      timestamp: "2h",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
