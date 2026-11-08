# Use Agent Company from your framework

The server speaks standard MCP (Streamable HTTP). Three tools are **free and need no API key**
(`agent_company_diagnostic`, `get_formation_requirements`, `recommend_structure`) — your agent can
assess whether it needs a legal home before any signup. Paid tools need a key from
`POST https://mcp.offshoreproz.com/register` (instant, no signup form).

| Example | Framework |
|---|---|
| [claude-agent-sdk.ts](claude-agent-sdk.ts) | Claude Agent SDK (TypeScript) |
| [langchain-tool.py](langchain-tool.py) | LangChain / LangGraph (`langchain-mcp-adapters`) |
| [crewai-tool.py](crewai-tool.py) | CrewAI (`crewai-tools` MCP adapter) |
| [n8n-mcp-node.md](n8n-mcp-node.md) | n8n (MCP Client Tool node) |
| [verify-agent-authority.sh](verify-agent-authority.sh) | Any stack — verify an agent's mandate in one GET |
| [claude_desktop_config.json](claude_desktop_config.json) | Claude Desktop (Streamable HTTP) |
| [cursor_mcp.json](cursor_mcp.json) | Cursor |
| [agent_api_mcp.json](agent_api_mcp.json) | Agent API — separate server (`https://api.offshoreproz.com/mcp`) |
| [client.mjs](client.mjs) · [quickstart.sh](quickstart.sh) | Raw MCP client / curl quickstart |

Endpoint: `https://mcp.offshoreproz.com/mcp`
Open spec (verify any agent's authority, keyless): `https://offshoreproz.com/mandate-spec.json`
