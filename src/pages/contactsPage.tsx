import { AppShell } from "@mantine/core";
import { Navbar } from "../components";
import Contacts from "../components/contactsComponent";

const mock_data ={
    "avatar": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80",
    "name": "Jane Fingerlicker",
    "email": "jfingerlicker@me.io",
    "job": "Art director"
  }
const ContactsPage = () => {
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
        <Contacts avatar={mock_data.avatar} name={mock_data.name} email={mock_data.email} job={mock_data.job}></Contacts>
        <Contacts avatar={mock_data.avatar} name={mock_data.name} email={mock_data.email} job={mock_data.job}></Contacts>
        <Contacts avatar={mock_data.avatar} name={mock_data.name} email={mock_data.email} job={mock_data.job}></Contacts>
    </AppShell>
  );
};

export default ContactsPage;
