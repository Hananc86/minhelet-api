"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var graphql_tag_1 = require("graphql-tag");
var users_1 = require("./users");
var graphql_tools_1 = require("graphql-tools");
var GraphQLJSON = require("graphql-type-json");
var CustomGraphQLDateType = require("graphql-custom-datetype");
var Schema = graphql_tag_1["default"](templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    _empty: String\n  }\n\n  type Mutation {\n    _empty: String\n  }\n"], ["\n  type Query {\n    _empty: String\n  }\n\n  type Mutation {\n    _empty: String\n  }\n"])));
var Scalars = graphql_tag_1["default"](templateObject_2 || (templateObject_2 = __makeTemplateObject(["\nscalar JSON\nscalar Date\n"], ["\nscalar JSON\nscalar Date\n"])));
var resolvers = {
    JSON: GraphQLJSON,
    Date: CustomGraphQLDateType
};
exports["default"] = graphql_tools_1.makeExecutableSchema({
    typeDefs: [
        Scalars,
        Schema,
        users_1.typeDefs
    ],
    resolvers: [
        resolvers,
        users_1.resolvers
    ]
});
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map