import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../components/ui/NavBar/NavBar";
// Style
import "../VideoBreathingTech/VideoBreathingTech.css";
import Title from "../../components/ui/Title/Title";
import { useState, useRef } from "react";

function VideoBreathingTech() {
    const location = useLocation();
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const { videoSrc, condition } = location.state || {};
    const [isPlaying, setIsPlaying] = useState(false);

    const handleBackClick = () => {
        navigate(-1); 
    };

    const handleStartStop = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying((prevIsPlaying) => !prevIsPlaying);
        }
    };

    return (
        <>
            <NavBar />
            {condition && (
                <Title className="title" img="/assets/icons/lineback.svg" onClick={handleBackClick} title={condition.title} />
            )}
            <div className="videoContainer">
                {videoSrc ? (
                    <video className="videoPlayer" ref={videoRef}>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                ) : (
                    <p>No video source available.</p>
                )}
                <img onClick={handleStartStop} className="playAndStopTechBreath" src="/assets/icons/playandstop.svg" alt="Play/Stop"/>
            </div>
        </>
    );
}

export default VideoBreathingTech;
