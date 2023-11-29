import React, { useContext, useEffect, useState } from "react";
//import { Controller } from "react-hook-form";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { useAuthContext } from "../contexts/authContext";
import { ActivityIndicator, View } from "react-native";

function Routes() {
  const { userAuth, loading } = useAuthContext();
  console.log(userAuth)

  if(loading){
    return(
      <View
      style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F4FF'
      }}>
        <ActivityIndicator size="large" color="#131313" />
      </View>
    )
  }

  return userAuth !== null ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
