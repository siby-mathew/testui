import { tagsAtom } from "@/state/recentSearch";
import { Flex, Icon, Link } from "@chakra-ui/react";
import { useAtom } from "jotai/react";
import { Link as TanstackLink } from "@tanstack/react-router";
import { FiExternalLink } from "react-icons/fi";
export const RecentSearches: React.FC = () => {
  const [tags] = useAtom(tagsAtom);
  return (
    <Flex direction={"column"}>
      <Flex fontWeight={"bold"} fontSize={"xl"}>
        Recent Searches
      </Flex>
      <Flex direction={"row"} gap={5} py={5} flexWrap={"wrap"}>
        {tags.map((tag) => (
          <Link
            textDecoration={"none"}
            as={TanstackLink}
            href={`/register/${tag}`}
            p={2}
            transition={"all ease .2s"}
            borderRadius={"2xl"}
            fontSize={"sm"}
            bg="#2c2c2c"
            color={"white"}
            _hover={{
              opacity: 0.5,
            }}
          >
            +SOL {tag} <Icon ml={1} as={FiExternalLink} />
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};
