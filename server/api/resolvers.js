const queries = require('../firebase/fbqueries');

const resolveFunctions = {
    Query: {
        menuCategories: () => {
            return queries.getMenuCat();
        },
        menuItems: () => {
            return queries.getMenuItems();
        },
        featuredItems: () => {
            return queries.getFeaturedItems();
        },
        menuItem: (root, { id }) => {
            return queries.getMenuItem(id);
        },
        events: () => {
            return queries.getEvents();
        },
        event: (root, { id }) => {
            return queries.getEvent(id);
        },
        growers: () => {
            return queries.getGrowers();
        },
        healthBenefits: () => {
            return queries.getHealthBenefits();
        },
        healthBenefit: (root, { id }) => {
            return queries.getHealthBenefit(id);
        }
    }
}

module.exports = resolveFunctions;