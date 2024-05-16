import { ImageSourcePropType } from "react-native";

export interface slideProps{
    id: number,
    imageUrl?: ImageSourcePropType,
    title?: string,
    descripion?: string,
}
export const slideFinish:slideProps= 
    {
        id: 1,
        imageUrl:require("../../../assets/Illustration/slide4.png"),
        descripion:" Lorem ipsum dolor sit amet la maryame dor sut colondeum.",
        title:" You are ready to go! "
    }