import { Flex } from "@mantine/core";
import { PropsWithChildren } from "react";

type F = () => string;
export const Link = ({
  href,
  children,
  target = "_blank",
}: PropsWithChildren<{
  href: string | F;
  target?: "_blank" | "_self";
}>) => {
  const link = typeof href === "string" ? href : href();

  return (
    <a target={target} href={link}>
      <Flex
        style={{
          cursor: "pointer",
          color: "var(--mantine-color-blue-text)",
        }}
        // onClick={handleClick}
        title={link}
        align="center"
        gap={2}
      >
        {children}
      </Flex>
    </a>
  );
};
