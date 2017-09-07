import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
    type MenuCat {
        id: ID!
        name: String!
    }

    type MenuItem {
        id: ID!
        category: String!
        name: String!
        ingredients: String!
        price: String!
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
        menuItem(id: ID!): MenuItem
        events: [event]
        event(id: ID!): Event
        growers: [Grower]
        healthBenefits: [HealthBenefit]
        healthBenefit(id: ID!): HealthBenefit
    }
`

export default makeExecutableSchema({
    typeDefs,
    resolvers
});