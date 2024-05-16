import { ImageSourcePropType } from "react-native";

export interface slideProps{
    id: number,
    imageUrl?: ImageSourcePropType,
    title?: string,
    descripion?: string,
}
export const slide:slideProps[] = [
    {
        id: 1,
        imageUrl:require("../../../assets/Illustration/slide1.png"),
        descripion:" Lorem ipsum dolor sit amet la maryame dor sut colondeum.",
        title:" Best choice to read Lorem "
    },
    {
        id: 2,
        imageUrl:require("../../../assets/Illustration/slide2.png"),
        descripion:"Offline book , advantage",
        title:"Lorem ipsum dolor sit amet la maryame dor sut colondeum."
    },
    {
        id: 3,
        imageUrl:require("../../../assets/Illustration/slide3.png"),
        descripion:"Let's go Lorem ipsum dolor sit amet la maryame dor sut colondeum.",
        title:"Open you audio book world ! "
    },
]