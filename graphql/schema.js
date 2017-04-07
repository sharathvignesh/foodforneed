import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
  GraphQLBoolean,
  GraphQLFloat
} from 'graphql';

import {
  getDetails
} from './../models/event';

const Details = new GraphQLObjectType({
  name: 'Details',
  fields: () => ({
    name: {type: GraphQLString},
    phonenumber: {type: GraphQLString},
    location: {type: GraphQLString},
    dishname: {type: GraphQLString},
    imgurl: {type: GraphQLString},
    description: {type: GraphQLString},
    foodtype: {type: new GraphQLList(GraphQLString)}
  })
});

const query = new GraphQLObjectType({
  name: "Query",
  description: "First GraphQL Server Config - Yay!",
  fields: () => ({
    hello: {
      type: GraphQLString,
      description: "Accepts a name so you can be nice and say hi",
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
          description: "Name you want to say hi to :)",
        }
      },
      resolve: (_,args) => {
        return `Hello, ${args.name}!!!`;
      }
    },
    luckyNumber: {
      type: GraphQLInt,
      description: "A lucky number",
      resolve: () => {
        return 888;
      }
    },
    fetchDonorDetails: {
      type: Details,
      description: 'Get Donor details',
      resolve() {
        return getDetails();
      }
    }
  })
});

const schema = new GraphQLSchema({
  query
});

export default schema;
