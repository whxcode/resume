import { Text, Flex, Title, Center } from "@mantine/core";
import root from "./index.module.scss";
import { Divider } from "../../components";

function Page1() {
  return (
    <Flex className={root.container} direction="column" gap={16}>
      <Flex direction="column">
        <Center>
          <Title order={2}>王恒兴</Title>
        </Center>
        <Center>
          <Text size="md">
            王恒兴 男 | 年龄：24岁 | 17345241280 | 35129760@qq.com
          </Text>
        </Center>
        <Center>
          <Text size="md">
            3年工作经验 | 求职意向：前端开发工程师 | 期望城市：成都
          </Text>
        </Center>
      </Flex>

      <Flex direction="column" gap={10}>
        <Divider text="个人优势" />

        <Flex direction="column" gap={0}>
          <Text size="md">
            1、熟悉原生 javascript、css ；熟悉常用的设计模式。
          </Text>
          <Text size="md">
            2、擅长 react、vue、nginx、typescript 、移动端、性能调优。
          </Text>
          <Text size="md">3、了解 node、go 能独立完成服务端开发。</Text>
          <Text size="md">
            4、热爱学习新的技术，责任心极强，为人诚实正直，作风正派。
          </Text>
        </Flex>
      </Flex>

      <Flex direction="column" gap={10}>
        <Divider text="工作经历" />

        <Flex direction="column" gap={16}>
          <Flex direction="column" gap={10}>
            <Flex justify="space-between">
              <Flex>
                <Title style={{ width: 280 }} order={5}>
                  成都摹客科技有限公司{" "}
                </Title>
                <Text flex={1} size="md">
                  前端开发工程师
                </Text>
              </Flex>
              <Text size="md"> 2021.03-至今</Text>
            </Flex>

            <Flex direction="column" gap={0}>
              <Text size="md">
                负责公司核心产品 DT 的开发与维护(技术栈为 React+TypeScript)
              </Text>
              <Text size="md">
                1. 维护已有产品功能，（优化性能，代码质量，功能用户体验等等);
              </Text>
              <Text size="md">
                2. 根据产品规划的新功能需求，保证月计划保质保量完成;
              </Text>
            </Flex>
          </Flex>

          <Flex direction="column" gap={10}>
            <Flex justify="space-between">
              <Flex>
                <Title style={{ width: 280 }} order={5}>
                  成都数游方舟科技有限公司
                </Title>
                <Text flex={1} size="md">
                  前端开发工程师
                </Text>
              </Flex>
              <Text size="md">2019.11-2021.02</Text>
            </Flex>

            <Flex direction="column" gap={0}>
              <Text size="md">1、主要负责移动端开发、小程序开发。</Text>
              <Text size="md">2、维护 pc 端后台管理系统。</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex direction="column" gap={10}>
        <Divider text="项目经历" />

        <Flex direction="column" gap={10}>
          <Flex justify="space-between">
            <Flex>
              <Title style={{ width: 280 }} order={5}>
                摹客DT(UI 设计工具)
              </Title>
              <Text flex={1} size="md">
                前端开发
              </Text>
            </Flex>
            <Text size="md"> 2021.03-至今</Text>
          </Flex>

          <Flex direction="column" gap={8}>
            <Flex direction="column" gap={6}>
              <Title style={{ width: 280 }} order={6}>
                内容:
              </Title>

              <Text size="md">
                为设计师提供的 UI
                设计工具，支持矢量设计、实时协同、资源复用、快速编辑、历史模式。
              </Text>
            </Flex>

            <Flex direction="column" gap={0}>
              <Title style={{ width: 280 }} order={6}>
                业绩:
              </Title>
              <Flex direction="column" gap={6}>
                <Text size="md">1、优化组件侦测对齐功能。</Text>

                <Text size="md">2、完成工作区缩放、拖动等功能。</Text>
                <Text size="md">3、解析第三方设计工具的源文件（sketch)。</Text>

                <Text size="md">
                  4、封装常用 UI 组件(Menu、Tree、Notice等)。
                </Text>

                <Text size="md">
                  5、统一管理编辑内的快捷键管理；方便新增与维护。
                </Text>

                <Text size="md">
                  6、优化编辑器内大量 DOM 节点渲染时造成的性能影响。
                </Text>

                <Text size="md">
                  7、 优化使用操作体验(避免用户使用一个功能需要多次点击按钮)。
                </Text>
                <Text size="md">
                  8、
                  完善编辑器内图层操作（创建、删除、对齐、克隆、选择等其它操作）。
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex direction="column" gap={10}>
        <Divider text="教育经历" />

        <Flex justify="space-between">
          <Flex>
            <Title style={{ width: 280 }} order={5}>
              四川信息职业技术学院
            </Title>
            <Flex gap={40}>
              <Text flex={1} size="md">
                大专
              </Text>
              <Text flex={2} size="md">
                软件工程
              </Text>
            </Flex>
          </Flex>
          <Text size="md"> 2021.03-至今</Text>
        </Flex>
      </Flex>

      <Flex direction="column">
        <Divider text="社交主页" />

        <Flex justify="space-between">
          <Text
            style={{ cursor: "pointer" }}
            size="md"
            onClick={() => {
              window.open("https://github.com/whxcode");
            }}
          >
            https://github.com/whxcode
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Page1;
