import { Text, Flex, Title, Center, Space } from "@mantine/core";
import root from "./index.module.scss";
import { Divider, Icon, Link } from "../../components";

function Page1() {
  return (
    <Flex className={root.container} direction="column" gap={16}>
      <Flex direction="column">
        <Center>
          <Title order={4}>王恒兴</Title>
        </Center>
        <Center>
          <Text
            size="md"
            style={{
              verticalAlign: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            王恒兴 男<Space w="xs" />|<Space w="xs" />
            年龄：24岁
            <Space w="xs" />|<Space w="xs" />
            <Link href="tel:17345241280">
              <Icon type="phone"></Icon>
              17345241280
            </Link>
            <Space w="xs" />|<Space w="xs" />
            <Link
              href={() => {
                const to = "35129760@qq.com"; // 多个收件人用逗号分隔: 'a@example.com,b@example.com'
                const cc = "";
                const bcc = "";
                const subject = "[公司名称]-面试邀请：前端工程师";
                const body = `您好，现邀请您面试前端工程师职位。烦请告知近期方便的时间，联系电话：[0000-0000]，感谢配合，静候回复！`; // 换行会被 encodeURIComponent 编码为 %0A

                const params = new URLSearchParams({
                  subject: subject,
                  body: body,
                  cc: cc,
                  bcc: bcc,
                });

                const mailto = `mailto:${encodeURIComponent(to)}?${params.toString()}`;
                // 使用 location.href 或 window.open 都可
                return mailto;
              }}
            >
              <Icon type="email"></Icon>
              35129760@qq.com
            </Link>
          </Text>
        </Center>
        <Center>
          <Text
            size="md"
            style={{
              verticalAlign: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            3年工作经验
            <Space w="xs" />|<Space w="xs" />
            求职意向：前端开发工程师
            <Space w="xs" />|<Space w="xs" />
            期望城市：成都
          </Text>
        </Center>
      </Flex>

      <Flex direction="column" gap={10}>
        <Divider text="个人优势" />

        <Flex direction="column" gap={0}>
          <Text size="md">
            1、熟练掌握 JavaScript 与
            CSS，理解常用设计模式，能分析常见算法的时间复杂度。
          </Text>
          <Text size="md">
            2、熟练掌握
            React、Vue、TypeScript、Electron，等移动端开发与前端性能调优，解决性能问题。
          </Text>
          <Text size="md">
            3、了解 Node.js、Nginx、Go，可独立完成服务端开发；掌握 C++，能进行
            WebAssembly开发。
          </Text>
          <Text size="md">
            4、保持对新技术的学习热情，具备极强的责任心，为人诚实正直，工作作风严谨正派。
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
                  成都摹客科技有限公司
                </Title>
                <Text flex={1} size="md">
                  前端开发工程师
                </Text>
              </Flex>
              <Text size="md"> 2021.03-至今</Text>
            </Flex>

            <Flex direction="column" gap={0}>
              <Text size="md">
                负责公司核心产品 DT、M3、FG 的开发与维护(技术栈为
                React、TypeScript、C++、Electron)。
              </Text>
              <Text size="md">
                1、 维护已有产品功能（优化性能、代码质量、功能用户体验等）。
              </Text>
              <Text size="md">
                2、根据产品规划的新功能需求，保证月计划保质保量完成。
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
              <Link href="https://www.mockplus.cn/m3">
                <Icon type="link"></Icon>
                <Title order={5}>
                  摹客M3(UI&原型设计工具) https://www.mockplus.cn/m3
                </Title>
              </Link>
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
                设计工具，支持矢量设计、实时协同、资源复用、快速编辑、历史模式、离线版。
              </Text>
            </Flex>

            <Flex direction="column" gap={0}>
              <Title style={{ width: 280 }} order={6}>
                业绩:
              </Title>
              <Flex direction="column" gap={6}>
                <Text size="md">1、开发图层侦测对齐功能。</Text>
                <Text size="md">
                  2、完成工作区/图层缩放、拖动、旋转等功能。
                </Text>
                <Text size="md">
                  3、解析第三方设计工具的源文件（sketch、xd、figma)。
                </Text>
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
                  7、 优化使用操作体验、减少用户使用的时间成本。
                </Text>
                <Text size="md">
                  8、
                  完善编辑器内图层操作（创建、删除、对齐、克隆、选择等核心功能）。
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
              <Text flex={1} size="md" style={{ display: "flex" }}>
                大专
                <Space w="xs" />|<Space w="xs" />
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
          <Link href="https://github.com/whxcode">
            <Icon type="github" />
            <Text size="md">Github https://github.com/whxcode</Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Page1;
