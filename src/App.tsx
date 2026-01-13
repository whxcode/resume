import "@mantine/core/styles.css";

import {
  createTheme,
  Flex,
  MantineProvider,
  Tabs,
  Button,
} from "@mantine/core";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import { useState } from "react";

const theme = createTheme({
  primaryShade: { light: 6, dark: 7 },
  /** Put your mantine theme override here */
});

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <MantineProvider defaultColorScheme="light" theme={theme}>
      <Flex justify="center">
        <Tabs defaultValue="page-3">
          {visible && (
            <Tabs.List>
              <Tabs.Tab value="page-1">模版1</Tabs.Tab>
              <Tabs.Tab value="page-2">模版2</Tabs.Tab>
              <Tabs.Tab value="page-3">模版3</Tabs.Tab>
            </Tabs.List>
          )}

          <Tabs.Panel value="page-1">
            <Page1 />
          </Tabs.Panel>

          <Tabs.Panel value="page-2">
            <Page2 />
          </Tabs.Panel>

          <Tabs.Panel value="page-3">
            <Page3 />
          </Tabs.Panel>
        </Tabs>
        {visible && (
          <Button
            size="xs"
            variant="private"
            onClick={() => {
              setVisible(false);
              setTimeout(() => {
                window.print();
                setTimeout(() => {
                  setVisible(true);
                }, 100);
              }, 1000);
            }}
          >
            打印
          </Button>
        )}
      </Flex>
    </MantineProvider>
  );
}

export default App;
