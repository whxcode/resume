import { Text, Flex, Title, Center, Space } from "@mantine/core";
import root from "./index.module.scss";
import { Divider, Icon, Link } from "../../components";

function Page4() {
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
            年龄：27岁
            <Space w="xs" />|<Space w="xs" />
            <Link href="tel:17345241280">
              <Icon type="phone"></Icon>
              17345241280
            </Link>
            <Space w="xs" />|<Space w="xs" />
            <Link
              href={() => {
                const to = "35129760@qq.com";
                const cc = "";
                const bcc = "";
                const subject = "[公司名称]-面试邀请：高级前端开发工程师";
                const body = `您好，现邀请您面试高级前端开发工程师职位。烦请告知近期方便的时间，联系电话：[0000-0000]，感谢配合，静候回复！`;

                const params = new URLSearchParams({
                  subject: subject,
                  body: body,
                  cc: cc,
                  bcc: bcc,
                });

                const mailto = `mailto:${encodeURIComponent(to)}?${params.toString()}`;
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
            6 年工作经验
            <Space w="xs" />|<Space w="xs" />
            求职意向：高级前端开发工程师
            <Space w="xs" />|<Space w="xs" />
            期望城市：成都
          </Text>
        </Center>
      </Flex>

      <Flex direction="column" gap={10}>
        <Divider text="个人优势" />

        <Flex direction="column" gap={0}>
          <Text size="md">
            1、扎实的前端基础，精通 JavaScript/TypeScript，深入理解 React 生态，具备 6 年复杂业务架构与开发经验。
          </Text>
          <Text size="md">
            2、擅长前端性能调优，熟练利用时间切片、虚拟列表、Web Worker 处理海量数据计算及复杂视图更新的性能瓶颈。
          </Text>
          <Text size="md">
            3、深耕复杂 Web 应用开发，精通画布的基础编辑等核心交互逻辑与超大型应用的状态管理。
          </Text>
          <Text size="md">
            4、掌握跨端开发技术，能够使用 Electron 构建桌面级应用，具备跨进程通信、本地资源调用实战经验。
          </Text>
          <Text size="md">
            5、具备跨语言开发能力，掌握 C++ 并熟悉 WebAssembly，能将底层算法编译接入前端，或封装 Node Addon。
          </Text>
          <Text size="md">
            6、熟悉前端工程化与 Vite 构建工具，掌握前端模块化开发与代码规范治理。
          </Text>
          <Text size="md">
            7、自我驱动力强，极具技术热情，善于利用 AI 工具辅助开发，提升编码与重构效率。
          </Text>
        </Flex>
      </Flex>

      <Flex direction="column" gap={10}>
        <Divider text="工作经历" />

        <Flex direction="column" gap={20}>
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
                负责公司大型在线设计协同产品 DT、M3 及 AI 图表产品 FG 的架构演进与业务迭代 (React + TS + C++ + Electron)。
              </Text>
              <Text size="md">
                1、负责设计工具前端视图层、核心画布交互及复杂 UI 组件的开发与重构。
              </Text>
              <Text size="md">
                2、主导前端性能优化专项，解决海量节点卡顿、高频操作延迟等痛点。
              </Text>
              <Text size="md">
                3、负责前端基建，包括组件库封装、状态管理优化及快捷键系统设计。
              </Text>
              <Text size="md">
                4、主导 M3 离线版的 Electron 客户端从 0 到 1 开发与底层通信互联。
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
              <Text size="md">
                负责公司多端前端产品线的设计与研发 (Vue + Uni-app + 小程序)。
              </Text>
              <Text size="md">1、主导移动端 H5 混合应用及微信小程序的开发与发布流程。</Text>
              <Text size="md">2、负责复杂中后台管理系统的搭建、迭代及权限体系设计。</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex direction="column" gap={16}>
        <Divider text="项目经历" />

        <Flex direction="column" gap={10}>
          <Flex justify="space-between">
            <Flex>
              <Link href="https://www.mockplus.cn/m3">
                <Icon type="link"></Icon>
                <Title order={5}>
                  一、摹客M3 (大型在线矢量设计工具)
                </Title>
              </Link>
            </Flex>
            <Text size="md"> 2024-至今</Text>
          </Flex>

          <Flex direction="column" gap={8}>
            <Flex direction="column" gap={6}>
              <Title style={{ width: 280 }} order={6}>
                内容:
              </Title>

              <Text size="md">
                一款专业级 UI 设计工具，涵盖复杂的矢量编辑、图层渲染管理、多人实时协同及大型设计资产维护。
              </Text>
            </Flex>

            <Flex direction="column" gap={0}>
              <Title style={{ width: 280 }} order={6}>
                核心贡献：
              </Title>
              <Flex direction="column" gap={6}>
                <Text size="md">
                  1、主导核心交互开发：负责图形的基础编辑等高频实时交互逻辑。
                </Text>
                <Text size="md">
                  2、深度性能调优：针对万级节点数据源，采用虚拟列表、数据模型复用及事件节流，大幅降低操作延迟。
                </Text>
                <Text size="md">
                  3、架构融合与调度：结合 React 时间切片与底层 C++ / Wasm 数据结构，实现复杂计算的平滑降级，确保交互流畅。
                </Text>
                <Text size="md">
                  4、解析第三方工具源文件（如 Sketch、Figma、XD），实现设计资产平滑导入与格式转换。
                </Text>
                <Text size="md">
                  5、基础组件与基建：封装高复用 Tree、Menu 等复杂组件，设计统一的快捷键调度中心，提升研发效能。
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex direction="column" gap={10}>
          <Flex justify="space-between">
            <Flex>
              <Link href="https://www.mockplus.cn/m3/offline">
                <Icon type="link"></Icon>
                <Title order={5}>
                  二、 摹客 M3 离线桌面版
                </Title>
              </Link>
            </Flex>
            <Text size="md"> 2024-至今</Text>
          </Flex>

          <Flex direction="column" gap={8}>
            <Flex direction="column" gap={6}>
              <Title style={{ width: 280 }} order={6}>
                内容:
              </Title>

              <Text size="md">
                基于 Electron 打造的跨平台独立桌面应用，提供断网可用、高保密级别、系统级深层整合的设计体验。
              </Text>
            </Flex>

            <Flex direction="column" gap={0}>
              <Title style={{ width: 280 }} order={6}>
                核心贡献：
              </Title>
              <Flex direction="column" gap={6}>
                <Text size="md">
                  1、从 0 到 1 搭建 Electron 架构，负责主进程与渲染进程的 IPC 通信设计。
                </Text>
                <Text size="md">
                  2、主导 C++ Node Addon 的集成，实现桌面端与底层 C++ 引擎的高效互通。
                </Text>
                <Text size="md">
                  3、基于 Koa 搭建本地后端服务，设计离线环境下的数据持久化及安全存储方案。
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex direction="column" gap={10}>
          <Flex justify="space-between">
            <Flex>
              <Link href="https://www.fluig.cn/">
                <Icon type="link"></Icon>
                <Title order={5}>
                  三、 摹客 FG (AI 原生图表工具)
                </Title>
              </Link>
            </Flex>
            <Text size="md"> 2024-至今</Text>
          </Flex>

          <Flex direction="column" gap={8}>
            <Flex direction="column" gap={6}>
              <Title style={{ width: 280 }} order={6}>
                内容:
              </Title>

              <Text size="md">
                一款集成了大模型能力的效率工具，支持对话生成思维导图、流程图及白板协作。
              </Text>
            </Flex>

            <Flex direction="column" gap={0}>
              <Title style={{ width: 280 }} order={6}>
                核心贡献：
              </Title>
              <Flex direction="column" gap={6}>
                <Text size="md">
                  1、架构复用设计：复用 M3 底层数据引擎，降低重复开发成本，保证双端一致性。
                </Text>
                <Text size="md">
                  2、白板核心交互：开发画笔标注、思维导图节点无限拓展等高自由度白板特有功能。
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

export default Page4;
