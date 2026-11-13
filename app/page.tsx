import WindowFrame from '../components/WindowFrame';

export default function Desktop() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center p-8">
      <WindowFrame title="LANDSCAPE.EXE" width="max-w-3xl">
        <div className="w-full aspect-[21/9] bg-black shadow-win-inset flex items-center justify-center">
          <p className="text-green-500 text-xl">
            [ Phase 2: Encapsulate HTML5 Canvas Game Here ]
          </p>
        </div>
      </WindowFrame>
    </main>
  );
}
