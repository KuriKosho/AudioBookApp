import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DynamicIcon from '../Icon/DynamicIcon';

type ButtonWithIconProps = {
    text: string;
    action: () => void;
    size: 'auto' | '100%';
    type: 'main' | 'sub';
    icon: {
        library: string;
        name: string;
    };
};

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
    text,
    action,
    size,
    type,
    icon,
}) => {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                 size === '100%' ? { width: '100%' } : { flex: 1 },
                { backgroundColor: type === 'main' ? '#4838D1' : '#ffffff' },
            ]}
            onPress={action}
        >
            <View style={styles.iconContainer}>
                {type ==='main' ? 
                <DynamicIcon library={icon?.library} name={icon?.name} size={20} color="#ffffff" /> : 
                <DynamicIcon library={icon?.library} name={icon?.name} size={20} color="#4838D1" />}
            </View>
            <View>
                <Text style={[styles.text,  {color: type==="main" ?"#ffffff": "#4838D1"}]}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: '#4838D1',
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"space-between",
    },
    iconContainer: {
        marginRight: 5,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default ButtonWithIcon;