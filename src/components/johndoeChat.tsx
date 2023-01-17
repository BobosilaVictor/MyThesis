import {
  TextInput,
  Code,
  Grid,
  Title,
  Card,
  Image,
  Text,
  Container,
  createStyles,
  Avatar,
  Button,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import React from "react";

const useStyles = createStyles((theme) => ({
  main_container: {
    width: "100%",
  },
  sub_container: {
    backgroundColor: theme.colors.dark[7],
    width: "100%",
    height: "80vh",
  },
  right_avatar: {
    display: "block",
    marginLeft: "auto",
  },
  bottom_message: {
    marginTop:"15px",
    marginLeft:"25px",
    display: "flex",
  },
  something : {
    display: "block",
    marginLeft: "15px",
    height:"35px"
  },
  text_input:{
    width:"90%",
  }
}));

const JohnDoeChat = () => {
  const { classes, theme } = useStyles();
  return (
    <Container>
      <Container className={classes.sub_container}>
        <Avatar color="cyan" radius="xl">
          JD
        </Avatar>
        <Text color="white">Nice job on starting the thesis!</Text>

        <Avatar className={classes.right_avatar} color="cyan" radius="xl">
          BV
        </Avatar>
        <Text color="white" ta="right"> Thank you!</Text>

        <Avatar color="cyan" radius="xl">
          JD
        </Avatar>
        <Text color="white">Do your work!</Text>
      </Container>
      <div className={classes.bottom_message}>
        <TextInput
        className={classes.text_input}
          placeholder="Write here..."
          size="sm"
          rightSectionWidth={70}
          styles={{ rightSection: { pointerEvents: "none" } }}
          mb="sm"
        />
        <Button className={classes.something}>Send message</Button>
      </div>
    </Container>
  );
};

export default JohnDoeChat;
