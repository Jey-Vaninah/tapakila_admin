import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { User } from "./types";

const USERS: User[] = [
  {
    id: "1",
    username: "Vaninah",
    name: "Jey",
    email: "hei.vaninah@mail.com",
    email_verified_at: new Date("2024-03-05T12:00:00Z"),
    password: "Vaninah",
    image_url: "https://example.com/image.jpg",
    country_id: "MG",
    create_at: new Date("2024-03-05T12:00:00Z"),
    updated_at: new Date("2024-03-05T12:00:00Z"),
    deleted_at: null,
  },
];

export const userProvider: ResourceProvider<User> = {
  resource: "user",
  getOne: async ({ id }) => USERS.find((user) => user.id === id)!,
  getList: async () => Promise.resolve(USERS),
};

// return axios
// .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.data);
