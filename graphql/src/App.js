import React from 'react';
import { GraphQLClient, ClientContext } from 'graphql-hooks';
import AppShell from './AppShell';

const client = new GraphQLClient({
    url: 'http://dev.craft3-sandbox.com/graphql'
});

function App() {
    return (
        <ClientContext.Provider value={client}>
            <AppShell/>
        </ClientContext.Provider>
    );
}

export default App;
