import { useState } from 'react'
import {JButton, JProse} from "@ben-ryder/jigsaw-react";

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-background h-screen">
      <h1 className="text-xl font-bold text-mono-100">Vite + React + Jigsaw</h1>
      <div>
        <JButton onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </JButton>
        <JProse className="bg-panel text-mono-100 p-4">
          <h1>This is a test</h1>
          <p>Phasellus laoreet lorem vel dolor tempus vehicula.</p>
        </JProse>
      </div>
    </div>
  )
}
