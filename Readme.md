This file is the step by step instructions and the crux of how this project is made

I followed this lecture from [youtube](https://www.youtube.com/watch?v=5199E50O7SI)

------- APOLLO SERVER POINTS ----------

Apollo server takes object as an arguement that object expects two properties

1. typedefs - short for type defenitions these are basically the discription of our
   data types and relation they have with other data types, this is the schema of the
   graphql
2. resolver - bunch of resolver functions that determines how we respond
   to queries for different data on the graph

-------- GRAPHQL SCHEMA POINTS ----------

Built in GraphQL provides 5 basic scalar types that we can use they are

1. int
2. float
3. string
4. boolean
5. ID - act as a key for data objects

- [String] - it is used to define an array of string
- ! - this is used to define required field in the schema
- [String!]! - it defines that the filed platform cannot be empty and also the array of the
  string cannot be empty

every graphql schema have a special tag which is not oprional it is called as query
its job is to define the entry pints to the graph and specify the return type of those entry points

type query{
reviews : [Reviews] - the entry point is reviews and response is list of all Reviews
games: [Game] - the entry point is games and response is list of all Game
authors: [Author] - the entry point is authors and response is list of all Author
}

Follow the below steps to get to know about any schema of grapgQL (follow this - [doc](https://www.apollographql.com/docs/apollo-server/schema/schema/))

Reading a GraphQL schema involves understanding the structure and types defined within it. A GraphQL schema is typically written in the Schema Definition Language (SDL), and it describes the types of data that can be queried and the relationships between them. Here's how you can read and interpret a GraphQL schema:

Schema Definition

- The schema typically starts with a `schema` definition, which specifies the root types for the query, mutation, and subscription operations.

graphql
schema {
query: Query
mutation: Mutation
subscription: Subscription
}

- This section tells you the entry points for the API.

2. Types

    2.1 Object Types: These are the most common types in a schema, representing a collection of fields. Each field has a type, which can be a scalar, an object, or a custom type.
    
        graphql
            type User {
            id: ID!
            name: String!
            email: String
            friends: [User]
        }
        
       `ID!`: An `ID` type (often a unique identifier) is mandatory (denoted by `!`).
        `String`: A string field.
        `[User]`: A list of `User` objects.

    2.2 Scalars: These are primitive data types like `String`, `Int`, `Float`, `Boolean`, and `ID`.

     	graphql
    	  scalar DateTime

     - Custom scalars like `DateTime` can also be defined.

    2.3 Enums: Enumerations are a special type that defines a set of possible values.

     	graphql
    	 enum Status {
       		ACTIVE
       		INACTIVE
      		 BANNED
     }


    2.4 Interfaces: Defines a list of fields that a type must implement.

        graphql
        interface Node {
        id: ID!
        }

     - Any type implementing `Node` must have an `id` field of type `ID!`.

    2.4 Unions: A union type can represent multiple types.

     graphql
     	union SearchResult = User | Post | Comment


    2.4 Input Types: These are used as arguments in mutations or queries.

     graphql
     	input CreateUserInput {
       		name: String!
      		 email: String!
     }

3. Queries

   - Queries define the read operations. The root `Query` type lists all possible queries.
     graphql
     type Query {
     user(id: ID!): User
     users: [User]
     }

     - `user(id: ID!)`: Fetches a single `User` by ID.
     - `users`: Fetches a list of `User` objects.

4. Mutations

   - Mutations define the write operations, such as creating, updating, or deleting data.
     graphql
     type Mutation {
     createUser(input: CreateUserInput!): User
     deleteUser(id: ID!): Boolean
     }

     - `createUser(input: CreateUserInput!)`: Creates a new user and returns the `User` object.
     - `deleteUser(id: ID!)`: Deletes a user and returns a `Boolean` indicating success.

5. Subscriptions

   - Subscriptions allow clients to listen to real-time updates.
     graphql
     type Subscription {
     userCreated: User
     }

     - `userCreated`: Triggers when a new `User` is created.

6. Directives

   - Directives are special annotations that can modify the execution of fields or fragments.

graphql
directive @deprecated(reason: String) on FIELD_DEFINITION | ENUM_VALUE

     - `@deprecated`: Marks a field or enum value as deprecated.

7. Relationships and Nested Types

   - Fields can reference other types, creating relationships between different entities.
   - Nested fields can be queried in a single operation, representing complex data structures.

### Example Schema

```graphql
type Query {
  user(id: ID!): User
  allUsers: [User!]!
}
type Mutation {
  createUser(input: CreateUserInput!): User
}
type User {
  id: ID!
  name: String!
  email: String!
  friends: [User]
}
input CreateUserInput {
  name: String!
  email: String!
}
```

Steps to Read:

1. Identify the entry points (`Query`, `Mutation`, `Subscription`)
2. Undererstand the types and how they relate (e.g., `User` has `friends` who are also `User` objects).
3. Look at the fields and their types**, paying attention to whether they are required (`!`) or lists (`[]`)
4. Check for any custom scalars, enums, or directives** that might modify behavior or add constraints.

Once you're familiar with these elements, you can easily navigate and understand the structure and capabilities of any GraphQL API.

--------- RESOLVER FUNCTION ------------

It tells what data to be returned from the data base, in the resolver function we can create function which will return the data so in our project we have this query under resolver function
Each function can further have 3 arguments (that are passed in review as below)

1. parent - it refers to parent resolver in the resolver chain
2. args - if you need to pass any query variable
3. context - used for supplying context value across all our resolvers like in authentication

if you need to use args only then you need to pass _ for the first parameter

<img width="200" alt="image" src="https://github.com/user-attachments/assets/e352ebd9-1a2c-46c3-9ff4-239a507033b7">
