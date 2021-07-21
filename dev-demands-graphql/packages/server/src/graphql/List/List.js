import { gql } from 'apollo-server-express';

export const typeDefs = gql`
    interface List {
        items: [Node!]!
        totalItems: Int!
    }

    enum ListSortmentEnum {
        ASC
        DESC
    }

    input ListSort {
        sorter: String!
        sortment: ListSortmentEnum!
    }
`;

// object freeze indica q nao pode ser modificado (fazendo um enum no javascript q nao tem)
export const ListSortmentEnum = Object.freeze( {
    ASC: 'ASC',
    DESC: 'DESC',
})

export const resolvers = {
    List: {
        __resolveType: () => null,
    },
}