(() => {
  'use strict';

  const lessons = [
  {
    "id": "how-js-works",
    "short": "How JavaScript runs",
    "topic": "START HERE",
    "title": "How does JavaScript<br class=\"heading-break\" /> <em>come to life?</em>",
    "intro": "A computer needs instructions. JavaScript (or <strong>JS</strong>) is one language people use to write them. Your browser has a JavaScript engine: a program inside the browser that reads your JS and carries out its instructions.",
    "readTime": "5 min",
    "concept": "You write JavaScript. The engine checks what you wrote, works out what it means, then runs it. A typo in the rules of the language can stop the code and show an error.",
    "why": "This makes the browser feel less mysterious: your code is the instructions, and the JavaScript engine is the part that makes them happen. The browser and JavaScript are related, but they are not the same thing.",
    "analogies": [
      {
        "icon": "📖",
        "title": "A recipe and a cook",
        "text": "Your code is a recipe. The JavaScript engine is the cook that reads each instruction and does the work."
      },
      {
        "icon": "🗣",
        "title": "Two ways to translate",
        "text": "One translator can read a sentence a little at a time. Another can prepare a translation first. Modern JavaScript engines use a mix of both ideas."
      }
    ],
    "breakdown": [
      {
        "title": "You write the instructions.",
        "text": "The lines you type—like <code>console.log(\"Hi!\")</code>—are called source code. They are written for people to read."
      },
      {
        "title": "The engine checks and understands them.",
        "text": "It checks the language rules, such as matching parentheses. A rule mistake is a syntax error, so the engine cannot run that code yet."
      },
      {
        "title": "The engine carries them out.",
        "text": "It runs your instructions. Modern engines can also translate frequently used code into faster instructions while the program is running."
      }
    ],
    "engineTerms": [
      {
        "term": "Interpreter",
        "meaning": "Starts running a program by reading its instructions as it goes—like following a recipe one step at a time."
      },
      {
        "term": "AOT compiler",
        "meaning": "AOT means “ahead of time”—before the program runs. This compiler translates the program first, so the computer can start with prepared instructions."
      },
      {
        "term": "JIT compiler",
        "meaning": "JIT means “just in time.” Modern JavaScript engines often start running code quickly, then compile parts that are used a lot so they can run faster."
      },
      {
        "term": "Transpiler",
        "meaning": "A separate tool that changes code into another version of JavaScript before the browser runs it. For example, it can turn TypeScript into JavaScript."
      }
    ],
    "exampleDescription": "This one line asks the JavaScript engine to put a message in the console below.",
    "code": "console.log(\"hello world\");",
    "walkthrough": {
      "title": "A message to the console",
      "code": "console.log(\"hello world\");",
      "parts": [
        {
          "token": "console",
          "meaning": "The environment-provided console object. It gives JavaScript a place to show messages. In this lesson, the message appears in the playground console—not on the webpage."
        },
        {
          "token": ".log",
          "meaning": "A method on console. In JavaScript, console.log(...) is the usual counterpart to print() in languages like Python. JavaScript code normally uses console.log, not print."
        },
        {
          "token": "( ... )",
          "meaning": "The parentheses call the method. The value between them is what you want it to show."
        },
        {
          "token": "\"hello world\"",
          "meaning": "A string: text wrapped in quotes. The quotes tell JavaScript “treat these letters as text”; the quote marks themselves are not printed."
        },
        {
          "token": ";",
          "meaning": "A semicolon marks the end of this instruction. JavaScript can often add one for you, but typing it makes the end clear."
        }
      ]
    },
    "challengeTitle": "Print your first message",
    "challengeDescription": "Replace the blank with a short message in quotes. Then press Run here. You should see the words in the output box below.",
    "challengeCode": "// Replace ____ with text in quotes, then run\nconsole.log(____);",
    "hint": "Try replacing the blank with \"Hello!\". Quotes are important: they tell JavaScript that Hello is text, not a variable name.",
    "expectedOutput": "Hello!",
    "funFact": "The engine in Chrome is called <strong>V8</strong>. Firefox and Safari use different engines, but they all follow the JavaScript language rules.",
    "quiz": {
      "question": "What does a JavaScript engine do?",
      "options": [
        "Designs the webpage",
        "Reads and runs JavaScript instructions",
        "Stores your photos"
      ],
      "answer": 1,
      "correct": "That’s it. The engine reads your JS instructions and runs them.",
      "incorrect": "Look for the choice that means “understand the code and carry it out.”"
    }
  },
  {
    "id": "variables",
    "short": "Variables: names & memory",
    "topic": "SAVE A VALUE",
    "title": "Give information<br class=\"heading-break\" /> <em>a name.</em>",
    "intro": "A program needs to remember things: a player’s name, a score, or a message. A <strong>variable</strong> is a name for a piece of information, so your code can use it again without rewriting the value each time.",
    "readTime": "8 min",
    "concept": "JavaScript gives you two common ways to make a variable: <code>const</code> and <code>let</code>. Start with <code>const</code> when you will keep the same value. Use <code>let</code> when you plan to give that name a new value later.",
    "why": "Using the right word helps prevent mistakes. A player name usually stays the same, so use const. A score changes during a game, so use let. Quick rule: start with const; use let only when the value needs to change.",
    "analogies": [
      {
        "icon": "▣",
        "title": "A labeled lunchbox",
        "text": "Put a snack in a box and add a label. The label lets you find the snack later without guessing which box it is in."
      },
      {
        "icon": "📊",
        "title": "A scoreboard",
        "text": "The player’s name can stay on the board, but the score changes after each point. Use a steady label for the name and a changeable one for the score."
      }
    ],
    "breakdown": [
      {
        "title": "Use const for a value you will keep.",
        "text": "<code>const playerName = \"Mina\";</code> gives the value a name. Later, JavaScript will stop you if you accidentally try to point <code>playerName</code> at a different value."
      },
      {
        "title": "Use let when the value will change.",
        "text": "<code>let score = 0;</code> starts the score at zero. Later, <code>score = score + 1;</code> gives that same name a new score."
      },
      {
        "title": "Read the name to reuse its value.",
        "text": "In <code>score = score + 1</code>, JavaScript gets the old score, adds one, then saves the answer back into score. The <code>=</code> means “put this on the left,” not “compare.”"
      }
    ],
    "exampleDescription": "The name stays the same; the score changes. Run the example to see the new score printed.",
    "code": "const playerName = \"Mina\";\nlet score = 0;\n\nscore = score + 1;\nconsole.log(playerName, score);",
    "walkthrough": {
      "title": "Why this uses both const and let",
      "code": "const playerName = \"Mina\";\nlet score = 0;\nscore = score + 1;",
      "parts": [
        {
          "token": "const",
          "meaning": "Make a name that cannot be assigned a different value later. This is good for a player name that stays Mina."
        },
        {
          "token": "playerName",
          "meaning": "The name we chose for remembering the player’s name. Clear names make code easier to read."
        },
        {
          "token": "let",
          "meaning": "Make a name that can be updated. We choose let for score because the score will change."
        },
        {
          "token": "score = score + 1",
          "meaning": "Take the current score, add 1, and save the new answer back into score."
        },
        {
          "token": "+",
          "meaning": "With numbers, the plus sign adds. Here it adds one point."
        },
        {
          "token": ";",
          "meaning": "Finishes that instruction. You will often see a semicolon at the end of a JavaScript statement."
        }
      ]
    },
    "challengeTitle": "Give a score a starting value",
    "challengeDescription": "Replace ____ with a starting number, such as 5. The next line adds 10. Run it here and check the final score.",
    "challengeCode": "const player = \"Pixel\";\nlet score = ____;\nscore = score + 10;\nconsole.log(player + \" has \" + score + \" points!\");",
    "hint": "Put a number like 5 where the blank is. We use let because the next line gives score a new value.",
    "expectedOutput": "Pixel has 15 points!",
    "funFact": "<code>const</code> stops you from assigning a new value to the name. With an array or object, you can still change things inside it—we will see that later.",
    "quiz": {
      "question": "A game score starts at 0 and later becomes 1. Which word should create score?",
      "options": [
        "const, because scores never change",
        "let, because the score gets a new value",
        "print, because it shows the score"
      ],
      "answer": 1,
      "correct": "Right. The score changes, so let gives the name permission to get a new value.",
      "incorrect": "Ask: will this name need a different value later? A changing score does."
    }
  },
  {
    "id": "values",
    "short": "Kinds of values",
    "topic": "NUMBERS, WORDS & YES/NO",
    "title": "Not all values<br class=\"heading-break\" /> <em>are alike.</em>",
    "intro": "JavaScript can remember numbers, words, and yes-or-no answers. These are different <strong>kinds of values</strong>. The kind matters because it changes what JavaScript does with the value.",
    "readTime": "6 min",
    "concept": "For example, <code>5 + 2</code> is the number 7. But <code>\"5\" + 2</code> joins text and becomes <code>\"52\"</code>. Quotes make 5 into text, not a number.",
    "why": "Knowing the kind of a value helps you avoid confusing results. Use numbers to count, text to show words, and true/false to remember whether something is on or off.",
    "analogies": [
      {
        "icon": "🥫",
        "title": "Different containers",
        "text": "A jar, a shoebox, and a light switch hold different kinds of things. A value’s kind tells you how to use it."
      },
      {
        "icon": "🏷",
        "title": "Different labels",
        "text": "A label that says “number” helps you add. A label that says “text” means JavaScript should keep the letters together."
      }
    ],
    "breakdown": [
      {
        "title": "A number can be counted or calculated.",
        "text": "Examples: <code>42</code>, <code>3.5</code>, and <code>-1</code>. Do not put quotes around a number if you want to do math with it."
      },
      {
        "title": "A string is text.",
        "text": "Examples: <code>\"Hello\"</code> or <code>\"42\"</code>. The quote marks say “these are characters,” even when they look like a number."
      },
      {
        "title": "A boolean is a yes-or-no answer.",
        "text": "JavaScript writes these two answers as <code>true</code> and <code>false</code>, without quotes. They are useful for choices, such as “is the door open?”"
      }
    ],
    "exampleDescription": "Run this to see JavaScript tell you the kind of each value. typeof is a question you can ask about a value.",
    "code": "const score = 42;\nconst isReady = true;\nconst greeting = \"Hello!\";\n\nconsole.log(typeof score);\nconsole.log(typeof isReady);\nconsole.log(typeof greeting);",
    "walkthrough": {
      "title": "A boolean value, piece by piece",
      "code": "const isReady = true;",
      "parts": [
        {
          "token": "const",
          "meaning": "Creates a name for a value that we do not plan to replace."
        },
        {
          "token": "isReady",
          "meaning": "The name. It reads like a question: “is ready?”"
        },
        {
          "token": "=",
          "meaning": "Means “store the value on the right under this name.”"
        },
        {
          "token": "true",
          "meaning": "A yes answer, called a boolean. Without quotes it is a true/false value; \"true\" in quotes is just text."
        },
        {
          "token": ";",
          "meaning": "Marks the end of this instruction."
        }
      ]
    },
    "challengeTitle": "Pick the right kind of value",
    "challengeDescription": "Replace ____ with true or false (no quotes). Then run the code and read the three types in the output.",
    "challengeCode": "const lives = 3;\nconst isReady = ____;\nconst player = \"Nova\";\n\nconsole.log(typeof lives);\nconsole.log(typeof isReady);\nconsole.log(typeof player);",
    "hint": "A yes-or-no answer is true or false, without quote marks. The word typeof asks JavaScript what kind of value it sees.",
    "expectedOutput": "number\nboolean\nstring",
    "funFact": "JavaScript has one famous old quirk: <code>typeof null</code> says <code>\"object\"</code>. That odd result stayed so older programs would keep working.",
    "quiz": {
      "question": "Which one is a yes-or-no value, not text?",
      "options": [
        "\"false\"",
        "0",
        "false"
      ],
      "answer": 2,
      "correct": "Yes. false without quotes is a boolean. With quotes it would be text.",
      "incorrect": "Look for the word with no quotes around it. Quotes turn it into text."
    }
  },
  {
    "id": "strings",
    "short": "Text & strings",
    "topic": "WORDS IN YOUR CODE",
    "title": "Make your code<br class=\"heading-break\" /> <em>say something.</em>",
    "intro": "Whenever your code needs words—a name, a welcome, or a joke—you use a <strong>string</strong>. A string is text wrapped in quote marks.",
    "readTime": "6 min",
    "concept": "Use single quotes or double quotes for plain text. Use backticks when you want to insert a variable into a sentence.",
    "why": "Strings let your program talk to people. If a name changes, inserting the name from a variable is easier than rewriting the whole message.",
    "analogies": [
      {
        "icon": "“ ”",
        "title": "A quote sandwich",
        "text": "The quote marks are like the two slices of bread. They show JavaScript where the text begins and ends."
      },
      {
        "icon": "✍",
        "title": "A fill-in-the-blank card",
        "text": "Backticks let you write a sentence with a blank. JavaScript fills the blank with a value such as someone’s name."
      }
    ],
    "breakdown": [
      {
        "title": "Put plain text inside quotes.",
        "text": "<code>\"Hi\"</code> and <code>'Hi'</code> are strings. The quote marks are part of the code, not usually part of the message."
      },
      {
        "title": "Use + to join text.",
        "text": "<code>\"Hi, \" + name</code> glues the greeting to the value saved in name. If name is Kai, the result is <code>Hi, Kai</code>."
      },
      {
        "title": "Use backticks for a fill-in sentence.",
        "text": "With backticks, <code>`Hi, ${name}`</code> puts the value of name right where <code>${name}</code> appears."
      }
    ],
    "exampleDescription": "name holds the word Sam. The backticks let us put Sam into the welcome sentence.",
    "code": "const name = \"Sam\";\nconst message = `Hello, ${name}!`;\nconsole.log(message);",
    "walkthrough": {
      "title": "A sentence with a name inside",
      "code": "const message = `Hi, ${name}!`;",
      "parts": [
        {
          "token": "const message",
          "meaning": "Make a name called message to remember the finished sentence."
        },
        {
          "token": "=",
          "meaning": "Store the sentence on the right under the name on the left."
        },
        {
          "token": "`...`",
          "meaning": "Backticks mark a template string. It is still text, but it can have values inserted into it."
        },
        {
          "token": "${name}",
          "meaning": "Use the current value of name in this spot. If name is Mina, the sentence says “Hi, Mina!”"
        },
        {
          "token": ";",
          "meaning": "Finishes the instruction."
        }
      ]
    },
    "challengeTitle": "Fill in a name",
    "challengeDescription": "Replace ____ with the variable name. Keep the ${ } marks. Run it to see the name appear in the message.",
    "challengeCode": "const name = \"Kai\";\nconst message = `Hello, ${____}!`;\nconsole.log(message);",
    "hint": "The name of the variable is name. The finished part should look like ${name}.",
    "expectedOutput": "Hello, Kai!",
    "funFact": "Text between quotes is a string even if it looks like a number. For example, <code>\"42\"</code> is text, while <code>42</code> is a number.",
    "quiz": {
      "question": "What marks the start and end of a template string?",
      "options": [
        "Backticks: ` `",
        "Square brackets: [ ]",
        "A hashtag: #"
      ],
      "answer": 0,
      "correct": "Right. Backticks make a template string, where ${name} can insert a value.",
      "incorrect": "Look for the small slanted quote mark, usually near the number 1 key."
    }
  },
  {
    "id": "numbers",
    "short": "Numbers & math",
    "topic": "ADD, SUBTRACT & MORE",
    "title": "Let JavaScript<br class=\"heading-break\" /> <em>do the math.</em>",
    "intro": "Scores, timers, prices, and steps are numbers. JavaScript can do the arithmetic for you and remember the answer.",
    "readTime": "6 min",
    "concept": "Use <code>+</code> to add, <code>-</code> to subtract, <code>*</code> to multiply, and <code>/</code> to divide. Parentheses work like they do in school math: they tell JavaScript what to calculate first.",
    "why": "A computer is good at repeating calculations without losing track. Store a result in a variable so you can print it, compare it, or use it in the next calculation.",
    "analogies": [
      {
        "icon": "🧮",
        "title": "A pocket calculator",
        "text": "Give it two numbers and an operation, and it returns the answer. JavaScript can be your calculator inside an app."
      },
      {
        "icon": "🏆",
        "title": "A scorekeeper",
        "text": "Start with a score, add points after a round, and keep the new total for the next round."
      }
    ],
    "breakdown": [
      {
        "title": "Numbers do not need quotes.",
        "text": "Write <code>12</code>, not <code>\"12\"</code>, when you want to do number math."
      },
      {
        "title": "Choose the math sign.",
        "text": "<code>+</code> means add, <code>-</code> means subtract, <code>*</code> means times, and <code>/</code> means divide."
      },
      {
        "title": "Save the answer with a name.",
        "text": "In <code>const total = 12 + 4;</code>, JavaScript calculates 12 plus 4, then stores 16 under total."
      }
    ],
    "exampleDescription": "There are 12 energy points and a bonus of 4. JavaScript adds them, then shows the total.",
    "code": "const energy = 12;\nconst bonus = 4;\nconst total = energy + bonus;\nconsole.log(total);",
    "walkthrough": {
      "title": "An addition saved as a value",
      "code": "const total = 12 + 4;",
      "parts": [
        {
          "token": "const",
          "meaning": "Make a name that will remember the answer."
        },
        {
          "token": "total",
          "meaning": "The name we chose for the answer."
        },
        {
          "token": "=",
          "meaning": "Store the answer from the right side under total."
        },
        {
          "token": "12",
          "meaning": "The first number. No quotes means it can be used in math."
        },
        {
          "token": "+",
          "meaning": "The plus sign adds these two numbers."
        },
        {
          "token": "4",
          "meaning": "The second number. JavaScript works out 12 + 4 before it saves total."
        },
        {
          "token": ";",
          "meaning": "Finishes the instruction."
        }
      ]
    },
    "challengeTitle": "Share the coins",
    "challengeDescription": "Replace ____ with the math sign that splits 24 coins evenly between 3 friends. Then run the code.",
    "challengeCode": "const coins = 24;\nconst friends = 3;\nconst each = coins ____ friends;\nconsole.log(each);",
    "hint": "The sign for division is a forward slash: /.",
    "expectedOutput": "8",
    "funFact": "The percent sign <code>%</code> gives the remainder after a division. For example, <code>7 % 2</code> leaves 1.",
    "quiz": {
      "question": "Which sign means multiply in JavaScript?",
      "options": [
        "x",
        "*",
        "/"
      ],
      "answer": 1,
      "correct": "Correct. Use the asterisk * for multiplication.",
      "incorrect": "It is the star-shaped sign, not the letter x."
    }
  },
  {
    "id": "conditions",
    "short": "Make decisions",
    "topic": "IF THIS, THEN THAT",
    "title": "Teach your code<br class=\"heading-break\" /> <em>to choose.</em>",
    "intro": "Apps make choices all the time: a game checks whether you won, and a sign-in page checks whether your password is right. JavaScript can choose what to do with <strong>if</strong> and <strong>else</strong>.",
    "readTime": "7 min",
    "concept": "An if statement asks a yes-or-no question. If the answer is yes (true), one block runs. Otherwise (false), an optional else block can run instead.",
    "why": "Without choices, code would do the same thing every time. Conditions let your program react to the player, a score, or a button click.",
    "analogies": [
      {
        "icon": "🚦",
        "title": "A traffic light",
        "text": "If the light is green, go. Else—if it is not green—wait. The answer changes what you do."
      },
      {
        "icon": "☂",
        "title": "A rainy-day plan",
        "text": "If it is raining, take an umbrella. Otherwise, go without one."
      }
    ],
    "breakdown": [
      {
        "title": "Ask a question with a comparison.",
        "text": "For example, <code>score >= 10</code> asks “is score at least 10?” The answer will be true or false."
      },
      {
        "title": "Put the “yes” code in braces.",
        "text": "Write <code>if (score >= 10) { ... }</code>. The braces hold the instructions to run when the answer is true."
      },
      {
        "title": "Add an else for the other answer.",
        "text": "<code>else</code> means “if that was not true, do this instead.” It is optional if you do not need a second path."
      }
    ],
    "exampleDescription": "Try changing the score to a number below 10. The message will change because the answer to the question changes.",
    "code": "const score = 12;\n\nif (score >= 10) {\n  console.log(\"Level up!\");\n} else {\n  console.log(\"Keep playing!\");\n}",
    "walkthrough": {
      "title": "Two paths, one question",
      "code": "if (score >= 10) { console.log(\"Level up!\"); } else { console.log(\"Keep playing!\"); }",
      "parts": [
        {
          "token": "if",
          "meaning": "Starts a choice. JavaScript checks the question right after it."
        },
        {
          "token": "score >= 10",
          "meaning": "The question: is score greater than or equal to 10? It has a true or false answer."
        },
        {
          "token": ">=",
          "meaning": "Means “greater than or equal to.” This compares two numbers."
        },
        {
          "token": "{ ... }",
          "meaning": "The braces hold the code for the true path."
        },
        {
          "token": "else",
          "meaning": "Starts the other path, used when the question is false."
        },
        {
          "token": "console.log(...)",
          "meaning": "Shows the message for the path JavaScript chose."
        }
      ]
    },
    "challengeTitle": "Finish the score check",
    "challengeDescription": "Replace ____ with a comparison sign that means “10 or more.” Run it to see which message appears.",
    "challengeCode": "const score = 12;\nif (score ____ 10) {\n  console.log(\"Level up!\");\n} else {\n  console.log(\"Keep playing!\");\n}",
    "hint": "Use >=. It means greater than OR equal to. Do not use a single = here—that stores a value instead of asking a question.",
    "expectedOutput": "Level up!",
    "funFact": "JavaScript uses <code>===</code> to ask “are these exactly the same?” A single <code>=</code> stores a value; three equals signs compare values.",
    "quiz": {
      "question": "When does the code inside an if block run?",
      "options": [
        "When its question is true",
        "Every time",
        "Only when the page closes"
      ],
      "answer": 0,
      "correct": "Yes. The if block runs only when its question is true.",
      "incorrect": "The if block depends on the yes-or-no answer to its question."
    }
  },
  {
    "id": "loops",
    "short": "Repeat with loops",
    "topic": "DO IT AGAIN",
    "title": "Repeat the fun<br class=\"heading-break\" /> <em>without copy-paste.</em>",
    "intro": "If you need to do the same small job many times, you could copy and paste the code. A <strong>loop</strong> is a better way: it repeats the code for you.",
    "readTime": "8 min",
    "concept": "A for loop has a start, a question that decides whether to keep going, and an update that moves it toward stopping.",
    "why": "Loops save you from writing the same instruction over and over. They are useful for counting, showing each item in a list, or repeating a game action.",
    "analogies": [
      {
        "icon": "🔁",
        "title": "A song on repeat",
        "text": "The song plays, then starts again. The repeat setting keeps going until you turn it off."
      },
      {
        "icon": "🪜",
        "title": "Counting steps",
        "text": "Take a step, count it, and take another. Stop when you reach the top."
      }
    ],
    "breakdown": [
      {
        "title": "Set up a counter.",
        "text": "<code>let i = 1</code> creates a number called i. It starts at 1 so we can count each round."
      },
      {
        "title": "Say when to stop.",
        "text": "<code>i <= 3</code> means “keep going while i is 3 or less.” JavaScript checks this before each round."
      },
      {
        "title": "Move closer to the stop point.",
        "text": "<code>i++</code> adds one after each round. When i becomes 4, the question is false and the loop ends."
      }
    ],
    "exampleDescription": "This prints Round 1, Round 2, and Round 3. Change the stop number and run it again.",
    "code": "for (let i = 1; i <= 3; i++) {\n  console.log(`Round ${i}`);\n}",
    "walkthrough": {
      "title": "The three controls in a for loop",
      "code": "for (let i = 1; i <= 3; i++) { console.log(i); }",
      "parts": [
        {
          "token": "for",
          "meaning": "Starts a loop that repeats its body."
        },
        {
          "token": "let i = 1",
          "meaning": "The starting step. Create a counter i and set it to 1. This happens once."
        },
        {
          "token": ";",
          "meaning": "The first semicolon separates the starting step from the question."
        },
        {
          "token": "i <= 3",
          "meaning": "The question checked before each round. Keep going while i is 3 or less."
        },
        {
          "token": ";",
          "meaning": "The second semicolon separates the question from the update."
        },
        {
          "token": "i++",
          "meaning": "The update. Add one to i after each round so the loop can eventually stop."
        },
        {
          "token": "{ ... }",
          "meaning": "The loop body. These instructions run once each round."
        }
      ]
    },
    "challengeTitle": "Finish the counting loop",
    "challengeDescription": "Replace ____ so the loop prints 1, then 2, then 3. If the question stays true forever, a loop can get stuck—so keep the stopping point.",
    "challengeCode": "for (let i = 1; i ____ 3; i++) {\n  console.log(i);\n}",
    "hint": "Use <=, which means “less than or equal to.” The loop stops after i grows to 4.",
    "expectedOutput": "1\n2\n3",
    "funFact": "A loop that never reaches its stop point is called an infinite loop. The browser may appear frozen because it is busy repeating forever.",
    "quiz": {
      "question": "What does i++ do after one round of this loop?",
      "options": [
        "Adds 1 to i",
        "Turns i into text",
        "Stops the program"
      ],
      "answer": 0,
      "correct": "Exactly. i++ adds one, helping the loop count toward its stop point.",
      "incorrect": "The two plus signs mean increase the number by one."
    }
  },
  {
    "id": "functions",
    "short": "Build a function",
    "topic": "SAVE A SET OF STEPS",
    "title": "Give a task<br class=\"heading-break\" /> <em>a name.</em>",
    "intro": "A <strong>function</strong> is a small set of instructions that you can save under a name and use whenever you need it. Write the steps once, then ask the function to do them.",
    "readTime": "8 min",
    "concept": "A function can receive information, do a job, and give an answer back. The names inside its parentheses are temporary labels for the information it receives.",
    "why": "Functions keep code from being copied everywhere. If you need the same job in ten places, call one function ten times instead of writing the steps ten times.",
    "analogies": [
      {
        "icon": "⚙",
        "title": "A button on a machine",
        "text": "Press the button and the machine follows the steps it already knows. Call a function and it follows its saved steps."
      },
      {
        "icon": "🍲",
        "title": "A recipe card",
        "text": "A recipe is written once. You can follow it again, perhaps with a different name or ingredient each time."
      }
    ],
    "breakdown": [
      {
        "title": "Define the steps.",
        "text": "<code>function greet(name) { ... }</code> creates a function named greet. Defining it saves the instructions; it does not run them yet."
      },
      {
        "title": "Give it information.",
        "text": "The word <code>name</code> in the parentheses is a parameter—a temporary name for information the function receives."
      },
      {
        "title": "Call it and get an answer.",
        "text": "<code>greet(\"Mina\")</code> runs the function. <code>return</code> sends the answer back so another line can use it."
      }
    ],
    "exampleDescription": "First we define greet. Then we call it with the name Ada and print the answer it returns.",
    "code": "function greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconst message = greet(\"Ada\");\nconsole.log(message);",
    "walkthrough": {
      "title": "Define a reusable greeting",
      "code": "function greet(name) { return `Hello, ${name}!`; }",
      "parts": [
        {
          "token": "function",
          "meaning": "Tells JavaScript that we are defining a function."
        },
        {
          "token": "greet",
          "meaning": "The function’s name. We use this name later to run the saved steps."
        },
        {
          "token": "(name)",
          "meaning": "The information the function can receive. name is a temporary label for it."
        },
        {
          "token": "{ ... }",
          "meaning": "The instructions that belong to this function."
        },
        {
          "token": "return",
          "meaning": "Gives an answer back to the code that called the function."
        },
        {
          "token": "`Hello, ${name}!`",
          "meaning": "Builds a sentence by putting the received name into the template string."
        }
      ]
    },
    "challengeTitle": "Make a double helper",
    "challengeDescription": "Replace ____ with the math sign for times. The function should return twice the number. Run it to see double(4).",
    "challengeCode": "function double(number) {\n  return number ____ 2;\n}\nconsole.log(double(4));",
    "hint": "The multiplication sign in JavaScript is *. The function gives its answer back with return.",
    "expectedOutput": "8",
    "funFact": "A function can return a value without printing it. Printing shows something in the console; return hands a value back so the rest of your code can use it.",
    "quiz": {
      "question": "What does return do in a function?",
      "options": [
        "Shows a message on the webpage",
        "Gives an answer back to the code that called the function",
        "Repeats the function"
      ],
      "answer": 1,
      "correct": "Yes. return gives the function’s answer back to its caller.",
      "incorrect": "Think of return as handing the answer back—not printing it."
    }
  },
  {
    "id": "arrays",
    "short": "Arrays & lists",
    "topic": "KEEP A LIST",
    "title": "Put favorites<br class=\"heading-break\" /> <em>in a list.</em>",
    "intro": "When you have several related things—songs, snacks, or scores—an <strong>array</strong> keeps them together in an ordered list.",
    "readTime": "8 min",
    "concept": "Write an array with square brackets and put commas between its items. Each item has a numbered position called an index. The first index is 0.",
    "why": "A list lets you work with many things using one name. You can add a new item, ask how many there are, or get an item by its position.",
    "analogies": [
      {
        "icon": "🎧",
        "title": "A music queue",
        "text": "Songs are lined up in order. Add another song at the end or pick one by its spot in the queue."
      },
      {
        "icon": "🧺",
        "title": "A row of baskets",
        "text": "Each basket has a place in the row. Computers start counting places at zero, so the first basket is spot 0."
      }
    ],
    "breakdown": [
      {
        "title": "Use square brackets.",
        "text": "<code>[\"mango\", \"popcorn\"]</code> is a list with two text items. The commas separate the items."
      },
      {
        "title": "Remember that counting starts at 0.",
        "text": "<code>snacks[0]</code> gets the first item. <code>snacks[1]</code> gets the second."
      },
      {
        "title": "Add an item with push.",
        "text": "<code>snacks.push(\"cookies\")</code> adds cookies to the end. <code>snacks.length</code> tells you how many items are in the list."
      }
    ],
    "exampleDescription": "push adds cookies to the end of the list. Index 0 still points to the first snack.",
    "code": "const snacks = [\"mango\", \"popcorn\"];\nsnacks.push(\"cookies\");\nconsole.log(snacks[0]);\nconsole.log(snacks.length);",
    "walkthrough": {
      "title": "A list stored in one variable",
      "code": "const snacks = [\"mango\", \"popcorn\"];",
      "parts": [
        {
          "token": "const snacks",
          "meaning": "One name, snacks, holds the whole list."
        },
        {
          "token": "=",
          "meaning": "Stores the list on the right under the name snacks."
        },
        {
          "token": "[ ... ]",
          "meaning": "Square brackets mean “this is an array,” or list."
        },
        {
          "token": "\"mango\"",
          "meaning": "The first item. Its position number (index) is 0."
        },
        {
          "token": ",",
          "meaning": "A comma separates one item from the next."
        },
        {
          "token": "\"popcorn\"",
          "meaning": "The second item. Its index is 1."
        },
        {
          "token": ";",
          "meaning": "Finishes the statement."
        }
      ]
    },
    "challengeTitle": "Add one more song",
    "challengeDescription": "Replace ____ with the array method that adds something to the end. Then print the item at index 3.",
    "challengeCode": "const songs = [\"Sunbeam\", \"Orbit\", \"Daydream\"];\nsongs.____(\"Moonlight\");\nconsole.log(songs[3]);",
    "hint": "The method is called push. The first song is at index 0, so the fourth one is at index 3.",
    "expectedOutput": "Moonlight",
    "funFact": "Arrays have handy built-in methods such as <code>push</code> (add to the end) and <code>pop</code> (remove the last item).",
    "quiz": {
      "question": "What number is the first item’s index?",
      "options": [
        "0",
        "1",
        "-1"
      ],
      "answer": 0,
      "correct": "Correct. JavaScript arrays start counting at index 0.",
      "incorrect": "JavaScript starts array positions at zero, not one."
    }
  },
  {
    "id": "objects",
    "short": "Objects & details",
    "topic": "DESCRIBE ONE THING",
    "title": "Keep a thing’s details<br class=\"heading-break\" /> <em>together.</em>",
    "intro": "An <strong>object</strong> is a group of labeled details about one thing. A pet might have a name, a mood, and an age—all kept together under one name.",
    "readTime": "8 min",
    "concept": "Each detail has a label (called a key) and information beside it (called a value). You can read or change a detail by using its label.",
    "why": "Objects keep related information together. Instead of separate names like petName, petMood, and petAge, put the details in one pet object.",
    "analogies": [
      {
        "icon": "🪪",
        "title": "A character card",
        "text": "A card can list a character’s name, level, and favorite color. Each label tells you what the detail means."
      },
      {
        "icon": "🗄",
        "title": "A labeled drawer",
        "text": "A drawer marked “mood” helps you find the mood. An object’s keys are labels for its details."
      }
    ],
    "breakdown": [
      {
        "title": "Start with curly braces.",
        "text": "Curly braces <code>{ }</code> mark the beginning and end of an object."
      },
      {
        "title": "Write a label, colon, and value.",
        "text": "In <code>name: \"Mochi\"</code>, name is the label and \"Mochi\" is the value stored under it. A comma separates it from the next detail."
      },
      {
        "title": "Use a dot to reach a detail.",
        "text": "<code>pet.name</code> means “get the name detail from pet.” You can update it with <code>pet.mood = \"playful\"</code>."
      }
    ],
    "exampleDescription": "The pet object keeps a name and mood together. The dot lets us change the mood and then read the name.",
    "code": "const pet = {\n  name: \"Mochi\",\n  mood: \"sleepy\"\n};\n\npet.mood = \"playful\";\nconsole.log(pet.name, pet.mood);",
    "walkthrough": {
      "title": "A pet’s labeled details",
      "code": "const pet = { name: \"Mochi\", mood: \"sleepy\" };",
      "parts": [
        {
          "token": "const pet",
          "meaning": "The name pet will hold this group of details."
        },
        {
          "token": "{ ... }",
          "meaning": "Curly braces create the object and hold its details."
        },
        {
          "token": "name",
          "meaning": "A key: the label for the first detail."
        },
        {
          "token": ":",
          "meaning": "The colon connects the label to its value. Read it as “name is Mochi.”"
        },
        {
          "token": "\"Mochi\"",
          "meaning": "The value stored for name. Quotes make it text."
        },
        {
          "token": ",",
          "meaning": "Separates the name detail from the mood detail."
        },
        {
          "token": ";",
          "meaning": "Finishes the instruction that creates the object."
        }
      ]
    },
    "challengeTitle": "Change the pet’s mood",
    "challengeDescription": "Type two lines: change pet.mood to \"playful\", then print pet.mood. Run your code to see the new value.",
    "challengeCode": "const pet = { name: \"Mochi\", mood: \"sleepy\" };\n// Type your two lines below this comment\n",
    "hint": "Write pet.mood = \"playful\"; to change the detail. Then use console.log(pet.mood); to show it.",
    "expectedOutput": "playful",
    "funFact": "Arrays are objects too in JavaScript. They have special list behaviors, but they can also have properties such as <code>length</code>.",
    "quiz": {
      "question": "How do you read the name detail from pet?",
      "options": [
        "pet.name",
        "pet(name)",
        "pet → name"
      ],
      "answer": 0,
      "correct": "Yes. A dot followed by the detail label reads that property.",
      "incorrect": "Use the object name, a dot, then the detail label."
    }
  }
];

  const defaultMainCode = lessons.find((lesson) => lesson.id === 'variables').code;

  const STARTER_FILES = [
    {
      name: 'main.js',
      content: defaultMainCode,
      starter: defaultMainCode
    },
    {
      name: 'helpers.js',
      content: '// A second file for your next experiment.\n// In main.js, try: const { double } = require("./helpers.js");\n\nfunction double(number) {\n  return number * 2;\n}\n\nmodule.exports = { double };',
      starter: '// A second file for your next experiment.\n// In main.js, try: const { double } = require("./helpers.js");\n\nfunction double(number) {\n  return number * 2;\n}\n\nmodule.exports = { double };'
    }
  ];

  const STORAGE_KEY = 'kodelearnjs-workspace-v1';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const clone = (value) => JSON.parse(JSON.stringify(value));
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);

  const freshState = () => ({
    lessonIndex: 0,
    completed: [],
    xp: 0,
    quizAnswers: {},
    quizSolved: [],
    exerciseDrafts: {},
    files: clone(STARTER_FILES),
    activeFile: 'main.js',
    mode: 'learn'
  });

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return freshState();
      const saved = JSON.parse(raw);
      const files = Array.isArray(saved.files)
        ? saved.files.filter((file) => file && typeof file.name === 'string' && typeof file.content === 'string')
          .map((file) => ({ name: normalizeFileName(file.name) || 'untitled.js', content: file.content.slice(0, 200000), starter: typeof file.starter === 'string' ? file.starter.slice(0, 200000) : '' }))
          .filter((file, index, all) => all.findIndex((entry) => entry.name === file.name) === index)
          .slice(0, 50)
        : [];
      const safeLessonIndex = Number.isInteger(saved.lessonIndex) ? Math.max(0, Math.min(lessons.length - 1, saved.lessonIndex)) : 0;
      const activeFile = files.some((file) => file.name === saved.activeFile) ? saved.activeFile : (files[0]?.name || 'main.js');
      const completed = Array.isArray(saved.completed) ? saved.completed.filter((id) => lessons.some((lesson) => lesson.id === id)) : [];
      const quizAnswers = saved.quizAnswers && typeof saved.quizAnswers === 'object' ? saved.quizAnswers : {};
      const quizSolved = Array.isArray(saved.quizSolved) ? saved.quizSolved.filter((id) => lessons.some((lesson) => lesson.id === id)) : [];
      const exerciseDrafts = {};
      if (saved.exerciseDrafts && typeof saved.exerciseDrafts === 'object') {
        for (const lesson of lessons) {
          const draft = saved.exerciseDrafts[lesson.id];
          if (typeof draft === 'string') exerciseDrafts[lesson.id] = draft.slice(0, 50000);
        }
      }
      return {
        lessonIndex: safeLessonIndex,
        completed: [...new Set(completed)],
        xp: Number.isFinite(saved.xp) ? Math.max(0, Math.floor(saved.xp)) : 0,
        quizAnswers,
        quizSolved: [...new Set(quizSolved)],
        exerciseDrafts,
        files: files.length ? files : clone(STARTER_FILES),
        activeFile,
        mode: saved.mode === 'playground' ? 'playground' : 'learn'
      };
    } catch (error) {
      return freshState();
    }
  }

  let state = loadState();
  let saveTimer = null;
  let toastTimer = null;
  let modalMode = 'add';
  let hintVisibleFor = '';
  let currentRunToken = '';
  let currentRunTarget = null;
  let renderedLessonId = null;
  let runButtonTimer = null;
  let exerciseRunTimer = null;
  let exerciseOutputCount = 0;
  let visualScore = 0;
  let visualBranchScore = 12;
  let visualFunctionInput = 4;
  let visualPetIsPlayful = false;
  let loopAnimationTimer = null;

  const els = {
    app: $('.main-area'),
    sidebar: $('#sidebar'),
    menuToggle: $('#menuToggle'),
    closeSidebar: $('#closeSidebar'),
    mobileScrim: $('#mobileScrim'),
    lessonNav: $('#lessonNav'),
    breadcrumbStep: $('#breadcrumbStep'),
    readTime: $('#readTime'),
    lessonTopic: $('#lessonTopic'),
    lessonTitle: $('#lessonTitle'),
    lessonIntro: $('#lessonIntro'),
    lessonConcept: $('#lessonConcept'),
    lessonWhy: $('#lessonWhy'),
    engineDetails: $('#engineDetails'),
    engineTermGrid: $('#engineTermGrid'),
    analogyGrid: $('#analogyGrid'),
    visualizationTitle: $('#visualizationTitle'),
    visualizationCaption: $('#visualizationCaption'),
    visualizationStage: $('#visualizationStage'),
    breakdownList: $('#breakdownList'),
    exampleDescription: $('#exampleDescription'),
    exampleCode: $('#exampleCode'),
    walkthroughHeading: $('#walkthroughHeading'),
    walkthroughCode: $('#walkthroughCode'),
    walkthroughParts: $('#walkthroughParts'),
    challengeTitle: $('#challengeTitle'),
    challengeDescription: $('#challengeDescription'),
    challengeEditor: $('#challengeEditor'),
    expectedOutput: $('#expectedOutput'),
    exerciseOutput: $('#exerciseOutput'),
    practiceRunState: $('#practiceRunState'),
    runExerciseButton: $('#runExerciseButton'),
    resetExerciseButton: $('#resetExerciseButton'),
    hintButton: $('#hintButton'),
    hintBox: $('#hintBox'),
    funFact: $('#funFact'),
    quizQuestion: $('#quizQuestion'),
    quizOptions: $('#quizOptions'),
    quizFeedback: $('#quizFeedback'),
    previousLessonButton: $('#previousLessonButton'),
    completeLessonButton: $('#completeLessonButton'),
    completeButtonText: $('#completeButtonText'),
    progressText: $('#progressText'),
    progressBar: $('#progressBar'),
    xpTotal: $('#xpTotal'),
    streakLabel: $('#streakLabel'),
    fileStrip: $('#fileStrip'),
    mobileFileCount: $('#mobileFileCount'),
    downloadFileCount: $('#downloadFileCount'),
    activeFileName: $('#activeFileName'),
    entryTag: $('#entryTag'),
    codeEditor: $('#codeEditor'),
    highlightedCode: $('#highlightedCode'),
    lineGutter: $('#lineGutter'),
    runButton: $('#runButton'),
    consoleOutput: $('#consoleOutput'),
    saveStatus: $('#saveStatus'),
    fileModalBackdrop: $('#fileModalBackdrop'),
    fileModalTitle: $('#fileModalTitle'),
    fileModalDescription: $('#fileModalDescription'),
    fileNameInput: $('#fileNameInput'),
    fileNameError: $('#fileNameError'),
    fileModalForm: $('#fileModalForm'),
    submitFileModal: $('#submitFileModal'),
    toast: $('#toast'),
    toastMessage: $('#toastMessage'),
    runnerFrame: $('#runnerFrame')
  };

  function normalizeFileName(input) {
    if (typeof input !== 'string') return null;
    let base = input.trim().replaceAll(String.fromCharCode(92), '/').split('/').pop() || '';
    if (base.toLowerCase().endsWith('.js')) base = base.slice(0, -3);
    base = base.replace(/[^a-zA-Z0-9._-]+/g, '-').slice(0, 36);
    while (base.startsWith('.')) base = base.slice(1);
    while (base.endsWith('.') || base.endsWith('-')) base = base.slice(0, -1);
    if (!base || base === '.' || base === '..') return null;
    return `${base}.js`;
  }

  function persistState(showSaved = false) {
    clearTimeout(saveTimer);
    if (showSaved) els.saveStatus.textContent = 'Saving…';
    saveTimer = setTimeout(() => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        els.saveStatus.textContent = 'Saved';
      } catch (error) {
        els.saveStatus.textContent = 'Local only';
      }
    }, 180);
  }

  function fileByName(name) {
    return state.files.find((file) => file.name === name);
  }

  function currentFile() {
    return fileByName(state.activeFile) || state.files[0] || null;
  }

  function activeLesson() {
    return lessons[state.lessonIndex];
  }

  function showToast(message) {
    els.toastMessage.textContent = message;
    els.toast.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove('is-visible'), 2800);
  }

  function setMode(mode) {
    state.mode = mode === 'playground' ? 'playground' : 'learn';
    els.app.dataset.mode = state.mode;
    const isPlayground = state.mode === 'playground';
    $('#learnModeButton').classList.toggle('is-selected', !isPlayground);
    $('#playModeButton').classList.toggle('is-selected', isPlayground);
    $('#learnModeButton').setAttribute('aria-selected', String(!isPlayground));
    $('#playModeButton').setAttribute('aria-selected', String(isPlayground));
    persistState();
  }

  function openSidebar() {
    document.body.classList.add('menu-open');
    els.mobileScrim.hidden = false;
    els.menuToggle.setAttribute('aria-expanded', 'true');
  }

  function closeSidebar() {
    document.body.classList.remove('menu-open');
    els.mobileScrim.hidden = true;
    els.menuToggle.setAttribute('aria-expanded', 'false');
  }

  function renderSidebar() {
    els.lessonNav.innerHTML = lessons.map((lesson, index) => {
      const completed = state.completed.includes(lesson.id);
      const current = index === state.lessonIndex;
      const node = completed
        ? '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m3.5 8.5 3 3 6-7"/></svg>'
        : String(index + 1).padStart(2, '0');
      return `<button class="lesson-nav-item${current ? ' is-current' : ''}${completed ? ' is-complete' : ''}" type="button" data-lesson-index="${index}"${current ? ' aria-current="step"' : ''}>
        <span class="lesson-node">${node}</span><span class="lesson-nav-copy"><span class="lesson-nav-title">${escapeHTML(lesson.short)}</span><span class="lesson-nav-subtitle">${escapeHTML(lesson.topic.toLowerCase().replace(/^the /, ''))}</span></span>${current ? '<span class="nav-current-dot"></span>' : ''}
      </button>`;
    }).join('');

    const completedCount = state.completed.length;
    els.progressText.textContent = `${completedCount} / ${lessons.length}`;
    els.progressBar.style.width = `${Math.round((completedCount / lessons.length) * 100)}%`;
    els.xpTotal.textContent = String(state.xp);
    els.streakLabel.textContent = state.xp > 0 ? '1 day streak' : 'Start a streak';
  }

  function highlightCode(code) {
    const source = String(code);
    const keywords = new Set(['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'do', 'new', 'class', 'extends', 'import', 'from', 'export', 'default', 'throw', 'try', 'catch', 'finally', 'break', 'continue', 'switch', 'case', 'typeof', 'instanceof', 'in', 'of', 'async', 'await', 'this']);
    const literals = new Set(['true', 'false', 'null', 'undefined', 'NaN', 'Infinity']);
    const builtins = new Set(['console', 'Math', 'JSON', 'Date', 'Array', 'Object', 'String', 'Number', 'Boolean', 'Promise', 'Error']);
    const isWordStart = (char) => !!char && ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || char === '_' || char === '$');
    const isWordPart = (char) => isWordStart(char) || (!!char && char >= '0' && char <= '9');
    const wrap = (kind, value) => `<span class="${kind}">${escapeHTML(value)}</span>`;
    let result = '';
    let index = 0;

    while (index < source.length) {
      const char = source[index];
      if (source.startsWith('//', index)) {
        let end = source.indexOf('\n', index);
        if (end < 0) end = source.length;
        result += wrap('syntax-comment', source.slice(index, end));
        index = end;
        continue;
      }
      if (source.startsWith('/*', index)) {
        let end = source.indexOf('*/', index + 2);
        end = end < 0 ? source.length : end + 2;
        result += wrap('syntax-comment', source.slice(index, end));
        index = end;
        continue;
      }
      if (char === '"' || char === "'" || char === '`') {
        let end = index + 1;
        while (end < source.length) {
          if (source.charCodeAt(end) === 92) { end += 2; continue; }
          if (source[end] === char) { end += 1; break; }
          end += 1;
        }
        result += wrap('syntax-string', source.slice(index, end));
        index = end;
        continue;
      }
      if (char >= '0' && char <= '9') {
        let end = index + 1;
        while (end < source.length && source[end] >= '0' && source[end] <= '9') end += 1;
        if (source[end] === '.' && source[end + 1] >= '0' && source[end + 1] <= '9') {
          end += 1;
          while (end < source.length && source[end] >= '0' && source[end] <= '9') end += 1;
        }
        result += wrap('syntax-number', source.slice(index, end));
        index = end;
        continue;
      }
      if (isWordStart(char)) {
        let end = index + 1;
        while (isWordPart(source[end])) end += 1;
        const word = source.slice(index, end);
        let next = end;
        while (source[next] === ' ' || source[next] === '\t' || source[next] === '\n' || source[next] === '\r') next += 1;
        let kind = '';
        if (keywords.has(word)) kind = 'syntax-keyword';
        else if (literals.has(word)) kind = 'syntax-literal';
        else if (builtins.has(word)) kind = 'syntax-builtin';
        else if (source[next] === '(') kind = 'syntax-function';
        result += kind ? wrap(kind, word) : escapeHTML(word);
        index = end;
        continue;
      }
      if ('+-*/%=<>!&|?:.'.includes(char)) result += wrap('syntax-operator', char);
      else result += escapeHTML(char);
      index += 1;
    }
    return result;
  }

  function renderVisualization(lesson) {
    const visualizations = {
      'how-js-works': {
        title: 'See the console speak',
        caption: 'Both methods show messages in a console. A normal log is for information; a warning is a yellow heads-up.',
        markup: `<div class="console-samples" role="img" aria-label="console.log shows a normal message, while console.warn shows a yellow warning">
          <article class="console-sample"><div class="console-sample-code"><span class="console-kind">LOG</span><code>console.log("Ready!");</code></div><div class="console-sample-result"><span>›</span> Ready!</div></article>
          <article class="console-sample is-warning"><div class="console-sample-code"><span class="console-kind">WARN</span><code>console.warn("Check this");</code></div><div class="console-sample-result"><span>⚠</span> Check this</div></article>
        </div><div class="console-later-note"><span aria-hidden="true">!</span><p><strong>For later:</strong> <code>console.warn(...)</code> highlights a message that needs attention. It is a warning, not always a crash. You will see it in the Playground too.</p></div>`
      },
      variables: {
        title: 'A steady name and a changing name',
        caption: 'A player name usually stays the same, so use const. A score changes as you play, so use let.',
        markup: `<div class="memory-visual">
          <article class="memory-slot is-steady"><div class="memory-slot-head"><span>const</span><code>playerName</code><b aria-hidden="true">▣</b></div><div class="memory-value">"Mina"</div><small>Keep this value</small></article>
          <article class="memory-slot is-changing"><div class="memory-slot-head"><span>let</span><code>score</code><b aria-hidden="true">↻</b></div><div class="memory-value" id="visualScore">0</div><small>This one can change</small></article>
        </div><div class="visual-action-row"><code>score = score + 1</code><button type="button" class="visual-action-button" data-visual-action="score-up">Add 1 point</button><span class="visual-action-result" id="visualScoreTrail">score starts at 0</span></div>`
      },
      values: {
        title: 'Same-looking values, different jobs',
        caption: 'Quotes turn 42 into text. Without quotes it is a number, so JavaScript can do math with it.',
        markup: `<div class="value-type-visual">
          <article class="value-type-card is-number"><span>NUMBER</span><strong>42</strong><small>Good for counting and math</small></article>
          <article class="value-type-card is-string"><span>STRING · TEXT</span><strong>"42"</strong><small>Quotes make it text</small></article>
          <article class="value-type-card is-boolean"><span>BOOLEAN · YES/NO</span><strong>true</strong><small>A yes-or-no answer</small></article>
        </div><div class="type-result-visual"><div><code>42 + 2</code><strong>44</strong></div><span>but</span><div><code>"42" + 2</code><strong>"422"</strong></div></div>`
      },
      strings: {
        title: 'Build a message from little pieces',
        caption: 'The variable name stands for its saved value. Put the pieces together and you get one complete sentence.',
        markup: `<div class="string-build-visual"><div class="string-piece"><span>TEXT</span><code>"Hello, "</code></div><b>+</b><div class="string-piece is-variable"><span>VALUE OF name</span><code>"Kai"</code></div><b>+</b><div class="string-piece"><span>TEXT</span><code>"!"</code></div><i>→</i><div class="string-result"><span>ONE STRING</span><strong>Hello, Kai!</strong></div></div><div class="visual-note-line">A string is text. The plus sign joins text pieces together.</div>`
      },
      numbers: {
        title: 'Watch the math happen',
        caption: 'JavaScript calculates the answer on the right side of the equals sign, then saves it under total.',
        markup: `<div class="math-visual"><div class="math-number">12<small>energy</small></div><div class="math-operator">+</div><div class="math-number">4<small>bonus</small></div><div class="math-equals">=</div><div class="math-number is-answer">16<small>total</small></div></div><div class="math-operator-key"><span>+ add</span><span>− subtract</span><span>× multiply (<code>*</code>)</span><span>÷ divide (<code>/</code>)</span></div>`
      },
      conditions: {
        title: 'One question picks one path',
        caption: 'Try changing the score. The answer changes, so JavaScript chooses a different message.',
        markup: `<div class="decision-visual"><div class="decision-question"><span>THE QUESTION</span><code>score &gt;= 10?</code><strong id="visualBranchAnswer">12 → true</strong></div><div class="decision-branches"><article class="decision-branch is-active" id="visualTrueBranch"><span>IF YES · TRUE</span><strong>Level up!</strong></article><article class="decision-branch" id="visualFalseBranch"><span>ELSE · FALSE</span><strong>Keep playing!</strong></article></div><button type="button" class="visual-action-button" data-visual-action="toggle-score">Try score 4</button></div>`
      },
      loops: {
        title: 'One instruction, three repeats',
        caption: 'The counter moves 1 → 2 → 3. After 3, the question is false, so the loop stops.',
        markup: `<div class="loop-visual"><div class="loop-track"><article class="loop-round"><span>ROUND 1</span><strong>i = 1</strong><small>print 1</small></article><b>→</b><article class="loop-round"><span>ROUND 2</span><strong>i = 2</strong><small>print 2</small></article><b>→</b><article class="loop-round"><span>ROUND 3</span><strong>i = 3</strong><small>print 3</small></article><b>→</b><article class="loop-stop"><span>i = 4</span><strong>Stop</strong><small>4 is not ≤ 3</small></article></div><button type="button" class="visual-action-button" data-visual-action="replay-loop">Replay the loop</button></div>`
      },
      functions: {
        title: 'A function takes in, works, and gives back',
        caption: 'double receives a number, multiplies it by 2, then returns the answer to the code that called it.',
        markup: `<div class="function-flow-visual"><div class="function-value"><span>INPUT</span><strong id="visualFunctionInput">4</strong></div><b>→</b><div class="function-machine"><span>FUNCTION</span><code>double(number)</code><small>number × 2</small></div><b>→</b><div class="function-value is-result"><span>RETURN</span><strong id="visualFunctionResult">8</strong></div></div><button type="button" class="visual-action-button" data-visual-action="function-input">Try another number</button>`
      },
      arrays: {
        title: 'An array is a numbered list',
        caption: 'The first item is at index 0—not 1. Each tile shows the position you use to get that item.',
        markup: `<div class="array-visual"><div class="array-bracket">[</div><article class="array-item"><span>INDEX 0</span><strong>"mango"</strong></article><article class="array-item"><span>INDEX 1</span><strong>"popcorn"</strong></article><article class="array-item"><span>INDEX 2</span><strong>"cookies"</strong></article><div class="array-bracket">]</div></div><div class="visual-note-line"><code>snacks[0]</code> gives you <strong>"mango"</strong>, the first item.</div>`
      },
      objects: {
        title: 'An object is a card of labeled details',
        caption: 'Each label points to one value. Click the button to update the mood and see the value change.',
        markup: `<div class="object-visual"><div class="object-card"><div class="object-card-title"><span aria-hidden="true">✦</span> pet</div><div class="object-property"><code>name</code><span>:</span><strong>"Mochi"</strong></div><div class="object-property"><code>mood</code><span>:</span><strong id="visualPetMood">"sleepy"</strong></div></div><button type="button" class="visual-action-button" data-visual-action="toggle-mood">Change mood</button></div>`
      }
    };
    const visual = visualizations[lesson.id];
    if (!visual) return;
    els.visualizationTitle.textContent = visual.title;
    els.visualizationCaption.textContent = visual.caption;
    els.visualizationStage.innerHTML = visual.markup;
    visualScore = 0;
    visualBranchScore = 12;
    visualFunctionInput = 4;
    visualPetIsPlayful = false;
    clearTimeout(loopAnimationTimer);
  }

  function handleVisualizationAction(event) {
    const button = event.target.closest('[data-visual-action]');
    if (!button) return;
    const action = button.dataset.visualAction;
    if (action === 'score-up') {
      visualScore += 1;
      $('#visualScore').textContent = String(visualScore);
      $('#visualScoreTrail').textContent = `score is now ${visualScore}`;
      return;
    }
    if (action === 'toggle-score') {
      visualBranchScore = visualBranchScore >= 10 ? 4 : 12;
      const passes = visualBranchScore >= 10;
      $('#visualBranchAnswer').textContent = `${visualBranchScore} → ${passes ? 'true' : 'false'}`;
      $('#visualTrueBranch').classList.toggle('is-active', passes);
      $('#visualFalseBranch').classList.toggle('is-active', !passes);
      button.textContent = passes ? 'Try score 4' : 'Try score 12';
      return;
    }
    if (action === 'replay-loop') {
      const track = $('.loop-track', els.visualizationStage);
      track.classList.remove('is-running');
      void track.offsetWidth;
      track.classList.add('is-running');
      clearTimeout(loopAnimationTimer);
      loopAnimationTimer = setTimeout(() => track.classList.remove('is-running'), 1800);
      return;
    }
    if (action === 'function-input') {
      visualFunctionInput = visualFunctionInput >= 6 ? 2 : visualFunctionInput + 1;
      $('#visualFunctionInput').textContent = String(visualFunctionInput);
      $('#visualFunctionResult').textContent = String(visualFunctionInput * 2);
      return;
    }
    if (action === 'toggle-mood') {
      visualPetIsPlayful = !visualPetIsPlayful;
      $('#visualPetMood').textContent = visualPetIsPlayful ? '"playful"' : '"sleepy"';
      button.textContent = visualPetIsPlayful ? 'Make Mochi sleepy' : 'Change mood';
    }
  }

  function renderLesson() {
    const lesson = activeLesson();
    const lessonChanged = renderedLessonId !== lesson.id;
    if (lessonChanged) {
      currentRunToken = '';
      currentRunTarget = null;
      setRunButtonRunning(false);
      setExerciseRunning(false);
      renderedLessonId = lesson.id;
    }
    const step = String(state.lessonIndex + 1).padStart(2, '0');
    els.breadcrumbStep.textContent = `STEP ${step}`;
    els.readTime.textContent = lesson.readTime;
    els.lessonTopic.textContent = lesson.topic;
    els.lessonTitle.innerHTML = lesson.title;
    els.lessonIntro.innerHTML = lesson.intro;
    els.lessonConcept.innerHTML = lesson.concept;
    els.lessonWhy.textContent = lesson.why;
    els.engineDetails.hidden = !lesson.engineTerms;
    els.engineTermGrid.innerHTML = (lesson.engineTerms || []).map((item, index) => `<article class="engine-term-card"><span class="engine-term-number">${String(index + 1).padStart(2, '0')}</span><div><strong>${escapeHTML(item.term)}</strong><p>${escapeHTML(item.meaning)}</p></div></article>`).join('');
    els.analogyGrid.innerHTML = lesson.analogies.map((analogy) => `<article class="analogy-card"><div class="analogy-symbol" aria-hidden="true">${analogy.icon}</div><div class="analogy-copy"><strong>${analogy.title}</strong><p>${analogy.text}</p></div></article>`).join('');
    if (lessonChanged) renderVisualization(lesson);
    els.breakdownList.innerHTML = lesson.breakdown.map((item, index) => `<article class="breakdown-item"><div class="breakdown-number">${String(index + 1).padStart(2, '0')}</div><div class="breakdown-copy"><strong>${item.title}</strong><p>${item.text}</p></div></article>`).join('');
    els.exampleDescription.innerHTML = lesson.exampleDescription;
    els.exampleCode.innerHTML = highlightCode(lesson.code);
    els.walkthroughHeading.textContent = lesson.walkthrough.title;
    els.walkthroughCode.innerHTML = highlightCode(lesson.walkthrough.code);
    els.walkthroughParts.innerHTML = lesson.walkthrough.parts.map((part, index) => `<article class="walkthrough-part"><div class="walkthrough-token-wrap"><span class="walkthrough-part-number">${String(index + 1).padStart(2, '0')}</span><code class="walkthrough-token">${escapeHTML(part.token)}</code></div><p>${escapeHTML(part.meaning)}</p></article>`).join('');
    els.challengeTitle.textContent = lesson.challengeTitle;
    els.challengeDescription.textContent = lesson.challengeDescription;
    els.challengeEditor.value = typeof state.exerciseDrafts[lesson.id] === 'string' ? state.exerciseDrafts[lesson.id] : lesson.challengeCode;
    els.expectedOutput.textContent = lesson.expectedOutput;
    if (lessonChanged) {
      clearExerciseOutput();
      els.practiceRunState.textContent = 'Waiting for your code';
      $('.expected-details').open = false;
    }
    els.hintButton.textContent = hintVisibleFor === lesson.id ? 'Hide hint' : 'Need a hint?';
    els.hintBox.hidden = hintVisibleFor !== lesson.id;
    els.hintBox.textContent = lesson.hint;
    autosizeChallengeEditor();
    els.funFact.innerHTML = lesson.funFact;
    els.quizQuestion.innerHTML = lesson.quiz.question;

    const previousAnswer = state.quizAnswers[lesson.id];
    const solved = state.quizSolved.includes(lesson.id);
    els.quizOptions.innerHTML = lesson.quiz.options.map((option, index) => {
      let className = 'quiz-option';
      if (solved && index === lesson.quiz.answer) className += ' is-correct';
      else if (!solved && previousAnswer === index && index !== lesson.quiz.answer) className += ' is-wrong';
      const disabled = solved ? ' disabled' : '';
      return `<button class="${className}" type="button" data-answer-index="${index}"${disabled}><span class="option-key">${String.fromCharCode(65 + index)}</span><span>${option}</span><span class="option-check" aria-hidden="true">✓</span></button>`;
    }).join('');
    if (solved) {
      els.quizFeedback.className = 'quiz-feedback';
      els.quizFeedback.innerHTML = `✦ ${lesson.quiz.correct}`;
    } else if (Number.isInteger(previousAnswer) && previousAnswer !== lesson.quiz.answer) {
      els.quizFeedback.className = 'quiz-feedback is-wrong';
      els.quizFeedback.textContent = lesson.quiz.incorrect;
    } else {
      els.quizFeedback.className = 'quiz-feedback';
      els.quizFeedback.textContent = '';
    }

    const completed = state.completed.includes(lesson.id);
    els.previousLessonButton.disabled = state.lessonIndex === 0;
    els.completeLessonButton.classList.toggle('is-complete', completed);
    els.completeButtonText.textContent = completed
      ? (state.lessonIndex === lessons.length - 1 ? 'Course complete' : 'Continue learning')
      : 'Mark complete';
    renderSidebar();
  }

  function renderFiles() {
    if (!state.files.length) state.files = clone(STARTER_FILES.slice(0, 1));
    if (!fileByName(state.activeFile)) state.activeFile = state.files[0].name;
    els.fileStrip.innerHTML = state.files.map((file) => `<button class="file-tab${file.name === state.activeFile ? ' is-active' : ''}" type="button" role="tab" aria-selected="${file.name === state.activeFile}" data-file-name="${escapeHTML(file.name)}" title="Open ${escapeHTML(file.name)}"><span class="file-tab-icon">JS</span><span class="file-tab-name">${escapeHTML(file.name)}</span></button>`).join('');
    els.mobileFileCount.textContent = String(state.files.length);
    els.downloadFileCount.textContent = `${state.files.length} ${state.files.length === 1 ? 'file' : 'files'} · ZIP`;
    updateEditor();
  }

  function updateEditor() {
    const file = currentFile();
    if (!file) return;
    if (els.codeEditor.value !== file.content) els.codeEditor.value = file.content;
    els.activeFileName.textContent = file.name;
    els.entryTag.hidden = file.name !== 'main.js';
    $('#deleteFileButton').disabled = state.files.length <= 1;
    els.highlightedCode.innerHTML = highlightCode(file.content) + (file.content.endsWith('\n') ? ' ' : '');
    els.lineGutter.textContent = Array.from({ length: Math.max(1, file.content.split('\n').length) }, (_, index) => String(index + 1)).join('\n');
    requestAnimationFrame(() => {
      els.lineGutter.scrollTop = $('#editorFrame').scrollTop;
    });
  }

  function renderAll() {
    renderSidebar();
    renderLesson();
    renderFiles();
    setMode(state.mode);
  }

  function awardXP(amount, reason) {
    state.xp += amount;
    renderSidebar();
    persistState();
    showToast(`+${amount} XP · ${reason}`);
  }

  function selectLesson(index) {
    if (!Number.isInteger(index) || index < 0 || index >= lessons.length) return;
    state.lessonIndex = index;
    hintVisibleFor = '';
    setMode('learn');
    renderLesson();
    persistState();
    closeSidebar();
    if (window.matchMedia('(max-width: 980px)').matches) window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function submitQuiz(index) {
    const lesson = activeLesson();
    if (!Number.isInteger(index) || index < 0 || index >= lesson.quiz.options.length || state.quizSolved.includes(lesson.id)) return;
    state.quizAnswers[lesson.id] = index;
    if (index === lesson.quiz.answer) {
      state.quizSolved.push(lesson.id);
      state.quizSolved = [...new Set(state.quizSolved)];
      state.xp += 10;
      showToast('+10 XP · Nice answer!');
    }
    renderLesson();
    renderSidebar();
    persistState();
  }

  function completeLesson() {
    const lesson = activeLesson();
    const isComplete = state.completed.includes(lesson.id);
    if (!isComplete) {
      state.completed.push(lesson.id);
      state.completed = [...new Set(state.completed)];
      state.xp += 15;
      renderSidebar();
      persistState();
      if (state.lessonIndex < lessons.length - 1) {
        showToast('+15 XP · Step complete!');
        selectLesson(state.lessonIndex + 1);
      } else {
        renderLesson();
        showToast('Path complete! You earned +15 XP ✨');
      }
      return;
    }
    if (state.lessonIndex < lessons.length - 1) selectLesson(state.lessonIndex + 1);
    else showToast('You finished the JavaScript path. Amazing work!');
  }

  function showFileModal(mode) {
    modalMode = mode;
    els.fileNameError.textContent = '';
    const current = currentFile();
    if (mode === 'rename' && current) {
      els.fileModalTitle.textContent = 'Rename this file';
      els.fileModalDescription.textContent = 'Give your JavaScript file a name that makes it easy to find.';
      els.submitFileModal.innerHTML = 'Save name <span aria-hidden="true">↗</span>';
      els.fileNameInput.value = current.name.slice(0, -3);
    } else {
      els.fileModalTitle.textContent = 'Add a new file';
      els.fileModalDescription.textContent = 'Keep your code tidy by splitting it into small JavaScript files.';
      els.submitFileModal.innerHTML = 'Create file <span aria-hidden="true">↗</span>';
      els.fileNameInput.value = '';
    }
    els.fileModalBackdrop.hidden = false;
    document.body.style.overflow = 'hidden';
    setTimeout(() => { els.fileNameInput.focus(); els.fileNameInput.select(); }, 60);
  }

  function closeFileModal() {
    els.fileModalBackdrop.hidden = true;
    document.body.style.overflow = '';
    els.fileNameError.textContent = '';
  }

  function submitFileModal(event) {
    event.preventDefault();
    const cleanName = normalizeFileName(els.fileNameInput.value);
    if (!cleanName) {
      els.fileNameError.textContent = 'Add a name using letters, numbers, dashes, or underscores.';
      return;
    }
    const existing = fileByName(cleanName);
    const current = currentFile();
    if (existing && !(modalMode === 'rename' && current && existing === current)) {
      els.fileNameError.textContent = 'That file name is already in this project.';
      return;
    }
    if (modalMode === 'rename' && current) {
      const oldName = current.name;
      current.name = cleanName;
      state.activeFile = cleanName;
      if (oldName === 'main.js' && cleanName !== 'main.js') showToast('File renamed. Update any require() paths that use its old name.');
      else showToast(`Renamed to ${cleanName}`);
    } else {
      const starter = '// Your next idea goes here ✨\nconsole.log("Hello from ' + cleanName.slice(0, -3) + '!");';
      state.files.push({ name: cleanName, content: starter, starter });
      state.activeFile = cleanName;
      showToast(`${cleanName} is ready to edit`);
    }
    closeFileModal();
    renderFiles();
    persistState(true);
  }

  function deleteCurrentFile() {
    const current = currentFile();
    if (!current || state.files.length <= 1) return;
    const okay = window.confirm(`Delete ${current.name} from this project?`);
    if (!okay) return;
    const index = state.files.findIndex((file) => file.name === current.name);
    state.files = state.files.filter((file) => file.name !== current.name);
    state.activeFile = state.files[Math.max(0, index - 1)].name;
    renderFiles();
    persistState(true);
    showToast(`${current.name} removed from the project`);
  }

  function resetCurrentFile() {
    const file = currentFile();
    if (!file) return;
    if (file.content !== file.starter && !window.confirm(`Restore ${file.name} to its starter code?`)) return;
    file.content = file.starter;
    updateEditor();
    persistState(true);
    showToast(`${file.name} restored`);
  }


  function scheduleEditorSave() {
    const file = currentFile();
    if (!file) return;
    file.content = els.codeEditor.value;
    els.highlightedCode.innerHTML = highlightCode(file.content) + (file.content.endsWith('\n') ? ' ' : '');
    els.lineGutter.textContent = Array.from({ length: Math.max(1, file.content.split('\n').length) }, (_, index) => String(index + 1)).join('\n');
    els.saveStatus.textContent = 'Saving…';
    persistState(true);
  }

  function autosizeChallengeEditor() {
    const editor = els.challengeEditor;
    if (!editor) return;
    editor.style.height = 'auto';
    const requestedHeight = editor.scrollHeight || 190;
    editor.style.height = `${Math.max(165, Math.min(requestedHeight, 320))}px`;
  }

  function saveChallengeDraft() {
    const lesson = activeLesson();
    state.exerciseDrafts[lesson.id] = els.challengeEditor.value;
    persistState(true);
    autosizeChallengeEditor();
  }

  function resetChallenge() {
    const lesson = activeLesson();
    currentRunToken = '';
    currentRunTarget = null;
    setRunButtonRunning(false);
    setExerciseRunning(false);
    delete state.exerciseDrafts[lesson.id];
    els.challengeEditor.value = lesson.challengeCode;
    hintVisibleFor = '';
    els.hintBox.hidden = true;
    els.hintButton.textContent = 'Need a hint?';
    clearExerciseOutput();
    els.practiceRunState.textContent = 'Starter restored';
    autosizeChallengeEditor();
    persistState(true);
  }

  function handleChallengeKeydown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      const editor = els.challengeEditor;
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      editor.setRangeText('  ', start, end, 'end');
      editor.dispatchEvent(new Event('input', { bubbles: true }));
      return;
    }
    if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
      event.preventDefault();
      runChallenge();
    }
  }

  function handleEditorKeydown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      const editor = els.codeEditor;
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      editor.setRangeText('  ', start, end, 'end');
      editor.dispatchEvent(new Event('input', { bubbles: true }));
      return;
    }
    if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') {
      event.preventDefault();
      runCode();
    }
  }

  function formatOutput(value) {
    if (typeof value === 'string') return value;
    if (typeof value === 'undefined') return 'undefined';
    if (typeof value === 'bigint') return `${value}n`;
    if (typeof value === 'symbol') return value.toString();
    if (value instanceof Error) return `${value.name}: ${value.message}`;
    try {
      const result = JSON.stringify(value, null, 2);
      return typeof result === 'string' ? result : String(value);
    } catch (error) {
      return Object.prototype.toString.call(value);
    }
  }

  function appendConsoleLine(text, type = 'log') {
    const empty = $('.console-empty', els.consoleOutput);
    if (empty) empty.remove();
    const line = document.createElement('div');
    line.className = `console-line${type === 'warn' ? ' is-warn' : ''}${type === 'error' ? ' is-error' : ''}`;
    line.textContent = text;
    els.consoleOutput.appendChild(line);
    els.consoleOutput.scrollTop = els.consoleOutput.scrollHeight;
  }

  function appendSystemLine(text) {
    const empty = $('.console-empty', els.consoleOutput);
    if (empty) empty.remove();
    const line = document.createElement('div');
    line.className = 'console-system-line';
    line.textContent = text;
    els.consoleOutput.appendChild(line);
    els.consoleOutput.scrollTop = els.consoleOutput.scrollHeight;
  }

  function clearConsole() {
    els.consoleOutput.innerHTML = '<div class="console-empty"><span class="console-empty-icon" aria-hidden="true">✳</span><span>Your output will show up here.</span><span>Edit a line above, then press <strong>Run code</strong>.</span></div>';
  }

  function clearExerciseOutput() {
    if (!els.exerciseOutput) return;
    exerciseOutputCount = 0;
    els.exerciseOutput.innerHTML = '<div class="practice-output-placeholder"><span>Type into the editor above, then press <strong>Run my code</strong>.</span><span>Your result will appear here—no playground switch needed.</span></div>';
  }

  function appendExerciseLine(text, type = 'log') {
    const empty = $('.practice-output-placeholder', els.exerciseOutput);
    if (empty) empty.remove();
    const line = document.createElement('div');
    line.className = `practice-console-line${type === 'error' ? ' is-error' : ''}${type === 'warn' ? ' is-warn' : ''}${type === 'system' ? ' is-system' : ''}`;
    line.textContent = text;
    els.exerciseOutput.appendChild(line);
    els.exerciseOutput.scrollTop = els.exerciseOutput.scrollHeight;
  }

  function setExerciseRunning(isRunning) {
    if (!els.runExerciseButton) return;
    clearTimeout(exerciseRunTimer);
    els.runExerciseButton.disabled = isRunning;
    const label = $('span', els.runExerciseButton);
    if (label) label.textContent = isRunning ? 'Running…' : 'Run my code';
  }

  function setRunButtonRunning(isRunning) {
    clearTimeout(runButtonTimer);
    if (isRunning) {
      els.runButton.disabled = true;
      els.runButton.querySelector('span').textContent = 'Running…';
    } else {
      els.runButton.disabled = false;
      els.runButton.querySelector('span').textContent = 'Run code';
    }
  }

  function buildRunnerDocument(files, entry, token) {
    const safeJSON = (value) => JSON.stringify(value)
      .replaceAll('<', String.fromCharCode(92) + 'u003c')
      .replaceAll(String.fromCharCode(0x2028), String.fromCharCode(92) + 'u2028')
      .replaceAll(String.fromCharCode(0x2029), String.fromCharCode(92) + 'u2029');
    const safeFiles = safeJSON(files);
    const safeEntry = safeJSON(entry);
    const safeToken = JSON.stringify(token);
    return `<!doctype html><html><head><meta charset="utf-8"></head><body><script>
      (() => {
        const sources = ${safeFiles};
        const entry = ${safeEntry};
        const token = ${safeToken};
        const send = (type, payload = {}) => parent.postMessage(Object.assign({ __kodelearnToken: token, type }, payload), '*');
        const format = (value) => {
          if (typeof value === 'string') return value;
          if (typeof value === 'undefined') return 'undefined';
          if (typeof value === 'bigint') return String(value) + 'n';
          if (typeof value === 'symbol') return value.toString();
          if (value instanceof Error) return value.name + ': ' + value.message;
          try { const text = JSON.stringify(value, null, 2); return typeof text === 'string' ? text : String(value); }
          catch (_) { return Object.prototype.toString.call(value); }
        };
        const safeConsole = {
          log: (...args) => send('log', { text: args.map(format).join(' ') }),
          info: (...args) => send('log', { text: args.map(format).join(' ') }),
          debug: (...args) => send('log', { text: args.map(format).join(' ') }),
          warn: (...args) => send('warn', { text: args.map(format).join(' ') }),
          error: (...args) => send('error', { text: args.map(format).join(' ') }),
          clear: () => send('clear')
        };
        const cache = Object.create(null);
        function resolve(request, from) {
          if (typeof request !== 'string') throw new Error('require() expects a file path as text.');
          let parts;
          if (request.startsWith('./') || request.startsWith('../')) {
            parts = from.split('/').slice(0, -1);
            for (const part of request.split('/')) {
              if (!part || part === '.') continue;
              if (part === '..') parts.pop(); else parts.push(part);
            }
          } else {
            parts = request.split('/').filter(Boolean);
          }
          let path = parts.join('/');
          if (!path.toLowerCase().endsWith('.js')) path += '.js';
          if (!Object.prototype.hasOwnProperty.call(sources, path)) {
            throw new Error('Cannot find module "' + request + '" from "' + from + '". Check the file name and try require("./file.js").');
          }
          return path;
        }
        function load(filename) {
          if (cache[filename]) return cache[filename].exports;
          const module = { exports: {} };
          cache[filename] = module;
          const localRequire = (request) => load(resolve(request, filename));
          try {
            const compiled = new Function('require', 'module', 'exports', 'console', '"use strict";\\n' + sources[filename] + '\\n//# sourceURL=kodelearn/' + filename);
            compiled(localRequire, module, module.exports, safeConsole);
          } catch (error) {
            throw error;
          }
          return module.exports;
        }
        window.onerror = (message, source, line, column, error) => {
          send('error', { text: error && error.stack ? error.stack : String(message) });
          return true;
        };
        const started = performance.now();
        try {
          load(entry);
          send('done', { elapsed: Math.round(performance.now() - started) });
        } catch (error) {
          send('error', { text: error && error.stack ? error.stack : String(error) });
          send('done', { elapsed: Math.round(performance.now() - started), failed: true });
        }
      })();
    </script></body></html>`;
  }

  function runCode() {
    const file = currentFile();
    if (!file) return;
    file.content = els.codeEditor.value;
    persistState(true);
    clearConsole();
    appendSystemLine(`Running ${file.name}…`);
    setRunButtonRunning(true);
    setExerciseRunning(false);
    const token = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    currentRunToken = token;
    currentRunTarget = { kind: 'playground' };
    const sourceMap = Object.fromEntries(state.files.map((entry) => [entry.name, entry.content]));
    els.runnerFrame.srcdoc = buildRunnerDocument(sourceMap, file.name, token);
    runButtonTimer = setTimeout(() => setRunButtonRunning(false), 15000);
  }

  function runChallenge() {
    const lesson = activeLesson();
    const code = els.challengeEditor.value;
    state.exerciseDrafts[lesson.id] = code;
    persistState(true);
    setRunButtonRunning(false);
    clearExerciseOutput();
    appendExerciseLine('Running your code…', 'system');
    els.practiceRunState.textContent = 'Running…';
    setExerciseRunning(true);
    const token = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    currentRunToken = token;
    currentRunTarget = { kind: 'exercise', lessonId: lesson.id, outputCount: 0 };
    els.runnerFrame.srcdoc = buildRunnerDocument({ 'practice.js': code }, 'practice.js', token);
    exerciseRunTimer = setTimeout(() => setExerciseRunning(false), 15000);
  }

  function handleRunnerMessage(event) {
    if (event.source !== els.runnerFrame.contentWindow || !event.data || event.data.__kodelearnToken !== currentRunToken || !currentRunTarget) return;
    const data = event.data;
    if (currentRunTarget.kind === 'exercise') {
      if (currentRunTarget.lessonId !== activeLesson().id) return;
      if (data.type === 'log' || data.type === 'warn' || data.type === 'error') {
        currentRunTarget.outputCount += 1;
        const text = data.type === 'error' ? String(data.text || '').split(String.fromCharCode(10)).slice(0, 3).join(String.fromCharCode(10)) : (data.text || '');
        appendExerciseLine(text, data.type);
      }
      if (data.type === 'clear') clearExerciseOutput();
      if (data.type === 'done') {
        setExerciseRunning(false);
        if (data.failed) {
          els.practiceRunState.textContent = 'There is an error to fix';
          appendExerciseLine('Read the error above, edit the code, and try again.', 'system');
        } else if (currentRunTarget.outputCount === 0) {
          els.practiceRunState.textContent = 'Finished · no output yet';
          appendExerciseLine('Your code ran but did not print anything. Try adding console.log(...).', 'system');
        } else {
          els.practiceRunState.textContent = `Finished in ${data.elapsed} ms`;
          appendExerciseLine(`✓ Finished in ${data.elapsed} ms`, 'system');
        }
      }
      return;
    }

    if (data.type === 'log' || data.type === 'warn' || data.type === 'error') appendConsoleLine(data.text || '', data.type);
    if (data.type === 'clear') clearConsole();
    if (data.type === 'done') {
      setRunButtonRunning(false);
      if (!data.failed) appendSystemLine(`✓ Finished in ${data.elapsed} ms`);
    }
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1200);
  }

  function downloadCurrentFile() {
    const file = currentFile();
    if (!file) return;
    downloadBlob(new Blob([file.content], { type: 'text/javascript;charset=utf-8' }), file.name);
    showToast(`${file.name} downloaded`);
  }

  function crc32(bytes) {
    let crc = 0xffffffff;
    for (let index = 0; index < bytes.length; index += 1) {
      crc ^= bytes[index];
      for (let bit = 0; bit < 8; bit += 1) crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function makeZip(entries) {
    const encoder = new TextEncoder();
    const localChunks = [];
    const centralChunks = [];
    let offset = 0;
    let centralSize = 0;
    const dosTime = 0;
    const dosDate = 0x21;

    const u16 = (view, at, value) => view.setUint16(at, value, true);
    const u32 = (view, at, value) => view.setUint32(at, value >>> 0, true);

    for (const entry of entries) {
      const nameBytes = encoder.encode(entry.name.replace(/^\/+/, ''));
      const dataBytes = encoder.encode(entry.content);
      const checksum = crc32(dataBytes);
      const localHeader = new Uint8Array(30);
      const localView = new DataView(localHeader.buffer);
      u32(localView, 0, 0x04034b50);
      u16(localView, 4, 20);
      u16(localView, 6, 0x0800);
      u16(localView, 8, 0);
      u16(localView, 10, dosTime);
      u16(localView, 12, dosDate);
      u32(localView, 14, checksum);
      u32(localView, 18, dataBytes.length);
      u32(localView, 22, dataBytes.length);
      u16(localView, 26, nameBytes.length);
      u16(localView, 28, 0);
      localChunks.push(localHeader, nameBytes, dataBytes);

      const centralHeader = new Uint8Array(46);
      const centralView = new DataView(centralHeader.buffer);
      u32(centralView, 0, 0x02014b50);
      u16(centralView, 4, 20);
      u16(centralView, 6, 20);
      u16(centralView, 8, 0x0800);
      u16(centralView, 10, 0);
      u16(centralView, 12, dosTime);
      u16(centralView, 14, dosDate);
      u32(centralView, 16, checksum);
      u32(centralView, 20, dataBytes.length);
      u32(centralView, 24, dataBytes.length);
      u16(centralView, 28, nameBytes.length);
      u16(centralView, 30, 0);
      u16(centralView, 32, 0);
      u16(centralView, 34, 0);
      u16(centralView, 36, 0);
      u32(centralView, 38, 0);
      u32(centralView, 42, offset);
      centralChunks.push(centralHeader, nameBytes);
      offset += localHeader.length + nameBytes.length + dataBytes.length;
      centralSize += centralHeader.length + nameBytes.length;
    }

    const end = new Uint8Array(22);
    const endView = new DataView(end.buffer);
    u32(endView, 0, 0x06054b50);
    u16(endView, 4, 0);
    u16(endView, 6, 0);
    u16(endView, 8, entries.length);
    u16(endView, 10, entries.length);
    u32(endView, 12, centralSize);
    u32(endView, 16, offset);
    u16(endView, 20, 0);
    return new Blob([...localChunks, ...centralChunks, end], { type: 'application/zip' });
  }

  function downloadProject() {
    const readme = `# kodelearnJS project\n\nA small JavaScript project created in the kodelearnJS playground.\n\n## Files\n\n${state.files.map((file) => `- \`${file.name}\``).join('\n')}\n\n## Try it\n\nOpen \`main.js\` as the starting file. In the playground, press **Run code** to run the open file.\n\nTo share code between files, use a relative CommonJS require, for example:\n\n\`\`\`js\nconst { double } = require("./helpers.js");\nconsole.log(double(4));\n\`\`\`\n\nNo packages are required. Have fun making something!\n`;
    const entries = [
      { name: 'README.md', content: readme },
      ...state.files.map((file) => ({ name: file.name, content: file.content }))
    ];
    const blob = makeZip(entries);
    downloadBlob(blob, 'kodelearnJS-project.zip');
    showToast(`Project downloaded · ${state.files.length} JavaScript ${state.files.length === 1 ? 'file' : 'files'}`);
  }

  function copyExample() {
    const code = activeLesson().code;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(() => showToast('Example copied to clipboard')).catch(() => fallbackCopy(code));
    } else fallbackCopy(code);
  }

  function fallbackCopy(text) {
    const temp = document.createElement('textarea');
    temp.value = text;
    temp.style.position = 'fixed';
    temp.style.opacity = '0';
    document.body.appendChild(temp);
    temp.select();
    try { document.execCommand('copy'); showToast('Example copied to clipboard'); }
    catch (error) { showToast('Select and copy the example code.'); }
    temp.remove();
  }

  function initEvents() {
    els.lessonNav.addEventListener('click', (event) => {
      const button = event.target.closest('[data-lesson-index]');
      if (button) selectLesson(Number(button.dataset.lessonIndex));
    });
    $('#previousLessonButton').addEventListener('click', () => selectLesson(state.lessonIndex - 1));
    $('#completeLessonButton').addEventListener('click', completeLesson);
    els.quizOptions.addEventListener('click', (event) => {
      const button = event.target.closest('[data-answer-index]');
      if (button) submitQuiz(Number(button.dataset.answerIndex));
    });
    els.visualizationStage.addEventListener('click', handleVisualizationAction);
    $('#hintButton').addEventListener('click', () => {
      const lesson = activeLesson();
      hintVisibleFor = hintVisibleFor === lesson.id ? '' : lesson.id;
      renderLesson();
    });
    $('#copyExampleButton').addEventListener('click', copyExample);
    els.challengeEditor.addEventListener('input', saveChallengeDraft);
    els.challengeEditor.addEventListener('keydown', handleChallengeKeydown);
    els.runExerciseButton.addEventListener('click', runChallenge);
    els.resetExerciseButton.addEventListener('click', resetChallenge);

    $('#learnModeButton').addEventListener('click', () => setMode('learn'));
    $('#playModeButton').addEventListener('click', () => setMode('playground'));
    els.menuToggle.addEventListener('click', openSidebar);
    els.closeSidebar.addEventListener('click', closeSidebar);
    els.mobileScrim.addEventListener('click', closeSidebar);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeSidebar();
        if (!els.fileModalBackdrop.hidden) closeFileModal();
      }
    });

    $('#addFileButton').addEventListener('click', () => showFileModal('add'));
    $('#renameFileButton').addEventListener('click', () => showFileModal('rename'));
    $('#deleteFileButton').addEventListener('click', deleteCurrentFile);
    $('#downloadFileButton').addEventListener('click', downloadCurrentFile);
    $('#downloadProjectButton').addEventListener('click', downloadProject);
    $('#resetFileButton').addEventListener('click', resetCurrentFile);
    $('#closeFileModal').addEventListener('click', closeFileModal);
    $('#cancelFileModal').addEventListener('click', closeFileModal);
    els.fileModalForm.addEventListener('submit', submitFileModal);
    els.fileModalBackdrop.addEventListener('click', (event) => {
      if (event.target === els.fileModalBackdrop) closeFileModal();
    });
    els.fileStrip.addEventListener('click', (event) => {
      const tab = event.target.closest('[data-file-name]');
      if (!tab) return;
      state.activeFile = tab.dataset.fileName;
      renderFiles();
      persistState();
    });

    els.codeEditor.addEventListener('input', scheduleEditorSave);
    els.codeEditor.addEventListener('keydown', handleEditorKeydown);
    $('#runButton').addEventListener('click', runCode);
    $('#clearConsoleButton').addEventListener('click', clearConsole);
    $('#runnerFrame').addEventListener('load', () => {});
    window.addEventListener('message', handleRunnerMessage);
    window.addEventListener('beforeunload', () => {
      const file = currentFile();
      if (file) file.content = els.codeEditor.value;
      state.exerciseDrafts[activeLesson().id] = els.challengeEditor.value;
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (error) {}
    });
  }

  renderAll();
  initEvents();
})();
