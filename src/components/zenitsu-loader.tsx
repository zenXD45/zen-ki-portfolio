interface LoaderProps {
  onVideoEnded: () => void;
  fadeOut: boolean;
}

export default function Loader({ onVideoEnded, fadeOut }: LoaderProps) {
  return (
    <video
      src="/videos/zen.mp4"
      autoPlay
      muted
      className={`w-full h-full object-cover transition-opacity duration-800 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      onEnded={onVideoEnded}
    />
  );
}
