import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryclient } from "@/integrations/tanstack";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { WalletContext } from "@/components/context/Wallet";
import { AppTheme } from "@/theme/";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/integrations/graphql";

const router = createRouter({ routeTree });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider value={AppTheme}>
      <QueryClientProvider client={queryclient}>
        <ApolloProvider client={client}>
          <WalletContext>
            <RouterProvider router={router} />
          </WalletContext>
        </ApolloProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>,
);
