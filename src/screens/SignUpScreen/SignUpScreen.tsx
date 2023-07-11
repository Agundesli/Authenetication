import React, { useState } from 'react';
import { SafeAreaView, Text, ScrollView, Alert } from 'react-native';
import styles from './SignUpScreenStyle';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
import SocialSignInButton from '../../component/SocialSignInButton';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  const navigation = useNavigation();
  const { 
    control, 
    handleSubmit, 
    watch
  } = useForm();

  const pwd= watch('password');
  const onRegisterPressed = async data => {
    const {username, password, email, name} =data;
    
    try {
      const response = await Auth.signUp({
        username,
        password,
        attributes:{email,name},
      });
      console.log(response);
      navigation.navigate('ConfirmEmail', {username});

    } catch (error) {
      Alert.alert('Opss', error.message)
    }
  }

  const onSignInPressed = () => {
    navigation.navigate('SignIn')
  }
  const onTermOfUsePressed = () => {
    console.warn("onTermOfUsePressed")
  }
  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed")
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Create an Account</Text>

        <CustomInput
          name='Name'
          control={control}
          placeholder={"Name"}
          secureTextEntry={false}
          type='TERTIARY'
          rules={{
            required:'Name is required',
            minLength: {
              value: 3,
              message: 'Name should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Name should be max 24 characters long',
            },
          }}
        />

        <CustomInput
          name='username'
          control={control}
          placeholder={"Username"}
          secureTextEntry={false}
          type='TERTIARY'
          rules={{
            required:'Username is required',
            minLength: {
              value: 3,
              message: 'Name should be at least 3 characters long',
            },
            maxLength: {
              value: 24,
              message: 'Name should be max 24 characters long',
            },
          }}
        />

        <CustomInput
          name='email'
          control={control}
          placeholder={"Email"}
          secureTextEntry={false}
          type='TERTIARY'
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, messge: 'Email is Valid'},
          }}
        />

        <CustomInput
          name='password'
          control={control}
          placeholder={"Password"}
          type='TERTIARY'
          rules={{
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password should be at least 8 characters long',
            },
          }}
        />

        <CustomInput
          name='repeatPassword'
          control={control}
          placeholder={"Repeat Password"}
          type='TERTIARY'
          rules={{
            validate: value => value === pwd || 'Password do not match',
          }}
        />

        <CustomButton
          onPress={handleSubmit(onRegisterPressed)}
          text="Register"
        />

        <Text
          style={styles.text}>By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermOfUsePressed}>Terms of Use</Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPressed}>Privacy Policy</Text>
        </Text>

        <SocialSignInButton />

        <CustomButton
          onPress={onSignInPressed}
          text="Have an account? Sign in"
          type='TERTIARY'
        />
      </SafeAreaView>
    </ScrollView>
  )
}

export default SignUpScreen;