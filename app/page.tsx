import WindowFrame from '@/components/WindowFrame';

export default function Desktop() {
  return (
    <main className="min-h-screen w-full p-4 sm:p-8 flex flex-col lg:flex-row gap-6 items-start justify-center relative z-10">
      
      {/* Left Column: Hero & Media */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2 max-w-xl">
        
        {/* Section 1: Hero / Welcome Window */}
        <WindowFrame title="WELCOME.TXT" width="w-full">
          <div className="bg-white p-4 shadow-win-inset text-black font-pixel">
            <h1 className="text-3xl font-bold mb-2">muthomi-artfolio</h1>
            <p className="text-xl mb-4 text-win-blue">Innovation Engineer & Web Developer</p>
            <p className="text-lg leading-tight mb-4">
              System booted successfully from Nairobi servers.<br/>
              All systems nominal.
            </p>
            <p className="text-lg leading-tight">
              > Select an executable from the Game Hub to initiate a simulation.<br/>
              > Initialize the media player for background audio.
            </p>
          </div>
        </WindowFrame>

        {/* Section 2: Media Player Window */}
        <WindowFrame title="MEDIA_PLAYER.EXE" width="w-full">
           <div className="bg-black shadow-win-inset p-1">
             {/* Replace this src URL with your preferred Spotify playlist or YouTube embed */}
             <iframe 
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4WYpdgIwl22?utm_source=generator&theme=0" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="pixelated-iframe">
             </iframe>
           </div>
        </WindowFrame>

      </div>

      {/* Right Column: Game Hub */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2 max-w-xl">
        <WindowFrame title="GAMES_HUB.EXE" width="w-full">
          <div className="bg-white shadow-win-inset p-6 h-full min-h-[350px]">
            <p className="text-win-gray-dark mb-4 border-b border-win-gray-light pb-2">C:\Users\Admin\Games\&gt;</p>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 text-center">
              
              {/* Game Icon 1: Car Game */}
              <div className="flex flex-col items-center gap-2 p-2 cursor-pointer border border-transparent hover:border-dotted hover:border-win-gray-dark active:bg-win-blue active:text-white transition-colors">
                <div className="w-12 h-12 bg-red-500 shadow-win-outset flex items-center justify-center text-3xl select-none">
                  🚗
                </div>
                <span className="text-sm bg-transparent px-1">Rowdy_Turbo.exe</span>
              </div>

              {/* Game Icon 2: Snake Game */}
              <div className="flex flex-col items-center gap-2 p-2 cursor-pointer border border-transparent hover:border-dotted hover:border-win-gray-dark active:bg-win-blue active:text-white transition-colors">
                <div className="w-12 h-12 bg-green-500 shadow-win-outset flex items-center justify-center text-3xl select-none">
                  🐍
                </div>
                <span className="text-sm bg-transparent px-1">Cyber_Snake.exe</span>
              </div>

              {/* Add more interactive icons here (e.g., Patana.exe, QejaYetu.exe) */}
              
            </div>
          </div>
        </WindowFrame>
      </div>

    </main>
  );
}
