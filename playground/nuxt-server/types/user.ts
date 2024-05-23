import type { z } from "zod";
import { number, object, string } from "zod";

export const userSchema = object({
  id: number(),
  name: string().max(255),
  email: string().email().max(255),
});

export type User = z.infer<typeof userSchema>;

export const dummyUsers: User[] = [
  { id: 1, name: "User1", email: "user1@example.com" },
  { id: 2, name: "User2", email: "user2@example.com" },
  { id: 3, name: "User3", email: "user3@example.com" },
  { id: 4, name: "User4", email: "user4@example.com" },
  { id: 5, name: "User5", email: "user5@example.com" },
];
