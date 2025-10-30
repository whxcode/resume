import { Divider as D, Flex, Title } from "@mantine/core";

export const Divider = ({ text }: { text: string }) => {
  return (
    <Flex gap={4}>
      <D my="sm" flex={1} />
      <Title order={4}>{text}</Title>
      <D my="sm" flex={20} />
    </Flex>
  );
};
