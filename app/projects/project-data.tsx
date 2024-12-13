export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Task-Management-API",
    year: 2024,
    description:
      "This API provides a robust and efficient solution for task management. It allows users to seamlessly create, update, delete, and manage tasks, making it an essential tool for building task-based applications or workflows. Designed with flexibility and performance in mind, it streamlines task operations and enhances productivity.",
    url: "https://task-management-api-a3ms.onrender.com/",
  },
  {
    title: "Project Two",
    year: 2022,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
  {
    title: "Project Three",
    year: 2021,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam veritatis dolorem rem praesentium dicta labore, at laudantium quisquam.",
    url: "https://example.com/",
  },
];
