import { shortenPrincipalId } from "@/utils/shortenPrincipalId";
import {
  Button,
  Flex,
  Icon,
  Image,
  Link,
  Menu,
  Portal,
  Separator,
  Text,
  Clipboard,
} from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import SolanaLogo from "@/assets/solIco.svg";
import { useSolBalance } from "@/hooks/useBalance";
import { PiUserList } from "react-icons/pi";
import { Link as TanstackLink } from "@tanstack/react-router";

import { RiShutDownLine } from "react-icons/ri";
import { RxReload } from "react-icons/rx";
import { keyframes } from "@emotion/react";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const UserProfilLegacy: React.FC = () => {
  const { publicKey } = useWallet();
  const { data } = useSolBalance();

  return (
    <Flex
      border={"solid 1px"}
      borderColor={"#2f3329"}
      p={2}
      px={5}
      fontSize={"sm"}
      borderRadius={10}
      alignItems={"center"}
      justifyContent={"center"}
      gap={2}
      bg="#6c913c1a"
      cursor={"pointer"}
      transition={"all ease .2s"}
      _hover={{
        bg: "#41592254",
      }}
    >
      <Flex>
        <Image boxSize={"15px"} src={SolanaLogo} alt={"Solana"} />
      </Flex>
      <Flex>{(data?.formatted ?? 0).toFixed(2)} SOL</Flex>
      <Flex w="1px" bg={"brand.primary"} h="100%" opacity={0.2} />
      <Flex>{shortenPrincipalId(publicKey?.toString())}</Flex>
    </Flex>
  );
};

export const UserProfile: React.FC = () => {
  const { publicKey, disconnect } = useWallet();
  const { data, isFetching, isLoading, refetch } = useSolBalance();
  const showSpinner = isFetching || isLoading;

  return (
    <Menu.Root positioning={{ placement: "bottom-end" }} closeOnSelect={true}>
      <Menu.Trigger asChild>
        <Button
          className="grdnt-b-1 animated-sm"
          borderRadius={12}
          bg={"transparent"}
          color="#fff"
          p={0}
        >
          <Flex
            border={"solid 1px"}
            borderColor={"#2f3329"}
            p={2}
            px={3}
            fontSize={"sm"}
            borderRadius={10}
            alignItems={"center"}
            justifyContent={"center"}
            gap={2}
            bg="#6c913c1a"
            cursor={"pointer"}
            transition={"all ease .2s"}
            _hover={{
              bg: "#41592254",
            }}
          >
            <Flex>
              <Image boxSize={"15px"} src={SolanaLogo} alt={"Solana"} />
            </Flex>
            <Flex>{(data?.formatted ?? 0).toFixed(2)} SOL</Flex>
            <Flex w="1px" bg={"brand.primary"} h="100%" opacity={0.2} />
            <Flex>{shortenPrincipalId(publicKey?.toString())}</Flex>
          </Flex>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content
            p={0}
            bg="rgba(0,0,0,.5)"
            backdropFilter={"blur(15px)"}
            borderRadius={"lg"}
            _hover={{
              bg: "rgba(0,0,0,.6)",
            }}
          >
            <Menu.Item
              value="0"
              cursor={"default"}
              closeOnSelect={false}
              bg="transparent !important"
            >
              <Flex
                w={"100%"}
                direction={"column"}
                minWidth={"200px"}
                justifyContent={"center"}
              >
                <Flex
                  w={"100%"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  py={2}
                >
                  <Text mt={2} fontSize={16} color={"white"}>
                    {data?.formatted?.toFixed(2)} SOL
                  </Text>

                  <Icon
                    color={"white"}
                    as={RxReload}
                    fontSize={15}
                    mt={"9px"}
                    ml={2}
                    cursor={"pointer"}
                    onClick={() => refetch()}
                    animation={showSpinner ? `${spin} 1s linear infinite` : ""}
                  />
                </Flex>

                <Flex
                  mt={2}
                  gap={0}
                  color={"white"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Clipboard.Root
                    value={publicKey?.toString()}
                    ml={2}
                    outline={"none"}
                  >
                    <Clipboard.Trigger>
                      <Flex
                        direction={"row"}
                        gap={2}
                        alignItems={"center"}
                        cursor={"pointer"}
                        _hover={{
                          opacity: 0.5,
                        }}
                      >
                        <Text>{shortenPrincipalId(publicKey?.toString())}</Text>
                        <Clipboard.Indicator></Clipboard.Indicator>
                      </Flex>
                    </Clipboard.Trigger>
                  </Clipboard.Root>
                </Flex>
              </Flex>
            </Menu.Item>
            <Menu.Item value="1" py={2} bg={"transparent"}>
              <Separator
                w={"100%"}
                borderColor={"brand.primary"}
                opacity={0.1}
                h={"1px"}
              />
            </Menu.Item>
            <Menu.Item
              value="2"
              bg="transparent !important"
              _hover={{
                bg: "rgba(0,0,0,.3)",
                opacity: 0.8,
              }}
              px={5}
            >
              <Flex w="full" alignItems={"center"} justifyContent={"center"}>
                <Link
                  textDecoration={"none"}
                  href={"/profile"}
                  as={TanstackLink}
                  color={"white"}
                  py={3}
                >
                  <Icon as={PiUserList} fontSize={18} />
                  <Text>Profile</Text>
                </Link>
              </Flex>
            </Menu.Item>

            <Menu.Item value="6" py={2} bg={"transparent"}>
              <Separator
                w={"100%"}
                borderColor={"brand.primary"}
                opacity={0.1}
                h={"1px"}
              />
            </Menu.Item>
            <Menu.Item
              value="1"
              px={0}
              py={0}
              background={"transparent !important"}
              w="100%"
            >
              <Button
                bg={"transparent"}
                px={6}
                justifyContent={"center"}
                color={"brand.red.100"}
                py={4}
                h={"auto"}
                w="full"
                _hover={{ color: "white", bg: "brand.red.100" }}
                alignItems={"center"}
                onClick={() => disconnect()}
              >
                <Icon as={RiShutDownLine} />
                Disconnect
              </Button>
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
