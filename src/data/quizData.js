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
  }
];