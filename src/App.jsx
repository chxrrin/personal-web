import React from 'react';
import './App.css'
import { Window } from "./components/Window";

function App() {

  return (
    <>
      <div className="app-shell">
        {open && (
          <Window onClose={() => setOpen(false)}>
            <p>This is inside the window</p>
          </Window>
        )}
      </div>
    </>
  )
}

export default App
