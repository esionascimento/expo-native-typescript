import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Center,
  Container,
  HStack,
  Heading,
  Icon,
  Pressable,
  ScrollView,
  Text,
  View,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import FooterComponent from "../../components/Footer";

function DashboardPages() {

  return (
    <View flex={1}>
      <ScrollView>
        <Container>
          <Heading>
            Dashboard Home
            {/* <Text color="emerald.500"> React Ecosystem</Text> */}
          </Heading>
          <Text mt="3" fontWeight="medium">
            NativeBase is a simple, modular and accessible component library
            that gives you building blocks to build you React applications.
          </Text>
        </Container>
      </ScrollView>
     {/* <FooterComponent /> */}
    </View>
  );
}

export default DashboardPages;
