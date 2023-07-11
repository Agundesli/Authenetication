import React from "react";
import {Text,TouchableOpacity} from 'react-native';
import styles from './CustomButtonStyle';

const CustomButton = ({onPress, text='', type='PRIMARY', bgColor='', fgColor=''})=>{
    return(

    <TouchableOpacity 
        onPress={onPress}
        style={[
            styles.container, 
            styles[`container_${type}`], 
            bgColor ? {backgroundColor: bgColor} : {},
        ]} >
        <Text 
            style={[
                styles.text, 
                styles[`text_${type}`],
                fgColor ? {color: fgColor} : {},
            ]}>
            {text}
        </Text>
    </TouchableOpacity>

    );
};

export default CustomButton;