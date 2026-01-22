// import {
//   Button,
//   Container,
//   Drawer,
//   Flex,
//   Icon,
//   Image,
//   Menu,
//   Portal,
//   Separator,
//   Stack,
//   Text,
// } from "@chakra-ui/react";
// import { LogoBox } from "./logo";
// import { AppData, Env } from "@/constant";
// import { Link, useLocation } from "react-router-dom";
// import { useEffect, useMemo, useState } from "react";
// import { usePrivy } from "@privy-io/react-auth";
// import {
//   copyToClipboard,
//   formatAmount,
//   getRandomInt,
//   shortenAddress,
// } from "@/utils";
// import { SMIcon } from "./smIcon";
// import { toast } from "react-toastify";
// import { useWalletStore } from "@/store";
// import { useWalletBalance } from "@/hooks/useWalletInit";
// import { Tooltip } from "./toolTip";
// import { DepositDialog } from "../dialog";
// import { InfoTip } from "./infoTip";
// import { appStyles } from "@/data";
// import { BiTransfer } from "react-icons/bi";
// import { IoMdMenu } from "react-icons/io";
// import { PiUserList } from "react-icons/pi";

// const NavMenu: React.FC = () => {
//   const MenuList = AppData.NAV_ITEMS;
//   const [activeMenu, setActiveMenu] = useState<string>("");
//   const location = useLocation();
//   useEffect(() => {
//     setActiveMenu(location.pathname);
//   }, [location.pathname]);
//   return (
//     <>
//       <Stack
//         direction="row"
//         gap={10}
//         my={4}
//         display={{ base: "none", lg: "flex" }}
//         className="siteMenu"
//       >
//         {MenuList.map((menu, tabIndex) => (
//           <Link
//             to={menu.url}
//             className={
//               "animated-sm " +
//               menu?.id +
//               " " +
//               (activeMenu == menu.url ? "ln-active" : "ln-d")
//             }
//             key={tabIndex}
//             target={menu.external ? "_blank" : "_self"}
//           >
//             <Text fontSize={16} fontWeight={300}>
//               {menu.label}
//             </Text>
//           </Link>
//         ))}
//       </Stack>
//     </>
//   );
// };

// type LoggedInMenuProp = {
//   depositTrigger: Function;
//   swapTrigger?: Function;
// };
// const LoggedInMenu: React.FC<LoggedInMenuProp> = ({ depositTrigger }) => {
//   const { logout } = usePrivy();
//   const { address } = useWalletStore();
//   const [refId, setRefId] = useState(0);
//   const { balance, loading } = useWalletBalance(refId);

//   const [sa1, sa2] = useMemo(() => {
//     return [shortenAddress(address, 2, 2), shortenAddress(address)];
//   }, [address]);

//   const copyClipBoard = () => {
//     copyToClipboard(address);
//     toast("Wallet address copied...", { autoClose: 1000 });
//   };
//   const refreshBal = () => {
//     setRefId(getRandomInt(1, 100));
//   };
//   const handleLogout = async () => {
//     await logout();
//   };

//   return (
//     <Menu.Root positioning={{ placement: "bottom-end" }} closeOnSelect={true}>
//       <Menu.Trigger asChild>
//         <Button
//           className="grdnt-b-1 animated-sm"
//           borderRadius={12}
//           bg={"transparent"}
//         >
//           <Flex w={"100%"} alignItems={"center"} gap={2}>
//             <Image w={"12px"} src={"/icons/solIco.svg"} />
//             <Text>
//               {balance.toFixed(2)}{" "}
//               <Text fontSize={"12px"} as={"span"}>
//                 SOL
//               </Text>
//             </Text>
//             <Text className="hs1">| </Text>
//             <Image w={"16px"} src={"/icons/solmail.png"} />
//             <Text fontSize="sm" fontWeight="medium">
//               {sa1}
//             </Text>
//           </Flex>
//         </Button>
//       </Menu.Trigger>
//       <Portal>
//         <Menu.Positioner>
//           <Menu.Content {...appStyles.dropDownStyle.base} p={0}>
//             <Menu.Item
//               value="0"
//               {...appStyles.dropDownStyle.menuItem}
//               cursor={"default"}
//               closeOnSelect={false}
//             >
//               <Flex
//                 w={"100%"}
//                 direction={"column"}
//                 minWidth={"200px"}
//                 justifyContent={"center"}
//               >
//                 <Flex>
//                   <Text
//                     color={"whiteAlpha.800"}
//                     w={"100%"}
//                     textAlign={"center"}
//                   >
//                     SolMail Inbox Account
//                   </Text>
//                   <InfoTip
//                     positioning={{ placement: "bottom-end" }}
//                     content="Your SolMail InBox account is non-custodial wallet powered by Privy, with the option to export your private key."
//                   />
//                 </Flex>
//                 <Flex
//                   w={"100%"}
//                   justifyContent={"center"}
//                   alignItems={"center"}
//                   py={2}
//                 >
//                   <Tooltip
//                     content={balance + " " + Env.defaultToken}
//                     positioning={{ placement: "top" }}
//                   >
//                     <Text mt={2} fontSize={16} color={"white"}>
//                       {formatAmount(balance)} {Env.defaultToken}
//                     </Text>
//                   </Tooltip>
//                   <Button
//                     h={"auto"}
//                     onClick={refreshBal}
//                     outline={"none !mportant"}
//                     bg={"transparent"}
//                     pt={1}
//                   >
//                     <Flex className={loading ? "spin-box hs1" : ""}>
//                       <SMIcon
//                         fontSize={18}
//                         iconId="refresh"
//                         _hover={{ color: "brand.purple.100" }}
//                       />
//                     </Flex>
//                   </Button>
//                 </Flex>
//                 <Flex mt={2} w={"100%"} justifyContent={"center"}>
//                   <Button
//                     flex={1}
//                     display={"inline-flex"}
//                     onClick={() => depositTrigger(true)}
//                     className="grdnt-b-1"
//                     borderRadius={10}
//                     bg={"brand.blue.120"}
//                     _hover={{ color: "brand.green.100" }}
//                   >
//                     Deposit
//                   </Button>
//                   {/* <Button flex={1} display={'inline-flex'} onClick={() => swapTrigger?swapTrigger(true):null} className="grdnt-b-1" borderRadius={10} bg={'brand.blue.120'} _hover={{color: 'brand.green.100'}}>
//                     Swap
//                   </Button> */}
//                 </Flex>
//                 <Flex
//                   mt={2}
//                   gap={0}
//                   color={"white"}
//                   justifyContent={"center"}
//                   alignItems={"center"}
//                   _hover={{ color: "brand.purple.100" }}
//                 >
//                   <Text>{sa2}</Text>
//                   <Button
//                     outline={"none"}
//                     bg={"transparent"}
//                     _hover={{ color: "brand.purple.100" }}
//                     onClick={copyClipBoard}
//                   >
//                     <SMIcon iconId="copy-c2" />
//                   </Button>
//                 </Flex>
//               </Flex>
//             </Menu.Item>
//             <Menu.Item value="1" py={2} bg={"transparent"}>
//               <Separator w={"100%"} borderColor={"brand.blue.120"} h={"1px"} />
//             </Menu.Item>
//             <Menu.Item value="2" {...appStyles.dropDownStyle.menuItem}>
//               <Flex {...appStyles.dropDownStyle.menuSub}>
//                 <Icon as={PiUserList} fontSize={18} />
//                 <Link to={"/profile"}>
//                   <Text>My SolMail Ids</Text>
//                 </Link>
//               </Flex>
//             </Menu.Item>
//             <Menu.Item value="3" {...appStyles.dropDownStyle.menuItem}>
//               <Flex {...appStyles.dropDownStyle.menuSub}>
//                 <SMIcon iconId="bids" fontSize={"18px"} />
//                 <Link to={"/profile/bids"}>
//                   <Text>My Bids</Text>
//                 </Link>
//               </Flex>
//             </Menu.Item>
//             <Menu.Item value="4" {...appStyles.dropDownStyle.menuItem}>
//               <Flex {...appStyles.dropDownStyle.menuSub}>
//                 <SMIcon iconId="fav" fontSize={"16px"} />
//                 <Link to={"/profile/favorites"}>
//                   <Text>My Favorites</Text>
//                 </Link>
//               </Flex>
//             </Menu.Item>

//             <Menu.Item value="5" {...appStyles.dropDownStyle.menuItem}>
//               <Flex {...appStyles.dropDownStyle.menuSub}>
//                 <Icon as={BiTransfer} fontSize={20} />
//                 <Link to={"/profile/transfer"}>
//                   <Text>Withdraw SOL</Text>
//                 </Link>
//               </Flex>
//             </Menu.Item>

//             <Menu.Item value="6" py={2} bg={"transparent"}>
//               <Separator w={"100%"} borderColor={"brand.blue.120"} h={"1px"} />
//             </Menu.Item>
//             <Menu.Item
//               value="1"
//               px={0}
//               py={0}
//               background={"transparent !important"}
//             >
//               <Button
//                 onClick={handleLogout}
//                 bg={"transparent"}
//                 px={6}
//                 justifyContent={"left"}
//                 color={"brand.red.100"}
//                 {...appStyles.dropDownStyle.menuSub}
//                 py={4}
//                 h={"auto"}
//                 _hover={{ color: "white", bg: "brand.red.100" }}
//               >
//                 <SMIcon iconId="power" fontSize={"20px"} />
//                 Disconnect
//               </Button>
//             </Menu.Item>
//           </Menu.Content>
//         </Menu.Positioner>
//       </Portal>
//     </Menu.Root>
//   );
// };

// const MobileNav = ({
//   onOpenChange,
//   open,
// }: {
//   onOpenChange: Function;
//   open: boolean;
// }) => {
//   const MenuList = AppData.NAV_ITEMS;
//   const [activeMenu, setActiveMenu] = useState<string>("");
//   const location = useLocation();
//   useEffect(() => {
//     onOpenChange(false);
//     setActiveMenu(location.pathname);
//   }, [location.pathname]);
//   return (
//     <Drawer.Root
//       open={open}
//       onOpenChange={(e) => onOpenChange(e.open)}
//       placement={"start"}
//     >
//       <Drawer.Positioner>
//         <Drawer.Content bg="rgb(20 27 34)" backdropBlur="blur(21.6px)">
//           <Drawer.CloseTrigger color={"white"} bg={"#fff"} />
//           <Drawer.Header py={3} pl={10}>
//             <LogoBox />
//           </Drawer.Header>
//           <Drawer.Body>
//             <Stack
//               direction="column"
//               gap={10}
//               my={4}
//               display={{ base: "flex", lg: "none" }}
//               className="siteMenu"
//             >
//               {MenuList.map((menu, tabIndex) => (
//                 <Link
//                   to={menu.url}
//                   className={
//                     "animated-sm " +
//                     menu?.id +
//                     " " +
//                     (activeMenu == menu.url ? "ln-active" : "ln-d")
//                   }
//                   key={tabIndex}
//                   target={menu.external ? "_blank" : "_self"}
//                 >
//                   <Text fontSize={16} fontWeight={300}>
//                     {menu.label}
//                   </Text>
//                 </Link>
//               ))}
//             </Stack>
//           </Drawer.Body>
//           <Drawer.Footer></Drawer.Footer>
//         </Drawer.Content>
//       </Drawer.Positioner>
//     </Drawer.Root>
//   );
// };

// export const PageHeader = () => {
//   const [isScrolled] = useState(false);
//   const [refId, setRefId] = useState(0);

//   const { ready, login } = usePrivy();
//   const [depositShow, setDepositShow] = useState(false);
//   const { authenticated, address } = useWalletStore();

//   const { balance } = useWalletBalance(refId);

//   const [open, setOpen] = useState(false);

//   const refreshBal = () => {
//     setRefId(getRandomInt(1, 100));
//   };
//   useEffect(() => {
//     if (authenticated) {
//       toast("Wallet Connected...", { autoClose: 1000 });
//     }
//   }, [authenticated]);

//   return (
//     <>
//       <MobileNav open={open} onOpenChange={setOpen} />
//       <Flex
//         as={"header"}
//         bg={"transparent"}
//         className={`t-header animated-sm ${isScrolled ? "active" : ""}`}
//         w={"100%"}
//         zIndex={20}
//         maxW={"initial"}
//         top={0}
//         left={0}
//         position={"absolute"}
//       >
//         <Container py={3} className="h-con  animated-sm ">
//           <Flex justifyContent={"space-between"}>
//             <Button
//               bg={"transparent"}
//               outline={"none"}
//               onClick={() => setOpen(true)}
//               display={{ base: "flex", lg: "none" }}
//               mt={2}
//             >
//               <Icon as={IoMdMenu} fontSize={20} />
//             </Button>
//             <LogoBox />
//             <Flex>
//               <NavMenu />
//             </Flex>
//             <Flex py={2}>
//               {ready ? (
//                 <>
//                   {authenticated ? (
//                     <LoggedInMenu depositTrigger={setDepositShow} />
//                   ) : (
//                     <Button
//                       onClick={login}
//                       className="w-ct animated-sm"
//                       fontSize={"12px"}
//                     >
//                       Connect Wallet
//                     </Button>
//                   )}
//                 </>
//               ) : (
//                 <Button
//                   minWidth={120}
//                   className="animate-txt  grdnt-b-1"
//                   borderRadius={12}
//                 >
//                   Loading ...
//                 </Button>
//               )}
//             </Flex>
//           </Flex>
//         </Container>
//         <DepositDialog
//           refreshBal={refreshBal}
//           address={address}
//           depositShow={depositShow}
//           balance={balance}
//           closeHandler={setDepositShow}
//         />
//       </Flex>
//     </>
//   );
// };
