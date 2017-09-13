const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolvers');

const typeDefs = `
    type MenuCat {
        id: ID!
        name: String!
        iconLink: String!
    }

    type MenuItem {
        id: ID!
        category: String!
        featured: Boolean!
        name: String!
        ingredients: String
        price: String
        similarItems: String!
        healthBenefits: String!
    }

    type HealthBenefit {
        id: ID!
        name: String!
        details: String!
        healthBenefits: String!
        whereInMenu: String!
    }

    type Event {
        id: ID!
        name: String!
        date: String!
        timeStart: String!
        timeEnd: String!
        location: String!
        imageLink: String!
        eventLink: String!
        details: String!
    }

    type Grower {
        id: ID!
        name: String!
        description: String!
        logoLink: String!
        websiteLink: String!
    }

    type Query {
        menuCategories: [MenuCat]
        menuItems: [MenuItem]
        menuItems: [MenuItem]
        featuredItems: [MenuItem]
        menuItem(id: ID!): MenuItem
        events: [Event]
        event(id: ID!): Event
        growers: [Grower]
        healthBenefits: [HealthBenefit]
        healthBenefit(id: ID!): HealthBenefit
    }
`

const schema = makeExecutableSchema({typeDefs, resolvers});

module.exports = schema;
