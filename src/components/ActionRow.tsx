import { Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
>

interface Props {
  title: string,
  screen: any,
  color: string,
  requiresPro?: boolean,
  icon?: any,
  vertical?: boolean
}

const ActionRow = ({ 
  title, 
  screen, 
  color, 
  requiresPro, 
  icon, 
  vertical 
}: Props) => {
  const navigation = useNavigation<NavigationProp>()
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      className={`flex flex-1 m-2 justify-center items-center py-6 rounded-lg space-x-2`}
      style={{ backgroundColor: color, flexDirection: vertical ? 'column' : 'row' }}
    >
      <Ionicons name={icon} size={30} color="white" />
      <Text 
        className="text-white font-bold text-lg"
      >{title}</Text>
    </TouchableOpacity>
  )
}

export default ActionRow