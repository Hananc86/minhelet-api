"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_core_1 = require("apollo-server-core");
var graphql_sequelize_1 = require("graphql-sequelize");
var entities_1 = require("../entities");
exports.typeDefs = function () { return [
    apollo_server_core_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    type User {\n        id: Int\n        user_login: String\n    }\n    extend type Query {\n        users: [User!]!\n    }\n"], ["\n    type User {\n        id: Int\n        user_login: String\n    }\n    extend type Query {\n        users: [User!]!\n    }\n"])))
]; };
exports.resolvers = {
    User: {},
    Query: {
        users: graphql_sequelize_1.resolver(entities_1.User, { list: true })
    }
};
var templateObject_1;
//# sourceMappingURL=users.js.map