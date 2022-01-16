const quotes = [
  "Genius is one percent inspiration and ninety-nine percent perspiration.",

  "You can observe a lot just by watching.",

  "A house divided against itself cannot stand.",

  "Difficulties increase the nearer we get to the goal.",

  "Fate is in your hands and no one elses",

  "Be the chief but never the lord.",

  "Nothing happens unless first we dream.",

  "Well begun is half done.",
];
const authors = [
  "Thomas Edison",
  "Yogi Berra",
  "Abraham Lincoln",
  "Johann Wolfgang von Goethe",
  "Byron Pulsifer",
  "Lao Tzu",
  "Carl Sandburg",
  "Aristotle",
];

var next = document.querySelector("#next");
var prev = document.querySelector("#prev");
var count = 0;

next.addEventListener("click", () => {
    count++;
    if(count>quotes.length-1)
    count = 0;
    document.querySelector('#para').innerHTML = quotes[count]
    document.querySelector('.author').innerHTML = `${authors[count]}__`

});



prev.addEventListener("click", () => {
    count--;
    if(count<0)
    count = quotes.length-1;
    document.querySelector('#para').innerHTML = quotes[count]
    document.querySelector('.author').innerHTML = `${authors[count]}__`

});


// Function for random;

function randomQuotes(){

    const quotesData = Math.floor(Math.random() * quotes.length);
    const authorsData = Math.floor(Math.random() * authors.length);

    document.querySelector('#para').innerHTML = quotes[quotesData];
    document.querySelector('.author').innerHTML = authors[authorsData];


}