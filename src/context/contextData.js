import NavCategories from "./context";
// import { useState } from "react";
const BlogData = (props) => {
    let navLinkData = {
        bollywood: [
            {
                blogHead: "Dia, Mirza aksed to speak out",
                blogDesc: "Recently, Dia mirza has been asked to speek out about their personal life. She accepted that and speaked out",
                type: "Bollywood",
                date: " / August 21 2020"
            },
            {
                blogHead: "Bollywood is Trending now",
                blogDesc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
                type: "Bollywood",
                date: " / june 21 2019"
            },
            // {
            //     blogHead: "Ranbir Kapoor is love-struck as Alia Bhatt arrives",
            //     blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
            //     type: "Bollywood",
            //     date: " / may 21 2021"
            // },
            {
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Bollywood",
                date: " / August 21 2011"
            },
            {
                blogHead: "Saif reveals he is in Bunty Aur Babli 2",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Bollywood",
                date: " / August 21 2021"
            },
            {
                blogHead: "Saif reveals he is in Bunty Aur Babli 2",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Bollywood",
                date: " / August 21 2021"
            },

            {
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Bollywood",
                date: " / August 21 2021"
            },
            {
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Bollywood",
                date: " / jan 21 2018"
            },
            {
                blogHead: "Saif reveals he is in Bunty Aur Babli 2",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Bollywood",
                date: " / August 21 2021"
            },
            {
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Bollywood",
                date: " / August 14 2021"
            },
        ],
        hollywood: [
            {
                blogHead: "MELISSA MCCARTHY HEADLINES GHOSTBUSTERS CREW",
                blogDesc: "Admittedly, we still don’t whether next summer’s reboot of Ghostbusters, with an all-female crew of stars,",
                type: "Hollywood",
                date: " / August 3 2021"
            },
            {
                blogHead: "DISNEY OFFICIALLY ANNOUNCES FROZEN 2",
                blogDesc: "When any movie earns over $1.27 billion, it shouldn’t be particularly surprising when the studio eventually",
                type: "Hollywood",
                date: " / september 21 2021"
            },
            {
                blogHead: "EDDIE REDMAYNE TO STAR IN HARRY POTTER SPINOFF",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Hollywood",
                date: " / july 21 2021"
            },
            {
                blogHead: "CLINT EASTWOOD DIRECTING CAPTAIN SULLENBERGER BIOPIC",
                blogDesc: "As Warner Bros prepared to launch its next franchise with J.K. Rowling, one of this year’s",
                type: "Hollywood",
                date: " / may 21 2021"
            },
            {
                blogHead: "HAN SOLO TO GET HIS OWN “SOLO” PREQUEL",
                blogDesc: "Following the surprise runaway success of American Sniper, Clint Eastwood became an unusually hot",
                type: "Hollywood",
                date: " / August 21 2021"
            },
            {
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Hollywood",
                date: " / August 21 2021"
            },
            {
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Hollywood",
                date: " / August 21 2021"
            },
            {
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Hollywood",
                date: " / August 21 2021"
            },
        ],
        technology: [
            // {
            //     blogHead: "Work to a strict framework but then remove it",
            //     blogDesc: "just to prove that the house was properly built, but the cement mixer is left in the garden. ",
            //     type: "Technology",
            //     date: " / may 21 2021"
            // },
            {
                blogHead: "Periphrastic perambulations are anathema",
                blogDesc: "Keep words short where possible, but pop in the occasional polysyllable just to help the rhythm of the words.",
                type: "Technology",
                date: " / August 21 2021"
            },
            {
                blogHead: "ARTIFICIAL INTELLIGENCE",
                blogDesc: "Artificial intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines .",
                type: "Technology",
                date: " / july 21 2017"
            },
            {
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Technology",
                date: " / August 21 2021"
            },
            {
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Technology",
                date: " / August 21 2021"
            },
            {
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Technology",
                date: " / August 21 2021"
            },
            {
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Technology",
                date: " / August 21 2021"
            },
            {
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Technology",
                date: " / August 13 2021"
            },
        ],
        fitness: [
            {
                blogHead: "Exercise is great for your brain.",
                blogDesc: "It’s linked to less depression, better memory and quicker learning. Studies also suggest that exercise is,",
                type: "Fitness",
                date: " / August 11 2015"
            },
            {
                blogHead: "You might get happier.",
                blogDesc: "Countless studies show that many types of exercise, from walking to cycling, make people feel better",
                type: "Travel",
                date: " / october 21 2021"
            },
            {
                blogHead: "It might make you age slower.",
                blogDesc: "Exercise has been shown to lengthen lifespan by as much as five years.",
                type: "Fitness",
                date: " / november 21 2021"
            },
            {
                blogHead: "It’ll make your skin look better.",
                blogDesc: "Aerobic exercise revs up blood flow to the skin, delivering oxygen and nutrients that improve skin",
                type: "Fitness",
                date: " / August 21 2021"
            },
            {
                blogHead: "Amazing things can happen in just a few minutes.",
                blogDesc: "Emerging research suggests that it doesn’t take much movement to get the benefits.",
                type: "Fitness",
                date: " / August 21 2021"
            },
            {
                blogHead: "It can help you recover from a major illness.",
                blogDesc: "Even very vigorous exercise—like the interval workouts Gibala is studying—can",
                type: "Fitness",
                date: " / August 21 2021"
            },
            {
                blogHead: "Your fat cells will shrink.",
                blogDesc: "The body uses both carbohydrates and fats as energy sources. But after consistent aerobic exercise training.",
                type: "Fitness",
                date: " / june 21 2021"
            },
            {
                blogHead: "Why is a balanced diet important?",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Fitness",
                date: " / August 21 2021"
            },
        ],
        food: [
            {
                blogHead: "Food Policy  for Food Policy,",
                blogDesc: "A balanced diet is vital. A proper quantity of fiber, protein, and vitamin should be taken. It leads to good physical and good mental health.",
                type: "Food",
                date: " / August 21 2021"
            },
            {
                blogHead: "Why are healthy food habits important?",
                blogDesc: "Healthy food habits help in preventing various illnesses. Having organic or food containing fiber helps",
                type: "Food",
                date: " / August 21 2021"
            },
            {
                blogHead: "What help does the nutritionist/dietician do?",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Food",
                date: " / August 21 2021"
            },
            {
                blogHead: "Catch waves with adventure guide",
                blogDesc: "A dietitian or a nutritionist can help us with the adequate quantity of food we should intake in our everyday routine.",
                type: "Food",
                date: " / August 21 2021"
            },
            {
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Food",
                date: " / August 21 2021"
            },
            {
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Food",
                date: " / August 21 2021"
            },
            {
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Food",
                date: " / August 21 2021"
            },
            {
                blogHead: "Catch waves with adventure guide",
                blogDesc: "Gujarat is vastly underrated and it's a mystery the region is'nt  a mystery the region is'nt more well",
                type: "Food",
                date: " / August 21 2021"
            },
        ],
    };
    // let navLinkData = [
    //     { bollywood: [1, 2, 3] },
    //     { hollywood: [] },
    //     { technologies: [] },
    //     { fitness: [] },
    //     { food: [] },
    // ];


    // const [ar1, setar1] = useState(navLinkData);
    // console.log(ar1);
    return (
        <NavCategories.Provider value={navLinkData} >
            {props.children}
        </NavCategories.Provider>
    );
}


export default BlogData;