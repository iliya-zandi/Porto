import React from "react";
import { FiAlignCenter, FiSearch, FiMoon } from "react-icons/fi";

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <nav className="app-navbar block">
          <div className="container py-12 flex items-center justify-between">
            <h1 className="text-3xl app-logo">
              <a href="/" className="text-zinc-900 font-extrabold">
                <span>PROTO</span>
              </a>
            </h1>
            <div className="flex items-center gap-x-3">
              <button className="inline-block px-3 py-3 rounded-full text-zinc-800">
                <FiAlignCenter size={26} strokeWidth={1.4} />
                <span className="hidden">(search)</span>
              </button>
              <button className="inline-block px-3 py-3 rounded-full text-zinc-800">
                <FiSearch size={26} strokeWidth={1.4} />
                <span className="hidden">(search)</span>
              </button>
              <button className="inline-block px-3 py-3 rounded-full text-zinc-800">
                <FiMoon size={26} strokeWidth={1.4} />
                <span className="hidden">(search)</span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default App;
