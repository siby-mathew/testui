import { Box, Container, Grid } from "@chakra-ui/react";
import { Card } from "../Card";

const NUMBERS = ["777-7777", "123-4567", "000-0001", "000-0083"];
export const GoldenNumbers: React.FC = () => {
  return (
    <Container py={15}  maxW={{ xl: "4/5" }}>
      <Box w="full" fontSize={"2xl"} fontWeight={"bold"} py={5}>
        Golden Numbers
      </Box>
      <Box w="full">
        <Grid
          templateColumns={{
            base: `repeat(1,1fr)`,
            md: `repeat(4,1fr)`,
          }}
          gap={5}
        >
          {NUMBERS.map((number) => {
            return <Card number={number} />;
          })}
        </Grid>
      </Box>
    </Container>
  );
};
