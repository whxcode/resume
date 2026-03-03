import {
  Text,
  Flex,
  Title,
  Card,
  Group,
  Badge,
  Indicator,
  Space,
} from "@mantine/core";
import root from "./index.module.scss";
import { Icon, Link } from "../../components";
import Content from "./content.ts";

function Page2() {
  const {
    name,
    phone,
    email,
    position,
    age,
    gender,
    status,
    skill,
    github,
    summaries,
    companies,
    projects,
    reviews,
  } = Content;

  return (
    <Flex className={root.container} direction="column" gap={16}>
      <Card
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        shadow="sm"
        component="div"
      >
        <Flex direction="column" justify="space-between">
          <Title order={2}>{name}</Title>
          <Title order={4}>{position}</Title>
        </Flex>

        <Flex gap={40}>
          <Flex direction="column">
            <Flex align="center" justify="space-between" gap={20}>
              <Icon type="birthday" />
              <Text>{age}</Text>
            </Flex>

            <Flex align="center" justify="space-between" gap={20}>
              <Icon type="man" />
              <Text>{gender}</Text>
            </Flex>

            <Flex align="center" justify="space-between" gap={20}>
              <Icon type="status" />
              <Text>{status}</Text>
            </Flex>
          </Flex>

          <Flex direction="column">
            <Flex align="center" justify="space-between" gap={20}>
              <Icon type="phone" />
              <Text>{phone}</Text>
            </Flex>

            <Flex align="center" justify="space-between" gap={20}>
              <Icon type="email" />
              <Text>{email}</Text>
            </Flex>

            <Flex align="center" justify="space-between" gap={20}>
              <Icon type="github" />
              <Link href={github}>{github}</Link>
            </Flex>
          </Flex>
        </Flex>
      </Card>

      <Flex gap={20}>
        <Card style={{ maxWidth: 300 }} shadow="sm" component="div">
          <Card.Section withBorder inheritPadding py="xs">
            <Group justify="space-between">
              <Flex align="center" gap={10}>
                <Icon type="skill" />
                <Text fw={500}>{skill.label}</Text>
              </Flex>
            </Group>
          </Card.Section>

          <Card.Section inheritPadding py="xs">
            <Flex direction="column" gap={20}>
              <Flex align="center" gap={8} style={{ flexWrap: "wrap" }}>
                {skill.skills.map(({ label, color }) => {
                  return (
                    <Badge
                      key={label}
                      tt="none"
                      variant="outline"
                      color={color ?? "blue"}
                    >
                      {label}
                    </Badge>
                  );
                })}
              </Flex>

              <Flex gap={8} direction="column" style={{ flexWrap: "wrap" }}>
                {reviews.map(({ icon, label, href }) => {
                  return (
                    <Flex align="center" gap={4}>
                      <img src={icon} width={18} height={18} />
                      <Link href={href}>{label}</Link>
                    </Flex>
                  );
                })}
              </Flex>
            </Flex>
          </Card.Section>
        </Card>

        <Flex flex={1} direction="column" gap={20}>
          <Card shadow="sm" component="div">
            <Card.Section withBorder inheritPadding py="xs">
              <Group justify="space-between">
                <Flex align="center" gap={20}>
                  <Icon type="note" />
                  <Text size="md" fw={500}>
                    个人总结
                  </Text>
                </Flex>
              </Group>
            </Card.Section>

            <Card.Section withBorder inheritPadding py="xs">
              {summaries.map(({ label, id }) => {
                return (
                  <Text key={id} size="sm">
                    {label}
                  </Text>
                );
              })}
            </Card.Section>
          </Card>

          <Card flex={1} shadow="sm" component="div">
            <Card.Section withBorder inheritPadding py="xs">
              <Group justify="space-between">
                <Flex align="center" gap={20}>
                  <Icon type="work" />
                  <Text fw={500} size="md">
                    工作经历
                  </Text>
                </Flex>
              </Group>
            </Card.Section>

            <Card.Section
              withBorder
              inheritPadding
              py="xs"
              style={{ display: "flex", flex: "row", gap: 10 }}
            >
              {companies.map((item) => {
                return (
                  <Indicator
                    withBorder
                    position="top-start"
                    flex={item.flex}
                    key={item.companyName}
                  >
                    <Card withBorder shadow="sm" radius="md">
                      <Card.Section withBorder inheritPadding py="xs">
                        <Text size="sm" fw={500}>
                          {item.companyName}
                        </Text>
                        <Flex justify="space-between">
                          <Text size="sm">{item.position}</Text>
                          <Text size="sm">{item.workDate}</Text>
                        </Flex>
                      </Card.Section>

                      <Card.Section inheritPadding py="xs">
                        <Flex direction="column" gap={0}>
                          <Text size="xs">{item.summary}</Text>
                          {item.features.map((item) => {
                            return (
                              <Text size="xs" key={item}>
                                {item}
                              </Text>
                            );
                          })}
                        </Flex>
                      </Card.Section>
                    </Card>
                  </Indicator>
                );
              })}
            </Card.Section>
          </Card>
        </Flex>
      </Flex>

      <Flex direction="column" gap={20} flex={1}>
        {projects.map((project) => {
          return (
            <Card shadow="sm" component="div" key={project.label}>
              <Card.Section withBorder inheritPadding py="xs">
                <Flex direction="column" display="flex" gap={4}>
                  <Link href={project.href}>
                    <Flex align="center" gap={10}>
                      <Icon type="link" />
                      <Title order={5}>{project.label}</Title>
                    </Flex>
                  </Link>

                  <Text size="sm">{project.summary}</Text>
                </Flex>
              </Card.Section>

              <Card.Section inheritPadding py="xs">
                <Flex gap={100}>
                  <Flex direction="column" gap={8}>
                    <Title size="md" style={{ width: 280 }} order={6}>
                      {project.remark}
                    </Title>
                    <Flex direction="column" gap={6}>
                      {project.contents.map((item) => {
                        return (
                          <Text size="md" key={item}>
                            {item}
                          </Text>
                        );
                      })}
                    </Flex>
                  </Flex>
                </Flex>
              </Card.Section>
            </Card>
          );
        })}
      </Flex>

      <Flex direction="column" gap={10}>
        <Card shadow="sm" component="div">
          <Flex justify="space-between">
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
        </Card>
      </Flex>
    </Flex>
  );
}

export default Page2;
