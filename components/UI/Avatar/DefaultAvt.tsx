import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import clientService from 'services/client/client.service';

interface DefaultAvtProps {
    avatar: string;
    size?: number;
}
const DefaultAvt:React.FC<DefaultAvtProps> = ({avatar, size}) => {
    const [backgroundColor, setBackgroundColor] = React.useState<string>('#3636f7');
    useEffect(() => {
        const backgroundColor = clientService.getRandomColor();
        setBackgroundColor(backgroundColor);
    },[]);
    const avatarSize = size ?? 75;

    return (
        <View 
                style={[styles.avatar,{ backgroundColor, width: avatarSize, height: avatarSize, borderRadius: avatarSize / 2 }]}
        >
                <Text style={[styles.text, { fontSize: avatarSize / 2 }]}>{avatar}</Text>
        </View>
    )
}

export default DefaultAvt

const styles = StyleSheet.create({
    avatar: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        color: '#FFF',
        fontWeight: 'bold',
      },
})