import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import CustomInput from '../../component/CustomInput';
import CustomButton from "../../component/CustomButton";
import styles from './ForgotPasswordScreenStyle';
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";

const ForgotPasswordScreen = () => {
    const { control, handleSubmit } = useForm();
    const navigation = useNavigation();

    const onSendPress = () => {
        navigation.navigate('NewPassword');
    };

    const onSignInPress = () => {
        navigation.navigate('SignIn');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <SafeAreaView style={styles.container}>

                <Text style={styles.title}>Reset your password</Text>

                <CustomInput
                    name='username'
                    control={control}
                    placeholder={"Enter Your Username"}
                    type="TERTIARY"
                    secureTextEntry={false}
                    rules={{
                        require:'Username is required',
                    }}
                />

                <CustomButton onPress={handleSubmit(onSendPress)} text="Send" />

                <CustomButton
                    onPress={onSignInPress}
                    text="Back to Sign in"
                    type="TERTIARY"
                />
            </SafeAreaView>
        </ScrollView>
    );
};

export default ForgotPasswordScreen;