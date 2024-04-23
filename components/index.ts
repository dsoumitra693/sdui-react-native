import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export interface IComponentMap {
    [x: string]: React.ElementType
}

export const component_map: IComponentMap = {
    "default_view": View,
    "default_text": Text,
    "default_button": TouchableOpacity,
    "default_input": TextInput,
}