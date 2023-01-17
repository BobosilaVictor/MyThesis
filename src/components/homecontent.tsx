import {
  createStyles,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  Grid,
} from "@mantine/core";
import {
  IconGauge,
  IconUser,
  IconCookie,
  IconMessage,
  IconWallpaper,
  IconGuitarPick,
} from "@tabler/icons";
import { Link } from "react-router-dom";
import { AppRouter, AppRoutes } from "../navigation";

const mockdata = [
  {
    title: "Work on thesis",
    description:
      "Work on the current one or check the progress you have made so far. ",
    icon: IconGauge,
    to: AppRoutes.WORK,
  },
  {
    title: "Choose a professor",
    description:
      "Have a thesis but not professor to help you out? Check the list of professors available",
    icon: IconUser,
    to: AppRoutes.PROFESSORS,
  },
  {
    title: "Revize",
    description:
      "Ensure that your thesis is on the right track by revizing the work you have done so far.",
    icon: IconCookie,
    to: AppRoutes.REVIZE,
  },
  {
    title: "Chat",
    description:
      "Feeling stuck on a certain topic regarding your thesis? Chat with your professor! ",
    icon: IconMessage,
    to: AppRoutes.CHAT,
  },
  {
    title: "Documents",
    description: "Upload all necesarry documents to finalize your thesis.",
    icon: IconWallpaper,
    to: AppRoutes.DOCUMENTS,
  },
];

const useStyles = createStyles((theme) => ({
  gird: {
    marginTop:"2%"
  },
  title: {
    fontSize: 34,
    color: "white",
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
  link: {
    textDecoration: "none",
  },
}));

const FeaturesCards = () => {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Grid.Col span={4}>
      <Link to={feature.to} className={classes.link}>
        <Card
          key={feature.title}
          shadow="md"
          radius="md"
          className={classes.card}
          p="xl"
        >
          <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
          <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
            {feature.title}
          </Text>
          <Text size="sm" color="dimmed" mt="sm">
            {feature.description}
          </Text>
        </Card>
      </Link>
    </Grid.Col>
  ));
  return (
    <Container size="lg" py="xl">
      <Title order={2} className={classes.title} align="center" mt="sm">
        MyThesis
      </Title>

      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        Student made solutiuon for ensuring your thesis is done properly and on
        time.
      </Text>

      <Grid className={classes.gird} grow>{features}</Grid>
    </Container>
  );
};

export default FeaturesCards;
