import { AppShell } from "@mantine/core";
import { Navbar, RevizeContent } from "../components";

const RevizePage = () => {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar />}
      styles={(theme) => ({
        main: {
          maxWidth: "85%",
          position: "absolute",
          right: 0,
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <RevizeContent></RevizeContent>
    </AppShell>
  );
};

export default RevizePage;
