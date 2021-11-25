import { createContext } from 'react';

export const ArticlesContext = createContext();


export default function Articles(props) {
    const articlesContainer = [
        {
            heading: "A visit to mumbai city after long time",
            desc: " Gujarat is vastly underrated and it's a mystery the region is'nt more well",
            type: "Travel ",
            date: " / May 11 2019"
        },
        {
            heading: "We should be very careful while eating",
            desc: " junk food may be dangerous if we take it too much, so be careful in that case",
            type: "Travel ",
            date: " / May 11 2019"
        },
        {
            heading: "A visit to mumbai city after long time",
            desc: " Gujarat is vastly underrated and it's a mystery the region is'nt more well",
            type: "Travel ",
            date: " / May 11 2019"
        },
        {
            heading: "A visit to mumbai city after long time",
            desc: " Gujarat is vastly underrated and it's a mystery the region is'nt more well",
            type: "Travel ",
            date: " / May 11 2019"
        },
        {
            heading: "A visit to mumbai city after long time",
            desc: " Gujarat is vastly underrated and it's a mystery the region is'nt more well",
            type: "Travel ",
            date: " / May 11 2019"
        },
        {
            heading: "A visit to mumbai city after long time",
            desc: " Gujarat is vastly underrated and it's a mystery the region is'nt more well",
            type: "Travel ",
            date: " / May 11 2019"
        },
        {
            heading: "A visit to mumbai city after long time",
            desc: " Gujarat is vastly underrated and it's a mystery the region is'nt more well",
            type: "Travel ",
            date: " / May 11 2019"
        },
    ];
    return (
        <ArticlesContext.Provider value={articlesContainer}>
            {props.children}
        </ArticlesContext.Provider>);
}

