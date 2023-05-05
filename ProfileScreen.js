import React from "react";
import { Button, Text, View } from "react-native";
import { CommonActions } from "@react-navigation/native";

const ProfileScreen = () => {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button
        title="Go to Jane's profile"
        onPress={() => CommonActions.navigate("Home")}
      />
    </View>
  );
};

export default ProfileScreen;
