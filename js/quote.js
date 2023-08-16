const arrQuotes = [
    {'author': 'Oscar Wilde', 
        'quote': "Be yourself; everyone else is already taken."
    },
    {'author': 'Marilyn Monroe', 
        'quote': "I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best."
    },
    {'author': 'Albert Einstein', 
        'quote': "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    },
    {'author': 'Frank Zappa', 
        'quote': 'So many books, so little time'
    },
    {'author': 'Bernard M. Baruch', 
        'quote': "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
    },
    {'author': 'William W. Purkey', 
        'quote':" You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth."
    },
    {'author': 'Dr. Seuss', 
        'quote': "You know you're in love when you can't fall asleep because reality is finally better than your dreams."
    },
    {'author': 'H. Jackson Brown Jr., P.S. I Love You', 
        'quote': "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover."
    },
];

let previousRandom = null;

function generateQuote(){
    let random = previousRandom;
    while (random === previousRandom) {
        random = Math.floor(Math.random() * arrQuotes.length);
    }
    previousRandom = random;
    document.querySelector('#quoteOutput').textContent = `\"${arrQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `-${arrQuotes[random].author}`;
}