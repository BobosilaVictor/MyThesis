import {
  createStyles,
  Navbar,

  UnstyledButton,
  Badge,
  Menu,
} from "@mantine/core";
import {
  IconBulb,
  IconUser,
  IconCheckbox,
  IconSelector,
  IconTrash,
  IconArrowsLeftRight,
  IconMessageCircle,
  IconPhoto,
  IconSettings,
} from "@tabler/icons";
import { Link } from "react-router-dom";
import { AppRoutes } from "../navigation";
import { UserButton } from "./userbutton";

const useStyles = createStyles((theme) => ({
  navbar: {
    paddingTop: 0,
    height: "100vh",
    width: "15%",
  },

  section: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    marginBottom: theme.spacing.md,

    "&:not(:last-of-type)": {
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
    },
  },
  link_main_text: {
    textDecoration:"none"
  },
  mainLinks: {
    paddingLeft: theme.spacing.md - theme.spacing.xs,
    paddingRight: theme.spacing.md - theme.spacing.xs,
    paddingBottom: theme.spacing.md,
  },

  otherLink: {
    textDecoration: "none",
  },

  mainLink: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    fontSize: theme.fontSizes.xs,
    padding: `8px ${theme.spacing.xs}px`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },

  mainLinkInner: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },

  mainLinkIcon: {
    marginRight: theme.spacing.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
  },

  mainLinkBadge: {
    padding: 0,
    width: "20%",
    height: "20%",
    pointerEvents: "none",
  },

  collections: {
    paddingLeft: theme.spacing.md - 6,
    paddingRight: theme.spacing.md - 6,
    paddingBottom: theme.spacing.md,
  },

  collectionsHeader: {
    paddingLeft: theme.spacing.md + 2,
    paddingRight: theme.spacing.md,
    marginBottom: 5,
  },

  collectionLink: {
    display: "block",
    padding: `8px ${theme.spacing.xs}px`,
    textDecoration: "none",
    borderRadius: theme.radius.sm,
    fontSize: theme.fontSizes.xs,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    lineHeight: 1,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
    },
  },
}));

const links = [
  { icon: IconBulb, label: "Activity", notifications: 2 , to:AppRoutes.ACTIVITY},
  { icon: IconCheckbox, label: "Tasks", notifications: 3,  to:AppRoutes.TASKS },
  { icon: IconUser, label: "Contacts",  to:AppRoutes.CONTACTS },
];

const collections = [
  { emoji: "🏠", label: "Home", to: AppRoutes.HOME },
  { emoji: "💬", label: "Work", to: AppRoutes.WORK },
  { emoji: "🧑‍🏫", label: "Professors", to: AppRoutes.PROFESSORS },
  { emoji: "🖊️", label: "Revize", to: AppRoutes.REVIZE },
  { emoji: "💬", label: "Chat", to: AppRoutes.CHAT },
  { emoji: "📃", label: "Documents", to: AppRoutes.DOCUMENTS },
];

const NavbarSearch = () => {
  const { classes } = useStyles();

  const mainLinks = links.map((link) => (
    <Link to={link.to} className={classes.link_main_text}>
      <UnstyledButton key={link.label} className={classes.mainLink}>
        <div className={classes.mainLinkInner}>
          <link.icon size={20} className={classes.mainLinkIcon} stroke={1.5} />
          <span style={{ fontSize: "15px" }}>{link.label}</span>
        </div>
        {link.notifications && (
          <Badge size="sm" variant="filled" className={classes.mainLinkBadge}>
            {link.notifications}
          </Badge>
        )}
      </UnstyledButton>
    </Link>
  ));

  const collectionLinks = collections.map((collection) => (
    <a
      href={collection.to}
      key={collection.label}
      className={classes.collectionLink}
      style={{ fontSize: "15px" }}
    >
      <span style={{ marginRight: 9, fontSize: 16 }}>{collection.emoji}</span>{" "}
      {collection.label}
    </a>
  ));

  return (
    <Navbar p="md" className={classes.navbar}>
      <Menu withArrow position="right">
        <Menu.Target>
          <Navbar.Section className={classes.section}>
            <UserButton
              image="https://i.imgur.com/fGxgcDF.png"
              name="Bobosila Victor"
              email="vbobosila1@gmail.com"
              icon={<IconSelector size={14} stroke={1.5} />}
            />
            <Menu.Dropdown>
              <Menu.Label>Application</Menu.Label>
              <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
              <Menu.Item icon={<IconMessageCircle size={14} />}>
                Messages
              </Menu.Item>
              <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>

              <Menu.Divider />

              <Menu.Label>Danger zone</Menu.Label>
              <Menu.Item icon={<IconArrowsLeftRight size={14} />}>
                Transfer my data
              </Menu.Item>
              <Menu.Item color="red" icon={<IconTrash size={14} />}>
                Delete my account
              </Menu.Item>
            </Menu.Dropdown>
          </Navbar.Section>
        </Menu.Target>
      </Menu>

      <Navbar.Section className={classes.section}>
        <div className={classes.mainLinks}>{mainLinks}</div>
      </Navbar.Section>

      <Navbar.Section className={classes.section}>
        <div className={classes.collections}>{collectionLinks}</div>
      </Navbar.Section>
    </Navbar>
  );
};

export default NavbarSearch;
