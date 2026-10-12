(() => {
  'use strict';

  const lessons = [
    {
      id: 'variables',
      short: 'Variables',
      topic: 'THE BUILDING BLOCKS',
      title: 'Give your ideas<br class="heading-break" /> <em>a name.</em>',
      intro: 'JavaScript needs a place to remember things. A <strong>variable</strong> is a name you give to a value, so you can use it again later.',
      readTime: '3 min',
      concept: 'A variable is a named container for a value. Give it a clear name, put something inside, and use that name whenever you need the value.',
      analogies: [
        { icon: '▣', title: 'A labeled lunchbox', text: 'Pack a snack inside and write your name on the box. The label helps you find what you packed later.' },
        { icon: '✉', title: 'Your own mailbox', text: 'A mailbox has a name and holds a message. You can check it later—or swap the message for a new one.' }
      ],
      breakdown: [
        { title: 'Choose a label.', text: 'Use <code>const</code> for a value you will not reassign, or <code>let</code> if it needs to change.' },
        { title: 'Put a value inside.', text: 'The <code>=</code> sign means “store this value under this name.” It is assignment, not a math question.' },
        { title: 'Use the name again.', text: 'JavaScript remembers the value, so you can read it, update it with <code>let</code>, or pass it to a function.' }
      ],
      exampleDescription: 'This little score starts at 10, gets 5 more points, then prints a friendly message.',
      code: '// Your code runs in the console below ✨\nconst learner = "Ada";\nlet xp = 10;\n\nxp = xp + 5;\nconsole.log(learner + " earned " + xp + " XP!");',
      walkthrough: {"title": "A message to the console", "code": "console.log(\"hello world\");", "parts": [{"token": "console", "meaning": "The environment-provided console object. It gives JavaScript a place to show debugging and output messages. This appears in the playground console, not as text on the webpage."}, {"token": ".log", "meaning": "A method on console. In JavaScript, console.log(...) is the usual counterpart to print() in languages like Python."}, {"token": "( ... )", "meaning": "Parentheses call the method and hold its argument: the value you want logged."}, {"token": "\"hello world\"", "meaning": "A string literal: plain text wrapped in double quotes. The quotes mark it as text; they are not part of the message."}, {"token": ";", "meaning": "A semicolon marks the end of this statement. JavaScript can often insert one automatically, but writing it makes statement boundaries clear."}]},
      challengeTitle: 'Give a value a name',
      challengeDescription: 'Change the player name, then make the score go up by 10. Press Run and check the console.',
      challengeCode: '// Make this mini profile yours\nconst player = "Pixel";\nlet score = 5;\n\nscore = score + 10;\nconsole.log(player + " has " + score + " points!");',
      hint: 'Try changing the text inside the quotes. To add 10, update the score with <code>score = score + 10;</code>.',
      funFact: 'The word <strong>variable</strong> comes from a word meaning “changeable.” <code>const</code> keeps its name attached to one value; <code>let</code> can be reassigned.',
      quiz: {
        question: 'You want a score that can go up later. Which keyword fits best?',
        options: ['const', 'let', 'change'],
        answer: 1,
        correct: 'You got it! <code>let</code> is for a value you plan to reassign.',
        incorrect: 'Almost! Pick the keyword that allows a value to be reassigned.'
      }
    },
    {
      id: 'values',
      short: 'Kinds of values',
      topic: 'A VALUE HAS A SHAPE',
      title: 'Not all values<br class="heading-break" /> <em>are alike.</em>',
      intro: 'JavaScript can remember words, numbers, yes-or-no answers, and more. Those different kinds of values are called <strong>data types</strong>.',
      readTime: '3 min',
      concept: 'A data type tells JavaScript what kind of value it is working with—and what kinds of things make sense to do with it.',
      analogies: [
        { icon: '▤', title: 'A shelf of containers', text: 'A jar holds jam, a box holds toys. Different containers are built for different kinds of things.' },
        { icon: '🎒', title: 'A backpack with pockets', text: 'A pocket for a water bottle is different from a pocket for a map. The pocket hints at what belongs inside.' }
      ],
      breakdown: [
        { title: 'Numbers do number things.', text: 'A value like <code>42</code> is a number. You can add it, compare it, or calculate with it.' },
        { title: 'Text lives in quotes.', text: '<code>"Hello!"</code> is a string. JavaScript treats the characters inside the quotes as text.' },
        { title: 'Booleans answer yes or no.', text: '<code>true</code> and <code>false</code> are boolean values—handy for choices and checks.' }
      ],
      exampleDescription: 'Three variables, three shapes. Ask JavaScript for a value’s type with <code>typeof</code>.',
      code: 'const score = 42;\nconst isReady = true;\nconst greeting = "Hello!";\n\nconsole.log(typeof score);\nconsole.log(typeof isReady);\nconsole.log(typeof greeting);',
      walkthrough: {"title": "A boolean value, piece by piece", "code": "const isReady = true;", "parts": [{"token": "const", "meaning": "Declares a variable name that cannot be reassigned later."}, {"token": "isReady", "meaning": "The variable name. Choose a name that tells you what the value represents."}, {"token": "=", "meaning": "The assignment operator: put the value on the right into the name on the left. It does not mean “is equal to.”"}, {"token": "true", "meaning": "A boolean value meaning “yes” or “on.” It has no quotes; \"true\" in quotes would be text instead."}, {"token": ";", "meaning": "Marks the end of this statement. A semicolon is a helpful, consistent way to finish a line of code."}]},
      challengeTitle: 'Make a tiny player card',
      challengeDescription: 'Create one number, one string, and one boolean. Log each one to the console.',
      challengeCode: 'const lives = 3;\nconst player = "Nova";\nconst hasPowerUp = false;\n\nconsole.log(lives);\nconsole.log(player);\nconsole.log(hasPowerUp);',
      hint: 'A number needs no quotes, a string goes between quotes, and a boolean is simply <code>true</code> or <code>false</code>.',
      funFact: 'JavaScript has a famous quirk: <code>typeof null</code> returns <code>"object"</code>. It is a very old bug kept for compatibility!',
      quiz: {
        question: 'Which of these is a boolean value?',
        options: ['"false"', '0', 'false'],
        answer: 2,
        correct: 'Yep! The unquoted <code>false</code> is a boolean. Quoted text is a string.',
        incorrect: 'Look for the yes-or-no value without quotation marks.'
      }
    },
    {
      id: 'strings',
      short: 'Text & strings',
      topic: 'WORDS IN YOUR CODE',
      title: 'Make your code<br class="heading-break" /> <em>say something.</em>',
      intro: 'Any piece of text in JavaScript is a <strong>string</strong>. Strings are great for names, messages, labels, and all the tiny words in your app.',
      readTime: '3 min',
      concept: 'Wrap text in quotes to make a string. Join strings together, or use a template literal to tuck values right into a sentence.',
      analogies: [
        { icon: '“ ”', title: 'A tiny quote sandwich', text: 'The quote marks are the bread; the text in the middle is the tasty filling JavaScript keeps together.' },
        { icon: '🧵', title: 'A sentence with blanks', text: 'A template literal is like a fill-in-the-blank card. Drop a value into a blank and the sentence comes together.' }
      ],
      breakdown: [
        { title: 'Put text in quotes.', text: 'Use single quotes, double quotes, or backticks: <code>"Hi"</code>, <code>\'Hi\'</code>, or <code>`Hi`</code>.' },
        { title: 'Join text with a plus.', text: 'The <code>+</code> operator can glue strings together: <code>"Hi, " + name</code>.' },
        { title: 'Interpolate with backticks.', text: 'Inside a template literal, write <code>${name}</code> to insert a value into the message.' }
      ],
      exampleDescription: 'Backticks let you blend a name into a sentence without a string of plus signs.',
      code: 'const name = "Sam";\nconst mood = "curious";\n\nconst message = `Hey ${name}, stay ${mood}!`;\nconsole.log(message);',
      walkthrough: {"title": "A sentence with a name inside", "code": "const message = `Hi, ${name}!`;", "parts": [{"token": "const", "meaning": "Declares a variable binding. Use it when you do not plan to point this name at a different value later."}, {"token": "message", "meaning": "The variable name that will hold the finished sentence."}, {"token": "=", "meaning": "Assigns the value on the right to the variable on the left."}, {"token": "`...`", "meaning": "Backticks create a template literal: a string that can include line breaks and inserted values."}, {"token": "${name}", "meaning": "Interpolation. JavaScript evaluates name and places its current value right here in the string."}, {"token": ";", "meaning": "Ends the variable declaration statement."}]},
      challengeTitle: 'Write a little welcome',
      challengeDescription: 'Make a welcome message that includes a name and a favorite color. Log the finished sentence.',
      challengeCode: 'const name = "Kai";\nconst favoriteColor = "blue";\n\nconst welcome = `Hi ${name}! Your color is ${favoriteColor}.`;\nconsole.log(welcome);',
      hint: 'Use backticks around the sentence, then place each variable inside <code>${ }</code>.',
      funFact: 'A string can hold a single character or a whole book. JavaScript strings use <strong>UTF-16</strong>, which helps represent text from languages around the world.',
      quiz: {
        question: 'What do you need around a template literal?',
        options: ['Backticks', 'Square brackets', 'A hashtag'],
        answer: 0,
        correct: 'Exactly! Backticks unlock template literals and let you insert values with <code>${value}</code>.',
        incorrect: 'Think of the key near the number 1 on most keyboards: it looks like a tiny backtick.'
      }
    },
    {
      id: 'numbers',
      short: 'Numbers & math',
      topic: 'A LITTLE NUMBER MAGIC',
      title: 'Let JavaScript<br class="heading-break" /> <em>do the math.</em>',
      intro: 'Scores, timers, prices, steps—numbers show up everywhere. JavaScript can calculate with them using familiar math symbols.',
      readTime: '3 min',
      concept: 'Use number values and arithmetic operators to calculate a result. Store the result in a variable if you want to use it again.',
      analogies: [
        { icon: '＋', title: 'A pocket calculator', text: 'Give it two numbers and an operation. It hands you back the answer before your tea gets cold.' },
        { icon: '🧮', title: 'A scorekeeper', text: 'A game score changes as points are added or lost. A variable can keep track of the latest total.' }
      ],
      breakdown: [
        { title: 'Pick an operator.', text: '<code>+</code> adds, <code>-</code> subtracts, <code>*</code> multiplies, and <code>/</code> divides.' },
        { title: 'JavaScript follows order.', text: 'Multiplication happens before addition, just like regular math. Use parentheses to make a step happen first.' },
        { title: 'Keep the answer.', text: 'Save your calculation in a variable, then print it or use it in another calculation.' }
      ],
      exampleDescription: 'Give yourself a tiny energy boost. The math happens first; <code>console.log</code> shows the answer.',
      code: 'const startingEnergy = 12;\nconst bonus = 4;\nconst total = startingEnergy + bonus;\n\nconsole.log(total);',
      walkthrough: {"title": "An addition saved as a value", "code": "const total = 12 + 4;", "parts": [{"token": "const", "meaning": "Declares a variable name for the result."}, {"token": "total", "meaning": "A descriptive name that will hold the final sum."}, {"token": "=", "meaning": "Assigns the calculation’s result to total."}, {"token": "12", "meaning": "A number value. Numbers do not need quotation marks."}, {"token": "+", "meaning": "The addition operator. With two numbers, it adds them together."}, {"token": "4", "meaning": "The second number value. JavaScript calculates 12 + 4 before assigning the answer."}, {"token": ";", "meaning": "Marks the end of this statement."}]},
      challengeTitle: 'Split the treasure',
      challengeDescription: 'Start with 24 coins. Split them equally between 3 friends and print how many each gets.',
      challengeCode: 'const coins = 24;\nconst friends = 3;\nconst coinsEach = coins / friends;\n\nconsole.log(coinsEach);',
      hint: 'The divide operator is a forward slash: <code>/</code>. Make a new variable to store the result.',
      funFact: 'The remainder operator <code>%</code> finds what is left over after division. It is perfect for checking whether a number is even!',
      quiz: {
        question: 'Which symbol multiplies two numbers in JavaScript?',
        options: ['x', '*', '%'],
        answer: 1,
        correct: 'Correct! JavaScript uses the asterisk <code>*</code> for multiplication.',
        incorrect: 'It is the little star-shaped symbol on your keyboard—not the letter x.'
      }
    },
    {
      id: 'conditions',
      short: 'Make decisions',
      topic: 'CODE WITH CHOICES',
      title: 'Teach your code<br class="heading-break" /> <em>to choose.</em>',
      intro: 'Your code can take different paths depending on what is true. That is how a game knows you won—or an app knows it is your turn.',
      readTime: '4 min',
      concept: 'An <code>if</code> statement checks a condition. If it is true, JavaScript runs one block; otherwise, it can choose another.',
      analogies: [
        { icon: '🚦', title: 'A traffic light', text: 'If the light is green, go. If it is red, stop. One check changes what happens next.' },
        { icon: '☂', title: 'A weather plan', text: 'If it is raining, grab an umbrella. Otherwise, head out with your hands free.' }
      ],
      breakdown: [
        { title: 'Ask a yes-or-no question.', text: 'A condition like <code>score &gt;= 10</code> evaluates to either <code>true</code> or <code>false</code>.' },
        { title: 'Write the “if” path.', text: 'Put the code to run inside curly braces after <code>if (condition)</code>.' },
        { title: 'Add an “else” path.', text: 'Use <code>else</code> when you want a fallback for everything that did not match.' }
      ],
      exampleDescription: 'Try changing the score. Watch the message switch when it crosses 10.',
      code: 'const score = 12;\n\nif (score >= 10) {\n  console.log("Level up!");\n} else {\n  console.log("Keep playing!");\n}',
      walkthrough: {"title": "Two paths, one condition", "code": "if (score >= 10) { console.log(\"Level up!\"); } else { console.log(\"Keep playing!\"); }", "parts": [{"token": "if", "meaning": "Starts a decision. JavaScript checks the condition next."}, {"token": "(score >= 10)", "meaning": "The condition in parentheses. It becomes true or false, and that result chooses a path."}, {"token": ">=", "meaning": "“Greater than or equal to.” This compares score with 10 and returns a boolean."}, {"token": "{ ... }", "meaning": "Curly braces group the statements that run when the if condition is true."}, {"token": "else", "meaning": "Introduces the fallback path. This block runs when the condition was false."}, {"token": "console.log(...)", "meaning": "Prints the chosen message in the console. Only one of these two messages runs."}]},
      challengeTitle: 'Add a sunshine check',
      challengeDescription: 'Make a variable called <code>isSunny</code>. Print one message when it is true and another when it is false.',
      challengeCode: 'const isSunny = true;\n\nif (isSunny) {\n  console.log("Adventure time!");\n} else {\n  console.log("Cozy indoor day!");\n}',
      hint: 'Try changing <code>true</code> to <code>false</code> and run it again. The <code>else</code> block catches the other case.',
      funFact: 'JavaScript uses <code>===</code> for a strict equality check. It compares values without quietly converting one type into another.',
      quiz: {
        question: 'When does the code inside an <code>if</code> block run?',
        options: ['Every time, no matter what', 'When its condition is true', 'Only after an else block'],
        answer: 1,
        correct: 'You nailed it. The condition controls whether that block runs.',
        incorrect: 'The <code>if</code> block listens to the yes-or-no result of its condition.'
      }
    },
    {
      id: 'loops',
      short: 'Repeat with loops',
      topic: 'DO IT AGAIN (AND AGAIN)',
      title: 'Repeat the fun<br class="heading-break" /> <em>without copy-paste.</em>',
      intro: 'Need to do the same thing a few times? A <strong>loop</strong> repeats a block of code so you do not have to write every step by hand.',
      readTime: '4 min',
      concept: 'A loop runs a block again and again. A counter lets you know how many times it has run and when it should stop.',
      analogies: [
        { icon: '🔁', title: 'A playlist on repeat', text: 'The next song plays, then the next. The playlist keeps going until it reaches the end.' },
        { icon: '🪜', title: 'Climbing the steps', text: 'Take one step, count it, then take another. Stop when you reach the top.' }
      ],
      breakdown: [
        { title: 'Start with a counter.', text: 'A <code>for</code> loop often begins with a number like <code>let i = 0</code>.' },
        { title: 'Set a stop condition.', text: 'The loop keeps running while its condition is true, such as <code>i &lt; 3</code>.' },
        { title: 'Move the counter.', text: '<code>i++</code> adds one each round. Without a stopping point, a loop may never end!' }
      ],
      exampleDescription: 'This loop counts from 1 to 3. The three little parts in its header set up the repeat.',
      code: 'for (let i = 1; i <= 3; i++) {\n  console.log(`Round ${i}!`);\n}',
      walkthrough: {"title": "The three controls in a for loop", "code": "for (let i = 1; i <= 3; i++) { console.log(i); }", "parts": [{"token": "for", "meaning": "Starts a loop: a block of code that repeats."}, {"token": "let i = 1", "meaning": "The setup runs once. It creates a counter named i and starts it at 1."}, {"token": ";", "meaning": "Separates the loop setup from its keep-going condition."}, {"token": "i <= 3", "meaning": "The condition is checked before each round. The loop continues while i is at most 3."}, {"token": ";", "meaning": "Separates the condition from the update step."}, {"token": "i++", "meaning": "Runs after each round and adds 1 to i, so the loop eventually stops."}, {"token": "{ ... }", "meaning": "The loop body. JavaScript repeats the statements inside these braces."}]},
      challengeTitle: 'Count down to launch',
      challengeDescription: 'Use a loop to print 3, 2, 1, then finish with “Blast off!”',
      challengeCode: 'for (let count = 3; count > 0; count--) {\n  console.log(count);\n}\n\nconsole.log("Blast off!");',
      hint: 'Start the counter at 3, keep looping while it is greater than 0, and subtract one with <code>count--</code>.',
      funFact: 'A loop inside another loop is called a <strong>nested loop</strong>. It is a handy way to visit every row and column in a grid.',
      quiz: {
        question: 'What does <code>i++</code> do?',
        options: ['Subtracts one from i', 'Adds one to i', 'Stops the loop'],
        answer: 1,
        correct: 'Right! <code>i++</code> is a shortcut for adding one to the counter.',
        incorrect: 'The plus signs are your clue: this shortcut moves the counter up by one.'
      }
    },
    {
      id: 'functions',
      short: 'Build a function',
      topic: 'YOUR OWN MINI-MACHINE',
      title: 'Give a task<br class="heading-break" /> <em>a button.</em>',
      intro: 'A <strong>function</strong> is a reusable block of code. Give it a name, call it when you need it, and let it handle a little task for you.',
      readTime: '4 min',
      concept: 'Functions package instructions into a reusable unit. They can take inputs, do a job, and hand back an output.',
      analogies: [
        { icon: '⚙', title: 'A tiny vending machine', text: 'Give the machine a coin, press a button, and it follows its built-in steps to hand you a snack.' },
        { icon: '📦', title: 'A recipe card', text: 'A recipe keeps the same instructions ready. Follow the card whenever you want to make that dish again.' }
      ],
      breakdown: [
        { title: 'Give the function a name.', text: 'Use <code>function greet() { ... }</code> to define the instructions once.' },
        { title: 'Pass in what it needs.', text: 'Values inside the parentheses are called parameters. They are the function’s ingredients.' },
        { title: 'Call it to do the task.', text: 'Write the function name with parentheses, like <code>greet("Ada")</code>. Use <code>return</code> to hand back a result.' }
      ],
      exampleDescription: 'This function accepts a name and returns a custom greeting. Call it whenever you need one.',
      code: 'function greet(name) {\n  return `Hello, ${name}!`;\n}\n\nconst message = greet("Ada");\nconsole.log(message);',
      walkthrough: {"title": "Define a reusable greeting", "code": "function greet(name) { return `Hello, ${name}!`; }", "parts": [{"token": "function", "meaning": "Keyword that defines a reusable block of JavaScript instructions."}, {"token": "greet", "meaning": "The function’s name. You use this name when you want to run it."}, {"token": "(name)", "meaning": "The parameter list. name is a placeholder for the value supplied when greet is called."}, {"token": "{ ... }", "meaning": "The function body: the instructions that run when the function is called."}, {"token": "return", "meaning": "Sends a result back to the caller and finishes this function call."}, {"token": "`Hello, ${name}!`", "meaning": "A template string that builds the greeting using the supplied name."}]},
      challengeTitle: 'Make a happy helper',
      challengeDescription: 'Write a function that accepts a name and returns a cheerful message. Call it with your name.',
      challengeCode: 'function cheer(name) {\n  return `You are awesome, ${name}!`;\n}\n\nconsole.log(cheer("Coder"));',
      hint: 'Put <code>name</code> between the parentheses. Inside the function, <code>return</code> a template literal with that name.',
      funFact: 'In JavaScript, functions are values too. You can store one in a variable, pass it to another function, or return it as an answer.',
      quiz: {
        question: 'What does <code>return</code> do inside a function?',
        options: ['Repeats the function forever', 'Hands a result back to the caller', 'Renames the function'],
        answer: 1,
        correct: 'Exactly. <code>return</code> hands the result back to the code that called the function.',
        incorrect: 'Think of <code>return</code> as the function giving its answer back to you.'
      }
    },
    {
      id: 'arrays',
      short: 'Arrays & lists',
      topic: 'KEEP THINGS TOGETHER',
      title: 'Make a list<br class="heading-break" /> <em>of your favorites.</em>',
      intro: 'When you have a bunch of related values, an <strong>array</strong> keeps them together in one ordered list. Great for playlists, scores, and snack rankings.',
      readTime: '4 min',
      concept: 'An array is an ordered collection. Each item has a position, called an index, and the first position is number zero.',
      analogies: [
        { icon: '🧺', title: 'A row of little baskets', text: 'Each basket has a spot in the row. Start counting at zero to reach the first basket.' },
        { icon: '🎧', title: 'A music queue', text: 'Songs wait in order. Add a new one to the end or jump to a song by its position.' }
      ],
      breakdown: [
        { title: 'Wrap items in square brackets.', text: 'Separate each value with a comma: <code>["tea", "juice", "water"]</code>.' },
        { title: 'Find an item by index.', text: 'Use <code>snacks[0]</code> to get the first item. Counting starts at zero, not one.' },
        { title: 'Add to the end.', text: 'Use <code>push()</code> to add a new item, then check <code>length</code> to see how many you have.' }
      ],
      exampleDescription: 'This list starts with two treats. Add one more and peek at the first item.',
      code: 'const snacks = ["mango", "popcorn"];\nsnacks.push("cookies");\n\nconsole.log(snacks[0]);\nconsole.log(snacks.length);',
      walkthrough: {"title": "A list stored in one variable", "code": "const snacks = [\"mango\", \"popcorn\"];", "parts": [{"token": "const snacks", "meaning": "Declares a variable named snacks to hold the list."}, {"token": "=", "meaning": "Assigns the array on the right to the snacks variable."}, {"token": "[ ... ]", "meaning": "Square brackets create an array: an ordered list of items."}, {"token": "\"mango\"", "meaning": "The first item. Its index is 0 because JavaScript arrays start counting at zero."}, {"token": ",", "meaning": "Separates one item from the next."}, {"token": "\"popcorn\"", "meaning": "The second string item. Its index is 1."}, {"token": ";", "meaning": "Ends the declaration statement."}]},
      challengeTitle: 'Build a mini playlist',
      challengeDescription: 'Make an array of three song titles. Add a fourth song and print the last one.',
      challengeCode: 'const songs = ["Sunbeam", "Orbit", "Daydream"];\nsongs.push("Moonlight");\n\nconsole.log(songs[3]);',
      hint: 'The final index is one less than the array length. With four songs, the last index is <code>3</code>.',
      funFact: 'Arrays have lots of useful built-in helpers: <code>map()</code>, <code>filter()</code>, and <code>find()</code> are a few favorites.',
      quiz: {
        question: 'What is the index of the first item in an array?',
        options: ['0', '1', '-1'],
        answer: 0,
        correct: 'Correct! Array indexes start at <code>0</code> in JavaScript.',
        incorrect: 'JavaScript is a zero-based language: the first spot is index zero.'
      }
    },
    {
      id: 'objects',
      short: 'Objects & details',
      topic: 'DESCRIBE A THING',
      title: 'Bundle the details<br class="heading-break" /> <em>of one thing.</em>',
      intro: 'An <strong>object</strong> groups related details under one name. Describe a character, a book, or your favorite snack with neat little key-value pairs.',
      readTime: '4 min',
      concept: 'An object stores properties: each property has a key (its label) and a value (the detail attached to that label).',
      analogies: [
        { icon: '🪪', title: 'A character card', text: 'Name, level, and favorite color all belong on one card, each next to its own label.' },
        { icon: '🗄', title: 'A labeled filing cabinet', text: 'Each drawer has a label so you can find the exact detail you need without rummaging around.' }
      ],
      breakdown: [
        { title: 'Start with curly braces.', text: 'Inside an object, write a key, a colon, then its value: <code>{ name: "Mochi" }</code>.' },
        { title: 'Separate each detail.', text: 'Put a comma between properties. Keys are usually written as clear, readable names.' },
        { title: 'Reach for a property.', text: 'Use dot notation like <code>pet.name</code>, or square brackets like <code>pet["name"]</code>.' }
      ],
      exampleDescription: 'One object keeps a pet’s details together. Dot notation fetches the name and lets us update the mood.',
      code: 'const pet = {\n  name: "Mochi",\n  mood: "sleepy"\n};\n\npet.mood = "playful";\nconsole.log(pet.name, pet.mood);',
      walkthrough: {"title": "A pet object’s labeled details", "code": "const pet = { name: \"Mochi\", mood: \"sleepy\" };", "parts": [{"token": "const pet", "meaning": "Declares the variable pet, which will refer to this object."}, {"token": "{ ... }", "meaning": "Curly braces create an object, a group of labeled properties."}, {"token": "name", "meaning": "A property key: the label for one detail on the pet object."}, {"token": ":", "meaning": "Connects a property key to its value. Read it as “name has the value Mochi.”"}, {"token": "\"Mochi\"", "meaning": "The value stored under the name key. It is a string because it is in quotes."}, {"token": ",", "meaning": "Separates this property from the next one, mood."}, {"token": ";", "meaning": "Ends the statement that creates the object."}]},
      challengeTitle: 'Create a character card',
      challengeDescription: 'Make a character object with a name and level. Log a sentence using both details.',
      challengeCode: 'const hero = {\n  name: "Nova",\n  level: 7\n};\n\nconsole.log(`${hero.name} is level ${hero.level}!`);',
      hint: 'Use curly braces and a comma between properties. Read the values with dot notation, like <code>hero.name</code>.',
      funFact: 'JavaScript objects can contain other objects. That means you can model rich things—like a game world—one little detail at a time.',
      quiz: {
        question: 'How do you read the <code>name</code> property from <code>pet</code>?',
        options: ['pet → name', 'pet.name', 'pet(name)'],
        answer: 1,
        correct: 'Yes! Dot notation reads a property from an object.',
        incorrect: 'Use the object name, a dot, and then the property key.'
      }
    }
  ];

  const STARTER_FILES = [
    {
      name: 'main.js',
      content: lessons[0].code,
      starter: lessons[0].code
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
      return {
        lessonIndex: safeLessonIndex,
        completed: [...new Set(completed)],
        xp: Number.isFinite(saved.xp) ? Math.max(0, Math.floor(saved.xp)) : 0,
        quizAnswers,
        quizSolved: [...new Set(quizSolved)],
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
  let runButtonTimer = null;

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
    analogyGrid: $('#analogyGrid'),
    breakdownList: $('#breakdownList'),
    exampleDescription: $('#exampleDescription'),
    exampleCode: $('#exampleCode'),
    walkthroughHeading: $('#walkthroughHeading'),
    walkthroughCode: $('#walkthroughCode'),
    walkthroughParts: $('#walkthroughParts'),
    challengeTitle: $('#challengeTitle'),
    challengeDescription: $('#challengeDescription'),
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

  function renderLesson() {
    const lesson = activeLesson();
    const step = String(state.lessonIndex + 1).padStart(2, '0');
    els.breadcrumbStep.textContent = `STEP ${step}`;
    els.readTime.textContent = lesson.readTime;
    els.lessonTopic.textContent = lesson.topic;
    els.lessonTitle.innerHTML = lesson.title;
    els.lessonIntro.innerHTML = lesson.intro;
    els.lessonConcept.innerHTML = lesson.concept;
    els.analogyGrid.innerHTML = lesson.analogies.map((analogy) => `<article class="analogy-card"><div class="analogy-symbol" aria-hidden="true">${analogy.icon}</div><div class="analogy-copy"><strong>${analogy.title}</strong><p>${analogy.text}</p></div></article>`).join('');
    els.breakdownList.innerHTML = lesson.breakdown.map((item, index) => `<article class="breakdown-item"><div class="breakdown-number">${String(index + 1).padStart(2, '0')}</div><div class="breakdown-copy"><strong>${item.title}</strong><p>${item.text}</p></div></article>`).join('');
    els.exampleDescription.innerHTML = lesson.exampleDescription;
    els.exampleCode.innerHTML = highlightCode(lesson.code);
    els.walkthroughHeading.textContent = lesson.walkthrough.title;
    els.walkthroughCode.innerHTML = highlightCode(lesson.walkthrough.code);
    els.walkthroughParts.innerHTML = lesson.walkthrough.parts.map((part, index) => `<article class="walkthrough-part"><div class="walkthrough-token-wrap"><span class="walkthrough-part-number">${String(index + 1).padStart(2, '0')}</span><code class="walkthrough-token">${escapeHTML(part.token)}</code></div><p>${escapeHTML(part.meaning)}</p></article>`).join('');
    els.challengeTitle.textContent = lesson.challengeTitle;
    els.challengeDescription.innerHTML = lesson.challengeDescription;
    const hintOpen = hintVisibleFor === lesson.id;
    els.hintButton.textContent = hintOpen ? 'Hide hint' : 'Need a hint?';
    els.hintBox.hidden = !hintOpen;
    els.hintBox.innerHTML = lesson.hint;
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

  function addLessonFile(prefix, lesson, content) {
    const baseName = `${prefix}-${lesson.id}.js`;
    let target = fileByName(baseName);
    if (!target) {
      target = { name: baseName, content, starter: content };
      state.files.push(target);
    } else {
      target.content = content;
      target.starter = content;
    }
    state.activeFile = target.name;
    renderFiles();
    setMode('playground');
    persistState(true);
    showToast(`${target.name} opened · Press Run code when you're ready`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    const token = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    currentRunToken = token;
    const sourceMap = Object.fromEntries(state.files.map((entry) => [entry.name, entry.content]));
    els.runnerFrame.srcdoc = buildRunnerDocument(sourceMap, file.name, token);
    runButtonTimer = setTimeout(() => setRunButtonRunning(false), 15000);
  }

  function handleRunnerMessage(event) {
    if (event.source !== els.runnerFrame.contentWindow || !event.data || event.data.__kodelearnToken !== currentRunToken) return;
    const data = event.data;
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
    $('#hintButton').addEventListener('click', () => {
      const lesson = activeLesson();
      hintVisibleFor = hintVisibleFor === lesson.id ? '' : lesson.id;
      renderLesson();
    });
    $('#loadExampleButton').addEventListener('click', () => addLessonFile('example', activeLesson(), activeLesson().code));
    $('#loadChallengeButton').addEventListener('click', () => addLessonFile('try', activeLesson(), activeLesson().challengeCode));
    $('#copyExampleButton').addEventListener('click', copyExample);

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
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (error) {}
    });
  }

  renderAll();
  initEvents();
})();
