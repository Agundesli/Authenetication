import React from "react";
import {View,Text, SafeAreaView} from 'react-native';
import CustomButton from "../CustomButton/CustomButton";

const SocialSignInButton = ()=>{

    const onSignInFacebook = () =>{
        console.warn("onSıgnInFacebook")
      };
    
      const onSignInGoogle = () =>{
        console.warn("onSignInGoogle")
      };
    
      const OnSignInApple = () =>{
        console.warn("OnSignInApple")
      };
      return(
        <>

            <CustomButton
                onPress={onSignInFacebook}
                text="Sign in with Facebook"
                bgColor="#E7EAF4"
                fgColor="#4765A9"
            />
  
            <CustomButton
                onPress={onSignInGoogle}
                text="Sign in with Google"
                bgColor="#FAE9EA"
                fgColor="#DD4D44"
            />
  
            <CustomButton
                onPress={OnSignInApple}
                text="Sign in with Apple"
                bgColor="#e3e3e3"
                fgColor="#363636"
            />
            
        </>
      )
}

export default SocialSignInButton;
