# LangChain.js – Complete Learning & Development Guide

A hands-on learning repository for understanding **LangChain, Large Language Models (LLMs), Google Gemini AI, and Generative AI application development using JavaScript and Node.js.**

This repository covers LangChain fundamentals, its architecture, important components, practical examples, real-world applications, and future AI project development.

---

# 1. What is LangChain?

**LangChain is an open-source framework for building applications powered by Large Language Models (LLMs).**

It helps developers connect AI models with external tools, databases, APIs, documents, and other services.

Instead of writing everything from scratch, developers can use reusable components provided by LangChain.

### In simple words

- LLM = Brain of an AI application.
- LangChain = Framework that connects the AI model with other components.
- Tools = External functions and services that the AI can use.
- Database = Stores application information.
- RAG = Allows AI to retrieve external information before generating answers.

### Supported AI models

- Google Gemini
- OpenAI GPT
- Anthropic Claude
- Other supported model providers

---

# 2. Why do we use LangChain?

A basic LLM API can generate text, but real-world AI applications often need more capabilities.

LangChain helps developers:

1. Connect different LLM providers.
2. Create reusable prompt templates.
3. Load and process documents.
4. Generate and manage embeddings.
5. Connect vector databases.
6. Implement Retrieval-Augmented Generation (RAG).
7. Integrate external APIs and tools.
8. Build AI agents and workflows.
9. Structure AI responses.
10. Develop context-aware AI applications.

### Without LangChain vs With LangChain

| Without LangChain | With LangChain |
|---|---|
| Manually integrate model APIs | Standard model interfaces |
| Build document processing separately | Reusable document components |
| Implement retrieval workflows | Built-in retriever integrations |
| Manage integrations individually | Multiple integrations |
| Build AI workflows from scratch | Reusable workflow components |

LangChain does not eliminate programming. It provides abstractions and integrations that make development easier.

---

# 3. How does LangChain work?

LangChain connects different components to create an AI-powered application.

### Basic architecture

```text
             USER INPUT
                 |
                 v
          LANGCHAIN APP
                 |
        +--------+--------+
        |        |        |
        v        v        v
      Prompt   Memory    Tools
        |        |        |
        +--------+--------+
                 |
                 v
              LLM MODEL
           (Gemini / GPT)
                 |
                 v
           AI RESPONSE
                 |
                 v
             USER OUTPUT
```

### Example

User asks:

"Explain what is PostgreSQL?"

Workflow:

1. User sends a question.
2. LangChain receives the input.
3. Prompt instructions are prepared.
4. The prompt is sent to Gemini.
5. Gemini processes the question.
6. LangChain receives the response.
7. The application displays the answer.

---

# 4. Important Components of LangChain

## 4.1 Models

Models are the AI systems responsible for understanding and generating information.

Examples:
- Gemini
- GPT
- Claude

In LangChain:

```javascript
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
    model: "YOUR_SUPPORTED_MODEL_ID",
    apiKey: process.env.GEMINI_API_KEY
});
```

## 4.2 Prompts

Prompts are instructions or messages provided to an AI model.

Example:

```javascript
const response = await model.invoke(
    "Explain LangChain in simple words"
);

console.log(response.content);
```

Prompts help control the context, format, and purpose of an AI response.

## 4.3 Prompt Templates

Prompt templates allow developers to create reusable prompts with dynamic inputs.

Example:

```javascript
import { ChatPromptTemplate } from "@langchain/core/prompts";

const prompt = ChatPromptTemplate.fromTemplate(
    "Explain {topic} in simple words"
);

const messages = await prompt.formatMessages({
    topic: "Artificial Intelligence"
});

const response = await model.invoke(messages);

console.log(response.content);
```

## 4.4 Output Parsers

Output parsers convert model responses into a required structure.

Examples:
- String output
- JSON output
- Structured data

Useful for applications that need predictable AI responses.

## 4.5 Document Loaders

Document loaders import external information into an application.

Supported sources include:
- PDF documents
- Text files
- Websites
- Other data sources through integrations

## 4.6 Text Splitters

Large documents are divided into smaller pieces called chunks.

Why?

LLMs have context-window limits. Smaller chunks also help retrieve relevant information.

Example:

```text
Original PDF
     |
     v
Text Extraction
     |
     v
Text Splitter
     |
     +---- Chunk 1
     +---- Chunk 2
     +---- Chunk 3
     +---- Chunk 4
```

## 4.7 Embeddings

Embeddings convert text into numerical vectors.

Example:

```text
"Artificial Intelligence"
          |
          v
     Embedding Model
          |
          v
[0.21, 0.45, 0.82, 0.13, ...]
```

These vectors represent semantic information about text.

Related meanings can be identified using vector similarity techniques.

## 4.8 Vector Databases

Vector databases store and retrieve embeddings.

Examples:
- Chroma
- Pinecone
- FAISS
- PostgreSQL with pgvector

They help applications find semantically relevant information.

## 4.9 Retrievers

Retrievers search for relevant documents or text chunks based on a user's question.

Example:

User: "What is database normalization?"

Retriever searches the stored documents and returns relevant content.

## 4.10 Tools

Tools allow AI applications to interact with external functions and services.

Examples:
- Calculator
- Weather API
- Database queries
- Search integrations
- Custom JavaScript functions

## 4.11 Agents

Agents use an LLM to decide which available tools to call and what steps to take.

Example:

```text
User Question
      |
      v
   AI Agent
      |
      v
  Select Tool
      |
      +---- Search API
      |
      +---- Database
      |
      +---- Calculator
      |
      v
  Final Response
```

---

# 5. Important Generative AI Concepts

| Concept | Meaning |
|---|---|
| LLM | Large Language Model |
| Tokens | Units of text processed by an LLM |
| Context Window | Amount of information a model can process in context |
| Prompt Engineering | Designing instructions for AI |
| Embeddings | Numerical representations of text |
| Semantic Search | Searching by meaning |
| Vector Database | Stores and searches vector embeddings |
| RAG | Retrieval-Augmented Generation |
| AI Agent | AI system that can select and use tools |
| Memory | Stores or retrieves conversation information |
| Function Calling | Allows models to request external functions |

---

# 6. What is RAG?

RAG stands for **Retrieval-Augmented Generation**.

It is a technique that provides relevant external information to an LLM before generating an answer.

### RAG architecture

```text
       DOCUMENTS / PDF
              |
              v
       DOCUMENT LOADER
              |
              v
        TEXT SPLITTER
              |
              v
          EMBEDDINGS
              |
              v
       VECTOR DATABASE
              |
              |
USER QUESTION
      |
      v
EMBEDDING MODEL
      |
      v
SIMILARITY SEARCH
      |
      v
RELEVANT DOCUMENTS
      |
      v
   LLM (GEMINI)
      |
      v
   FINAL ANSWER
```

### Real-world example

Suppose a college uploads 100 PDF documents.

Students can ask:

- What is the admission process?
- What is the examination pattern?
- What are the eligibility criteria?

RAG retrieves relevant information from those documents and provides an answer using the retrieved context.

---

# 7. LangChain vs LangGraph vs LangSmith

| Technology | Main purpose |
|---|---|
| LangChain | Build LLM applications and agents |
| LangGraph | Build complex, stateful AI workflows |
| LangSmith | Debug, evaluate and monitor AI applications |

### LangChain

Used for model integrations, prompts, tools, retrieval and agent development.

### LangGraph

Used when an application requires multiple steps, state management, persistence, and controlled workflows.

### LangSmith

Used to inspect model calls, debug workflows and evaluate application performance.

---

# 8. Real-World Applications

| Application | Usage |
|---|---|
| AI Chatbot | Conversational AI |
| PDF Assistant | Ask questions from documents |
| Customer Support AI | Automated customer assistance |
| AI Research Assistant | Research and summarize information |
| AI SQL Assistant | Convert natural language into database queries |
| Resume Analyzer | Extract and analyze resume information |
| AI Education Tutor | Answer educational questions |
| E-commerce Assistant | Product information and recommendations |
| Meeting Summarizer | Summarize meeting transcripts |
| AI Coding Assistant | Explain and analyze code |

---

# 9. Learning Roadmap

Follow this sequence to learn LangChain from beginner to advanced.

### Level 1 – Fundamentals

- What is Generative AI?
- What is an LLM?
- LangChain introduction
- Model integration
- `invoke()`
- `stream()`
- `batch()`

### Level 2 – Prompt Engineering

- System messages
- Human messages
- AI messages
- Prompt templates
- Dynamic prompts
- Output parsers
- Structured output

### Level 3 – Embeddings and Vector Databases

- What are embeddings?
- Text-to-vector conversion
- Cosine similarity
- Semantic search
- Vector storage
- Similarity retrieval

### Level 4 – RAG Development

- Document loaders
- Text splitting
- Embeddings
- Vector databases
- Retrievers
- RAG architecture
- Document question-answering

### Level 5 – Tools and Agents

- Tool calling
- Custom tools
- Function calling
- Agent architecture
- Agent execution
- Error handling

### Level 6 – Advanced AI Development

- LangGraph
- Multi-step workflows
- Agent memory and persistence
- Human-in-the-loop
- Multi-agent systems
- LangSmith monitoring

---

# 10. Practical Projects

| Level | Project |
|---|---|
| Beginner | Basic Gemini Chatbot |
| Beginner | Prompt-based AI Assistant |
| Beginner | Text Summarizer |
| Intermediate | PDF Question Answering |
| Intermediate | RAG Knowledge Assistant |
| Intermediate | AI SQL Assistant |
| Advanced | AI Research Agent |
| Advanced | Multi-Agent System |
| Advanced | AI Customer Support Platform |

---

# 11. Official Documentation and Learning Resources

Use official documentation as the primary learning source.

### LangChain Documentation

- [LangChain Official Documentation](https://docs.langchain.com/)
- [LangChain JavaScript Documentation](https://docs.langchain.com/oss/javascript/langchain/overview)
- [LangChain JavaScript Learning Resources](https://docs.langchain.com/oss/javascript/learn)
- [LangChain JavaScript API Reference](https://reference.langchain.com/javascript/)

### Important Tutorials

- [LangChain Learn – Tutorials and Concepts](https://docs.langchain.com/oss/javascript/learn)
- [LangChain Semantic Search](https://docs.langchain.com/oss/javascript/langchain/overview)
- [LangGraph Documentation](https://docs.langchain.com/oss/javascript/langgraph/overview)
- [LangSmith Documentation](https://docs.langchain.com/langsmith/home)

### Google Gemini

- [Google AI Studio](https://aistudio.google.com/)
- [Gemini API Documentation](https://ai.google.dev/gemini-api/docs)
- [LangChain Google GenAI Integration](https://docs.langchain.com/oss/javascript/integrations/chat/google_generative_ai)

### Additional Learning

- [LangChain Academy](https://academy.langchain.com/)
- [Microsoft – LangChain.js for Beginners](https://developer.microsoft.com/blog/langchainjs-for-beginners/)

---

# 12. Project Setup

### Requirements

- Node.js
- npm
- JavaScript
- Gemini API key
- VS Code

### Installation

Clone the repository:

```bash
git clone https://github.com/Sonunapit/LangChain.git
```

Navigate to the project:

```bash
cd LangChain
```

Install dependencies:

```bash
npm install
```

Create `.env`:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Run the application:

```bash
node index.js
```

### Project Structure

```text
LangChain/
│
├── node_modules/
├── .env
├── .env.example
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 13. Security

- Never upload API keys to GitHub.
- Keep `.env` inside `.gitignore`.
- Use environment variables for credentials.
- Validate user inputs.
- Protect external API access.
- Apply authentication and authorization when building production applications.

---

# 14. Future Learning Goals

- [ ] Understand LLM architecture
- [ ] Learn LangChain fundamentals
- [ ] Explore prompt engineering
- [ ] Understand embeddings
- [ ] Work with vector databases
- [ ] Build a RAG application
- [ ] Build an AI agent
- [ ] Learn LangGraph
- [ ] Explore multi-agent architecture
- [ ] Build and deploy real-world GenAI applications

---

# Author

**Sonu Kumar Napit**

GitHub: [@Sonunapit](https://github.com/Sonunapit)

Repository: [LangChain](https://github.com/Sonunapit/LangChain)

---

**Learning by Building | Exploring Generative AI | Building Real-World AI Applications**

⭐ If you find this repository useful, consider giving it a star!
