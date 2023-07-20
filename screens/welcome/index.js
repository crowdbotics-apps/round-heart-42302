import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from "react";
import { View, Image, Text, ScrollView, SafeAreaView } from "react-native";
import { styles } from "./styles";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.group} />
        <View style={styles.group}>
          <Pressable onPress={() => {
          navigation.navigate("aboutTheApp");
        }}><Image style={styles.logo} source={require("./logo.png")} /></Pressable>
          <Text style={styles.text}>
            Let's build something amazing together!
          </Text>
        </View>
        <Text style={styles.footer}>Made with ❤️ by Crowdbotics</Text>
      </ScrollView>
    </SafeAreaView>;
};

export default WelcomeScreen;