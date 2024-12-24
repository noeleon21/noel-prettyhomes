export default function Home() {
  return (
    <div className="h-screen relative bg-[url('/pexels-binyaminmellish-1396122.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Black transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      {/* Wrapper div to center content */}
      <div className="relative flex items-center justify-center h-full">
        <h1 className="text-white text-6xl font-bold text-center">
          Welcome to Pretty Homes
        </h1>
      </div>
    </div>
  );
}
