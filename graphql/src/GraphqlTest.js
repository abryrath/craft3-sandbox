import React from 'react';
import { useQuery } from 'graphql-hooks';

const LOCATIONS_QUERY = `query($section:[String]) {
    entries(section: $section) {
        id,
        title
    }
}`;

function GraphqlTest() {
   const { loading, error, data } = useQuery(LOCATIONS_QUERY, {
       variables: {
           section: 'location'
       }
   });

   if (loading) {
       return 'Loading...';
   } else if (error) {
       return 'Error';
   } else {
       return (
           <ul>
               {data.entries.map(({id, title}) => (
                   <li key={id}>{title}</li>
               ))}
           </ul>
       );
   }
}
export default GraphqlTest;