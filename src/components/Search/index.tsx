import {
  Box,
  chakra,
  Flex,
  Icon,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import { useNavigate } from "@tanstack/react-router";
import {
  FormProvider,
  useForm,
  useWatch,
  type SubmitHandler,
} from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import { Button } from "@/components/Button";
import { useEffect, useRef } from "react";
import { useAtom } from "jotai/react";
import { tagsAtom } from "@/state/recentSearch";

type Form = { number: string };

const NUMBER_PREFIX = 501;
export const SearchInput: React.FC<{ maxW?: string }> = ({ maxW }) => {
  const navigate = useNavigate({ from: "/" });
  const methods = useForm<Form>({
    mode: "all",
    reValidateMode: "onSubmit",
    shouldFocusError: true,
    defaultValues: {
      number: "",
    },
  });
  const [, setRecentSearch] = useAtom(tagsAtom);
  const onSubmitHandler: SubmitHandler<Form> = ({ number }) => {
    setRecentSearch((prev) =>
      [number, ...prev.filter((n) => n !== number)].slice(0, 10),
    );
    navigate({ to: `/register/${NUMBER_PREFIX}${number}` });
  };

  const number = useWatch({
    control: methods.control,
    name: "number",
  });

  const { open, onOpen, onClose } = useDisclosure();
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ele = wrapper.current?.querySelector("input");
    const onBlurHandler = () => {
      onClose();
    };
    if (ele) {
      ele.addEventListener("blur", onBlurHandler);
    }
    return () => {
      if (ele) {
        ele.removeEventListener("blur", onBlurHandler);
      }
    };
  }, [onClose]);

  const showPrefix = number || open;

  const numberLength = 10 - NUMBER_PREFIX.toString().length;
  return (
    <FormProvider {...methods}>
      <Box maxW={maxW || 600} w="100%" ref={wrapper}>
        <Flex
          as="form"
          onSubmit={methods.handleSubmit(onSubmitHandler)}
          border={"solid 1px"}
          borderColor={"brand.primary"}
          borderRadius={10}
          position={"relative"}
          boxShadow={open ? "0 0 40px rgba(120, 255, 120, 0.25)" : ""}
          transition={"all ease .2s"}
          p={"1px"}
        >
          <Flex
            position={"absolute"}
            left={0}
            top={0}
            bottom={0}
            color={"brand.primary"}
            alignItems={"center"}
            justifyContent={"center"}
            pl={"40px"}
            fontSize={18}
            transition={"all ease .2s"}
            opacity={showPrefix ? 1 : 0}
          >
            {NUMBER_PREFIX}
          </Flex>
          <Button
            type="submit"
            position={"absolute"}
            top={"0px"}
            right={"0px"}
            bottom={"0px"}
            borderRadius={9}
            h="initial"
            w={{ base: "50px", md: "200px" }}
            zIndex={1}
          >
            <chakra.span display={{ base: "none", md: "block" }}>
              Check Availability
            </chakra.span>
            <Icon as={FaSearch} />
          </Button>
          <Input
            h={50}
            autoComplete="off"
            border={"none !important"}
            outline={"none !important"}
            placeholder="Search desired digits (e.g. 555 8885)"
            pr={{ base: "60px", md: "200px" }}
            color={"brand.primary"}
            maxLength={numberLength}
            fontSize={18}
            autoFocus
            pl={showPrefix ? "75px" : 5}
            onFocus={() => onOpen()}
            {...methods.register("number", {
              required: "Number is required",
              maxLength: {
                value: numberLength,
                message: `Maximum length should be ${numberLength}`,
              },
              minLength: {
                value: numberLength,
                message: `Minimum length should be ${numberLength}`,
              },
              validate: (value) =>
                /^\d+$/.test(value) || "Only numbers allowed",
            })}
          />
        </Flex>
        {number && methods?.formState?.errors?.number && (
          <Flex fontSize={12} px={5} color={"red.500"} py={2}>
            {methods?.formState?.errors?.number?.message}
          </Flex>
        )}
      </Box>
    </FormProvider>
  );
};
