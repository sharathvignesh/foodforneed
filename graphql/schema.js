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
//
// const Details = new GraphQLObjectType({
//   name: 'Details',
//   fields: () => ({
//     _id: {type: GraphQLString},
//     name: {type: GraphQLString},
//     phonenumber: {type: GraphQLString},
//     location: {type: GraphQLString},
//     dishname: {type: GraphQLString},
//     imgurl: {type: GraphQLString},
//     description: {type: GraphQLString},
//     foodtype: {type: new GraphQLList(GraphQLString)}
//   })
// });
const Details = new GraphQLObjectType({
  name: 'Details',
  fields: {
    _id: {type: GraphQLString},
    name: {type: GraphQLString},
    phonenumber: {type: GraphQLString},
    location: {type: GraphQLString},
    dishname: {type: GraphQLString},
    imgurl: {type: GraphQLString},
    description: {type: GraphQLString},
    foodtype: {type: new GraphQLList(GraphQLString)}
  }
});


const testdata = new GraphQLObjectType({
  name: 'testdata',
  fields: () => ({
    name: {type: GraphQLString},
    std: {type: GraphQLString}
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
      type: new GraphQLList(Details),
      description: 'Get Donor details',
      resolve: () => {
        getDetails((err, detailsObj) => {
          if (err) {
            return res.status(500).send(err);
          }
          console.log(detailsObj);
          return detailsObj;
        });
      }
    },
    test: {
      type: testdata,
      resolve: () => {
        return {"name": "sharath", "std": "qwe"}
      }
    }
  })
});

const schema = new GraphQLSchema({
  query
});

export default schema;
