import { useState, useRef, useEffect } from "react";

const TRACKS = [
    { title: "Song One", artist: "Artist A", src: "/music/song1.mp3" },
    { title: "Song Two", artist: "Artist B", src: "/music/song2.mp3" },
    { title: "Song Three", artist: "Artist C", src: "/music/song3.mp3" },
];

export function Player() {
    const [current, setCurrent] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.src = TRACKS[current].src;
        if (playing) audio.play();
    }, [current]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;
        playing ? audio.play() : audio.pause();
    }, [playing]);

    const handleTimeUpdate = () => {
        const audio = audioRef.current;
        if (!audio) return;
        setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    const prev = () => setCurrent(i => (i - 1 + TRACKS.length) % TRACKS.length);
    const next = () => setCurrent(i => (i + 1) % TRACKS.length);

    return (
        <div className="ipod">
            <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} onEnded={next} />

            {/* Screen */}
            <div className="ipod-screen">
                <p className="ipod-name">Yeru (Cherry) Lee</p>
                <p className="ipod-roles">Game Dev · User Researcher · Front-End Engineer</p>
                <div className="ipod-divider" />
                <p className="ipod-track-title">{TRACKS[current].title}</p>
                <p className="ipod-track-artist">{TRACKS[current].artist}</p>
                <div className="ipod-progress-bar">
                    <div className="ipod-progress-fill" style={{ width: `${progress}%` }} />
                </div>
            </div>

            {/* Click wheel */}
            <div className="ipod-wheel">
                <button className="wheel-top" onClick={() => setCurrent(0)}>MENU</button>
                <button className="wheel-left" onClick={prev}>⏮</button>
                <button className="wheel-right" onClick={next}>⏭</button>
                <button className="wheel-bottom" onClick={() => setPlaying(p => !p)}>
                    {playing ? "⏸" : "▶"}
                </button>
                <div className="wheel-center" onClick={() => setPlaying(p => !p)} />
            </div>
        </div>
    );
}