import WindowFrame from '@/components/WindowFrame';

export default function Desktop() {
  return (
    <main className="h-screen w-full overflow-y-auto snap-y snap-mandatory flex flex-col items-center scroll-smooth">
      
      {/* Section 1: Hero / Welcome Window */}
      <section className="w-full min-h-screen flex-shrink-0 flex items-center justify-center p-4 sm:p-8 snap-center">
        <WindowFrame title="WELCOME.TXT" width="w-full max-w-3xl">
          <div className="bg-white p-4 shadow-win-inset text-black font-pixel">
            <h1 className="text-4xl font-starborn mb-4 mt-2">SudoApT-artfolio</h1>
            <p className="text-xl mb-4 text-win-blue">Requiem For Your Dream</p>
            <p className="text-lg leading-tight mb-4">
              Do Whatever you want to do in the Morning, the thing that makes your heart pound out of joy <br/>
              and Keeps your mind at ea$e.
            </p>
            <p className="text-lg leading-tight">
              &gt; Scroll down to initialize the media module.<br/>
              &gt; Access the Game Hub to initiate a simulation.
            </p>
          </div>
        </WindowFrame>
      </section>

      {/* Section 2: Media Player Window */}
      <section className="w-full min-h-screen flex-shrink-0 flex items-center justify-center p-4 sm:p-8 snap-center">
        <WindowFrame title="MEDIA_PLAYER.EXE" width="w-full max-w-3xl">
           <div className="bg-black shadow-win-inset p-1">
             <iframe 
                src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                className="pixelated-iframe">
             </iframe>
           </div>
        </WindowFrame>
      </section>

      {/* Section 3: Game Hub */}
      <section className="w-full min-h-screen flex-shrink-0 flex items-center justify-center p-4 sm:p-8 snap-center">
        <WindowFrame title="GAMES_HUB.EXE" width="w-full max-w-3xl">
          <div className="bg-white shadow-win-inset p-6 h-full min-h-[350px]">
            <p className="text-win-gray-dark mb-4 border-b border-win-gray-light pb-2">C:\Users\Admin\Games\&gt;</p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              
              <div className="flex flex-col items-center gap-2 p-2 cursor-pointer border border-transparent hover:border-dotted hover:border-win-gray-dark active:bg-win-blue active:text-white transition-colors">
                <div className="w-16 h-16 bg-red-500 shadow-win-outset flex items-center justify-center text-4xl select-none">
                  🚗
                </div>
                <span className="text-sm bg-transparent px-1">Rowdy_Turbo.exe</span>
              </div>

              <div className="flex flex-col items-center gap-2 p-2 cursor-pointer border border-transparent hover:border-dotted hover:border-win-gray-dark active:bg-win-blue active:text-white transition-colors">
                <div className="w-16 h-16 bg-green-500 shadow-win-outset flex items-center justify-center text-4xl select-none">
                  🐍
                </div>
                <span className="text-sm bg-transparent px-1">Cyber_Snake.exe</span>
              </div>
              
            </div>
          </div>
        </WindowFrame>
      </section>

    </main>
  );
}
