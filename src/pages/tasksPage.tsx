import { AppShell } from "@mantine/core";
import { Navbar } from "../components";
import TaskComponent from "../components/taskComponent";

const data = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam tenetur velit sapiente eaque. Quis omnis adipisci dolores saepe officiis alias repellat esse ipsum a quos? A quae doloribus corporis porro.",
    name: "Victor Bobosila",
    job: "Engineer",
    task_name: "Send draft to professor",
    role: "Collaborator",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam tenetur velit sapiente eaque. Quis omnis adipisci dolores saepe officiis alias repellat esse ipsum a quos? A quae doloribus corporis porro.",
    name: "Victor Bobosila",
    job: "Engineer",
    task_name: "Write more",
    role: "Collaborator",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam tenetur velit sapiente eaque. Quis omnis adipisci dolores saepe officiis alias repellat esse ipsum a quos? A quae doloribus corporis porro.",
    name: "Victor Bobosila",
    job: "Designer",
    task_name: "Research",
    role: "Contractor",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam tenetur velit sapiente eaque. Quis omnis adipisci dolores saepe officiis alias repellat esse ipsum a quos? A quae doloribus corporis porro.",
    name: "Victor Bobosila",
    job: "Designer",
    task_name: "Something something",
    role: "Contractor",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam tenetur velit sapiente eaque. Quis omnis adipisci dolores saepe officiis alias repellat esse ipsum a quos? A quae doloribus corporis porro.",
    name: "Victor Bobosila",
    job: "Manager",
    task_name: "Task name",
    role: "Manager",
  },
];

const TaskPage = () => {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar />}
      styles={(theme) => ({
        main: {
          maxWidth: "85%",
          position: "absolute",
          right: 0,
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <TaskComponent data={data}></TaskComponent>
    </AppShell>
  );
};

export default TaskPage;
