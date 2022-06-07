enum Role {
  ADMIN,
  READ_ONLY,
}
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: "a",
  age: 20,
  hobbies: ["Sports", "Coocking"],
  role: Role.ADMIN,
};

let favorites: string[];
favorites = ["Hello"];
