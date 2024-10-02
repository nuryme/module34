// //1.
// const text = prompt('your text')
// const delay = prompt('delay')
// function delayText(text, delay) {
//     setTimeout(() => {
//         console.log('Hello', text)
//     }, delay);
// }
// delayText(text, delay)

//2.
// const jokes = [
//     {
//         id: 1,
//         setup: "Why don't skeletons fight each other?",
//         punchline: "Because they don't have the guts!"
//     },
//     {
//         id: 2,
//         setup: "What do you call fake spaghetti?",
//         punchline: "An impasta!"
//     },
//     {
//         id: 3,
//         setup: "Why did the scarecrow win an award?",
//         punchline: "Because he was outstanding in his field!"
//     },
//     {
//         id: 4,
//         setup: "What do you get when you cross a snowman and a vampire?",
//         punchline: "Frostbite!"
//     },
//     {
//         id: 5,
//         setup: "Why don't programmers like nature?",
//         punchline: "It has too many bugs."
//     }
// ];

// function jokesTell() {
//     const randomJoke = Math.floor(Math.random() * jokes.length)
//     const jokeRandom = jokes[randomJoke];
//     let delay = 0;
//     const delaying = setInterval(() => {
//         alert(jokeRandom.setup + jokeRandom.punchline);
//         // window.location.reload()
//         delay += 4000;
//         if(delay > 10000) {
//             clearInterval(delaying)
//         }
//         console.log(delay)
//     }, delay);
// }
// jokesTell()

async function myFunction() {
    return "Hello";
   }
   myFunction().then(console.log);