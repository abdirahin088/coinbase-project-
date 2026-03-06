> ## Documentation Index

> Fetch the complete documentation index at: https://docs.cdp.coinbase.com/llms.txt

> Use this file to discover all available pages before exploring further.



\# AI Development Troubleshooting



> Common issues and solutions when developing crypto applications with AI assistance



\## Overview



This guide covers the most common issues you'll encounter when building crypto applications with AI assistance, along with proven solutions and debugging strategies.



<Warning>

&nbsp; \*\*Starter App Variations\*\*: Different CDP starter apps may use different commands, scripts, and patterns. Always check your specific starter app's documentation and package.json for the correct commands.

</Warning>



\## Build and Deployment Issues



\### Linting errors



<Accordion title="Linting and Code Style Errors">

&nbsp; \*\*Problem:\*\* Build fails with linting or code style errors after AI generates code



&nbsp; \*\*General debugging approach:\*\*



&nbsp; 1. \*\*Check your package.json\*\* - Look for linting scripts (could be `lint`, `eslint`, `prettier`, etc.)

&nbsp; 2. \*\*Run the linting command\*\* - Each starter app may have different commands

&nbsp; 3. \*\*Fix one error at a time\*\* - Start with the first error in the output

&nbsp; 4. \*\*Look for auto-fix options\*\* - Many linters have `--fix` flags



&nbsp; \*\*Debugging with AI:\*\*



&nbsp; ```

&nbsp; "My build is failing with this linting error: \[paste exact error]

&nbsp; I'm using \[starter app type: Consumer/DeFi/Agent]

&nbsp; Here's my package.json scripts: \[paste scripts section]

&nbsp; How do I fix this?"

&nbsp; ```



&nbsp; \*\*Useful resources:\*\*



&nbsp; \* Check your starter app's README for linting setup

&nbsp; \* Look at your starter app's existing code style patterns

&nbsp; \* Different starter apps may use ESLint, Prettier, or other tools

</Accordion>



<Accordion title="TypeScript Type Errors">

&nbsp; \*\*Problem:\*\* AI-generated code has TypeScript errors



&nbsp; \*\*General debugging approach:\*\*



&nbsp; 1. \*\*Read the error message carefully\*\* - TypeScript errors are usually specific

&nbsp; 2. \*\*Fix one error at a time\*\* - Start from the top of the error list

&nbsp; 3. \*\*Check imports\*\* - Make sure you're importing types from the right packages

&nbsp; 4. \*\*Look at existing code\*\* - See how your starter app handles similar patterns



&nbsp; \*\*Debugging with AI:\*\*



&nbsp; ```

&nbsp; "I'm getting this TypeScript error: \[paste exact error]

&nbsp; I'm using \[starter app type: Consumer/DeFi/Agent]

&nbsp; Here's the code that's failing: \[paste code snippet]

&nbsp; What's the correct way to fix this?"

&nbsp; ```



&nbsp; \*\*Useful resources:\*\*



&nbsp; \* Check your starter app's TypeScript configuration

&nbsp; \* Look at how existing components in your starter app handle types

&nbsp; \* Different starter apps may have different type patterns for crypto functionality

&nbsp; \* \[TypeScript documentation](https://www.typescriptlang.org/docs/) for general TypeScript issues

</Accordion>



\### Package installation issues



<Accordion title="Dependency Conflicts">

&nbsp; \*\*Problem:\*\* npm install fails with peer dependency warnings



&nbsp; \*\*General debugging approach:\*\*



&nbsp; 1. \*\*Read the warning carefully\*\* - Peer dependency warnings often suggest solutions

&nbsp; 2. \*\*Check your starter app's documentation\*\* - It may have specific setup instructions

&nbsp; 3. \*\*Try standard npm troubleshooting\*\* - Clear cache and reinstall dependencies



&nbsp; \*\*Debugging with AI:\*\*



&nbsp; ```

&nbsp; "I'm getting this npm install error: \[paste exact error]

&nbsp; Starter app type: \[Consumer/DeFi/Agent]

&nbsp; What's the best way to resolve this dependency conflict?"

&nbsp; ```



&nbsp; \*\*Useful resources:\*\*



&nbsp; \* Check your starter app's installation instructions

&nbsp; \* Different starter apps may have different dependency management approaches

</Accordion>



<Accordion title="OnchainKit Component Issues">

&nbsp; \*\*Problem:\*\* OnchainKit components not working after AI generates code



&nbsp; \*\*Debugging steps:\*\*



&nbsp; 1. \*\*Check your package.json\*\* - See which OnchainKit version you're using

&nbsp; 2. \*\*Look at existing components\*\* - See how OnchainKit is used in your starter app

&nbsp; 3. \*\*Verify imports\*\* - Make sure you're importing from the correct OnchainKit modules

&nbsp; 4. \*\*Check component documentation\*\* - APIs may vary between versions



&nbsp; \*\*Debugging with AI:\*\*



&nbsp; ```

&nbsp; "My OnchainKit component isn't working: \[paste error]

&nbsp; OnchainKit version: \[check package.json]

&nbsp; Starter app type: \[Consumer/DeFi/Agent]

&nbsp; Here's my component code: \[paste code]

&nbsp; What's the correct way to use this component?"

&nbsp; ```



&nbsp; \*\*Useful resources:\*\*



&nbsp; \* \[OnchainKit Documentation](https://docs.base.org/onchainkit/getting-started)

&nbsp; \* \[OnchainKit Components](https://docs.base.org/onchainkit/components)

&nbsp; \* Check your starter app's existing OnchainKit usage patterns

</Accordion>



\## Runtime errors



\### Wallet connection issues



<Accordion title="Wallet Connection Fails">

&nbsp; \*\*Problem:\*\* Users can't connect their wallet



&nbsp; \*\*General debugging approach:\*\*



&nbsp; 1. \*\*Check browser console\*\* - Look for connection errors or warnings

&nbsp; 2. \*\*Test with Coinbase Wallet\*\* - Ensure Coinbase Wallet is installed and working

&nbsp; 3. \*\*Verify network settings\*\* - Make sure your app and wallet are on the same network

&nbsp; 4. \*\*Test on different browsers\*\* - Try Chrome, Safari, or Firefox



&nbsp; \*\*Common solutions:\*\*



&nbsp; \* \*\*HTTPS required\*\* - Wallet connections don't work on HTTP in production

&nbsp; \* \*\*Network mismatch\*\* - Ensure wallet is on the correct chain (Base, Ethereum, etc.)

&nbsp; \* \*\*Browser compatibility\*\* - Make sure your browser supports wallet connections

&nbsp; \* \*\*Clear cache\*\* - Try clearing browser cache and refreshing the page



&nbsp; \*\*Debugging with AI:\*\*



&nbsp; ```

&nbsp; "My wallet connection is failing. I'm using Coinbase Wallet on \[network]. 

&nbsp; Here's the error I see in console: \[paste error]

&nbsp; I'm building a \[consumer/defi/agent] app with \[starter app type]."

&nbsp; ```



&nbsp; \*\*Useful resources:\*\*



&nbsp; \* Check your starter app's documentation for wallet connection patterns

&nbsp; \* \[OnchainKit Wallet Documentation](https://docs.base.org/onchainkit/wallet/introduction)

</Accordion>



<Accordion title="Transaction Failures">

&nbsp; \*\*Problem:\*\* Transactions fail or get stuck



&nbsp; \*\*General debugging approach:\*\*



&nbsp; 1. \*\*Check transaction details\*\* - Look at the error message for specific reasons

&nbsp; 2. \*\*Verify gas settings\*\* - Make sure you have enough ETH for gas fees

&nbsp; 3. \*\*Check network status\*\* - Network congestion can cause delays

&nbsp; 4. \*\*Test with small amounts\*\* - Start with minimal values for testing



&nbsp; \*\*Common transaction errors:\*\*



&nbsp; \* \*\*User rejected\*\* - User cancelled the transaction in their wallet

&nbsp; \* \*\*Insufficient funds\*\* - Not enough ETH for gas or tokens for transfer

&nbsp; \* \*\*Network timeout\*\* - Transaction took too long (try increasing gas)

&nbsp; \* \*\*Invalid parameters\*\* - Check recipient address and amounts



&nbsp; \*\*Debugging with AI:\*\*



&nbsp; ```

&nbsp; "My transaction is failing with this error: \[paste exact error]

&nbsp; I'm trying to \[describe what you're doing]

&nbsp; Network: \[Base/Ethereum/etc]

&nbsp; Transaction details: \[amount, recipient, etc]"

&nbsp; ```



&nbsp; \*\*General debugging steps:\*\*



&nbsp; 1. Add console.log statements to track transaction progress

&nbsp; 2. Check wallet for pending transactions

&nbsp; 3. Verify contract addresses and function parameters

&nbsp; 4. Test on testnet first with fake tokens



&nbsp; \*\*Useful resources:\*\*



&nbsp; \* Check your starter app's transaction patterns

&nbsp; \* Use block explorers (Basescan, Etherscan) to inspect failed transactions

</Accordion>



\### API integration issues



<Accordion title="CDP API Authentication">

&nbsp; \*\*Problem:\*\* CDP API calls return 401 Unauthorized



&nbsp; \*\*Check these items:\*\*



&nbsp; 1. \*\*API keys are correctly set\*\* in environment variables

&nbsp; 2. \*\*Environment variable names\*\* match exactly (case-sensitive)

&nbsp; 3. \*\*API keys are valid\*\* and not expired

&nbsp; 4. \*\*Project ID\*\* matches your CDP project



&nbsp; \*\*General debugging approach:\*\*



&nbsp; 1. \*\*Use the CDP SDK\*\* instead of raw API calls when possible

&nbsp; 2. \*\*Check environment variables\*\* - Print them (safely) to verify they're loaded

&nbsp; 3. \*\*Test with a simple API call\*\* first

&nbsp; 4. \*\*Read the response\*\* - 401 errors often include helpful details



&nbsp; \*\*Debugging with AI:\*\*



&nbsp; ```

&nbsp; "I'm getting a 401 error when calling CDP APIs.

&nbsp; Here's my error: \[paste exact error message]

&nbsp; I'm using \[CDP SDK/raw API calls]

&nbsp; My environment variables are: CDP\_API\_KEY\_ID=\[first few chars]..."

&nbsp; ```



&nbsp; \*\*Useful resources:\*\*



&nbsp; \* \[CDP Authentication Guide](/api-reference/v2/authentication)

&nbsp; \* \[CDP SDK Documentation](/sdks/cdp-sdks-v2/typescript/)

&nbsp; \* Use the CDP SDK for automatic JWT generation

</Accordion>



<Accordion title="Rate Limiting Issues">

&nbsp; \*\*Problem:\*\* API calls fail with 429 Too Many Requests



&nbsp; \*\*General debugging approach:\*\*



&nbsp; 1. \*\*Reduce API call frequency\*\* - Space out your requests

&nbsp; 2. \*\*Check rate limits\*\* - Review your API plan's rate limits

&nbsp; 3. \*\*Implement retry logic\*\* - Wait before retrying failed requests

&nbsp; 4. \*\*Use caching\*\* - Avoid unnecessary duplicate API calls



&nbsp; \*\*Debugging with AI:\*\*



&nbsp; ```

&nbsp; "I'm getting 429 rate limiting errors when calling CDP APIs.

&nbsp; API calls per minute: \[estimate]

&nbsp; Starter app type: \[Consumer/DeFi/Agent]

&nbsp; What's the best retry strategy for CDP APIs?"

&nbsp; ```



&nbsp; \*\*Useful resources:\*\*



&nbsp; \* \[CDP API Documentation](/api-reference/v2/introduction) for rate limit details

&nbsp; \* Check your starter app's API usage patterns

</Accordion>



\## AI-generated code issues



\### Code quality problems



<Accordion title="AI Generated Insecure Code">

&nbsp; \*\*Problem:\*\* AI generates code with security vulnerabilities



&nbsp; \*\*Security review checklist:\*\*



&nbsp; \* \[ ] Input validation is present

&nbsp; \* \[ ] API keys are not hardcoded

&nbsp; \* \[ ] User inputs are sanitized

&nbsp; \* \[ ] Error messages don't leak sensitive information

&nbsp; \* \[ ] Rate limiting is implemented for API calls



&nbsp; \*\*Debugging with AI:\*\*



&nbsp; ```

&nbsp; "Can you review this code for security issues?

&nbsp; \[paste code snippet]



&nbsp; I'm building a \[consumer/defi/agent] app.

&nbsp; Are there any security vulnerabilities I should fix?"

&nbsp; ```



&nbsp; \*\*Useful resources:\*\*



&nbsp; \* \[CDP Security Documentation](/get-started/authentication/security-best-practices)

&nbsp; \* Check your starter app's security patterns

&nbsp; \* Consider security code reviews for production apps

</Accordion>



<Accordion title="Performance Issues">

&nbsp; \*\*Problem:\*\* AI-generated code is slow or inefficient



&nbsp; \*\*General debugging approach:\*\*



&nbsp; 1. \*\*Identify the bottleneck\*\* - Use browser dev tools to find slow operations

&nbsp; 2. \*\*Check network requests\*\* - Look for unnecessary API calls or large responses

&nbsp; 3. \*\*Review rendering\*\* - See if components are re-rendering too often

&nbsp; 4. \*\*Test on different devices\*\* - Performance varies across devices



&nbsp; \*\*Debugging with AI:\*\*



&nbsp; ```

&nbsp; "My app is running slowly. Here's what I've observed:

&nbsp; - Slow operation: \[describe what's slow]

&nbsp; - When it happens: \[user action that triggers slowness]

&nbsp; - Starter app type: \[Consumer/DeFi/Agent]

&nbsp; - Code that might be causing issues: \[paste relevant code]



&nbsp; What are common performance optimizations for crypto apps?"

&nbsp; ```



&nbsp; \*\*Useful resources:\*\*



&nbsp; \* Check your starter app's performance optimization patterns

&nbsp; \* Use React DevTools or browser performance tools for analysis

</Accordion>



\### Logic errors



<Accordion title="Incorrect Blockchain Interactions">

&nbsp; \*\*Problem:\*\* AI generates incorrect smart contract interactions



&nbsp; \*\*General debugging approach:\*\*



&nbsp; 1. \*\*Test on testnet first\*\* - Always verify logic with test tokens

&nbsp; 2. \*\*Check contract ABI\*\* - Ensure function signatures match

&nbsp; 3. \*\*Validate parameters\*\* - Verify data types and formats

&nbsp; 4. \*\*Use block explorer\*\* - Check actual transaction details on Basescan or Etherscan



&nbsp; \*\*Debugging with AI:\*\*



&nbsp; ```

&nbsp; "My smart contract interaction is failing:

&nbsp; Error: \[paste exact error]

&nbsp; Contract: \[contract name/address]

&nbsp; Function: \[function name]

&nbsp; Parameters: \[list parameters]

&nbsp; Network: \[testnet/mainnet]



&nbsp; What's likely wrong with this contract call?"

&nbsp; ```



&nbsp; \*\*Useful resources:\*\*



&nbsp; \* Check your starter app's smart contract interaction patterns

&nbsp; \* Use block explorers to verify contract addresses and ABIs

&nbsp; \* Test all interactions on testnet before mainnet

</Accordion>



\## Environment-specific issues



\### Local development



<Accordion title="HTTPS Requirements">

&nbsp; \*\*Problem:\*\* Wallet connections fail in local development



&nbsp; \*\*General debugging approach:\*\*



&nbsp; 1. \*\*Check if HTTPS is required\*\* - Most wallet connections need HTTPS

&nbsp; 2. \*\*Look for HTTPS solutions\*\* - Check your starter app's development setup

&nbsp; 3. \*\*Test on different browsers\*\* - Some browsers have different requirements

&nbsp; 4. \*\*Check console errors\*\* - Look for specific security or connection errors



&nbsp; \*\*Debugging with AI:\*\*



&nbsp; ```

&nbsp; "My wallet connections fail in local development.

&nbsp; Error: \[paste console error]

&nbsp; Starter app type: \[Consumer/DeFi/Agent]

&nbsp; Development setup: \[describe your local setup]



&nbsp; How do I enable HTTPS for local development?"

&nbsp; ```



&nbsp; \*\*Useful resources:\*\*



&nbsp; \* Check your starter app's local development documentation

&nbsp; \* Different starter apps may have different HTTPS setup methods

</Accordion>



<Accordion title="Environment Variables Not Loading">

&nbsp; \*\*Problem:\*\* Environment variables are undefined in development



&nbsp; \*\*General debugging approach:\*\*



&nbsp; 1. \*\*Check your starter app's .env.example\*\* - This shows the correct variable names and format

&nbsp; 2. \*\*Verify file name\*\* - Most Next.js apps use `.env.local` for local development

&nbsp; 3. \*\*Restart development server\*\* - Environment variables are loaded at startup

&nbsp; 4. \*\*Check for syntax errors\*\* - No spaces around `=` signs, proper quotes



&nbsp; \*\*Debugging with AI:\*\*



&nbsp; ```

&nbsp; "My environment variables aren't loading. Here's my setup:

&nbsp; - File name: \[.env.local or .env]

&nbsp; - Variables I'm trying to use: \[list them]

&nbsp; - Starter app type: \[Consumer/DeFi/Agent]

&nbsp; - Error I'm seeing: \[paste error]

&nbsp; What's the correct format for my starter app?"

&nbsp; ```



&nbsp; \*\*Useful resources:\*\*



&nbsp; \* Check your starter app's .env.example file for the correct variable names and patterns

&nbsp; \* Different starter apps may use different environment variable naming conventions

</Accordion>



\### Production issues



<Accordion title="Vercel Deployment Failures">

&nbsp; \*\*Problem:\*\* App builds locally but fails on Vercel



&nbsp; \*\*General debugging approach:\*\*



&nbsp; 1. \*\*Check build logs\*\* in Vercel dashboard for specific errors

&nbsp; 2. \*\*Verify environment variables\*\* are set correctly in Vercel settings

&nbsp; 3. \*\*Test production build locally\*\* - Check your package.json for build scripts

&nbsp; 4. \*\*Check for differences\*\* between local and production environments



&nbsp; \*\*Debugging with AI:\*\*



&nbsp; ```

&nbsp; "My Vercel deployment is failing. Here's the error from build logs:

&nbsp; \[paste exact error from Vercel dashboard]



&nbsp; Starter app type: \[Consumer/DeFi/Agent]

&nbsp; Build works locally: \[yes/no]

&nbsp; Environment variables set in Vercel: \[list them]



&nbsp; What's causing this deployment failure?"

&nbsp; ```



&nbsp; \*\*Useful resources:\*\*



&nbsp; \* \[Vercel Documentation](https://vercel.com/docs) for deployment troubleshooting

&nbsp; \* Check your starter app's deployment documentation

</Accordion>



\## Getting help



\### AI debugging prompts



When asking AI for help with errors, provide this context for better results:



```

"I'm getting this error in my CDP app:

\[paste exact error message]



Here's the relevant code:

\[paste code snippet]



Context:

\- Starter app type: \[Consumer/DeFi/Agent]

\- What I was trying to do: \[describe the action]

\- When it happens: \[during build/runtime/etc]

\- Already tried: \[list what you've attempted]



What's the most likely cause and how do I fix it?"

```



\### Community resources



\* \*\*\[CDP Discord](https://discord.gg/cdp)\*\*: Real-time community support

\* \*\*\[GitHub Discussions](https://github.com/orgs/coinbase/discussions)\*\*: Technical Q\\\&A

\* \*\*\[OnchainKit Issues](https://github.com/coinbase/onchainkit/issues)\*\*: Component-specific issues



\## What to read next



\* \*\*\[AI Prompting Techniques](/get-started/develop-with-ai/development/ai-prompting-techniques)\*\*: Effective AI interaction patterns

\* \*\*\[Deployment Guide](/get-started/develop-with-ai/development/ai-deployment)\*\*: Smooth deployment workflows

\* \*\*\[Development Workflows](/get-started/develop-with-ai/development/develop-with-ai-workflows)\*\*: Advanced patterns



