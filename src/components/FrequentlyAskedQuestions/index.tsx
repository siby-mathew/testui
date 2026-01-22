import { Accordion, Box, Container, Flex, Link, Text } from "@chakra-ui/react";

export const faqData = [
  {
    i: "0",
    q: "What is a SolMail ID?",
    a: "A SolMail ID is a unique @sol.mail username that acts as your Web3 identity. It’s also minted as an NFT, giving you full ownership and tradability.",
  },
  {
    i: "1",
    q: "How does the bidding work?",
    a: "When you claim a username, it enters a 2-day auction. Anyone can place bids, and the highest bidder at the end secures the ID for lifetime.",
  },
  {
    i: "2",
    q: "Why is there a 2‑day auction period?",
    a: "The auction period ensures fairness and prevents bulk hoarding by bots or hunters, giving everyone a chance to participate.",
  },
  {
    i: "3",
    q: "How can I use my SolMail ID in the SolMail application?",
    a: ` <p>  Your SolMail ID is minted as an <b>NFT directly to your wallet </b> you can link your ID to your SolMail Application. You can:</p>
<ul style="list-style-type:disc;margin-top:15px; padding-left:20px; margin-bottom:15px; " >
    <li  >
        Use it as your Web3 email address to send and receive messages on SolMail.
    </li>
    <li  >
       Log in with your SolMail ID across supported dApps without separate sign‑ups.
    </li>
    <li  >
       Track all your DeFi and trading activity under one handle.
    </li>
    <li  >
        Showcase your verified Web3 identity within the Solana ecosystem.
    </li>
</ul>
Your SolMail ID acts as your universal login + inbox + identity in the Solana ecosystem.

`,
  },
];

export const FaqSec = () => {
  return (
    <Container w="full" maxW={{ xl: "4/5" }}>
      <Box p={5} py={16} borderColor={"#1f290e"} bg="#11170d" borderRadius={15}>
        <Flex
          w={"100%"}
          marginX={"auto"}
          maxWidth={{ base: "100%", lg: "11/12" }}
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 12 }}
          justifyContent={"space-between"}
        >
          <Flex
            flex={1}
            maxW={{ base: "100%", lg: "5/12" }}
            direction={"column"}
          >
            <Text fontSize={40} fontWeight={400}>
              Frequently{" "}
            </Text>
            <Text fontSize={40} fontWeight={400}>
              Asked Questions
            </Text>
            <Text fontSize={14} mt={4} fontWeight={300}>
              Visit our{" "}
              <Link color={"white"} textDecoration={"underline"}>
                Help Center
              </Link>
              for more information
            </Text>
          </Flex>
          <Flex flex={1} maxW={{ base: "100%", lg: "6/12" }}>
            <Accordion.Root w={"100%"}>
              {faqData.map((item, index) => (
                <Accordion.Item
                  key={index}
                  value={item.i}
                  borderColor={"rgba(255,255,255,.2)"}
                >
                  <Accordion.ItemTrigger cursor={"pointer"} py={6}>
                    <Box flex="1">{item.q}</Box>
                    <Accordion.ItemIndicator />
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent>
                    <Accordion.ItemBody
                      color={"whiteAlpha.800"}
                      lineHeight={1.4}
                      px={2}
                    >
                      <Text
                        w={"100%"}
                        dangerouslySetInnerHTML={{ __html: item.a }}
                      ></Text>
                    </Accordion.ItemBody>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
};
