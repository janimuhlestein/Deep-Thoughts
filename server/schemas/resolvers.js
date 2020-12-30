const { attachDirectiveResolvers } = require("apollo-server-express")


const resolvers = {
    Query: {
        helloWorld: () => {
            return 'Hello World!'
        }
    }
}

module.exports = resolvers;