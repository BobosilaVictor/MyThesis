import { Carousel } from "@mantine/carousel";
import {
  Button,
  createStyles,
  Paper,
  Title,
  Text,
  useMantineTheme,
  Badge,
  Card,
  Group,
  Image,
  Grid,
  Modal,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import prof from "../prof1.jpg";
import prof2 from "../prof2.jpg";
import prof3 from "../prof3.jpg";
import prof4 from "../prof4.jpg";
import profsmth from "../profsmthjpg.jpg";
import ModalContent from "./modalContent";
const useStyles = createStyles((theme) => ({
  title2: {
    fontSize: 34,
    color: "white",
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },
  card: {
    height: 440,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
  other: {
    marginTop: "100px",
  },
  big: {
    height: "100%",
    marginLeft: "15%",
    width: "85%",
    overflow: "hidden",
  },
}));

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card2({ image, title, category }: CardProps) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Schedule meeting!"
      >
        <ModalContent />
      </Modal>
      <Button variant="white" color="dark" onClick={() => setOpened(true)}>
        Read article
      </Button>
    </Paper>
  );
}

const data = [
  {
    image: prof,
    title: "Dr. David Smith",
    category: "Awarded best computer science professor in 2022",
  },
  {
    image: prof2,
    title: "Dr. Jane Doe",
    category: "Might actually be crazy",
  },
  {
    image: prof3,
    title: "Dr. Some Guy",
    category: "Never shows his face award",
  },
  {
    image: prof4,
    title: "Dr. Someone Else",
    category: "Kinda looks like Bill Gates",
  },
];

const ProfessorContent = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card2 {...item} />
    </Carousel.Slide>
  ));
  return (
    <div className={classes.big}>
      <div>
        <Title order={2} className={classes.title2} align="center" mt="sm">
          Best professors of 2022!
        </Title>
        <Carousel
          slideSize="50%"
          breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
          slideGap="xl"
          align="start"
          slidesToScroll={mobile ? 1 : 2}
          loop
        >
          {slides}
        </Carousel>
      </div>
      <div className={classes.other}>
        <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
          <Grid.Col span={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={profsmth} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Comp Sci</Text>
                <Badge color="pink" variant="light">
                  Prof Dr. Pakard
                </Badge>
              </Group>

              <Text size="sm" color="dimmed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Text>
              <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Schedule meeting!"
              >
                <ModalContent />
              </Modal>
              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => setOpened(true)}
              >
                Learn more
              </Button>
            </Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={profsmth} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Comp Sci</Text>
                <Badge color="pink" variant="light">
                  Prof Dr. Pakard
                </Badge>
              </Group>

              <Text size="sm" color="dimmed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Text>
              <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Schedule meeting!"
              >
                <ModalContent />
              </Modal>
              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => setOpened(true)}
              >
                Learn more
              </Button>
            </Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={profsmth} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Comp Sci</Text>
                <Badge color="pink" variant="light">
                  Prof Dr. Pakard
                </Badge>
              </Group>

              <Text size="sm" color="dimmed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Text>

              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                Learn more
              </Button>
            </Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={profsmth} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Comp Sci</Text>
                <Badge color="pink" variant="light">
                  Prof Dr. Pakard
                </Badge>
              </Group>

              <Text size="sm" color="dimmed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Text>

              <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Schedule meeting!"
              >
                <ModalContent />
              </Modal>
              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => setOpened(true)}
              >
                Learn more
              </Button>
            </Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={profsmth} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Comp Sci</Text>
                <Badge color="pink" variant="light">
                  Prof Dr. Pakard
                </Badge>
              </Group>

              <Text size="sm" color="dimmed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Text>

              <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Schedule meeting!"
              >
                <ModalContent />
              </Modal>
              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => setOpened(true)}
              >
                Learn more
              </Button>
            </Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={profsmth} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Comp Sci</Text>
                <Badge color="pink" variant="light">
                  Prof Dr. Pakard
                </Badge>
              </Group>

              <Text size="sm" color="dimmed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Text>

              <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Schedule meeting!"
              >
                <ModalContent />
              </Modal>
              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => setOpened(true)}
              >
                Learn more
              </Button>
            </Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={profsmth} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Comp Sci</Text>
                <Badge color="pink" variant="light">
                  Prof Dr. Pakard
                </Badge>
              </Group>

              <Text size="sm" color="dimmed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Text>

              <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Schedule meeting!"
              >
                <ModalContent />
              </Modal>
              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => setOpened(true)}
              >
                Learn more
              </Button>
            </Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={profsmth} height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Comp Sci</Text>
                <Badge color="pink" variant="light">
                  Prof Dr. Pakard
                </Badge>
              </Group>

              <Text size="sm" color="dimmed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Text>

              <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Schedule meeting!"
              >
                <ModalContent />
              </Modal>
              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => setOpened(true)}
              >
                Learn more
              </Button>
            </Card>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
};

export default ProfessorContent;
