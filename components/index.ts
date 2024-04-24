import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export interface IComponentMap {
    [x: string]: React.ElementType
}

export const component_map: IComponentMap = {
    "view": View,
    "text": Text,
    "button": TouchableOpacity,
    "input": TextInput,
}