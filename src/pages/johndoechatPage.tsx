import { AppShell } from "@mantine/core";
import { JohnDoeChat, Navbar, RevizeContent } from "../components";

const JohnDoeChatPage = () => {
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
        <JohnDoeChat></JohnDoeChat>
    </AppShell>
  );
};

export default JohnDoeChatPage;
