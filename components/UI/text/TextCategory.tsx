import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type TextCategoryProps = {
    category: string;
};

const TextCategory: React.FC<TextCategoryProps> = ({ category }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.category}>{category}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#6A6A8B',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    category: {
        fontSize: 14,
        fontWeight: '500',
        color: '#6A6A8B',
    },
});

export default TextCategory;