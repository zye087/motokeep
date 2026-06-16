import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";
import { useRouter } from "expo-router";

const AddRecord = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="h-full bg-gray-200">
      <View className="bg-slate-900 py-5 flex-row gap-3 items-center px-5">
        <Pressable onPress={() => router.back()}>
          <ArrowLeft color="white" />
        </Pressable>
        <Text className="text-2xl font-bold tracking-widest text-white text-center">
          LOG MAINTENANCE
        </Text>
      </View>
      <View className="p-5 gap-5">
        <View className="gap-2">
          <Text className="text-lg font-semibold">Part Name</Text>
          <TextInput className="border rounded-lg" />
        </View>
        <View className="gap-2">
          <Text className="text-lg font-semibold">Odometer reading (KM)</Text>
          <TextInput className="border rounded-lg" inputMode="numeric" />
        </View>
        <View className="gap-2">
          <Text className="text-lg font-semibold">Service date</Text>
          <TextInput className="border rounded-lg" />
        </View>
        <View className="gap-2">
          <Text className="text-lg font-semibold">Notes / Remarks</Text>
          <TextInput className="border rounded-lg" maxLength={100} multiline={true} />
        </View>
        <Pressable onPress={() => alert("Record saved successfully!")}>
          <Text className="text-center text-2xl text-white bg-green-600 font-bold tracking-widest py-3 rounded-lg">
            SAVE
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default AddRecord;
