import { gql } from "apollo-server-core";
import { resolver } from "graphql-sequelize";
import { User } from "../entities";

export const typeDefs = () => [
  gql`
    type User {
        id: Int
        user_login: String
    }
    extend type Query {
        users: [User!]!
    }
`
]

export const resolvers = {
  User: {

  },
  Query: {
    users: resolver(User, { list: true }),
  }
}