import React, { useState } from "react"
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from "react-native"

export default function Lista({ sair }) {
  const [tarefa, setTarefa] = useState("")
  const [tarefas, setTarefas] = useState([])

  function adicionar() {
    if (tarefa === "") return

    const nova = {
      id: Date.now().toString(),
      texto: tarefa,
      feita: false
    }

    setTarefas([...tarefas, nova])
    setTarefa("")
  }

  function concluir(id) {
    setTarefas(
      tarefas.map(item =>
        item.id === id ? { ...item, feita: !item.feita } : item
      )
    )
  }

  function remover(id) {
    setTarefas(tarefas.filter(item => item.id !== id))
  }

  const concluidas = tarefas.filter(t => t.feita).length

  return (
    <View style={{ padding: 20, marginTop: 50 }}>
      <Text>Lista de Tarefas</Text>

      <TextInput
        placeholder="Nova tarefa"
        value={tarefa}
        onChangeText={setTarefa}
        style={{ borderWidth: 1, marginVertical: 10 }}
      />

      <Button title="Adicionar" onPress={adicionar} />

      <Text>Concluídas: {concluidas}</Text>

      {tarefas.length === 0 && <Text>Nenhuma tarefa</Text>}

      <FlatList
        data={tarefas}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}>
            <TouchableOpacity onPress={() => concluir(item.id)}>
              <Text style={{ textDecorationLine: item.feita ? "line-through" : "none" }}>
                {item.texto}
              </Text>
            </TouchableOpacity>

            <Button title="X" onPress={() => remover(item.id)} />
          </View>
        )}
      />

      <Button title="Logout" onPress={sair} />
    </View>
  )
}