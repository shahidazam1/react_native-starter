import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
} from "react-native";

export default function App() {
  const [event, setEvent] = useState("");
  const [todoList, setTodoList] = useState([]);

  const HandlePress = () => {
    if (!event) return console.warn("Please Write a message");
    setTodoList([...todoList, event]);
    setEvent("");
  };

  console.log(todoList);

  const handleChange = (e) => {
    setEvent(e);
  };
  return (
    <View style={styles.main}>
      <Text style={styles.text}>ToDo list</Text>
      <View style={styles.container}>
        <StatusBar style="light" />
        <TextInput
          aria-label="hello"
          style={styles.input}
          onChangeText={handleChange}
          value={event}
          placeholder="Enter To Add List..."
        />
        <View style={styles.buttonWraper}>
          <Button color="#f194ff" title="submit" onPress={HandlePress} />
        </View>
        <View style={styles.listContainer}>
          <FlatList
            data={todoList}
            renderItem={({ item }) => <Item title={item} />}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </View>
  );
}

const Item = ({ title }) => {
  return (
    <View style={styles.todoContent}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: "grey",
    flex: 1,
  },
  container: {
    margin: 10,
  },
  text: {
    backgroundColor: "yellow",
    padding: 10,
    marginTop: 25,
  },
  buttonWraper: {
    marginTop: 10,
  },
  input: {
    marginTop: 10,
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "lightgrey",
  },
  displayText: {
    color: "white",
    margin: 10,
    fontSize: 14,
  },
  listContainer: {
    marginTop: 50,
    backgroundColor: "lightblue",
    padding: 10,
  },
  todoContent: {
    borderColor: "red",
    borderWidth: 1,
    color: "red",
    padding: 10,
    marginTop: 10,
  },
});
