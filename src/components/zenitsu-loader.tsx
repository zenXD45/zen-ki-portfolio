"use client"

export function ZenitsuLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background w-screen h-screen">
      <div className="relative w-screen h-screen md:w-[50vw] md:h-[50vh] overflow-hidden">
        <video
          src="./videos/loader.mp4"
          
          autoPlay
          loop
          muted
         
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
