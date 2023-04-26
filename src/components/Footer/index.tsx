import { memo, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Center, HStack, Icon, Pressable, Text, View } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { HomeScreenNavigationProp } from "../../routes/types";

function FooterComponent() {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [selected, setSelected] = useState(0);

  return (
    <View backgroundColor={"#333"}>
      <Box bg="amber.900" backgroundColor={"#333"}>
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable
            // cursor="pointer"
            opacity={selected === 0 ? 1 : 0.5}
            py="3"
            flex={1}
            onPress={() => {
              setSelected(0);
              navigation.navigate("Home");
            }}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 0 ? "home" : "home-outline"}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable
            // cursor="pointer"
            opacity={selected === 1 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => setSelected(1)}
          >
            <Center>
              <Icon
                mb="1"
                as={<MaterialIcons name="search" />}
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Procurar
              </Text>
            </Center>
          </Pressable>
          <Pressable
            // cursor="pointer"
            opacity={selected === 2 ? 1 : 0.6}
            py="2"
            flex={1}
            onPress={() => setSelected(2)}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 2 ? "cart" : "cart-outline"}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Carrinho
              </Text>
            </Center>
          </Pressable>
          <Pressable
            // cursor="pointer"
            opacity={selected === 3 ? 1 : 0.5}
            py="2"
            flex={1}
            onPress={() => {
              setSelected(3);
              navigation.push("Account");
            }}
          >
            <Center>
              <Icon
                mb="1"
                as={
                  <MaterialCommunityIcons
                    name={selected === 3 ? "account" : "account-outline"}
                  />
                }
                color="white"
                size="sm"
              />
              <Text color="white" fontSize="12">
                Conta
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Box>
    </View>
  );
}

export default memo(FooterComponent);
