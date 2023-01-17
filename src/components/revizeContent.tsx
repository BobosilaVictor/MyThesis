import { Timeline, Text } from "@mantine/core";
import {
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMessageDots,
} from "@tabler/icons";
import React from "react";
const RevizeContent = () => {
  return (
    <div>
      <Timeline
        color="violet"
        radius="lg"
        active={6}
        lineWidth={5}
        bulletSize={30}
        align="left"
      >
        <Timeline.Item bullet={<IconGitBranch size={12} />} title="New thesis">
          <Text color="dimmed" size="sm">
            You have started a new thesis{" "}
            <Text variant="link" component="span" inherit>
              IoT - Edge Computing
            </Text>{" "}
          </Text>
          <Text size="xs" mt={4}>
            10 days ago
          </Text>
        </Timeline.Item>

        <Timeline.Item
          bullet={<IconGitCommit size={12} />}
          title="First submission"
        >
          <Text color="dimmed" size="sm">
            You&apos;ve added 5 pages of the thesis
          </Text>
          <Text size="xs" mt={4}>
            7 days ago
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Review from professor"
          bullet={<IconGitPullRequest size={12} />}
          lineVariant="dashed"
        >
          <Text color="dimmed" size="sm">
            Professor Jon Doe left a review!{" "}
            <Text variant="link" component="span" inherit>
              Fix incorrect title message (#1)
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            7 days ago
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Pushed 3 pages"
          bullet={<IconGitCommit size={12} />}
        >
          <Text color="dimmed" size="sm">
            <Text component="span" inherit>
              You've added 3 pages of the thesis
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            6 days ago
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="Pushed 4 pages"
          bullet={<IconGitCommit size={12} />}
        >
          <Text color="dimmed" size="sm">
            <Text component="span" inherit>
              You've added 4 pages of the thesis
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            5 days ago
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="Review from professor"
          bullet={<IconGitPullRequest size={12} />}
        >
          <Text color="dimmed" size="sm">
            Professor Jon Doe left a review!{" "}
            <Text variant="link" component="span" inherit>
              References issue (#2)
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            5 days ago
          </Text>
        </Timeline.Item>
        <Timeline.Item
          title="Started new chat with professor"
          bullet={<IconMessageDots size={12} />}
        >
          <Text color="dimmed" size="sm">
            You started a new chat with{" "}
            <Text variant="link" component="span" inherit>
              Professor Jon Doe
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            5 days ago
          </Text>
        </Timeline.Item>
      </Timeline>
    </div>
  );
};

export default RevizeContent;
