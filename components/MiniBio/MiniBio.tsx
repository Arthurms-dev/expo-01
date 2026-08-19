import { Text, View, Image } from 'react-native';

export default function MiniBio() {
    return (
        <View
        style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
         <Text>Me chamo Arthur Vinícius e tenho 19 anos. Atualmente exerço o cargo de Estagiário de TI no Ministério da Saúde irá fazer 6 meses.</Text>
    </View>
    );
}