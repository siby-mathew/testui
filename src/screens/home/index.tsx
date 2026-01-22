import { Box, Flex } from "@chakra-ui/react";
import { Banner } from "@/components/Banner";

import { CoreUtilities } from "@/components/CoreUtilities";
import { FaqSec } from "@/components/FrequentlyAskedQuestions";
import { HowitWorks } from "@/components/howItWorks";

export const Home: React.FC = () => {
  return (
    <Flex w="100%" direction={'column'}>
      <Box as="section" data-banner  className="sec-01">
        <Banner />
      </Box>
      <HowitWorks/>
      {/* <Box as="section" mt={15}>
        <GoldenNumbers />
      </Box> */}
      <Box as="section" my={28}>
        <CoreUtilities />
      </Box>
      <Box as="section" my={40}>
        <FaqSec />
      </Box>
    </Flex>
  );
};
