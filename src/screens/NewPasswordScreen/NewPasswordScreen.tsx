import React, { useState } from "react";
import { ScrollView, SafeAreaView, Text } from "react-native";
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";
import styles from './NewPasswordScreenStyle';
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const NewPasswordScreen = () => {
    const { control, handleSubmit } = useForm();
    const navigation = useNavigation();
    const onSubmitPressed = () => {
        navigation.navigate('Home');
    };
    
    const onSignInPreses = () => {
        navigation.navigate('SignIn')
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Reset your password</Text>

                <CustomInput
                    name="code"
                    control={control}
                    placeholder="Code"
                    type="TERTIARY"
                    secureTextEntry={false}
                    rules={{required: 'Username is required'}}
                />
                <CustomInput
                    name="password"
                    control={control}
                    placeholder="Enter your new password"
                    type="TERTIARY"
                    rules={{required: 'Code is required'}}
                />

                <CustomButton
                    text="Submit"
                    onPress={handleSubmit(onSubmitPressed)}
                />

                <CustomButton
                    text="Back to Sign in"
                    onPress={onSignInPreses}
                    type="TERTIARY"
                />

            </SafeAreaView>

        </ScrollView>
    );
};

export default NewPasswordScreen;