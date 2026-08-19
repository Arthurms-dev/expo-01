import { Text, View, Image, StyleSheet } from 'react-native';

export default function Profile() {
    return (
        <Image 
            source={require('../../assets/images/foto-perfil.jpg')}
            style={styles.localImage}
        />
    );
}

const styles = StyleSheet.create({
    localImage: {
        width: 150,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        left: 0,
        top: 0,
        borderRadius: 50,
        marginBottom: 10
    }
})