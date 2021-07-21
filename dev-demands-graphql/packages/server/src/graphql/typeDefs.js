import { typeDefs as clientTypeDefs} from "./Client/Client";
import { typeDefs as demandTypeDefs} from "./Demand/Demand";
import { gql } from 'apollo-server-express';
import { typeDefs as nodeTypeDef } from './Node/Node';

const typeDefs = gql `
    type Query {
        _root: String
    }

    ${nodeTypeDef}
    ${clientTypeDefs}
    ${demandTypeDefs}
`;

export default typeDefs;