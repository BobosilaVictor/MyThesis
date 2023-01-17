import {
  createStyles,
  ThemeIcon,
  Progress,
  Text,
  Group,
  Badge,
  Paper,
} from "@mantine/core";
import { IconWriting } from "@tabler/icons";

const ICON_SIZE = 60;

const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    overflow: "visible",
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.xl * 1.5 + ICON_SIZE / 3,
  },

  icon: {
    position: "absolute",
    top: -ICON_SIZE / 3,
    left: `calc(50% - ${ICON_SIZE / 2}px)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
  },
}));

const ActivityComponent = () => {
  const { classes } = useStyles();

  return (
    <div>
      <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3}>
        <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
          <IconWriting size={34} stroke={1.5} />
        </ThemeIcon>

        <Text align="center" weight={700} className={classes.title}>
          Redact half of thesis
        </Text>
        <Text color="dimmed" align="center" size="sm">
          10 pages/week
        </Text>

        <Group position="apart" mt="xs">
          <Text size="sm" color="dimmed">
            Progress
          </Text>
          <Text size="sm" color="dimmed">
            50%
          </Text>
        </Group>

        <Progress value={50} mt={5} />

        <Group position="apart" mt="md">
          <Text size="sm">20 / 40 pages</Text>
          <Badge size="sm">4 days left</Badge>
        </Group>
      </Paper>
      <Paper radius="md" withBorder className={classes.card} mt={ICON_SIZE / 3}>
        <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
          <IconWriting size={34} stroke={1.5} />
        </ThemeIcon>

        <Text align="center" weight={700} className={classes.title}>
          Finish uploading all documents
        </Text>
        <Text color="dimmed" align="center" size="sm">
          5 documents
        </Text>

        <Group position="apart" mt="xs">
          <Text size="sm" color="dimmed">
            Progress
          </Text>
          <Text size="sm" color="dimmed">
            100%
          </Text>
        </Group>

        <Progress value={100} mt={5} />

        <Group position="apart" mt="md">
          <Text size="sm">5 / 5 documents</Text>
          <Badge size="sm">Done</Badge>
        </Group>
      </Paper>
    </div>
  );
};

export default ActivityComponent;
