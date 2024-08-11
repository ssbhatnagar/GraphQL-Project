This file is the step by step instructions and the crux of how this project is made

I followed this lecture from youtube  - https://www.youtube.com/watch?v=5199E50O7SI

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

* [String] -  it is used to define an array of string
* ! - this is used to define required field in the schema
* [String!]! -  it defines that the filed platform cannot be empty and also the array of the 
string cannot be empty

every graphql schema have a special tag which is not oprional it is called as query
its job is to define the entry pints to the graph and specify the return type of those entry points

type query{
    reviews : [Reviews] - the entry point is reviews and response is list of all Reviews
    games: [Game] - the entry point is games and response is list of all Game
    authors: [Author] - the entry point is authors and response is list of all Author
}

--------- RESOLVER FUNCTION ------------

It tells what data to be returned from the data base, in the resolver function we can create function which will return the data so in our project we have this query under resolver function 
Each function can further have 3 arguments (that are passed in review as below) 

1. parent - it refers to parent resolver in the resolver chain
2. args - if you need to pass any query variable
3. context - used for supplying context value across all our resolvers like in authentication

if you need to use args only then you need to pass _ for the first parameter

<img width="200" alt="image" src="https://github.com/user-attachments/assets/e352ebd9-1a2c-46c3-9ff4-239a507033b7">
