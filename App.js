import React, { useState } from "react"
import Login from "./src/Login"
import Lista from "./src/Lista"

export default function App() {
  const [logado, setLogado] = useState(false)

  if (logado) {
    return <Lista sair={() => setLogado(false)} />
  }

  return <Login entrar={() => setLogado(true)} />
}