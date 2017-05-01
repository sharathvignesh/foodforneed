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
  getDetails,
  save
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
    name: {type: GraphQLString}
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
        // response = getDetails((err, detailsObj) => {
        //   if (err) {
        //     return res.status(500).send(err);
        //   }
        //   response = detailsObj;
        // });
        //console.log(response);
        return getDetails();
      }
    },
    test: {
      type: new GraphQLList(testdata),
      resolve: () => {
        return [{name: "sharath", std: "qwe"},{name: "al", std: "behappy"}]
      }
    }
  })
});

const mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    storeDonorDetails: {
      type: Details,
      description: 'A new donor',
      args: {
        name: {type: GraphQLString},
        phonenumber: {type: GraphQLString},
        location: {type: GraphQLString},
        dishname: {type: GraphQLString},
        imgurl: {type: GraphQLString},
        description: {type: GraphQLString},
        foodtype: {type: new GraphQLList(GraphQLString)}
      },
      resolve(val, {name, phonenumber, location, foodtype, dishname, imgurl, description}) {
        return save(name, phonenumber, location, foodtype, dishname, imgurl, description);
      }
    }
  }
});

const schema = new GraphQLSchema({
  query,
  mutation
});

export default schema;
