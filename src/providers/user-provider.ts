import { ResourceProvider } from "@rck.princy/ra-data-provider-wrapper";
import { Role, User } from "./types";
import profilImage from "../assets/images/profile.png";

const USERS: User[] = [
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
    role: Role.ADMIN
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
    role: Role.USER
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
    role: Role.USER
  },
];

export const userProvider: ResourceProvider<User> = {
  resource: "user",
  getOne: async ({ id }) => USERS.find((user) => user.id === id)!,
  getList: async () => Promise.resolve(USERS),
  saveOrUpdate: async ({data , meta }) =>{
    return 
  }
};
