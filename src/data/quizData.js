export const quizQuestions = [
  {
    "id": 1,
    "category": "Agentic AI",
    "question": "What is the primary distinction between a standard LLM 'Chatbot' and an 'Agentic Workflow'?",
    "options": [
      "Agents can autonomously plan, execute multi-step tool usage, and verify results, whereas Chatbots primarily generate text based on immediate context.",
      "Agents run on local hardware while Chatbots run exclusively in the cloud.",
      "Agents use 'Chain of Thought' prompting, whereas Chatbots do not.",
      "Agents have access to the internet, whereas Chatbots are strictly offline."
    ],
    "correctAnswer": 0,
    "hint": "Think about the difference between 'passive generation' and 'active execution'.",
    "explanation": "While Chatbots can use tools (like search), an Agentic Workflow implies a loop of reasoning: Planning -> Acting -> Observing -> Refining. It's about autonomy and state management, not just internet access or prompting styles."
  },
  {
    "id": 2,
    "category": "RAG Architecture",
    "question": "In a RAG (Retrieval-Augmented Generation) system, what is the specific role of the 'Embeddings Model'?",
    "options": [
      "To generate the final human-readable response based on the retrieved context.",
      "To convert text chunks into vector representations so they can be semantically compared and retrieved.",
      "To compress the database size by removing stop words and punctuation.",
      "To fine-tune the LLM on the specific domain knowledge before inference."
    ],
    "correctAnswer": 1,
    "hint": "It translates words into coordinates (numbers) in a multi-dimensional space.",
    "explanation": "The Embeddings Model turns text into vectors. This allows the system to find 'semantically similar' text (by measuring distance between vectors) even if the keywords don't match exactly. The LLM then generates the answer; the Embeddings Model just finds the relevant info."
  },
  {
    "id": 3,
    "category": "Multi-Agent Systems",
    "question": "Which of these describes a 'Critic' agent's role in a multi-agent architecture?",
    "options": [
      "To halt the process immediately if an error is detected.",
      "To evaluate the output of the 'Executor' agent against specific criteria and provide feedback for iteration.",
      "To generate the initial plan for the other agents to follow.",
      "To log all interactions to a database for future auditing."
    ],
    "correctAnswer": 1,
    "hint": "It acts as a quality control layer, not a stopper.",
    "explanation": "A Critic doesn't just stop the flow; it provides constructive feedback (e.g., 'Code is not PEP8 compliant') which the Executor then uses to improve the result. It enables a self-correcting loop."
  },
  {
    "id": 4,
    "category": "Prompt Engineering",
    "question": "What is the precise function of a 'System Prompt' in modern LLM APIs?",
    "options": [
      "To inject the user's specific question into the model's context window.",
      "To define the model's persistent persona, boundary constraints, and output format rules.",
      "To hard-code the model's temperature and top_p settings.",
      "To pre-load the model with RAG data before the conversation begins."
    ],
    "correctAnswer": 1,
    "hint": "It is the 'God Mode' instruction that governs how the model behaves throughout the session.",
    "explanation": "The System Prompt sets the 'rules of the game'. Unlike the User Prompt (which changes every turn) or Hyperparameters (Temp/Top_P), the System Prompt tells the model *who* it is and *how* it should act (e.g., 'You are a helpful coding assistant')."
  },
  {
    "id": 5,
    "category": "LLM Parameters",
    "question": "How does increasing the 'Temperature' parameter specifically affect the token generation process?",
    "options": [
      "It increases the model's inference speed by skipping low-probability tokens.",
      "It flattens the probability distribution, giving lower-probability tokens a higher chance of being selected.",
      "It strictly forces the model to choose the single most likely token every time.",
      "It expands the context window size to allow for longer creative outputs."
    ],
    "correctAnswer": 1,
    "hint": "Think of it as adding 'noise' to the decision-making process.",
    "explanation": "Temperature doesn't change speed or context size. Low temp (0.1) makes the distribution peaky (greedy decoding). High temp (0.9) flattens it, meaning the model is more likely to pick a 'risky' or 'creative' word that wasn't the #1 choice."
  }
  ,
  {
    "id": 61,
    "category": "Linear Regression",
    "question": "In the linear regression equation (y = bias + weight * feature), what is the 'Weight' equivalent to in a standard algebraic line equation?",
    "options": [
      "The x-intercept",
      "The y-intercept",
      "The label",
      "The slope (m)"
    ],
    "correctAnswer": 3,
    "hint": "Weight determines the steepness and direction of the line.",
    "explanation": "The **Weight** ($\\mathbf{w}$) in ML is the **slope** ($\\mathbf{m}$). It indicates how much the output label changes for a one-unit change in the feature."
  },
  {
    "id": 62,
    "category": "Linear Regression",
    "question": "What is the primary role of the 'Bias' ($\\mathbf{b}$) in the linear regression equation?",
    "options": [
      "It represents the maximum possible value of the feature.",
      "It determines the scale of the error rate.",
      "It is the model parameter equivalent to the y-intercept, allowing the line to best fit the data that does not pass through the origin.",
      "It represents the number of features used in the model."
    ],
    "correctAnswer": 2,
    "hint": "Where does the line cross the vertical axis?",
    "explanation": "The **Bias** is the y-intercept. It defines the predicted output value when all input features are zero, ensuring the line has the best vertical positioning."
  },
  {
    "id": 63,
    "category": "Linear Regression",
    "question": "Which two parts of the linear regression equation are calculated and updated *during* the training process?",
    "options": [
      "The feature values and the label.",
      "The prediction and the feature values.",
      "The **Bias** and the **Weights**.",
      "The loss function and the learning rate."
    ],
    "correctAnswer": 2,
    "hint": "The goal of training is to find the optimal line parameters.",
    "explanation": "Training is the process of minimizing the error (loss) by iteratively adjusting the **Bias** and **Weights** until the model makes the most accurate predictions for the given data."
  },
  {
    "id": 64,
    "category": "Machine Learning Training",
    "question": "What is a 'Loss Function' used for in the context of training a linear model?",
    "options": [
      "To display the data on a graph.",
      "To define the model's architecture (e.g., number of layers).",
      "To measure the discrepancy (error) between the model's predictions and the actual labels.",
      "To convert the raw input data into features."
    ],
    "correctAnswer": 2,
    "hint": "It quantifies how 'bad' the model is at a given moment.",
    "explanation": "The **Loss Function** generates a single number (the loss value) that the model attempts to minimize. Lower loss means better model accuracy."
  },
  {
    "id": 65,
    "category": "Python Fundamentals",
    "question": "What is the primary purpose of the `range()` function in Python, especially when used with a `for` loop?",
    "options": [
      "To perform complex mathematical calculations.",
      "To generate an immutable sequence of numbers, often used to iterate a specific number of times.",
      "To convert a string into a list.",
      "To handle file input and output."
    ],
    "correctAnswer": 1,
    "hint": "Think of it as counting up to a stop point.",
    "explanation": "The `range()` function efficiently generates numbers, commonly used in a `for` loop to iterate, such as `for i in range(10):` which loops 10 times (from 0 up to 9)."
  },
  {
    "id": 66,
    "category": "Python Data Structures",
    "question": "In Python, which data structure is an unordered collection of unique, mutable items stored as key-value pairs?",
    "options": [
      "List",
      "Tuple",
      "Set",
      "Dictionary"
    ],
    "correctAnswer": 3,
    "hint": "Think of a physical phonebook or glossary.",
    "explanation": "**Dictionaries** map keys (like 'name') to values (like 'Alice'). Keys must be unique, and the entire structure is unordered (before Python 3.7), optimized for fast lookups by key."
  },
  {
    "id": 67,
    "category": "Python Control Flow",
    "question": "What is the function of the `break` statement inside a `for` or `while` loop?",
    "options": [
      "It skips the current iteration and moves to the next one.",
      "It completely exits the current loop, regardless of the loop condition.",
      "It stops the entire program from running.",
      "It signals a syntax error."
    ],
    "correctAnswer": 1,
    "hint": "It breaks the flow of execution out of the loop.",
    "explanation": "The `break` statement is used to terminate the loop prematurely. For example, in a search loop, once the item is found, you use `break` to stop searching the rest of the list."
  },
  {
    "id": 68,
    "category": "Python Control Flow",
    "question": "What is the function of the `continue` statement inside a loop?",
    "options": [
      "It completely exits the loop.",
      "It stops the program.",
      "It immediately skips the remaining code in the current iteration and moves to the next iteration of the loop.",
      "It restarts the loop from the beginning."
    ],
    "correctAnswer": 2,
    "hint": "It continues to the next cycle of the loop.",
    "explanation": "The `continue` statement is useful when you want to skip processing a specific item in an iteration (e.g., skip processing negative numbers) but keep the loop running."
  },
  {
    "id": 69,
    "category": "Networking & HTTP",
    "question": "What is the distinction between a **Client** and a **Server** in web architecture?",
    "options": [
      "Clients store databases; Servers initiate requests.",
      "Clients are always mobile phones; Servers are always desktops.",
      "The Client (e.g., your browser) initiates requests; the Server stores data, processes requests, and sends a response.",
      "They run the same code but in different locations."
    ],
    "correctAnswer": 2,
    "hint": "Who is asking, and who is answering?",
    "explanation": "The **Client** is the user-facing device/software that asks for a resource (request). The **Server** processes that request and provides the resource (response)."
  },
  {
    "id": 70,
    "category": "Networking & HTTP",
    "question": "Which HTTP status code signifies that the requested resource has been found and the request was successful?",
    "options": [
      "301",
      "403",
      "503",
      "200"
    ],
    "correctAnswer": 3,
    "hint": "Two hundred means all is well.",
    "explanation": "The **200 OK** status code is the most common successful response, meaning the server successfully processed the request and is returning the requested data (like an HTML page)."
  },
  {
    "id": 71,
    "category": "Networking & HTTP",
    "question": "If you receive a **503** status code, what does this most likely indicate?",
    "options": [
      "The URL is misspelled (Client Error).",
      "The page has been permanently moved (Redirection).",
      "The server is temporarily unable to handle the request (Server Error).",
      "The connection was successful."
    ],
    "correctAnswer": 2,
    "hint": "Five hundred level codes mean it's the server's fault.",
    "explanation": "A **503 Service Unavailable** code typically means the server is down for maintenance or is overloaded (traffic surge), but it is expected to be temporary."
  },
  {
    "id": 72,
    "category": "Networking & HTTP",
    "question": "What is the specific HTTP method used to send data to the server to *create* a new resource (e.g., submitting a web form)?",
    "options": [
      "GET",
      "PULL",
      "POST",
      "DELETE"
    ],
    "correctAnswer": 2,
    "hint": "You are 'posting' data to the server.",
    "explanation": "**POST** is the method used to submit data to be processed to a specified resource, often resulting in a change on the server (e.g., creating a new user or a new blog post)."
  },
  {
    "id": 73,
    "category": "Networking & DNS",
    "question": "In a URL, what does the part like `/en-US/` represent?",
    "options": [
      "The subdomain.",
      "The domain name.",
      "The protocol.",
      "The **Path** to the resource on the server."
    ],
    "correctAnswer": 3,
    "hint": "The file location after the domain name.",
    "explanation": "The **Path** specifies the exact location of the file or resource the client is requesting from the server's file system (or how the server should route the request)."
  },
  {
    "id": 74,
    "category": "Networking & DNS",
    "question": "What is the part of a domain name that is read furthest to the right (e.g., .com, .org, .gov)?",
    "options": [
      "Secondary Level Domain (SLD)",
      "Subdomain",
      "Top-Level Domain (TLD)",
      "Label"
    ],
    "correctAnswer": 2,
    "hint": "It’s at the top of the domain hierarchy.",
    "explanation": "The **TLD** defines the highest-level grouping of a domain name, often indicating its purpose (.org for organization, .edu for education, etc.)."
  },
  {
    "id": 75,
    "category": "Web Architecture",
    "question": "What is the key difference between a **Static Site** and a **Dynamic Site**?",
    "options": [
      "Static sites use databases; Dynamic sites do not.",
      "Static sites require client-side JavaScript; Dynamic sites do not.",
      "Static sites return the same hard-coded content; Dynamic sites generate custom content on-demand, often using database information.",
      "Dynamic sites are always faster."
    ],
    "correctAnswer": 2,
    "hint": "One is pre-printed; the other is generated right now.",
    "explanation": "A **Static Site** simply retrieves a file (HTML, CSS) from storage. A **Dynamic Site** runs server-side code (PHP, Python, Node.js) to build the unique HTML content before sending it back."
  },
  {
    "id": 76,
    "category": "Web Architecture",
    "question": "Which of the following is a task commonly handled by **Server-side** programming?",
    "options": [
      "Validating the user's keystrokes in a form.",
      "Drawing UI components like buttons and text fields.",
      "Retrieving and processing user data from a database and managing user sessions.",
      "Handling a click event on a button."
    ],
    "correctAnswer": 2,
    "hint": "Things that happen away from the user's browser.",
    "explanation": "Server-side code (the backend) handles secure and stateful operations that require access to sensitive resources like databases and file systems."
  },
  {
    "id": 77,
    "category": "Web Architecture",
    "question": "What is the primary language used for **Client-side** programming to add interactivity and behavior to a website?",
    "options": [
      "HTML",
      "CSS",
      "Python",
      "JavaScript"
    ],
    "correctAnswer": 3,
    "hint": "The language that runs inside the browser.",
    "explanation": "**JavaScript** is the language interpreted and executed by the web browser to handle user input, manipulate the DOM, and make asynchronous requests."
  },
  {
    "id": 78,
    "category": "Python Data Structures",
    "question": "Which Python data structure is designed to be an unordered collection of unique elements (no duplicates)?",
    "options": [
      "List",
      "Tuple",
      "Set",
      "String"
    ],
    "correctAnswer": 2,
    "hint": "Used when you need to quickly check for membership or remove all duplicates.",
    "explanation": "A **Set** is primarily used to check if an element is present and to ensure all elements are unique. They are defined using curly braces `{1, 2, 3}` but without key-value pairs (unlike Dictionaries)."
  },
  {
    "id": 79,
    "category": "Python Control Flow",
    "question": "What happens if a Python loop includes an `else` clause?",
    "options": [
      "The `else` code runs every time the loop finishes *normally* (i.e., not exited by a `break` statement).",
      "The `else` code runs only if an error occurs.",
      "The `else` code runs if the loop condition is initially false.",
      "This is a syntax error in Python."
    ],
    "correctAnswer": 0,
    "hint": "The `else` is the 'happily ever after' path for a search loop.",
    "explanation": "The `else` block on a loop executes if the loop completes without the `break` statement being encountered. It's often used in search logic to run 'Item Not Found' code."
  },
  {
    "id": 80,
    "category": "Python Fundamentals",
    "question": "What is the primary benefit of using **Default Argument Values** when defining a Python function?",
    "options": [
      "They make the function run faster.",
      "They allow arguments to be optional, making the function more flexible to call.",
      "They prevent errors from ever occurring.",
      "They force the user to provide the argument."
    ],
    "correctAnswer": 1,
    "hint": "You don't always need to specify them.",
    "explanation": "If a function is defined as `def greet(name, message='Hello'):`, you can call it as `greet('Alice')` without providing the message, using the default value."
  },
  {
    "id": 81,
    "category": "Networking & HTTP",
    "question": "What is the function of **Proxies** (intermediate entities) in the HTTP flow?",
    "options": [
      "They are the only place where the data is stored permanently.",
      "They must always alter the request to be non-transparent.",
      "They can perform caching, load balancing, filtering, and logging between the client and the server.",
      "They are always responsible for DNS lookups."
    ],
    "correctAnswer": 2,
    "hint": "They act as a relay and middle-manager for requests.",
    "explanation": "**Proxies** sit between the client and server to manage traffic, security, and performance. Caching (storing copies of common files) is one of their most important roles."
  },
  {
    "id": 82,
    "category": "Networking & HTTP",
    "question": "HTTP is fundamentally a **stateless** protocol. How does the web overcome this limitation to maintain a user's session (e.g., keeping them logged in)?",
    "options": [
      "By using the `GET` method only.",
      "By relying on the server to automatically remember everything.",
      "By using **HTTP Cookies** to exchange small pieces of stateful data with each request.",
      "By opening a new TCP connection for every request."
    ],
    "correctAnswer": 2,
    "hint": "Small files that the server gives the browser to remember things.",
    "explanation": "Since HTTP itself treats every request as brand new, **Cookies** (sent in the HTTP headers) are the classic mechanism used to store a Session ID, allowing the server to look up the user's state."
  },
  {
    "id": 83,
    "category": "Python Data Structures",
    "question": "What is a **List Comprehension** in Python?",
    "options": [
      "A verbose way to define a list over multiple lines.",
      "A syntax for rapidly creating a list from an iterable using a single, concise line of code.",
      "The process of converting a list into a string.",
      "A special type of function definition."
    ],
    "correctAnswer": 1,
    "hint": "A compact way to build a list.",
    "explanation": "List comprehensions are a powerful, idiomatic Python feature. Example: `squares = [x**2 for x in range(10)]` creates a list of squared numbers in one line."
  },
  {
    "id": 84,
    "category": "Python Modules",
    "question": "What is the purpose of the `json` module in the Python Standard Library?",
    "options": [
      "To compress files for storage.",
      "To perform complex mathematical operations.",
      "To read and write structured data using the JSON format.",
      "To send HTTP requests over the internet."
    ],
    "correctAnswer": 2,
    "hint": "It handles the data format commonly used in web APIs.",
    "explanation": "The `json` module provides methods like `json.load()` and `json.dump()` to easily serialize (encode) Python objects into JSON and deserialize (decode) JSON back into Python objects."
  },
  {
    "id": 85,
    "category": "Web Fundamentals",
    "question": "Which technology is primarily responsible for defining the **semantics** (meaning) and structure of web page content?",
    "options": [
      "CSS",
      "JavaScript",
      "HTML",
      "HTTP"
    ],
    "correctAnswer": 2,
    "hint": "HyperText Markup Language.",
    "explanation": "**HTML** elements like `<header>`, `<article>`, and `<nav>` provide semantic meaning to the content, which is essential for accessibility and search engine optimization."
  },
  {
    "id": 86,
    "category": "Web Fundamentals",
    "question": "Which of the following is NOT typically considered an 'Asset' file on a website?",
    "options": [
      "Images (e.g., .jpg)",
      "Videos (e.g., .mp4)",
      "Word Documents (e.g., .docx)",
      "JavaScript (.js) files"
    ],
    "correctAnswer": 3,
    "hint": "Assets are content; code is interpreted.",
    "explanation": "Assets are items that appear on a website but are not the code the browser interprets, such as media, PDFs, or images. JavaScript, HTML, and CSS are the core code languages."
  },
  {
    "id": 87,
    "category": "Networking & HTTP",
    "question": "What is a **Packet** in networking?",
    "options": [
      "The entire file sent from the server.",
      "A large, single data stream.",
      "A small chunk of data, containing a header and a payload, used to transmit information across the web efficiently.",
      "A type of firewall."
    ],
    "correctAnswer": 2,
    "hint": "Data is broken down for transport.",
    "explanation": "Data is segmented into small **Packets** so they can be routed efficiently, and missing or corrupted pieces can be easily re-requested without needing the entire file to be resent."
  },
  {
    "id": 88,
    "category": "Linear Regression",
    "question": "A model that relies on multiple input variables (like Engine Displacement, Acceleration, and Horsepower) to predict a label is called a model with:",
    "options": [
      "Single features.",
      "Multiple bias points.",
      "Multiple weights (w1, w2, w3, etc.).",
      "Multiple intercept points."
    ],
    "correctAnswer": 2,
    "hint": "Each feature must have its own influence value.",
    "explanation": "When a model uses multiple features, the equation expands to include a separate **Weight** for each feature, defining the unique influence of that feature on the final prediction."
  },
  {
    "id": 89,
    "category": "Python Errors",
    "question": "What is a **Syntax Error** in Python?",
    "options": [
      "An error that occurs while the program is running.",
      "An error in logic that produces the wrong result.",
      "An error where the interpreter cannot parse the code because it violates the rules of the language structure (e.g., forgetting a colon).",
      "An error that requires a network connection."
    ],
    "correctAnswer": 2,
    "hint": "The program can't even start to run.",
    "explanation": "**Syntax Errors** (like forgetting a parenthesis or using incorrect indentation) prevent the code from being executed at all, as the interpreter cannot understand what to do."
  },
  {
    "id": 90,
    "category": "Python Errors",
    "question": "What is the primary mechanism for gracefully dealing with runtime errors in Python?",
    "options": [
      "Using the `match` statement.",
      "Using the `try...except` block.",
      "Using the `import` statement.",
      "Using a list comprehension."
    ],
    "correctAnswer": 1,
    "hint": "You try a section of code, and catch it if it goes wrong.",
    "explanation": "The `try...except` block allows you to execute risky code (like reading a file that might not exist) in the `try` block and then define cleanup or error handling code in the `except` block if something goes wrong."
  },
  {
    "id": 91,
    "category": "Python Data Structures",
    "question": "What Python concept is best described as 'The act of mapping multiple values into separate variables from a list or tuple'?",
    "options": [
      "Lambda expressions.",
      "Unpacking argument lists.",
      "Formatted String Literals.",
      "Object-oriented programming."
    ],
    "correctAnswer": 1,
    "hint": "Using the asterisk * symbol with arguments.",
    "explanation": "Unpacking uses the asterisk `*` for positional arguments or `**` for keyword arguments to automatically map elements of a sequence (like a list) to the function's parameters."
  },
  {
    "id": 92,
    "category": "Python Control Flow",
    "question": "Which Python statement is primarily used to check a variable against a set of different patterns or values, similar to a 'switch' statement in other languages?",
    "options": [
      "`if` statements.",
      "`for` statements.",
      "`match` statements.",
      "`while` statements."
    ],
    "correctAnswer": 2,
    "hint": "It's Python's newer structural pattern matching feature.",
    "explanation": "The `match` statement (introduced in Python 3.10) is used for **structural pattern matching**, which is more expressive than simple `if/elif/else` chains for complex comparisons."
  },
  {
    "id": 93,
    "category": "Networking & HTTP",
    "question": "The version of HTTP that introduced **multiplexing** requests over a single connection to improve efficiency is:",
    "options": [
      "HTTP/1.0",
      "HTTP/1.1",
      "HTTP/2",
      "QUIC"
    ],
    "correctAnswer": 2,
    "hint": "The most recent major version widely adopted.",
    "explanation": "**HTTP/2** (and the experimental QUIC) addressed the efficiency issues of HTTP/1.x, which required separate, less efficient connections for many requests, by allowing multiple data streams over one TCP connection."
  },
  {
    "id": 94,
    "category": "Python Functions",
    "question": "What are Python **Lambda Expressions** primarily used for?",
    "options": [
      "Creating full classes with inheritance.",
      "Creating small, anonymous (unnamed) one-line functions.",
      "Writing documentation strings.",
      "Handling exceptions."
    ],
    "correctAnswer": 1,
    "hint": "They are functions without the `def` keyword.",
    "explanation": "A **Lambda** function is a concise way to define a function that contains a single expression, often used for arguments to higher-order functions like `map()` or `filter()`."
  },
  {
    "id": 95,
    "category": "Python Data Structures",
    "question": "If you want to use a Python List like a **Stack** (Last-In, First-Out), which two methods would you use?",
    "options": [
      "`.index()` and `.count()`",
      "`.append()` and `.pop()`",
      "`.sort()` and `.reverse()`",
      "`.insert()` and `.remove()`"
    ],
    "correctAnswer": 1,
    "hint": "Adding to the end, taking from the end.",
    "explanation": "The **Stack** model is LIFO. **`append()`** adds an item to the end, and **`pop()`** removes and returns the item from the end, perfectly simulating a stack."
  },
  {
    "id": 96,
    "category": "URL Components",
    "question": "In the URL `https://dev.mozilla.org/en-US/`, what is `dev` an example of?",
    "options": [
      "The protocol.",
      "The Top-Level Domain (TLD).",
      "The Path.",
      "The **Subdomain**."
    ],
    "correctAnswer": 3,
    "hint": "It's a distinct content area before the main domain name.",
    "explanation": "A **Subdomain** is a label before the Second-Level Domain (mozilla.org) that allows a single domain owner to host separate content (e.g., `blog.example.com` or `shop.example.com`)."
  },
  {
    "id": 97,
    "category": "Python File Handling",
    "question": "Which Python keyword ensures that a resource (like a file) is properly closed or cleaned up, even if an exception occurs?",
    "options": [
      "`break`",
      "`else`",
      "`with`",
      "`import`"
    ],
    "correctAnswer": 2,
    "hint": "Used often with opening files: `with open(...) as f:`",
    "explanation": "The **`with`** statement is used for context management. When it's used to open a file, it guarantees that the file's `.close()` method is called when the block is exited, even if an error is raised inside the block."
  },
  {
    "id": 98,
    "category": "Networking & HTTP",
    "question": "Which HTTP status code is used for a **permanent redirect**, telling the client to use a new URL from now on?",
    "options": [
      "301",
      "400",
      "500",
      "202"
    ],
    "correctAnswer": 0,
    "hint": "Three hundred level codes are for redirection.",
    "explanation": "**301 Moved Permanently** is crucial for SEO and maintaining links. It informs the browser and search engines that the original resource should now be accessed at the new location provided in the response."
  },
  {
    "id": 99,
    "category": "Web Architecture",
    "question": "When developing a dynamic website, why is using a **Web Framework** (like Django or Next.js) highly recommended?",
    "options": [
      "It makes the site static and simple.",
      "It makes the code run on the client-side.",
      "It provides ready-made functionality for sessions, routing, authentication, and database access, saving the developer from implementing vital features from scratch.",
      "It forces the use of JavaScript."
    ],
    "correctAnswer": 2,
    "hint": "It gives you a comprehensive toolkit to build a full application.",
    "explanation": "Web frameworks abstract away the complexity of core server logic (like handling the HTTP server itself), allowing the developer to focus on the unique business logic of their application."
  },
  {
    "id": 100,
    "category": "Python Modules",
    "question": "What is the primary content found in **The Python Standard Library**?",
    "options": [
      "Third-party libraries downloaded via `pip`.",
      "External frameworks for web development.",
      "An extensive collection of built-in modules for common tasks like OS interface, math, internet access, and data formatting.",
      "Documentation for the Python language."
    ],
    "correctAnswer": 2,
    "hint": "These are the 'batteries included' with every Python installation.",
    "explanation": "The Standard Library is a huge set of modules (`os`, `sys`, `json`, `math`, `datetime`) that come with the base Python installation, meaning you can immediately use them without needing to install anything extra."
  },
  {
    "id": 61,
    "category": "Linear Regression",
    "question": "In the linear regression equation (y = bias + weight * feature), what is the 'Weight' equivalent to in a standard algebraic line equation?",
    "options": [
      "The x-intercept",
      "The y-intercept",
      "The label",
      "The slope (m)"
    ],
    "correctAnswer": 3,
    "hint": "Weight determines the steepness and direction of the line.",
    "explanation": "The **Weight** ($\\mathbf{w}$) in ML is the **slope** ($\\mathbf{m}$). It indicates how much the output label changes for a one-unit change in the feature."
  },
  {
    "id": 62,
    "category": "Linear Regression",
    "question": "What is the primary role of the 'Bias' ($\\mathbf{b}$) in the linear regression equation?",
    "options": [
      "It represents the maximum possible value of the feature.",
      "It determines the scale of the error rate.",
      "It is the model parameter equivalent to the y-intercept, allowing the line to best fit the data that does not pass through the origin.",
      "It represents the number of features used in the model."
    ],
    "correctAnswer": 2,
    "hint": "Where does the line cross the vertical axis?",
    "explanation": "The **Bias** is the y-intercept. It defines the predicted output value when all input features are zero, ensuring the line has the best vertical positioning."
  },
  {
    "id": 63,
    "category": "Linear Regression",
    "question": "Which two parts of the linear regression equation are calculated and updated *during* the training process?",
    "options": [
      "The feature values and the label.",
      "The prediction and the feature values.",
      "The **Bias** and the **Weights**.",
      "The loss function and the learning rate."
    ],
    "correctAnswer": 2,
    "hint": "The goal of training is to find the optimal line parameters.",
    "explanation": "Training is the process of minimizing the error (loss) by iteratively adjusting the **Bias** and **Weights** until the model makes the most accurate predictions for the given data."
  },
  {
    "id": 64,
    "category": "Machine Learning Training",
    "question": "What is a 'Loss Function' used for in the context of training a linear model?",
    "options": [
      "To display the data on a graph.",
      "To define the model's architecture (e.g., number of layers).",
      "To measure the discrepancy (error) between the model's predictions and the actual labels.",
      "To convert the raw input data into features."
    ],
    "correctAnswer": 2,
    "hint": "It quantifies how 'bad' the model is at a given moment.",
    "explanation": "The **Loss Function** generates a single number (the loss value) that the model attempts to minimize. Lower loss means better model accuracy."
  },
  {
    "id": 65,
    "category": "Python Fundamentals",
    "question": "What is the primary purpose of the `range()` function in Python, especially when used with a `for` loop?",
    "options": [
      "To perform complex mathematical calculations.",
      "To generate an immutable sequence of numbers, often used to iterate a specific number of times.",
      "To convert a string into a list.",
      "To handle file input and output."
    ],
    "correctAnswer": 1,
    "hint": "Think of it as counting up to a stop point.",
    "explanation": "The `range()` function efficiently generates numbers, commonly used in a `for` loop to iterate, such as `for i in range(10):` which loops 10 times (from 0 up to 9)."
  },
  {
    "id": 66,
    "category": "Python Data Structures",
    "question": "In Python, which data structure is an unordered collection of unique, mutable items stored as key-value pairs?",
    "options": [
      "List",
      "Tuple",
      "Set",
      "Dictionary"
    ],
    "correctAnswer": 3,
    "hint": "Think of a physical phonebook or glossary.",
    "explanation": "**Dictionaries** map keys (like 'name') to values (like 'Alice'). Keys must be unique, and the entire structure is unordered (before Python 3.7), optimized for fast lookups by key."
  },
  {
    "id": 67,
    "category": "Python Control Flow",
    "question": "What is the function of the `break` statement inside a `for` or `while` loop?",
    "options": [
      "It skips the current iteration and moves to the next one.",
      "It completely exits the current loop, regardless of the loop condition.",
      "It stops the entire program from running.",
      "It signals a syntax error."
    ],
    "correctAnswer": 1,
    "hint": "It breaks the flow of execution out of the loop.",
    "explanation": "The `break` statement is used to terminate the loop prematurely. For example, in a search loop, once the item is found, you use `break` to stop searching the rest of the list."
  },
  {
    "id": 68,
    "category": "Python Control Flow",
    "question": "What is the function of the `continue` statement inside a loop?",
    "options": [
      "It completely exits the loop.",
      "It stops the program.",
      "It immediately skips the remaining code in the current iteration and moves to the next iteration of the loop.",
      "It restarts the loop from the beginning."
    ],
    "correctAnswer": 2,
    "hint": "It continues to the next cycle of the loop.",
    "explanation": "The `continue` statement is useful when you want to skip processing a specific item in an iteration (e.g., skip processing negative numbers) but keep the loop running."
  },
  {
    "id": 69,
    "category": "Networking & HTTP",
    "question": "What is the distinction between a **Client** and a **Server** in web architecture?",
    "options": [
      "Clients store databases; Servers initiate requests.",
      "Clients are always mobile phones; Servers are always desktops.",
      "The Client (e.g., your browser) initiates requests; the Server stores data, processes requests, and sends a response.",
      "They run the same code but in different locations."
    ],
    "correctAnswer": 2,
    "hint": "Who is asking, and who is answering?",
    "explanation": "The **Client** is the user-facing device/software that asks for a resource (request). The **Server** processes that request and provides the resource (response)."
  },
  {
    "id": 70,
    "category": "Networking & HTTP",
    "question": "Which HTTP status code signifies that the requested resource has been found and the request was successful?",
    "options": [
      "301",
      "403",
      "503",
      "200"
    ],
    "correctAnswer": 3,
    "hint": "Two hundred means all is well.",
    "explanation": "The **200 OK** status code is the most common successful response, meaning the server successfully processed the request and is returning the requested data (like an HTML page)."
  },
  {
    "id": 71,
    "category": "Networking & HTTP",
    "question": "If you receive a **503** status code, what does this most likely indicate?",
    "options": [
      "The URL is misspelled (Client Error).",
      "The page has been permanently moved (Redirection).",
      "The server is temporarily unable to handle the request (Server Error).",
      "The connection was successful."
    ],
    "correctAnswer": 2,
    "hint": "Five hundred level codes mean it's the server's fault.",
    "explanation": "A **503 Service Unavailable** code typically means the server is down for maintenance or is overloaded (traffic surge), but it is expected to be temporary."
  },
  {
    "id": 72,
    "category": "Networking & HTTP",
    "question": "What is the specific HTTP method used to send data to the server to *create* a new resource (e.g., submitting a web form)?",
    "options": [
      "GET",
      "PULL",
      "POST",
      "DELETE"
    ],
    "correctAnswer": 2,
    "hint": "You are 'posting' data to the server.",
    "explanation": "**POST** is the method used to submit data to be processed to a specified resource, often resulting in a change on the server (e.g., creating a new user or a new blog post)."
  },
  {
    "id": 73,
    "category": "Networking & DNS",
    "question": "In a URL, what does the part like `/en-US/` represent?",
    "options": [
      "The subdomain.",
      "The domain name.",
      "The protocol.",
      "The **Path** to the resource on the server."
    ],
    "correctAnswer": 3,
    "hint": "The file location after the domain name.",
    "explanation": "The **Path** specifies the exact location of the file or resource the client is requesting from the server's file system (or how the server should route the request)."
  },
  {
    "id": 74,
    "category": "Networking & DNS",
    "question": "What is the part of a domain name that is read furthest to the right (e.g., .com, .org, .gov)?",
    "options": [
      "Secondary Level Domain (SLD)",
      "Subdomain",
      "Top-Level Domain (TLD)",
      "Label"
    ],
    "correctAnswer": 2,
    "hint": "It’s at the top of the domain hierarchy.",
    "explanation": "The **TLD** defines the highest-level grouping of a domain name, often indicating its purpose (.org for organization, .edu for education, etc.)."
  },
  {
    "id": 75,
    "category": "Web Architecture",
    "question": "What is the key difference between a **Static Site** and a **Dynamic Site**?",
    "options": [
      "Static sites use databases; Dynamic sites do not.",
      "Static sites require client-side JavaScript; Dynamic sites do not.",
      "Static sites return the same hard-coded content; Dynamic sites generate custom content on-demand, often using database information.",
      "Dynamic sites are always faster."
    ],
    "correctAnswer": 2,
    "hint": "One is pre-printed; the other is generated right now.",
    "explanation": "A **Static Site** simply retrieves a file (HTML, CSS) from storage. A **Dynamic Site** runs server-side code (PHP, Python, Node.js) to build the unique HTML content before sending it back."
  },
  {
    "id": 76,
    "category": "Web Architecture",
    "question": "Which of the following is a task commonly handled by **Server-side** programming?",
    "options": [
      "Validating the user's keystrokes in a form.",
      "Drawing UI components like buttons and text fields.",
      "Retrieving and processing user data from a database and managing user sessions.",
      "Handling a click event on a button."
    ],
    "correctAnswer": 2,
    "hint": "Things that happen away from the user's browser.",
    "explanation": "Server-side code (the backend) handles secure and stateful operations that require access to sensitive resources like databases and file systems."
  },
  {
    "id": 77,
    "category": "Web Architecture",
    "question": "What is the primary language used for **Client-side** programming to add interactivity and behavior to a website?",
    "options": [
      "HTML",
      "CSS",
      "Python",
      "JavaScript"
    ],
    "correctAnswer": 3,
    "hint": "The language that runs inside the browser.",
    "explanation": "**JavaScript** is the language interpreted and executed by the web browser to handle user input, manipulate the DOM, and make asynchronous requests."
  },
  {
    "id": 78,
    "category": "Python Data Structures",
    "question": "Which Python data structure is designed to be an unordered collection of unique elements (no duplicates)?",
    "options": [
      "List",
      "Tuple",
      "Set",
      "String"
    ],
    "correctAnswer": 2,
    "hint": "Used when you need to quickly check for membership or remove all duplicates.",
    "explanation": "A **Set** is primarily used to check if an element is present and to ensure all elements are unique. They are defined using curly braces `{1, 2, 3}` but without key-value pairs (unlike Dictionaries)."
  },
  {
    "id": 79,
    "category": "Python Control Flow",
    "question": "What happens if a Python loop includes an `else` clause?",
    "options": [
      "The `else` code runs every time the loop finishes *normally* (i.e., not exited by a `break` statement).",
      "The `else` code runs only if an error occurs.",
      "The `else` code runs if the loop condition is initially false.",
      "This is a syntax error in Python."
    ],
    "correctAnswer": 0,
    "hint": "The `else` is the 'happily ever after' path for a search loop.",
    "explanation": "The `else` block on a loop executes if the loop completes without the `break` statement being encountered. It's often used in search logic to run 'Item Not Found' code."
  },
  {
    "id": 80,
    "category": "Python Fundamentals",
    "question": "What is the primary benefit of using **Default Argument Values** when defining a Python function?",
    "options": [
      "They make the function run faster.",
      "They allow arguments to be optional, making the function more flexible to call.",
      "They prevent errors from ever occurring.",
      "They force the user to provide the argument."
    ],
    "correctAnswer": 1,
    "hint": "You don't always need to specify them.",
    "explanation": "If a function is defined as `def greet(name, message='Hello'):`, you can call it as `greet('Alice')` without providing the message, using the default value."
  },
  {
    "id": 81,
    "category": "Networking & HTTP",
    "question": "What is the function of **Proxies** (intermediate entities) in the HTTP flow?",
    "options": [
      "They are the only place where the data is stored permanently.",
      "They must always alter the request to be non-transparent.",
      "They can perform caching, load balancing, filtering, and logging between the client and the server.",
      "They are always responsible for DNS lookups."
    ],
    "correctAnswer": 2,
    "hint": "They act as a relay and middle-manager for requests.",
    "explanation": "**Proxies** sit between the client and server to manage traffic, security, and performance. Caching (storing copies of common files) is one of their most important roles."
  },
  {
    "id": 82,
    "category": "Networking & HTTP",
    "question": "HTTP is fundamentally a **stateless** protocol. How does the web overcome this limitation to maintain a user's session (e.g., keeping them logged in)?",
    "options": [
      "By using the `GET` method only.",
      "By relying on the server to automatically remember everything.",
      "By using **HTTP Cookies** to exchange small pieces of stateful data with each request.",
      "By opening a new TCP connection for every request."
    ],
    "correctAnswer": 2,
    "hint": "Small files that the server gives the browser to remember things.",
    "explanation": "Since HTTP itself treats every request as brand new, **Cookies** (sent in the HTTP headers) are the classic mechanism used to store a Session ID, allowing the server to look up the user's state."
  },
  {
    "id": 83,
    "category": "Python Data Structures",
    "question": "What is a **List Comprehension** in Python?",
    "options": [
      "A verbose way to define a list over multiple lines.",
      "A syntax for rapidly creating a list from an iterable using a single, concise line of code.",
      "The process of converting a list into a string.",
      "A special type of function definition."
    ],
    "correctAnswer": 1,
    "hint": "A compact way to build a list.",
    "explanation": "List comprehensions are a powerful, idiomatic Python feature. Example: `squares = [x**2 for x in range(10)]` creates a list of squared numbers in one line."
  },
  {
    "id": 84,
    "category": "Python Modules",
    "question": "What is the purpose of the `json` module in the Python Standard Library?",
    "options": [
      "To compress files for storage.",
      "To perform complex mathematical operations.",
      "To read and write structured data using the JSON format.",
      "To send HTTP requests over the internet."
    ],
    "correctAnswer": 2,
    "hint": "It handles the data format commonly used in web APIs.",
    "explanation": "The `json` module provides methods like `json.load()` and `json.dump()` to easily serialize (encode) Python objects into JSON and deserialize (decode) JSON back into Python objects."
  },
  {
    "id": 85,
    "category": "Web Fundamentals",
    "question": "Which technology is primarily responsible for defining the **semantics** (meaning) and structure of web page content?",
    "options": [
      "CSS",
      "JavaScript",
      "HTML",
      "HTTP"
    ],
    "correctAnswer": 2,
    "hint": "HyperText Markup Language.",
    "explanation": "**HTML** elements like `<header>`, `<article>`, and `<nav>` provide semantic meaning to the content, which is essential for accessibility and search engine optimization."
  },
  {
    "id": 86,
    "category": "Web Fundamentals",
    "question": "Which of the following is NOT typically considered an 'Asset' file on a website?",
    "options": [
      "Images (e.g., .jpg)",
      "Videos (e.g., .mp4)",
      "Word Documents (e.g., .docx)",
      "JavaScript (.js) files"
    ],
    "correctAnswer": 3,
    "hint": "Assets are content; code is interpreted.",
    "explanation": "Assets are items that appear on a website but are not the code the browser interprets, such as media, PDFs, or images. JavaScript, HTML, and CSS are the core code languages."
  },
  {
    "id": 87,
    "category": "Networking & HTTP",
    "question": "What is a **Packet** in networking?",
    "options": [
      "The entire file sent from the server.",
      "A large, single data stream.",
      "A small chunk of data, containing a header and a payload, used to transmit information across the web efficiently.",
      "A type of firewall."
    ],
    "correctAnswer": 2,
    "hint": "Data is broken down for transport.",
    "explanation": "Data is segmented into small **Packets** so they can be routed efficiently, and missing or corrupted pieces can be easily re-requested without needing the entire file to be resent."
  },
  {
    "id": 88,
    "category": "Linear Regression",
    "question": "A model that relies on multiple input variables (like Engine Displacement, Acceleration, and Horsepower) to predict a label is called a model with:",
    "options": [
      "Single features.",
      "Multiple bias points.",
      "Multiple weights (w1, w2, w3, etc.).",
      "Multiple intercept points."
    ],
    "correctAnswer": 2,
    "hint": "Each feature must have its own influence value.",
    "explanation": "When a model uses multiple features, the equation expands to include a separate **Weight** for each feature, defining the unique influence of that feature on the final prediction."
  },
  {
    "id": 89,
    "category": "Python Errors",
    "question": "What is a **Syntax Error** in Python?",
    "options": [
      "An error that occurs while the program is running.",
      "An error in logic that produces the wrong result.",
      "An error where the interpreter cannot parse the code because it violates the rules of the language structure (e.g., forgetting a colon).",
      "An error that requires a network connection."
    ],
    "correct_answer": 2,
    "hint": "The program can't even start to run.",
    "explanation": "**Syntax Errors** (like forgetting a parenthesis or using incorrect indentation) prevent the code from being executed at all, as the interpreter cannot understand what to do."
  },
  {
    "id": 90,
    "category": "Python Errors",
    "question": "What is the primary mechanism for gracefully dealing with runtime errors in Python?",
    "options": [
      "Using the `match` statement.",
      "Using the `try...except` block.",
      "Using the `import` statement.",
      "Using a list comprehension."
    ],
    "correct_answer": 1,
    "hint": "You try a section of code, and catch it if it goes wrong.",
    "explanation": "The `try...except` block allows you to execute risky code (like reading a file that might not exist) in the `try` block and then define cleanup or error handling code in the `except` block if something goes wrong."
  },
  {
    "id": 91,
    "category": "Python Data Structures",
    "question": "What Python concept is best described as 'The act of mapping multiple values into separate variables from a list or tuple'?",
    "options": [
      "Lambda expressions.",
      "Unpacking argument lists.",
      "Formatted String Literals.",
      "Object-oriented programming."
    ],
    "correct_answer": 1,
    "hint": "Using the asterisk * symbol with arguments.",
    "explanation": "Unpacking uses the asterisk `*` for positional arguments or `**` for keyword arguments to automatically map elements of a sequence (like a list) to the function's parameters."
  },
  {
    "id": 92,
    "category": "Python Control Flow",
    "question": "Which Python statement is primarily used to check a variable against a set of different patterns or values, similar to a 'switch' statement in other languages?",
    "options": [
      "`if` statements.",
      "`for` statements.",
      "`match` statements.",
      "`while` statements."
    ],
    "correct_answer": 2,
    "hint": "It's Python's newer structural pattern matching feature.",
    "explanation": "The `match` statement (introduced in Python 3.10) is used for **structural pattern matching**, which is more expressive than simple `if/elif/else` chains for complex comparisons."
  },
  {
    "id": 93,
    "category": "Networking & HTTP",
    "question": "The version of HTTP that introduced **multiplexing** requests over a single connection to improve efficiency is:",
    "options": [
      "HTTP/1.0",
      "HTTP/1.1",
      "HTTP/2",
      "QUIC"
    ],
    "correct_answer": 2,
    "hint": "The most recent major version widely adopted.",
    "explanation": "**HTTP/2** (and the experimental QUIC) addressed the efficiency issues of HTTP/1.x, which required separate, less efficient connections for many requests, by allowing multiple data streams over one TCP connection."
  },
  {
    "id": 94,
    "category": "Python Functions",
    "question": "What are Python **Lambda Expressions** primarily used for?",
    "options": [
      "Creating full classes with inheritance.",
      "Creating small, anonymous (unnamed) one-line functions.",
      "Writing documentation strings.",
      "Handling exceptions."
    ],
    "correct_answer": 1,
    "hint": "They are functions without the `def` keyword.",
    "explanation": "A **Lambda** function is a concise way to define a function that contains a single expression, often used for arguments to higher-order functions like `map()` or `filter()`."
  },
  {
    "id": 95,
    "category": "Python Data Structures",
    "question": "If you want to use a Python List like a **Stack** (Last-In, First-Out), which two methods would you use?",
    "options": [
      "`.index()` and `.count()`",
      "`.append()` and `.pop()`",
      "`.sort()` and `.reverse()`",
      "`.insert()` and `.remove()`"
    ],
    "correct_answer": 1,
    "hint": "Adding to the end, taking from the end.",
    "explanation": "The **Stack** model is LIFO. **`append()`** adds an item to the end, and **`pop()`** removes and returns the item from the end, perfectly simulating a stack."
  },
  {
    "id": 96,
    "category": "URL Components",
    "question": "In the URL `https://dev.mozilla.org/en-US/`, what is `dev` an example of?",
    "options": [
      "The protocol.",
      "The Top-Level Domain (TLD).",
      "The Path.",
      "The **Subdomain**."
    ],
    "correct_answer": 3,
    "hint": "It's a distinct content area before the main domain name.",
    "explanation": "A **Subdomain** is a label before the Second-Level Domain (mozilla.org) that allows a single domain owner to host separate content (e.g., `blog.example.com` or `shop.example.com`)."
  },
  {
    "id": 97,
    "category": "Python File Handling",
    "question": "Which Python keyword ensures that a resource (like a file) is properly closed or cleaned up, even if an exception occurs?",
    "options": [
      "`break`",
      "`else`",
      "`with`",
      "`import`"
    ],
    "correct_answer": 2,
    "hint": "Used often with opening files: `with open(...) as f:`",
    "explanation": "The **`with`** statement is used for context management. When it's used to open a file, it guarantees that the file's `.close()` method is called when the block is exited, even if an error is raised inside the block."
  },
  {
    "id": 98,
    "category": "Networking & HTTP",
    "question": "Which HTTP status code is used for a **permanent redirect**, telling the client to use a new URL from now on?",
    "options": [
      "301",
      "400",
      "500",
      "202"
    ],
    "correct_answer": 0,
    "hint": "Three hundred level codes are for redirection.",
    "explanation": "**301 Moved Permanently** is crucial for SEO and maintaining links. It informs the browser and search engines that the original resource should now be accessed at the new location provided in the response."
  },
  {
    "id": 99,
    "category": "Web Architecture",
    "question": "When developing a dynamic website, why is using a **Web Framework** (like Django or Next.js) highly recommended?",
    "options": [
      "It makes the site static and simple.",
      "It makes the code run on the client-side.",
      "It provides ready-made functionality for sessions, routing, authentication, and database access, saving the developer from implementing vital features from scratch.",
      "It forces the use of JavaScript."
    ],
    "correct_answer": 2,
    "hint": "It gives you a comprehensive toolkit to build a full application.",
    "explanation": "Web frameworks abstract away the complexity of core server logic (like handling the HTTP server itself), allowing the developer to focus on the unique business logic of their application."
  },
  {
    "id": 100,
    "category": "Python Modules",
    "question": "What is the primary content found in **The Python Standard Library**?",
    "options": [
      "Third-party libraries downloaded via `pip`.",
      "External frameworks for web development.",
      "An extensive collection of built-in modules for common tasks like OS interface, math, internet access, and data formatting.",
      "Documentation for the Python language."
    ],
    "correct_answer": 2,
    "hint": "These are the 'batteries included' with every Python installation.",
    "explanation": "The Standard Library is a huge set of modules (`os`, `sys`, `json`, `math`, `datetime`) that come with the base Python installation, meaning you can immediately use them without needing to install anything extra."
  },
  {
    "id": 101,
    "category": "Google Workspace & Gemini",
    "question": "What is the recommended way to reference a specific document or email when prompting Gemini Apps?",
    "options": [
      "Paste the specific URL of the document or email into the prompt",
      "Use keywords from the content and specify the app, service, or content type",
      "Upload the file manually to the chat window every time",
      "Copy and paste the entire text of the document into the prompt"
    ],
    "correctAnswer": 1,
    "hint": "Check the 'Tip' under the 'Use Google Workspace in Gemini Apps' section.",
    "explanation": "The documentation explicitly provides a \"Tip\" advising against pasting URLs. Instead, it recommends using keywords from the content combined with the specific app name (e.g., \"Summarize the marketing plan in Docs\") to help Gemini locate the correct file."
  },
  {
    "id": 102,
    "category": "Google Workspace & Gemini",
    "question": "Which of the following Google Workspace apps is NOT currently supported for content access by Gemini Apps?",
    "options": [
      "Google Docs",
      "Google Slides",
      "Google Drive (PDFs)",
      "Google Keep"
    ],
    "correctAnswer": 1,
    "hint": "Think about the file types often used for presentations and spreadsheets.",
    "explanation": "The text explicitly lists \"Answer prompts about Slides or Sheets\" under the section \"What Gemini Apps can’t do,\" meaning it cannot access the content within presentations or spreadsheets."
  },
  {
    "id": 103,
    "category": "Google Workspace & Gemini",
    "question": "If you are using a work or school account, why might you be unable to connect Google Workspace?",
    "options": [
      "You have not verified your phone number.",
      "Your administrator has not enabled the ability to connect with apps.",
      "You are using a browser other than Chrome.",
      "You have too many files in your Drive."
    ],
    "correctAnswer": 1,
    "hint": "Organizational accounts often require permission from a specific person or role.",
    "explanation": "For organizational accounts (work or school), the individual user cannot enable this feature alone; the Google Workspace administrator must first enable the ability to connect with apps for the organization."
  },
  {
    "id": 104,
    "category": "Google Workspace & Gemini",
    "question": "What specific Gmail setting must be turned ON for Gemini Apps to connect with Google Workspace?",
    "options": [
      "Smart features and personalization",
      "Two-factor authentication",
      "IMAP access",
      "Conversation view"
    ],
    "correctAnswer": 0,
    "hint": "It involves \"smart\" capabilities and customizing your experience.",
    "explanation": "For Gemini Apps to connect, both \"Smart features and personalization\" settings must be enabled in your Gmail settings. If these are off, the connection will fail."
  },
  {
    "id": 105,
    "category": "Google Workspace & Gemini",
    "question": "What restriction applies to users under 18 when using the Google Workspace app in Gemini?",
    "options": [
      "They cannot use the feature at all.",
      "It only works with English prompts.",
      "They cannot access Google Drive files.",
      "They need parental approval for every prompt."
    ],
    "correctAnswer": 1,
    "hint": "The limitation relates to the language used in the conversation.",
    "explanation": "The documentation notes that \"If you’re under 18, the Google Workspace app currently only works with English prompts in Gemini.\""
  },
  {
    "id": 106,
    "category": "Google Workspace & Gemini",
    "question": "Which of the following actions can Gemini perform in Google Tasks?",
    "options": [
      "Delete completed tasks",
      "Add and retrieve tasks",
      "Assign tasks to other users",
      "Change the color of a task"
    ],
    "correctAnswer": 1,
    "hint": "Think about basic list management: putting things in and looking at what is there.",
    "explanation": "The text explicitly lists \"Add and retrieve your tasks from Google Tasks\" as a supported capability. It does not mention deletion or assignment features."
  },
  {
    "id": 107,
    "category": "Google Workspace & Gemini",
    "question": "Gemini Apps CANNOT access which of the following content within Google Docs or Gmail?",
    "options": [
      "The text body of the document",
      "The sender of an email",
      "Attachments, comments, or images",
      "The date of the email"
    ],
    "correctAnswer": 2,
    "hint": "These are the \"extras\" often added to a document or email, rather than the main text.",
    "explanation": "The \"What Gemini Apps can’t do\" section specifically excludes access to attachments, comments, or images within Docs or Gmail. It can only process the main text body."
  },
  {
    "id": 108,
    "category": "Google Workspace & Gemini",
    "question": "How should you verify the information provided by Gemini Apps to ensure it isn't a hallucination?",
    "options": [
      "Ask Gemini to repeat the answer.",
      "Select and review the sources listed after the response.",
      "Assume the information is always correct.",
      "Check your email manually before asking."
    ],
    "correctAnswer": 1,
    "hint": "Gemini usually provides citations or links to the documents it used.",
    "explanation": "Because Gemini can hallucinate or reference outdated info, the text advises users to \"check the information, select and review the sources listed after the response.\""
  },
  {
    "id": 109,
    "category": "Google Workspace & Gemini",
    "question": "When do you need to explicitly mention the Google Workspace app (e.g., \"Check Gmail\") in your prompt?",
    "options": [
      "For every single message you send.",
      "Only when asking about Google Drive.",
      "For every new conversation.",
      "You never need to mention it explicitly."
    ],
    "correctAnswer": 2,
    "hint": "Think about when you start a fresh topic or chat.",
    "explanation": "The instructions state: \"For every new conversation, ask the Gemini app to get or add something from your personal Google Workspace explicitly.\" You do not need to repeat this for follow-up questions within the same chat."
  },
  {
    "id": 110,
    "category": "Google Workspace & Gemini",
    "question": "Which of the following Google Drive management actions is Gemini unable to perform?",
    "options": [
      "Summarizing a PDF",
      "Finding a lease agreement",
      "Creating folders or moving content",
      "Reading a resume"
    ],
    "correctAnswer": 2,
    "hint": "Gemini finds information, but it doesn't organize your file structure.",
    "explanation": "Gemini is an information retrieval and creation tool, not a file manager. The text states it cannot \"Manage content in your Drive, like create folders or move content between folders.\""
  },
  {
    "id": 111,
    "category": "Google Workspace & Gemini",
    "question": "Can Gemini Apps create or delete emails in your Gmail?",
    "options": [
      "Yes, it can do both.",
      "It can create drafts but not delete.",
      "It can delete emails but not create drafts.",
      "No, it cannot create drafts or delete emails."
    ],
    "correctAnswer": 3,
    "hint": "Gemini is designed to read and summarize emails, not manage the mailbox itself.",
    "explanation": "Both \"Create an email draft\" and \"delete emails\" are listed under the \"What Gemini Apps can’t do\" section."
  },
  {
    "id": 112,
    "category": "Google Workspace & Gemini",
    "question": "What is a limitation regarding files in Google Drive that are NOT documents or PDFs?",
    "options": [
      "Gemini cannot access them.",
      "Gemini can only read their titles.",
      "Gemini can convert them to PDFs.",
      "Gemini can move them to a different folder."
    ],
    "correctAnswer": 0,
    "hint": "Consider media files like pictures and videos.",
    "explanation": "The limitation states that Gemini cannot access \"content that isn’t in a document or PDF,\" explicitly mentioning pictures and videos as inaccessible types."
  },
  {
    "id": 113,
    "category": "Google Workspace & Gemini",
    "question": "Can Gemini Apps tell you how much storage space you have left in Google Drive?",
    "options": [
      "Yes, if you ask explicitly.",
      "No, it cannot count items or check storage.",
      "Yes, but only for personal accounts.",
      "Yes, but it requires Admin permission."
    ],
    "correctAnswer": 1,
    "hint": "This involves system statistics and quotas.",
    "explanation": "The text lists \"Count items in your Drive or tell you how much Drive storage you have\" as a specific inability of the current integration."
  },
  {
    "id": 114,
    "category": "Google Workspace & Gemini",
    "question": "To use Google Workspace in Gemini Apps, which account must you be signed into?",
    "options": [
      "Any Google account.",
      "The same account you use with Google Workspace.",
      "A specialized Gemini-only account.",
      "Your administrator's account."
    ],
    "correctAnswer": 1,
    "hint": "Integration requires matching identities between the app and the data source.",
    "explanation": "For the integration to work, you must be signed in to Gemini Apps with the exact same account that holds your Google Workspace data (your email, docs, etc.)."
  },
  {
    "id": 115,
    "category": "Google Workspace & Gemini",
    "question": "Which of the following is a correct example of using Gemini with Google Keep?",
    "options": [
      "Find me a recipe and save the ingredients to Keep.",
      "Delete all my old notes in Keep.",
      "Change the background color of my Keep note.",
      "Share my shopping list note with Bob."
    ],
    "correctAnswer": 0,
    "hint": "Focus on capturing ideas and information.",
    "explanation": "This matches the provided example: \"Find me a recipe for apple pie and save the ingredients to Keep.\" It demonstrates the ability to capture information generated in the chat into a note."
  },
  {
    "id": 116,
    "category": "DNS & Networking",
    "question": "Which DNS record type maps a hostname directly to an IPv4 address?",
    "options": [
      "CNAME Record",
      "TXT Record",
      "A Record",
      "MX Record"
    ],
    "correctAnswer": 2,
    "hint": "Think of this record as saving a contact in your phone where a name links to a specific number.",
    "explanation": "The A (Address) Record is specifically designed to point a domain name to a specific IP address."
  },
  {
    "id": 117,
    "category": "Jagentic Workflow",
    "question": "In the 'Curator Dashboard Guide', how is the dashboard described in terms of data persistence?",
    "options": [
      "It is a Code Generator that does not save to a database yet.",
      "It automatically syncs with the GitHub repository.",
      "It uses a local SQL database to store questions.",
      "It directly updates the Vercel deployment via API."
    ],
    "correctAnswer": 0,
    "hint": "The dashboard creates the 'code' you need, but you have to manually move it to your project files.",
    "explanation": "The guide explicitly states the dashboard generates code for you to paste and does not save to a database itself."
  },
  {
    "id": 118,
    "category": "DNS & Networking",
    "question": "What analogy is used to describe a CNAME Record?",
    "options": [
      "A phone book entry.",
      "Showing your ID card.",
      "A forwarding address.",
      "A GPS coordinate."
    ],
    "correctAnswer": 2,
    "hint": "This record points one name to another, similar to how mail can be redirected.",
    "explanation": "The CNAME is compared to a forwarding address: if you mail 'The President', it goes to 'The White House'."
  },
  {
    "id": 119,
    "category": "DNS & Networking",
    "question": "To verify domain ownership with services like Google or OpenAI, which record type should be used?",
    "options": [
      "A Record",
      "CNAME Record",
      "PTR Record",
      "TXT Record"
    ],
    "correctAnswer": 3,
    "hint": "This record acts like an ID card holding arbitrary information.",
    "explanation": "TXT records hold arbitrary text information used for verification, like a secret code."
  },
  {
    "id": 120,
    "category": "Jagentic Workflow",
    "question": "Where must you paste the JSON content exported from the Curator Dashboard?",
    "options": [
      "src/components/Quiz.js",
      "public/data.json",
      "src/data/quizData.js",
      "config/settings.js"
    ],
    "correctAnswer": 2,
    "hint": "Look for the file path located within the 'src/data' directory.",
    "explanation": "The guide explicitly names 'src/data/quizData.js' as the location to paste the content."
  },
  {
    "id": 121,
    "category": "DNS & Networking",
    "question": "What is the primary benefit of using a CNAME record for a service like 'jagentic-v2.vercel.app'?",
    "options": [
      "It speeds up the DNS lookup time.",
      "It allows the service to change its IP without breaking your site.",
      "It hides the destination URL from users.",
      "It improves the security of the domain verification."
    ],
    "correctAnswer": 1,
    "hint": "Think about what happens if the hosting provider (Vercel) decides to move their server to a new address.",
    "explanation": "Because the CNAME points to a name, the underlying IP of that name can change without you needing to update your DNS."
  },
  {
    "id": 122,
    "category": "Jagentic Workflow",
    "question": "What implies that a distractor in a quiz question is 'hardened' or 'good' according to the Curator guide?",
    "options": [
      "It is obviously incorrect to be funny.",
      "It sounds plausible and technical.",
      "It is very long and complex.",
      "It is grammatically incorrect."
    ],
    "correctAnswer": 1,
    "hint": "The goal is to make the wrong answer sound like it *could* be right if you don't know the material.",
    "explanation": "A good distractor like 'To initialize the hidden layer weights' sounds correct to someone who isn't sure."
  },
  {
    "id": 123,
    "category": "Jagentic Workflow",
    "question": "What is the correct sequence of git commands to deploy changes after updating the quiz file?",
    "options": [
      "git push, git commit, git add",
      "git commit, git add, git push",
      "git add ., git commit, git push",
      "git init, git add, git commit"
    ],
    "correctAnswer": 2,
    "hint": "First you stage the files, then you save the version, and finally you send it to the cloud.",
    "explanation": "This is the standard workflow: stage changes, save the snapshot (commit), and upload to the server (push)."
  },
  {
    "id": 124,
    "category": "Jagentic Workflow",
    "question": "How is the 'Curator Dashboard' accessed?",
    "options": [
      "Via a separate admin login page.",
      "By downloading a desktop application.",
      "Through a 'secret' client-side route like /#curator.",
      "By modifying the browser's local storage."
    ],
    "correctAnswer": 2,
    "hint": "It involves adding a specific hash tag to the end of the website URL.",
    "explanation": "The guide specifies the URL is `https://jagentic.net/#curator`."
  },
  {
    "id": 125,
    "category": "Jagentic Workflow",
    "question": "What is the current security measure for the Curator Dashboard according to the guide?",
    "options": [
      "Two-factor authentication.",
      "No password, but changes cannot be saved without GitHub access.",
      "A simple password prompt.",
      "IP address allowlisting."
    ],
    "correctAnswer": 1,
    "hint": "The security is inherent in the workflow: viewing is open, but saving requires write access to the code repository.",
    "explanation": "Security relies on the fact that while anyone can see the dashboard, they can't push changes to your repo."
  },
  {
    "id": 126,
    "category": "Python Fundamentals",
    "question": "Which statement best describes the Python Standard Library?",
    "options": [
      "Libraries that must be installed manually",
      "Third-party community packages",
      "Modules bundled with Python and importable immediately",
      "Deprecated language features"
    ],
    "correctAnswer": 2,
    "hint": "Think “what Python comes with out of the box.”",
    "explanation": "The Standard Library is included with every Python installation and provides built-in modules you can use immediately without pip."
  },
  {
    "id": 127,
    "category": "Python Fundamentals",
    "question": "Which of the following requires pip to install?",
    "options": [
      "json",
      "os",
      "datetime",
      "requests"
    ],
    "correctAnswer": 3,
    "hint": "Which one isn’t included with Python by default?",
    "explanation": "requests is a third-party HTTP library distributed on PyPI, so it must be installed via pip. The others are built-in stdlib modules."
  },
  {
    "id": 128,
    "category": "Python Fundamentals",
    "question": "What is the primary reason pip packages exist?",
    "options": [
      "To replace the Standard Library",
      "To add specialized capabilities not included in Python",
      "To manage Python’s built-in features",
      "To uninstall Python modules"
    ],
    "correctAnswer": 1,
    "hint": "Why do external developers create packages?",
    "explanation": "Pip packages extend Python’s abilities (web frameworks, ML, scraping, visualization). They expand Python beyond the basics."
  },
  {
    "id": 129,
    "category": "Python Fundamentals",
    "question": "When using pip install flask, where does Flask come from?",
    "options": [
      "Python Standard Library",
      "PyPI — the Python Package Index",
      "Python itself",
      "The language specification"
    ],
    "correctAnswer": 1,
    "hint": "pip downloads from a global repository.",
    "explanation": "PyPI hosts third-party packages like Flask. pip retrieves them from there and installs them into your environment."
  },
  {
    "id": 130,
    "category": "Python Fundamentals",
    "question": "Which of the following is a Standard Library module?",
    "options": [
      "numpy",
      "pandas",
      "re",
      "selenium"
    ],
    "correctAnswer": 2,
    "hint": "One option is specifically for regular expressions.",
    "explanation": "re is a built-in module. The others are pip-installed libraries for data science or browser automation."
  },
  {
    "id": 131,
    "category": "Python Fundamentals",
    "question": "What is the main benefit of a virtual environment?",
    "options": [
      "Faster code execution",
      "Isolating project-specific pip dependencies",
      "Allowing Python to run without being installed",
      "Replacing the Standard Library"
    ],
    "correctAnswer": 1,
    "hint": "Environments prevent version conflicts.",
    "explanation": "Virtual environments keep each project's dependencies separate, avoiding global version conflicts."
  },
  {
    "id": 132,
    "category": "Python Fundamentals",
    "question": "Why don’t Standard Library modules require pip updates?",
    "options": [
      "They never change",
      "They are updated as part of Python releases",
      "They are deprecated",
      "They auto-install pip packages"
    ],
    "correctAnswer": 1,
    "hint": "They ship inside Python.",
    "explanation": "Stdlib modules update only when Python itself updates; they aren’t managed by pip."
  },
  {
    "id": 133,
    "category": "Python Fundamentals",
    "question": "What error occurs when you import a pip package that isn’t installed?",
    "options": [
      "Python installs it automatically",
      "Python warns you but continues",
      "ModuleNotFoundError",
      "It falls back to the Standard Library"
    ],
    "correctAnswer": 2,
    "hint": "Missing packages produce a very specific exception.",
    "explanation": "If a package isn’t available in your environment, Python raises ModuleNotFoundError."
  },
  {
    "id": 134,
    "category": "Python Fundamentals",
    "question": "Which scenario most likely requires a pip package?",
    "options": [
      "Reading a local text file",
      "Making HTTP requests with retries/authentication",
      "Sorting a list",
      "Formatting dates"
    ],
    "correctAnswer": 1,
    "hint": "Think “something stdlib can do but not as well.”",
    "explanation": "Advanced HTTP behavior is best handled by third-party libraries like requests or httpx."
  },
  {
    "id": 135,
    "category": "Python Fundamentals",
    "question": "You want to build a website backend in Python. What’s correct?",
    "options": [
      "You can do it with only the Standard Library",
      "Use pip-installed frameworks like Flask or FastAPI",
      "Web frameworks come built-in",
      "Python can’t build websites"
    ],
    "correctAnswer": 1,
    "hint": "What do real developers actually use in practice?",
    "explanation": "Production Python web apps rely on pip frameworks. Stdlib does not include a web framework."
  },
  {
    "id": 136,
    "category": "Python Fundamentals",
    "question": "What does pip actually do during installation?",
    "options": [
      "Modifies Python source code",
      "Downloads packages from PyPI and installs them",
      "Generates new built-in modules",
      "Creates a virtual environment automatically"
    ],
    "correctAnswer": 1,
    "hint": "pip + PyPI are tightly paired.",
    "explanation": "pip retrieves package files from PyPI and adds them to the active environment’s site-packages."
  },
  {
    "id": 137,
    "category": "Python Fundamentals",
    "question": "Which of these tasks does the Standard Library handle well?",
    "options": [
      "Machine learning",
      "Database access with SQLite",
      "Browser automation",
      "Deep learning"
    ],
    "correctAnswer": 1,
    "hint": "Only one of these has a built-in module.",
    "explanation": "sqlite3 is included in the Standard Library; ML and automation require external packages."
  },
  {
    "id": 138,
    "category": "Web Scraping",
    "question": "Which library is the right choice for parsing HTML from static pages?",
    "options": [
      "BeautifulSoup4",
      "math",
      "Flask",
      "sys"
    ],
    "correctAnswer": 0,
    "hint": "One option is famous specifically for HTML parsing.",
    "explanation": "BeautifulSoup (pip) is designed for HTML/XML parsing. Stdlib lacks a simple HTML scraper."
  },
  {
    "id": 139,
    "category": "Web Scraping",
    "question": "What makes Selenium or Playwright different from BeautifulSoup?",
    "options": [
      "They only read plain text",
      "They render JavaScript and automate browsers",
      "They don’t work on websites",
      "They are part of Python's Standard Library"
    ],
    "correctAnswer": 1,
    "hint": "Think dynamic pages vs static.",
    "explanation": "Selenium/Playwright automate real browsers, enabling interaction with JavaScript-heavy sites."
  },
  {
    "id": 140,
    "category": "Web Scraping",
    "question": "Why is scraping dynamic websites harder?",
    "options": [
      "The HTML is easier to parse",
      "Content may load via JavaScript after initial page load",
      "They block all browsers",
      "They contain no useful information"
    ],
    "correctAnswer": 1,
    "hint": "Think timing and JS rendering.",
    "explanation": "Dynamic sites require waiting for scripts to run before the content appears — static scrapers can’t see this."
  },
  {
    "id": 141,
    "category": "Web Scraping",
    "question": "What is a common limitation of web scraping?",
    "options": [
      "It always violates laws",
      "Websites may block bots or use CAPTCHAs",
      "It works faster than APIs",
      "It requires no maintenance"
    ],
    "correctAnswer": 1,
    "hint": "Websites actively defend themselves.",
    "explanation": "Sites use CAPTCHAs, rate limits, and anti-bot tools, making scraping fragile."
  },
  {
    "id": 142,
    "category": "Web Scraping",
    "question": "Which scraping tool is fastest for simple, static HTML pages?",
    "options": [
      "Playwright",
      "Selenium",
      "requests + BeautifulSoup",
      "Django"
    ],
    "correctAnswer": 2,
    "hint": "Avoid full browsers when unnecessary.",
    "explanation": "requests fetches HTML extremely quickly; BeautifulSoup parses it efficiently."
  },
  {
    "id": 143,
    "category": "Python Fundamentals",
    "question": "Why are pip packages versioned separately from Python?",
    "options": [
      "To avoid ever updating",
      "They evolve independently and more frequently",
      "They’re part of the Standard Library",
      "They’re only updated yearly"
    ],
    "correctAnswer": 1,
    "hint": "Third-party devs move faster than Python’s release cycle.",
    "explanation": "Pip packages ship new features and fixes continuously, independent of Python’s release schedule."
  },
  {
    "id": 144,
    "category": "Web Scraping",
    "question": "What is a major risk of relying heavily on scraping?",
    "options": [
      "You might install Python twice",
      "Website structure changes can break your scraper",
      "You lose access to pip",
      "Python can’t parse HTML"
    ],
    "correctAnswer": 1,
    "hint": "Scrapers depend on HTML stability.",
    "explanation": "If a site redesigns its page layout, your scraper’s selectors stop matching — requiring updates."
  },
  {
    "id": 145,
    "category": "Web Scraping",
    "question": "What is one advantage of APIs over scrapers?",
    "options": [
      "APIs are slower",
      "APIs return structured data reliably",
      "APIs require browser automation",
      "APIs always require scraping first"
    ],
    "correctAnswer": 1,
    "hint": "Think “clean JSON vs messy HTML.”",
    "explanation": "APIs provide consistent structured responses, unlike scraping which must extract data from messy, fragile HTML."
  }
];