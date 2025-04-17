import { useState } from 'react'
import {Button, Typography} from "@ben-ryder/jigsaw-react";

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-slate-500">
      <h1 className="text-xl font-bold">Vite + React + Jigsaw</h1>
      <div>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Typography>
          <h1>This is a test</h1>
          <p>Phasellus laoreet lorem vel dolor tempus vehicula.</p>
        </Typography>
      </div>
    </div>
  )
}
