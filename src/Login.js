import React, { useState } from "react"
import { View, Text, TextInput, Button } from "react-native"

export default function Login({ entrar }) {
  const [usuario, setUsuario] = useState("")
  const [senha, setSenha] = useState("")

  function verificar() {
    if (usuario === "admin" && senha === "1234") {
      entrar()
    }
  }

  return (
    <View style={{ padding: 20, marginTop: 100 }}>
      <Text>Login</Text>

      <TextInput
        placeholder="Usuário"
        onChangeText={setUsuario}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        onChangeText={setSenha}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <Button title="Entrar" onPress={verificar} />
    </View>
  )
}