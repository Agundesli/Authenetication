import React, { useState } from 'react';
import { SafeAreaView, Image, ScrollView, TextInput, Alert } from 'react-native';
import styles from './SignInScreenStyle';
import Logo from '../../../assets/images/bb.png'
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
import SocialSignInScreen from '../../component/SocialSignInButton'
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const SignInScreen = () => {
  const navigation = useNavigation();
  const [loading,setLoading]=useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSignInPressed = async (data) => {
    if(loading){
      return;
    }
    setLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
      navigation.navigate('Home');
    } catch (ex) {
      Alert.alert(ex.message);
    }
    setLoading(false);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const OnSignUpPress = () => {
    navigation.navigate('SignUp')
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <Image
          source={Logo} style={styles.logo}
          resizeMode="contain"
        />
        <CustomInput
          control={control}
          name='username'
          placeholder={"Username"}
          secureTextEntry={false}
          rules={{ required: 'Username is required' }}
        />

        <CustomInput
          control={control}
          name='password'
          placeholder={"Password"}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long',
            }
          }}
        />

        <CustomButton
          onPress={handleSubmit(onSignInPressed)}
          text={loading ? 'Loading...' : 'Sign In'}
        />

        <CustomButton
          onPress={onForgotPasswordPressed}
          text="Forgot Password?"
          type='TERTIARY'
        />

        <SocialSignInScreen />

        <CustomButton
          onPress={OnSignUpPress}
          text="Don't have an account? Create one"
          type='TERTIARY'
        />
      </SafeAreaView>
    </ScrollView>
  )
}

export default SignInScreen;