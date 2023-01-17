import { TextInput, Code, Grid, Title, Card, Image, Text } from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../navigation";
const ChatComponent = () => {
  return (
    <div>
      <div>
        <TextInput
          placeholder="Search"
          size="xs"
          icon={<IconSearch size={12} stroke={1.5} />}
          rightSectionWidth={70}
          styles={{ rightSection: { pointerEvents: "none" } }}
          mb="sm"
        />
      </div>
      <div>
        <Title align="center" color="white">
          Chats
        </Title>
        <Grid>
          <Grid.Col span={12}>
            {" "}
            <Link to={AppRoutes.JOHNDOE}>
              <Card shadow="sm" p="xl" component="a" target="_blank">
                <Text weight={500} size="lg" mt="md">
                  Professor John Doe
                </Text>

                <Text mt="xs" color="dimmed" size="sm">
                  Last Message: "Do your work !!!"
                </Text>
              </Card>
            </Link>
          </Grid.Col>
          <Grid.Col span={12}>
            {" "}
            <Link to={AppRoutes.JOHNDOE}>
              <Card shadow="sm" p="xl" component="a" target="_blank">
                <Text weight={500} size="lg" mt="md">
                  Professor Jane Doe
                </Text>

                <Text mt="xs" color="dimmed" size="sm">
                  Last Message: "Good job on your work !!!"
                </Text>
              </Card>
            </Link>
          </Grid.Col>
          <Grid.Col span={12}>
            {" "}
            <Link to={AppRoutes.JOHNDOE}>
            <Card shadow="sm" p="xl" component="a" target="_blank">
              <Text weight={500} size="lg" mt="md">
                Professor Jane John Doe
              </Text>

              <Text mt="xs" color="dimmed" size="sm">
                Last Message: "What is life"
              </Text>
            </Card>
            </Link>
          </Grid.Col>
        </Grid>
      </div>
    </div>
  );
};

export default ChatComponent;
