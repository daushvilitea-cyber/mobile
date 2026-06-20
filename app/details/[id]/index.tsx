import { View, Text} from "react-native";
import {useLocalSearchParams} from "expo-router";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Product Details for ID: {id}</Text>
    </View>
  );
}
