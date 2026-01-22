import { Icon, type IconProps } from "@chakra-ui/react";

type SolIcoProps = IconProps & {
  iconId: string;
};

export const SMIcon: React.FC<SolIcoProps> = ({ iconId, ...props }) => {
  return (
    <Icon
      as={"i"}
      display={"inline-flex"}
      className={"sm-" + iconId + " " + props?.className}
      {...props}
    />
  );
};
