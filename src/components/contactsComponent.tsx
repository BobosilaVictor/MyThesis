import { Avatar, Text, Button, Paper, createStyles } from "@mantine/core";
import { Link } from "react-router-dom";
import { AppRoutes } from "../navigation";

interface UserInfoActionProps {
  avatar: string;
  name: string;
  email: string;
  job: string;
}

const useStyles = createStyles((theme) => ({
  link: {
    textDecoration: "none",
  },
}));
const Contacts = ({ avatar, name, email, job }: UserInfoActionProps) => {
  const { classes } = useStyles();
  return (
    <Paper
      radius="md"
      withBorder
      p="lg"
      sx={(theme) => ({
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Avatar src={avatar} size={120} radius={120} mx="auto" />
      <Text align="center" size="lg" weight={500} mt="md">
        {name}
      </Text>
      <Text align="center" color="dimmed" size="sm">
        {email} • {job}
      </Text>
      <Link to={AppRoutes.CHAT} className={classes.link}>
        <Button variant="default" fullWidth mt="md">
          Send message
        </Button>
      </Link>
    </Paper>
  );
};

export default Contacts;
