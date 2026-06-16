import { Pressable, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Plus, Trash2 } from "lucide-react-native";
import { useRouter } from "expo-router";
import data from "@/app/data.json";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <View className="h-full bg-gray-200">
        <View className="bg-slate-900 py-5">
          <Text className="text-4xl font-bold tracking-widest text-white text-center">
            MOTOKEEP
          </Text>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          contentContainerClassName="p-5"
          renderItem={({ item }) => (
            <Pressable
              className="bg-slate-800 p-4 mb-5 rounded-lg"
              onPress={() => alert(`Pressed item with id: ${item.id}`)}
            >
              <Text className="text-white font-bold">{item.part_name}</Text>
              <Text className="text-gray-400">Odometer: {item.odometer}</Text>
              <Text className="text-gray-400">
                Service Date: {item.service_date}
              </Text>
              <Pressable
                className="absolute right-5 bottom-1/2 top-1/2 items-end justify-center"
                onPress={() => alert(`Delete successfuly!`)}
              >
                <Trash2 color="red" />
              </Pressable>
            </Pressable>
              
          )}
        />

        <Pressable className="absolute bottom-10 right-5 p-4 bg-green-600 rounded-full" onPress={() => router.push("/add_record")}>
          <Plus color="white" strokeWidth={5} size={24} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
