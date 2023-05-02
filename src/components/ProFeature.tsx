import { View, Text } from 'react-native'
import { Ionicons,  } from '@expo/vector-icons';

interface Props {
  iconName: keyof typeof Ionicons.glyphMap,
  iconColor: string,
  messageOne: string,
  messageTwo: string
}

const ProFeature = ({ iconName, iconColor, messageOne, messageTwo }: Props) => {
  return (
    <View className="space-y-5 px-5 py-5">
      <View className="flex-row space-x-10 items-center">
        <Ionicons name={iconName} size={32} color={iconColor} />
        <View className="flex-1">
          <Text className="text-white font-bold text-lg">
            {messageOne}
          </Text>
          <Text className="text-white text-sm font-extralight">
            {messageTwo}
          </Text>
        </View>
      </View>
  </View>
  )
}

export default ProFeature