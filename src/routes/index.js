import React, { useContext, useEffect, useState } from "react";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { AuthContext } from "../contexts/auth.js";
import { ActivityIndicator, View } from "react-native";

function Routes() {
  const { userAuth, loading } = useContext(AuthContext); // Use 'useContext' para obter os valores do contexto
  console.log(userAuth);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F0F4FF',
        }}
      >
        <ActivityIndicator size="large" color="#131313" />
      </View>
    );
  }

  return  <AuthRoutes />;

}

export default Routes;
