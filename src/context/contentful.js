import * as contentful from 'contentful' ;
export const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: process.env.REACT_APP_SPACE_ID,
    space: "2sfw48573vrd",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    // accessToken: process.env.REACT_APP_ACCESS_TOKEN
    accessToken: "W2h4bjM4AZpRvqEozEDCzKJjZY8gGnofOQ1oxLjSZOw";
});