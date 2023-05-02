import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';

import { RootStackParamList } from '../../App';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Demo"
>

const Demo = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="bg-[#6144ba] flex-1">
      <TouchableOpacity 
        className="flex-row items-center p-5"
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={50} color="white" />
        <Text className="text-white">Go back</Text>
      </TouchableOpacity>

      <View className="flex-1 items-center justify-center px-10">
        <Text className="text-white text-2xl font-extrabold">Horray!</Text>
        <Text className="text-white text-2xl font-extrabold mb-20">You have access to this feature</Text>
        <Ionicons name="build-outline" size={200} color="white" />
        <View className="-mt-16 -ml-8">
          <Ionicons name="checkmark-circle-sharp" size={60} color="#96F550" />
        </View>
        <Text className="text-white my-10 flex-1 font-bold text-center">
          This is where you create a new screen & change the rest of the app, 
          so the navigation is as follows: navigation.navigate('ThePageYouWant')
        </Text>
      </View>
    </SafeAreaView>
  )
};

export default Demo;