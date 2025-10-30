import { Flex } from "@mantine/core";
import { PropsWithChildren } from "react";

export const Link = ({
  href,
  onClick,
  children,
}: PropsWithChildren<{
  href?: string;
  onClick?: React.MouseEventHandler;
}>) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick?.(e);
      return;
    }

    window.open(href);
  };

  return (
    <Flex
      style={{
        cursor: "pointer",
        color: "var(--mantine-color-blue-text)",
      }}
      onClick={handleClick}
      title={href}
      align="center"
      gap={2}
    >
      {children}
    </Flex>
  );
};
