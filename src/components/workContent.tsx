import {
  ActionIcon,
  Button,
  Container,
  createStyles,
  Group,
  Menu,
} from "@mantine/core";
import { RichTextEditor } from "@mantine/rte";
import {
  IconChevronDown,
  IconCalendar,
  IconBookmark,
  IconTrash,
} from "@tabler/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../navigation";

const initialValue =
  "<h1>Welcome to MyThesis Editor!</h1><p> You can upload your thesis here and work on it if you so desire</p><p>When you are done editing you can either submit your work, draft it, or discard it.</p>";
const useStyles = createStyles((theme) => ({
  container: {
    maxHeight: "100wh",
  },
  button: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  menuControl: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    border: 0,
    borderLeft: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white
    }`,
  },
}));

const WorkContent = () => {
  const { classes, theme } = useStyles();
  const menuIconColor =
    theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 5 : 6];
  const [value, onChange] = useState(initialValue);
  return (
    <Container className={classes.container}>
      <RichTextEditor value={value} onChange={onChange} id="rte" />

      <Group noWrap spacing={0}>
        <Link to={AppRoutes.HOME}>
          <Button className={classes.button}>Send</Button>
        </Link>
        <Menu transition="pop" position="bottom-end">
          <Menu.Target>
            <ActionIcon
              variant="filled"
              color={theme.primaryColor}
              size={36}
              className={classes.menuControl}
            >
              <IconChevronDown size={16} stroke={1.5} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              icon={
                <IconCalendar size={16} stroke={1.5} color={menuIconColor} />
              }
            >
              Schedule for later
            </Menu.Item>
            <Menu.Item
              icon={
                <IconBookmark size={16} stroke={1.5} color={menuIconColor} />
              }
            >
              Save draft
            </Menu.Item>
            <Menu.Item
              icon={<IconTrash size={16} stroke={1.5} color={menuIconColor} />}
            >
              Delete
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Group>
    </Container>
  );
};

export default WorkContent;
