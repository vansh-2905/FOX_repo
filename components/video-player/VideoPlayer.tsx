"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, SkipBack, SkipForward, X } from "lucide-react";

export function VideoPlayer({ onClose }: { onClose: () => void }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
        setCurrentTime(video.currentTime);
      }
    };

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleLoadedMetadata = () => setDuration(video.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      if (video) video.currentTime = 0;
    };

    video.addEventListener('timeupdate', updateProgress);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', updateProgress);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  const togglePlay = async () => {
    try {
      if (videoRef.current) {
        if (isPlaying) {
          await videoRef.current.pause();
        } else {
          await videoRef.current.play();
        }
      }
    } catch (error) {
      console.error('Error toggling play state:', error);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement && containerRef.current) {
        await containerRef.current.requestFullscreen();
      } else if (document.exitFullscreen) {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;
    
    const bounds = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - bounds.left;
    const percentage = (x / bounds.width) * 100;
    const newTime = (percentage / 100) * duration;
    
    videoRef.current.currentTime = newTime;
    setProgress(percentage);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 2000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case ' ':
      case 'k':
        e.preventDefault();
        togglePlay();
        break;
      case 'f':
        e.preventDefault();
        toggleFullscreen();
        break;
      case 'm':
        e.preventDefault();
        toggleMute();
        break;
      case 'ArrowLeft':
        if (videoRef.current) {
          videoRef.current.currentTime -= 10;
        }
        break;
      case 'ArrowRight':
        if (videoRef.current) {
          videoRef.current.currentTime += 10;
        }
        break;
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black z-50 flex items-center justify-center" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <button 
        onClick={onClose}
        className={`absolute top-4 right-4 text-white/80 hover:text-white z-10 transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative w-full max-w-7xl aspect-video">
        <video
          ref={videoRef}
          className="w-full h-full"
          src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4"
          poster="https://images.unsplash.com/photo-1533928298208-27ff66555d8d?w=1920&h=1080&fit=crop"
          onClick={togglePlay}
          playsInline
        />

        <div 
          className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300 ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 p-4 space-y-4">
            <div 
              className="h-1 bg-white/20 rounded-full cursor-pointer relative group"
              onClick={handleProgressClick}
            >
              <div 
                className="absolute inset-y-0 left-0 bg-primary rounded-full"
                style={{ width: `${progress}%` }}
              />
              <div className="absolute inset-y-0 -top-2 -bottom-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ width: `${progress}%` }} />
            </div>

            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <button 
                  onClick={togglePlay} 
                  className="hover:text-primary transition-colors p-2 rounded-full hover:bg-white/10"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
                <button 
                  onClick={toggleMute} 
                  className="hover:text-primary transition-colors p-2 rounded-full hover:bg-white/10"
                >
                  {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </button>
                <span className="text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <button 
                  onClick={() => videoRef.current && (videoRef.current.currentTime -= 10)}
                  className="hover:text-primary transition-colors p-2 rounded-full hover:bg-white/10"
                >
                  <SkipBack className="w-6 h-6" />
                </button>
                <button 
                  onClick={() => videoRef.current && (videoRef.current.currentTime += 10)}
                  className="hover:text-primary transition-colors p-2 rounded-full hover:bg-white/10"
                >
                  <SkipForward className="w-6 h-6" />
                </button>
                <button 
                  onClick={toggleFullscreen} 
                  className="hover:text-primary transition-colors p-2 rounded-full hover:bg-white/10"
                >
                  {isFullscreen ? <Minimize className="w-6 h-6" /> : <Maximize className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}