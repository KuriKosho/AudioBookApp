import React from "react";
import {
  FontAwesome6,
  FontAwesome,
  Ionicons,
  MaterialIcons,
  Entypo,
  AntDesign,
  Feather
} from "@expo/vector-icons";

interface IconProps {
  library: string;
  name: string;
  size: number;
  color: string;
}

const DynamicIcon: React.FC<IconProps> = ({ library, name, size, color }) => {
  let IconComponent: any;

  // Choose the appropriate icon component based on the library prop
  switch (library) {
    case "FontAwesome6":
      IconComponent = FontAwesome6;
      break;
    case "Ionicons":
      IconComponent = Ionicons;
      break;
    case "MaterialIcons":
      IconComponent = MaterialIcons;
      break;
    case "Entypo":
      IconComponent = Entypo;
      break;
    case "AntDesign":
      IconComponent = AntDesign;
      break;
    case "Feather":
      IconComponent = Feather;
      break;
    case "FontAwesome":
      IconComponent = FontAwesome;
      break;
    default:
      // Default to FontAwesome6 if library prop is not provided or invalid
      IconComponent = FontAwesome6;
  }
  // Return the JSX element of the chosen icon component
  return <IconComponent name={name} size={size} color={color} />;
};

export default DynamicIcon;
