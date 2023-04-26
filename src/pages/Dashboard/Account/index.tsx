import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Actionsheet,
  Box,
  Button,
  Card,
  Center,
  Container,
  Heading,
  ScrollView,
  SectionList,
  Text,
  VStack,
  View,
  useDisclose,
  useTheme,
} from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import FooterComponent from "../../../components/Footer";
import { HomeScreenNavigationProp } from "../../../routes/types";
import { StyleSheet, TouchableOpacity } from "react-native";

function AccountPages() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { colors } = useTheme();
  const { isOpen, onOpen, onClose } = useDisclose();

  const data = [
    {
      title: "Cyan",
      data: ["cyan.100", "cyan.200", "cyan.300", "cyan.400", "cyan.500"],
    },
    {
      title: "Yellow",
      data: [
        "yellow.100",
        "yellow.200",
        "yellow.300",
        "yellow.400",
        "yellow.500",
      ],
    },
    {
      title: "Violet",
      data: [
        "violet.100",
        "violet.200",
        "violet.300",
        "violet.400",
        "violet.500",
      ],
    },
  ];

  return (
    <>
      <Center>
        <Card style={styles.card}>
          <Box style={styles.cardBox}>
            <Text>Fulano</Text>
            <Button onPress={onOpen}>Menu</Button>
          </Box>
        </Card>
        <Actionsheet isOpen={isOpen} onClose={onClose}>
          <Actionsheet.Content>
            <Box w="100%" h={60} px={4} justifyContent="center">
              <Text
                fontSize="16"
                color="gray.500"
                _dark={{
                  color: "gray.300",
                }}
              >
                Albums
              </Text>
            </Box>
            <Actionsheet.Item>Delete</Actionsheet.Item>
            <Actionsheet.Item isDisabled>Share</Actionsheet.Item>
            <Actionsheet.Item>Play</Actionsheet.Item>
            <Actionsheet.Item>Favourite</Actionsheet.Item>
            <Actionsheet.Item>Cancel</Actionsheet.Item>
          </Actionsheet.Content>
        </Actionsheet>
      </Center>
      <ScrollView>
        <Center mt="3" mb="4">
          <Heading fontSize="xl">Cyan</Heading>
        </Center>
        <VStack flex="1">
          {Object.keys(colors.cyan).map((key, index) => {
            if (index >= 1 && index <= 5)
              return (
                <Center key={index} py="4" bg={`cyan.${key}`}>
                  {key}
                </Center>
              );
          })}
        </VStack>
        <Center mt="8" mb="4">
          <Heading fontSize="xl">Yellow</Heading>
        </Center>
        <VStack flex="1">
          {Object.keys(colors.cyan).map((key, index) => {
            if (index >= 1 && index <= 5)
              return (
                <Center key={index} py="4" bg={`yellow.${key}`}>
                  {key}
                </Center>
              );
          })}
        </VStack>
        <Center mt="8" mb="4">
          <Heading fontSize="xl"> Violet</Heading>
        </Center>
        <VStack flex="1">
          {Object.keys(colors.violet).map((key, index) => {
            if (index >= 1 && index <= 5)
              return (
                <Center key={index} py="4" bg={`violet.${key}`}>
                  {key}
                </Center>
              );
          })}
        </VStack>
        <View>
          <Button>Sair</Button>
        </View>
      </ScrollView>
    </>
  );
}

export default AccountPages;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a4454353",
  },
  card: {
    display: 'flex',
    width: "100%",
  },
  cardBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    // position: "absolute",
    backgroundColor: "#38a",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
});
