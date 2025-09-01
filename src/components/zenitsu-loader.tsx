"use client"

export function ZenitsuLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="relative w-full h-full md:w-[50vw] md:h-[50vh] overflow-hidden">
        <video
          src="https://media.tenor.com/P4z6y_b23g4AAAPo/zenitsu-agatsuma.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
