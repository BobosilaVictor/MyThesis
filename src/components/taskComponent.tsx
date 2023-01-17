import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  Select,
  ScrollArea,
} from "@mantine/core";

interface UsersTableProps {
  data: {
    description: string;
    name: string;
    job: string;
    task_name: string;
    role: string;
  }[];
}

const rolesData = ["Manager", "Collaborator", "Contractor"];

const TaskComponent = ({ data }: UsersTableProps) => {
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing="sm">
        <Avatar color="cyan" radius="xl">
          VB
        </Avatar>
          <div>
            <Text size="sm" weight={500}>
              {item.name}
            </Text>
            <Text size="sm" color="dimmed">
              {item.task_name}
            </Text>
          </div>
        </Group>
      </td>

      <td>
        <Text>{item.description}</Text>
      </td>
      <td>{Math.floor(Math.random() * 6 + 5)} days ago</td>
      <td>
        {Math.random() > 0.5 ? (
          <Badge fullWidth>Active</Badge>
        ) : (
          <Badge color="gray" fullWidth>
            Disabled
          </Badge>
        )}
      </td>
    </tr>
  ));

  return (
    <ScrollArea>
      <Table sx={{ minWidth: 800 }} verticalSpacing="sm">
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Last active</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
};
export default TaskComponent;
