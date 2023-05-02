import { View, Text, ScrollView, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import ProFeature from '../components/ProFeature';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Paywall"
>;

const Paywall = () => {
  const navigation = useNavigation<NavigationProp>()
  return (
    <ScrollView className="bg-[#1A2F44] flex-1">
      <View className="m-10 space-y-2">
        <Text className="text-2xl text-center uppercase text-white">
          upgrade
        </Text>
        <Text className="text-center text-white">
          Upgrade to pro to acccess all the features
        </Text>
      </View>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Home')}
        className="absolute top-0 right-0 p-5"
      >
        <Ionicons name="md-close-circle-sharp" size={32} color="#6144ba" />
      </TouchableOpacity>

      <View>


      </View>

      <ProFeature
        iconName="md-key"
        iconColor="#6144ba"
        messageOne="Access to all pro features"
        messageTwo="Upgrade to the premium version of the app and enjoy
        all the exclusive features available only to pro users."
      />
      <ProFeature
        iconName="md-person-add-outline"
        iconColor="#6144ba"
        messageOne="Helpline 24/7 to personal trainers"
        messageTwo="Get unlimited access to our fitness support team and 
        get help anytime you need it - day or night."
      />
      <ProFeature
        iconName="md-star"
        iconColor="#6144ba"
        messageOne="Unlock limited edition content"
        messageTwo="Unlock exlucisve content that you can't get anywhere else, 
        like special exclusive workouts and routines"
      />

    </ScrollView>
  )
}

export default Paywall