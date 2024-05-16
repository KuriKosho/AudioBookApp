import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface CheckboxProps {
    isChecked: boolean;
    // setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
    action: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ isChecked,action }) => {
    // const handleCheckboxChange = () => {
    //     setIsChecked(!isChecked);
    // };

    return (
        <TouchableOpacity onPress={action} style={styles.checkboxContainer}>
            <View style={[styles.checkbox]} />
            {isChecked ? <>
                <Feather name="check" size={20} color="black" style={styles.checkIcon}/>
            </>:""}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 4,
        marginRight: 8,
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    checked: {
        backgroundColor: 'blue', // Change color when checked
    },
    checkIcon: {
        position: 'absolute',
        start: 0,
        top: 0,
        bottom: 0,
        end: 0,
    },
});

export default Checkbox;
