import { gql } from "apollo-server-core";
import { resolver } from "graphql-sequelize";
import { User, ScoreHistory } from "../entities";
import sequelize from "../entities/sequelize";

export const typeDefs = () => [
  gql`
    type User {
        id: Int!
        user_login: String
        user_email: String
        user_pass: String
        user_nicename: String
        user_url: String
        user_registered: Date
        user_activation_key: String
        user_status: Int
        display_name: String
    }
    type ScoreHistory {
      ranking_id: Int
		  score_order: Int
		  type: Int
	  	score_date: Date
		  source_id: Int
		  user_id: Int
		  score: Int
		  full: Int
	  	goal_bonus: Int
	  	goal_diff_bonus: Int
		  ranking: Int
    }
    extend type Query {
        users: [User!]!
        scoreHistory: [ScoreHistory!]!
    }
    extend type Mutation {
      singup(email: String!, password: String!): User!
    }
`
]

export const resolvers = {
  User: {

  },
  Query: {
    users: resolver(User, { list: true }),
    scoreHistory: resolver(ScoreHistory, { list: true }),
  },
  Mutation: {
    singup: async (obj, { email, password }: any, context, info) => {
      const user = await User.find({ where: { user_email: email } });
      if (user) {
        return null
      }
      else {
        const { id } = await User.create({user_pass: password, user_email: email})
        return User.findById(id);
      }
		}
  }
}