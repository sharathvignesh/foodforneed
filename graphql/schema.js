import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID,
  GraphQLScalarType
} from 'graphql';
import { GraphQLError } from 'graphql/error';
import { Kind } from 'graphql/language';

import {
  save,
  getDetails
} from './models/event';



const Details = new GraphQLObjectType({
  name: 'Details',
  fields: () => ({
    name: {type: GraphQLString},
    phonenumber: {type: GraphQLString},
    location: {type: Location},
    foodtype: {type: new GraphQLList(GraphQLString)},
    dishname: {type: GraphQLString},
    imgurl: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});
//
// const Query = new GraphQLObjectType({
//   name: 'RootQueryType',
//   fields: {
//     event: {
//       type: Event,
//       description: 'Get event details',
//       args: {
//         eventId: {type: new GraphQLNonNull(GraphQLString)}
//       },
//       resolve(value, args) {
//         return fetchEvent(args.eventId);
//       }
//     }
//   }
// });

const Mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    storeDonorDetails: {
      type: Details,
      description: 'Add donor details',
      args: {
        name: {type: new GraphQLNonNull(GraphQLString)},
        phonenumber: {type: new GraphQLNonNull(GraphQLString)},
        location: {type: LocationInput},
        foodtype: {type: new GraphQLNonNull(new GraphQLList(GraphQLString))},
        dishname: {type: new GraphQLNonNull(GraphQLString)},
        imgurl: {type: new GraphQLNonNull(GraphQLString)},
        description: {type: new GraphQLNonNull(GraphQLString)},
      },
      resolve(source, args) {
        return save(args);
      }
    }
  }
});

const Schema = new GraphQLSchema({
  //query: Query,
  mutation: Mutation
});

export default Schema;
