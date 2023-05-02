import React from 'react'
import { 
  Text, 
  SafeAreaView, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  View 
} from 'react-native'

import { Ionicons } from '@expo/vector-icons';
import ActionRow from '../components/ActionRow';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>;

const Home = () => {
  const navigation = useNavigation<NavigationProp>()
  return (
    <SafeAreaView className="flex-1 bg-gray-100 relative">
      <ScrollView>
        <Image
          className="w-full h-56"
          source={require('../../assets/mainLogo.png')}
        />
        <TouchableOpacity 
          className="items-center -mt-10"
          onPress={() => navigation.navigate("Paywall")}
        >
          <Ionicons name="person-circle" size={30} color="#6144ba" />
          <Text className="text-center text-[#6144ba]">PRO/UPGRADE</Text>
        </TouchableOpacity>
        <View className="mt-5">
          <View className="flex-row justify-between space-x-2">
            <ActionRow 
              title="Track workout"
              screen="Demo"
              color="#6144ba"
              icon="fitness"
              vertical
            />
            <ActionRow 
              title="Browse Workouts"
              screen="Demo"
              color="#1982C4"
              icon="library"
              vertical
            />
          </View>
          <ActionRow 
            title="Connect with friends"
            screen="Demo"
            color="#F44174"
            icon="share-social"
          />
          <ActionRow 
            title="Add an excercise"
            screen="Demo"
            color="#8AC926"
            icon="add-circle"
          />
          <ActionRow 
            title="Create a routine"
            screen="Demo"
            color="#C03221"
            icon="md-time"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home