import "@mantine/core/styles.css";

import { createTheme, MantineProvider, Tabs } from "@mantine/core";
import Page1 from "./pages/Page1";

const theme = createTheme({
  /** Put your mantine theme override here */
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Tabs defaultValue="page-1">
        <Tabs.List>
          <Tabs.Tab value="page-1">模版1</Tabs.Tab>
          <Tabs.Tab value="page-2">模版2</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="page-1">
          <Page1 />
        </Tabs.Panel>
      </Tabs>
    </MantineProvider>
  );
}

export default App;
