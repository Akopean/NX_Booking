```graphql
query GetUsers {
  users {
    id
    email
    name
  }
}

mutation CreateUser {
	createUser(
    data: {
      password: "12345678",
      name: "John",
      email: "John@test.test"
  	}
  ) {
    name
    id
    email
  }
}
```