import { View, Text, TextInput, ScrollView, FlatList, StyleSheet } from "react-native";

export default function App() {
  const fruits = [
    { id: "1", name: "Apple" },
    { id: "2", name: "Banana" },
    { id: "3", name: "Orange" },
    { id: "4", name: "Grape" },
    { id: "5", name: "Peach" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Text</Text>

      <TextInput
        placeholder="Write something..."
        style={styles.input}
      />

      <Text style={styles.title}>Scroll</Text>

      <ScrollView style={styles.scroll}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
        <Text>5</Text>
        <Text>6</Text>
        <Text>7</Text>
        <Text>8</Text>
        <Text>9</Text>
        <Text>10</Text>
        <Text>11</Text>
      </ScrollView>

      <Text style={styles.title}>FlatList</Text>

      <FlatList
        data={fruits}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },

  title: {
    fontSize: 50,
    marginBottom: 10,
    marginTop: 15,
  },

  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,

  },

  scroll: {
    height: 120,
    borderWidth: 1,
    padding: 15,
    marginTop: 15,
    borderRadius:25
  },

  item: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});