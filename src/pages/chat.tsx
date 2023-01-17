import { AppShell } from "@mantine/core";
import { Navbar } from "../components";
import ChatComponent from "../components/chatComponent";

const ChatPage = () => {
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
      <ChatComponent></ChatComponent>
    </AppShell>
  );
};

export default ChatPage;
