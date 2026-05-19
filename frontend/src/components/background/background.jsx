
import video from "../../images/Background.mp4"

function background(){
    return(
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video"
      >
        <source src={video} type = "video/mp4"/>
      </video>
    )
}

export default background;
