# n8n — MCP Client Tool node

1. Add an **AI Agent** node (Tools Agent) to your workflow.
2. Add the **MCP Client Tool** node and connect it to the agent.
3. Configure:
   - **SSE/HTTP endpoint**: `https://splendid-eagerness-production-9b85.up.railway.app/mcp`
   - **Server Transport**: HTTP Streamable
   - **Authentication**: none for the free tools (`agent_company_diagnostic`,
     `get_formation_requirements`, `recommend_structure`). For formation tools, add
     header `X-API-Key` with a key from `POST /register`.
4. Ask the agent: *"Run the agent company diagnostic for this workflow's bot and
   summarize the liability exposure for its owner."*
