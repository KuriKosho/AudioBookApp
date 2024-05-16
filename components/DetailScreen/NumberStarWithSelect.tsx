import React, { useEffect } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import DynamicIcon from 'components/UI/Icon/DynamicIcon';

interface NumberStartProps {
    number?: number | undefined;
    size?: number;
    selectStar: (number:number) => void;
}

const NumberStartWithSelect: React.FC<NumberStartProps> = ({ number,size,selectStar }) => {
    useEffect(() => {
        renderStars(number ?? 0);
    },[number]);
    const renderStars = (number:number) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            const starIcon = i <= (number ?? 0) ? 
            <Pressable onPress={()=> selectStar(i)} key={i}>
                <DynamicIcon key={i} color="#F77A55" library='AntDesign' name='star' size={size ? size: 20} />  
            </Pressable>:
            <Pressable onPress={()=>selectStar(i)} key={i}>
                <DynamicIcon key={i} color="#F77A55" library='AntDesign' name='staro' size={size ? size: 20} />
            </Pressable>
            stars.push(starIcon);
        }
        return stars;
    };

    return (
        <View style={styles.container}>
            {renderStars(number ?? 0)}
        </View>
    );
};

export default NumberStartWithSelect;


const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        columnGap: 8
    }
})