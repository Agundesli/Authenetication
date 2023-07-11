import React from "react";
import { View, TextInput, Text } from 'react-native';
import styles from './CustomInputStyle';
import { Controller } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";

const CustomInput = ({
    control,
    name = '',
    rules = {},
    placeholder = '',
    secureTextEntry = true,
    type = 'PRIMARY'
}) => {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
                <SafeAreaView style={styles.index}>
                    <View
                        style={[
                            styles.container,
                            { borderColor: error ? 'red' : '#e8e8e8' },
                            styles[`container_${type}`],
                        ]} >
                        <TextInput
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder={placeholder}
                            style={styles.input}
                            secureTextEntry={secureTextEntry}
                        />
                    </View>
                    {error && (
                        <Text style={styles.error}>{error.message|| 'Error'}</Text>
                    )}
                    
                </SafeAreaView>
            )}
        />
    );
};

export default CustomInput;