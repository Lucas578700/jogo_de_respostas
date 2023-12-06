import React, { createContext, useState, useEffect } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ref, push } from 'firebase/database';
import { db } from '../firebase/firebaseConnection';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('@user');
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(true);
      }
      setLoading(false);
    }
    setLoading(true);
    loadStorage();
  }, [])

  async function signUp(data){
    await push(ref(db, "/users"), data)
    .then( (value) => {
      setUser(data);
      AsyncStorage.setItem('@user', JSON.stringify(data));
    })
    .catch( (error) => {        
        Alert.alert('Erro ao entrar!');
        setLoadingAuth(false);
        return;
    })
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signUp, loadingAuth, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;