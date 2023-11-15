const gql = String.raw;

const typeDefs = gql`
type User {
  _id: ID
  email: String
  createdAt: String
  updatedAt: String
}

type Query {
  getAllUsers: [User]
  
}
`;
module.exports = typeDefs;