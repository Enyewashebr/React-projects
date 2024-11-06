import {useState, useEffect} from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useParams } from 'react-router-dom';

function Player() {


const {id} = useParams();


  const [apiData, setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""

  });
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODhjYjg4ZTI2ODU1ZGIyNTJhZGNkOWQxZTQ3ZWIxNSIsIm5iZiI6MTczMDgxNzM3NS44MjMxOTc2LCJzdWIiOiI2NzJhMmE2ZTgzZTYyZjA1YzZiNTdkZWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.MRtRwA8jAb3W1PRPNxjigp0M9PHRYXkZFIqHorggA3M",
    },
  };

  
  
useEffect(() => {
 fetch(
   `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US', options`,
   options
 )
   .then((res) => res.json())
   .then((res) => setApiData(res.results[0]))
   .catch((err) => console.error(err));
}, []);



  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player

