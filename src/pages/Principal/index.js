import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, Alert, ActivityIndicator } from "react-native";
import { SafeAreaView, Image, View, ButtonContainer } from "./style";

export default function Principal({ navigation }) {
  const [banners, setBanner] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [restaurantes, setRestaurantes] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    async function buscaDados() {
      try {
        const response = await fetch(
          "http://my-json-server.typicode.com/pablohdev/app-ifood-clone/db"
        );
        const data = await response.json();

        setLoaded(true);

        setBanner(data.banner_principal);
        setCategorias(data.categorias);
        setRestaurantes(data.restaurantes);
      } catch (e) {
        Alert.alert("Erro ao consultar" + e);
      }
    }

    buscaDados();
  }, []);

  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <Text>Principal</Text>
      </SafeAreaView>
    </>
  );
}
