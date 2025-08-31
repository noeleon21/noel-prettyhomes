
export default function Home() {
  return (
    <div className="h-screen relative bg-[url('/main_picture.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Black transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none"></div>
      
      {/* Wrapper div to center content */}
      <div className="relative flex items-center justify-center h-full z-10">
        <div className="space-y-8">
        <h1 className="text-white text-6xl font-bold text-center">
          Welcome to Pretty Homes
        </h1>
        <h2 className="text-white text-2xl italic">
          Build your own way
        </h2>
        </div>
      </div>
    </div>
  );
}
