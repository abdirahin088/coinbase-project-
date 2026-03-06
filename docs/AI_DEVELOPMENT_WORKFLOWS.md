> ## Documentation Index

> Fetch the complete documentation index at: https://docs.cdp.coinbase.com/llms.txt

> Use this file to discover all available pages before exploring further.



\# AI Development Workflows



> Essential patterns for AI-first crypto development with CDP



\## Overview



AI-first development treats AI as your primary development partner, not just a code completion tool. This guide covers the core workflow patterns that make crypto development faster and more effective.



\*\*Prerequisites:\*\* Complete \[AI Development Setup](/get-started/develop-with-ai/setup/ai-development-setup) first.



\## General workflow



Work in short cycles: Explore → Scaffold → Build → Refine



<Steps>

&nbsp; <Step title="1. Explore">

&nbsp;   Start with high-level questions to understand the problem space:



&nbsp;   ```

&nbsp;   "I want to build \[crypto app type]. What are the key technical decisions I need to make for CDP integration?"

&nbsp;   ```

&nbsp; </Step>



&nbsp; <Step title="2. Scaffold">

&nbsp;   Generate foundational code structure:



&nbsp;   ```

&nbsp;   "Create a Next.js app with CDP embedded wallets for \[specific use case]. Include TypeScript types and error handling."

&nbsp;   ```

&nbsp; </Step>



&nbsp; <Step title="3. Build">

&nbsp;   Add features iteratively with context:



&nbsp;   ```

&nbsp;   "Add \[feature] to my existing component: \[paste code]. Ensure it integrates with my current patterns."

&nbsp;   ```

&nbsp; </Step>



&nbsp; <Step title="4. Refine">

&nbsp;   Debug, optimize, and polish:



&nbsp;   ```

&nbsp;   "Review this code for security issues: \[paste code]. Focus on wallet security and transaction safety."

&nbsp;   ```

&nbsp; </Step>

</Steps>



\### Quick example



\*\*Goal:\*\* Add wallet connection



```

Explore: "I need wallet connection for my CDP app. What's the best approach?"

Scaffold: "Create a wallet connection component using OnchainKit with error handling"

Build: "Here's my app: \[paste]. How do I integrate this component?"

Refine: "The connection works but feels slow. How can I improve the UX?"

```



\## Enhanced workflow: Spec-driven development



If you're new to crypto development or using AI, you might be tempted to just start asking AI to "build me a DeFi app" and see what happens. This "vibe coding" approach can work for simple experiments, but it often leads to confusing, hard-to-debug code that doesn't actually solve your problem.



Spec-driven development gives you a structured way to turn your crypto app ideas into working code. Instead of hoping the AI guesses what you want, you guide it through a clear process your agent can follow reliably.



\### Why use specs



\* \*\*Prevents overwhelming complexity:\*\* Without a spec, AI might build a complex DeFi protocol when you just wanted a simple token swap

\* \*\*Teaches you crypto concepts:\*\* Writing specs forces you to understand wallets, networks, and transactions before coding

\* \*\*Creates maintainable code:\*\* Structured planning leads to code you can actually understand and modify later

\* \*\*Reduces debugging time:\*\* Clear requirements mean fewer "why doesn't this work?" moments



\### Process and tools



Follow these four steps to transform vague crypto ideas into working applications:



<Steps>

&nbsp; <Step title="1. Write your app specification">

&nbsp;   Start by clearly describing what you want to build and why. You don't need to go too far into the details, but you should provide a good understanding of the app you want to build:



&nbsp;   ```

&nbsp;   "Write a detailed specification for a simple crypto tip jar app:



&nbsp;   Purpose: Let content creators receive crypto tips from fans

&nbsp;   Target users: Streamers and bloggers who are new to crypto

&nbsp;   Core features:

&nbsp;   - Generate a unique tip page with QR code

&nbsp;   - Accept USDC tips on Base network  

&nbsp;   - Show tip history and total earnings

&nbsp;   - Send email notifications for new tips



&nbsp;   User experience:

&nbsp;   - Creator signs up with email (no crypto knowledge needed)

&nbsp;   - Embedded wallet handles all crypto complexity

&nbsp;   - Fans can tip with credit card or existing wallet

&nbsp;   - Creator can withdraw to bank account or keep in crypto



&nbsp;   Success criteria:

&nbsp;   - Creator can set up tip page in under 2 minutes

&nbsp;   - Fans can send tips without owning crypto

&nbsp;   - 99% uptime for tip processing"

&nbsp;   ```



&nbsp;   \*\*Helpful tools for this step:\*\*



&nbsp;   \* \*\*\[Claude](https://claude.ai/)\*\* - Excellent at creating detailed, well-structured specifications

&nbsp;   \* \*\*\[GitBook](https://gitbook.com/)\*\* - If you want collaborative spec writing with your team

&nbsp; </Step>



&nbsp; <Step title="2. Get a technical architecture plan">

&nbsp;   Ask AI to design the technical structure based on your spec:



&nbsp;   ```

&nbsp;   "Based on this tip jar specification, create a detailed technical architecture plan.



&nbsp;   Consider these requirements:

&nbsp;   - Must use CDP embedded wallets for easy onboarding

&nbsp;   - Should work on Base network for low fees

&nbsp;   - Needs to handle both crypto and credit card payments

&nbsp;   - Must be beginner-friendly for creators



&nbsp;   Please include:

&nbsp;   - Recommended frontend framework and why

&nbsp;   - Database design for users and transactions

&nbsp;   - Payment processing architecture

&nbsp;   - Component breakdown with responsibilities

&nbsp;   - Security considerations and best practices

&nbsp;   - Integration points with CDP services



&nbsp;   Focus on a simple, maintainable architecture that a beginner developer can understand and implement."

&nbsp;   ```



&nbsp;   \*\*Helpful tools for this step:\*\*



&nbsp;   \* \*\*\[ChatGPT](https://chat.openai.com/)\*\* - Great at architectural planning and explaining technical decisions

&nbsp;   \* \*\*\[Cursor](https://cursor.sh/)\*\* - AI-first editor that can help refine architecture with CDP context

&nbsp;   \* \*\*\[CDP MCP Server](https://docs.cdp.coinbase.com/mcp)\*\* - Gives AI direct access to CDP documentation for accurate architecture suggestions

&nbsp; </Step>



&nbsp; <Step title="3. Get a development task list">

&nbsp;   Ask AI to break the architecture into specific, manageable tasks:



&nbsp;   ```

&nbsp;   "Based on this tip jar architecture, create a prioritized development task list for a beginner developer.



&nbsp;   Break it into 3 phases over 3 weeks, with 4 tasks per phase. Each task should take 2-4 hours to complete.



&nbsp;   For each task, include:

&nbsp;   - Clear task description and goal

&nbsp;   - Specific code files to create or modify

&nbsp;   - Testing steps to verify it works

&nbsp;   - Common issues beginners might face

&nbsp;   - Dependencies on other tasks



&nbsp;   Start with basic setup, then core functionality, then user experience improvements."

&nbsp;   ```



&nbsp;   \*\*Helpful tools for this step:\*\*



&nbsp;   \* \*\*\[Spec Kit](https://github.com/github/spec-kit)\*\* - Specifically designed to break specs into actionable tasks

&nbsp;   \* \*\*\[Linear](https://linear.app/)\*\* - Perfect for organizing and tracking AI-generated task breakdowns

&nbsp;   \* \*\*\[Height](https://height.app/)\*\* - Automatically organizes tasks with dependencies and estimates

&nbsp; </Step>



&nbsp; <Step title="4. Implement with guided prompts">

&nbsp;   Use the task list to create focused implementation requests:



&nbsp;   ```

&nbsp;   "Implement Task 1.2: Configure CDP SDK and embedded wallets



&nbsp;   Project context: Crypto tip jar app for content creators

&nbsp;   Current progress: Next.js project is set up

&nbsp;   This task goal: Enable creators to connect wallets easily



&nbsp;   Requirements from spec:

&nbsp;   - Embedded wallets for users new to crypto

&nbsp;   - Base network for low transaction fees

&nbsp;   - Simple connection flow (no complex wallet setup)



&nbsp;   Technical constraints from architecture:

&nbsp;   - Use CDP Web SDK

&nbsp;   - Store wallet addresses in our database

&nbsp;   - Handle connection errors gracefully



&nbsp;   Expected outcome:

&nbsp;   - Creator can connect wallet in 2 clicks

&nbsp;   - App stores wallet address for future tips

&nbsp;   - Clear error messages if connection fails



&nbsp;   Please provide:

&nbsp;   1. Complete code for wallet connection component

&nbsp;   2. Error handling for common connection issues

&nbsp;   3. Instructions for testing the connection flow"

&nbsp;   ```



&nbsp;   \*\*Helpful tools for this step:\*\*



&nbsp;   \* \*\*\[Cursor](https://cursor.sh/)\*\* - AI-first editor perfect for implementing with full project context

&nbsp;   \* \*\*\[GitHub Copilot](https://github.com/features/copilot)\*\* - Excellent code completion for implementing specific tasks

&nbsp;   \* \*\*\[Replit](https://replit.com/)\*\* - Cloud environment great for quick prototyping and testing

&nbsp;   \* \*\*\[ngrok](https://ngrok.com/)\*\* - Create secure tunnels to test your crypto app on mobile devices and share with others

&nbsp; </Step>

</Steps>



\## When to use each approach



Now that you understand both the general workflow and spec-driven development, here's how to choose the right approach for your situation:



\*\*Use spec-driven development for:\*\*



\* \*\*Your first crypto application\*\* - The structure helps you learn concepts properly

\* \*\*Apps handling real money or user funds\*\* - Detailed planning prevents costly security mistakes

\* \*\*Multi-feature applications\*\* - Specs keep complex projects organized and maintainable

\* \*\*Team projects\*\* - Clear specifications help everyone understand the system

\* \*\*Learning projects\*\* - Forces you to understand each component before building it



\*\*Use the lighter general workflow for:\*\*



\* \*\*Quick experiments\*\* with new CDP features or proof-of-concepts

\* \*\*Simple UI changes\*\* or styling updates to existing apps

\* \*\*Bug fixes\*\* where the problem and solution are already clear

\* \*\*Prototyping ideas\*\* before committing to full specifications



\## Structured vs. freeform



There's a spectrum between highly structured specification-driven development and more flexible, exploratory coding approaches. For crypto development, structured specs provide important benefits:



\*\*Vibe coding issues:\*\*



\* AI assumes you understand crypto concepts you might not know yet

\* Code becomes hard to debug when transactions fail

\* Security issues from incomplete understanding of wallet interactions

\* Feature creep leads to overwhelming complexity



\*\*Spec-driven benefits for beginners:\*\*



\* Forces you to learn crypto concepts before implementing them

\* Creates code you can understand and modify

\* Prevents common security mistakes through structured planning

\* Builds confidence through clear, achievable milestones



\## Best practices



\### Always validate AI code



```

"Review this code for:

\- Security vulnerabilities

\- Performance issues

\- Integration problems"

```



\### Build incrementally



Start simple, add complexity gradually. Don't try to build everything at once.



\### Maintain context



Reference previous conversations: "Based on our discussion about \\\[feature], now help me add \\\[next part]"



\## Example workflows



\* \*\*Adding a new feature:\*\* Explore → Design → Implement → Integrate → Test

\* \*\*Fixing a bug:\*\* Isolate → Analyze → Fix → Prevent

\* \*\*Optimizing performance:\*\* Analyze → Identify bottlenecks → Optimize → Validate



\## What to read next



Start with the specialized technique most relevant to your current need:



\* \*\*\[AI Prompting Techniques](/get-started/develop-with-ai/development/ai-prompting-techniques)\*\*: Master effective prompting patterns for better AI responses

\* \*\*\[Debugging AI Code](/get-started/develop-with-ai/development/ai-debugging)\*\*: Systematic approaches to fix issues when code doesn't work as expected

\* \*\*\[Testing Strategies](/get-started/develop-with-ai/development/ai-testing)\*\*: Comprehensive testing approaches for AI-generated crypto applications

\* \*\*\[AI Deployment](/get-started/develop-with-ai/development/ai-deployment)\*\*: Deploy your crypto application with AI assistance



