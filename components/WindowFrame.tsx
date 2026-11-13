import React from 'react';

export default function WindowFrame({ title, children, width = "max-w-2xl" }: { title: string, children: React.ReactNode, width?: string }) {
  return (
    <div className={`w-full ${width} bg-win-beige shadow-win-outset p-1 flex flex-col`}>
      <div className="bg-win-blue px-2 py-1 flex justify-between items-center text-white cursor-pointer select-none">
        <h2 className="text-lg leading-none tracking-wider">{title}</h2>
        <div className="flex gap-1">
          <button className="bg-win-beige text-black w-5 h-5 shadow-win-outset flex items-center justify-center leading-none text-sm hover:active:shadow-win-inset">_</button>
          <button className="bg-win-beige text-black w-5 h-5 shadow-win-outset flex items-center justify-center leading-none text-sm hover:active:shadow-win-inset">□</button>
          <button className="bg-win-beige text-black w-5 h-5 shadow-win-outset flex items-center justify-center leading-none text-sm font-bold hover:active:shadow-win-inset">X</button>
        </div>
      </div>
      <div className="p-4 bg-win-beige">
        {children}
      </div>
    </div>
  );
}
