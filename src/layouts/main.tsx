import { Box } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { Outlet } from "@tanstack/react-router";
import { PageFooter } from "@/components/Footer";
import { ToastContainer } from "react-toastify";
export const AppLayout: React.FC = () => {
  return (
    <Box
      w="full"
      minH={"100vh"}
      bgGradient={`
    radial-gradient(60% 50% at 70% 20%, rgb(65 101 44 / 25%), rgb(0 0 0 / 43%), #050805), radial-gradient(40% 40% at 20% 60%, rgb(32 6 149 / 18%), rgb(119 116 139), #050805), linear-gradient(180deg, #0b120b, #050805)
  `}
    >
      <ToastContainer theme="dark" hideProgressBar autoClose={5000} />
      <Box
        w="full"
        position={"fixed"}
        top={0}
        right={0}
        left={0}
        // bg="rgba(0,0,0,.1)"
        zIndex={2}
        // backdropFilter={"blur(15px)"}
      >
        <Header />
      </Box>
      <Box w="full" as={"main"} minH={"70vh"}>
        <Outlet />
        {/* <Container  > 
          
        </Container> */}
      </Box>
      <Box as="footer">
        <PageFooter />
      </Box>
    </Box>
  );
};
