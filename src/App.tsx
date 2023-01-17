import { MantineProvider } from "@mantine/core";
import { AppRouter } from "./navigation";

function App() {
  return (
    <MantineProvider theme={ {colorScheme : "dark"} }>
      <AppRouter />
    </MantineProvider>
  );
}

export default App;
