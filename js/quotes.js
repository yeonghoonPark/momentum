'use strict';

const quotes = [
    {
        quote: "No pain, no gain.",
        author: "Anonymous 00"
    },
    {
        quote: "Time is gold.",
        author: "Anonymous 01"
    },
    {
        quote: "Rome was not built in a day.",
        author: "Anonymous 02"
    },
    {
        quote: "Little by little does the trick.",
        author: "Anonymous 03"
    },
    {
        quote: "A rolling stone gathers no moss.",
        author: "Anonymous 04"
    },
    {
        quote: "Better the last smile than the first laughter.",
        author: "Anonymous 05"
    },
    {
        quote: "We give advice, but we cannot give conduct.",
        author: "Anonymous 06"
    },
    {
        quote: "Who knows much believes the less.",
        author: "Anonymous 07"
    },
    {
        quote: "To doubt is safer thsn to be secure.",
        author: "Anonymous 08"
    },
    {
        quote: "Finally",
        author: "Anonymous 09"
    }
];

const quote = document.querySelector('#quote span:nth-child(1)');
const author = document.querySelector('#quote span:nth-child(2)');

// reandom(), randomly output a number between 0 and 1
// console.log(Math.random() * 10);

// round off
// console.log(Math.round(1.6));

// console.log(Math.ceil(1.1));

// console.log(Math.floor(1.9));

// console.log(Math.floor(Math.random() * 10));

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;