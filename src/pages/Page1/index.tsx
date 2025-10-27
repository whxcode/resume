import { Text, Flex, Divider } from "@mantine/core";
import root from "./index.module.scss";

function Page1() {
  console.log(root);
  return (
    <Flex className={root.container} direction="column">
      <Flex>
        王恒兴 男 | 年龄：24岁 | 17345241280 | 35129760@qq.com 3年工作经验 |
        求职意向：前端开发工程师 | 期望城市：成都
      </Flex>

      <Flex direction="column">
        <Divider
          className={root.divider}
          my="xs"
          variant=""
          label="个人优势"
          labelPosition="left"
        />

        <Flex direction="column" gap={2}>
          <Text size="sm">
            1、熟悉原生 javascript、css ；熟悉常用的设计模式。
          </Text>
          <Text size="sm">
            2、擅长 react、vue、nginx、typescript 、移动端、性能调优。
          </Text>
          <Text size="sm">3、了解 node、go 能独立完成服务端开发。</Text>
          <Text size="sm">
            4、热爱学习新的技术，责任心极强，为人诚实正直，作风正派。
          </Text>
        </Flex>
      </Flex>

      <Flex></Flex>

      <Flex></Flex>
    </Flex>
  );
}

export default Page1;
