import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { Role, User } from "./types";
import profilImage from "../assets/images/profile.png";

let USERS: User[] = [
  {
    id: "1",
    username: "Vaninah",
    name: "Jey",
    email: "hei.vaninah@mail.com",
    email_verified_at: new Date("2024-03-05T12:00:00Z"),
    password: "Vaninah",
    image_url: profilImage,
    country_id: "MG",
    create_at: new Date("2024-03-05T12:00:00Z"),
    updated_at: new Date("2024-03-05T12:00:00Z"),
    deleted_at: null,
    role: Role.ADMIN_EVENTS,
  },
  {
    id: "2",
    username: "Tsilavina",
    name: "Gaëtan",
    email: "Tsilavina.Gaëtan@mail.com",
    email_verified_at: new Date("2024-03-10T08:30:00Z"),
    password: "Tsilavina123",
    image_url: profilImage,
    country_id: "FR",
    create_at: new Date("2024-03-10T08:30:00Z"),
    updated_at: new Date("2024-03-10T08:30:00Z"),
    deleted_at: null,
    role: Role.USER,
  },
  {
    id: "3",
    username: "Nomena",
    name: "Fitahiana",
    email: "Nomena.Fitahiana@mail.com",
    email_verified_at: new Date("2024-04-01T15:45:00Z"),
    password: "NomenaFitahiana",
    image_url: profilImage,
    country_id: "CA",
    create_at: new Date("2024-04-01T15:45:00Z"),
    updated_at: new Date("2024-04-01T15:45:00Z"),
    deleted_at: null,
    role: Role.USER,
  },
  {
    id: "4",
    username: "Nomena",
    name: "Fitahiana",
    email: "Nomena.Fitahiana@mail.com",
    email_verified_at: new Date("2024-04-01T15:45:00Z"),
    password: "NomenaFitahiana",
    image_url: profilImage,
    country_id: "CA",
    create_at: new Date("2024-04-01T15:45:00Z"),
    updated_at: new Date("2024-04-01T15:45:00Z"),
    deleted_at: null,
    role: Role.USER,
  },
];

export const userProvider: ResourceProvider<User> = {
  resource: "user",
  getOne: async ({ id }) => USERS.find((user) => user.id === id)!,
  getList: async () => Promise.resolve(USERS),
  saveOrUpdate: async ({ data, meta }) => {
    if (meta?.mutationType === "CREATE") {
      USERS.push(data as User);
      return USERS.find((user) => user.id === data.id)!;
    } else {
		console.log(data);
      USERS = USERS.map((user) => {
        return user.id === data.id ? (data as User) : user;
      });
      return USERS.find((user) => user.id === data.id)!;
    }
  },
  delete: async ({ id }) => {
    const toDeleted = USERS.find((user) => {
      return user.id === id;
    });
    USERS = USERS.filter((user) => {
      return user.id !== id;
    });
    return toDeleted!;
  },
};
