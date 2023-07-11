import React, { useState } from "react";
import { SafeAreaView, Text, ScrollView, Alert } from "react-native";
import styles from './ConfirmEmailScreenStyle';
import CustomInput from "../../component/CustomInput";
import CustomButton from "../../component/CustomButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import {Auth} from 'aws-amplify';

const ConfirmEmailScreen = () => {
    const route = useRoute();
    const { control, handleSubmit } = useForm({
        defaultValues: {
            username: route?.params?.username
        },
    });
    const navigation = useNavigation();
    const onConfirmPressed = async data => {
        try {
            const response =await Auth.confirmSignUp(data.username, data.code);
            console.log(response);
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert('Oppps', error.message);
        }
        navigation.navigate('Home');
    };

    const onSignInPress = () => {
        console.warn('Sign in')
        navigation.navigate('SignIn');
    };
    const onResendPress = () => {
        console.warn('onResendPress')
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <SafeAreaView style={styles.container}>

                <Text style={styles.title}> Confirm Your Email</Text>

                <CustomInput
                    name="username"
                    control={control}
                    placeholder={"Username"}
                    secureTextEntry={false}
                    type='TERTIARY'
                    rules={{
                        required: 'Username code is required'
                    }}
                />

                <CustomInput
                    name="code"
                    control={control}
                    placeholder={"Enter your confirmation code"}
                    secureTextEntry={false}
                    type='TERTIARY'
                    rules={{
                        required: 'Confirmation code is required',
                    }}
                />

                <CustomButton
                    text="Confirm"
                    onPress={handleSubmit(onConfirmPressed)}
                />

                <CustomButton
                    text="Resend Code"
                    onPress={onResendPress}
                    type="SECONDARY"
                />

                <CustomButton
                    text="Back to sign in"
                    onPress={onSignInPress}
                    type="TERTIARY"
                />

            </SafeAreaView>

        </ScrollView>
    );
};

export default ConfirmEmailScreen;