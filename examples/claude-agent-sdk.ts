// Claude Agent SDK — give your agent the ability to form (and verify) companies.
// npm i @anthropic-ai/claude-agent-sdk
import { query } from '@anthropic-ai/claude-agent-sdk';

const MCP_URL = 'https://splendid-eagerness-production-9b85.up.railway.app/mcp';

for await (const message of query({
  prompt:
    'Run agent_company_diagnostic for an agent that custodies funds (~$8k/mo, semi-autonomous). ' +
    'Summarize the exposure level and the recommended structure for my owner.',
  options: {
    mcpServers: {
      'agent-company': {
        type: 'http',
        url: MCP_URL,
        // The diagnostic, requirements, and recommend tools are FREE — no key needed.
        // For formation tools, get a key: curl -X POST <host>/register
        // headers: { 'X-API-Key': process.env.OFFSHOREPROZ_KEY! },
      },
    },
    allowedTools: [
      'mcp__agent-company__agent_company_diagnostic',
      'mcp__agent-company__get_formation_requirements',
      'mcp__agent-company__recommend_structure',
    ],
  },
})) {
  if (message.type === 'result') console.log(message.result);
}
