import React from 'react';
import { StyleSheet, View } from 'react-native';
import DynamicIcon from 'components/UI/Icon/DynamicIcon';

interface NumberStartProps {
    number?: number | undefined;
    size?: number;
}

const NumberStart: React.FC<NumberStartProps> = ({ number,size }) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const starIcon = i <= (number ?? 0) ? <DynamicIcon key={i} color="#F77A55" library='AntDesign' name='star' size={size ? size: 20} /> : <DynamicIcon key={i} color="#F77A55" library='AntDesign' name='staro' size={size ? size: 20} />;
            stars.push(starIcon);
        }
        return stars;
    };

    return (
        <View style={styles.container}>
            {renderStars()}
        </View>
    );
};

export default NumberStart;


const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        columnGap: 8
    }
})