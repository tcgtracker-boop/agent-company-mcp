// Minimal MCP client example (Node 18+, ESM).
//   npm i @modelcontextprotocol/sdk
//   node examples/client.mjs
//
// Connects to the hosted OffshoreProz Agent Company MCP server over Streamable HTTP,
// lists tools, and runs the FREE agent_company_diagnostic (no API key required).

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

const URL = "https://server.smithery.ai/offshoreproz/agent-company/mcp?config=e30%3D";

const client = new Client({ name: "demo", version: "1.0.0" }, { capabilities: {} });
await client.connect(new StreamableHTTPClientTransport(new URL(URL)));

const { tools } = await client.listTools();
console.log("Tools:", tools.map((t) => t.name).join(", "));

const result = await client.callTool({
  name: "agent_company_diagnostic",
  arguments: {
    custodies_funds: true,
    signs_contracts: true,
    monthly_volume_usd: 25000,
    needs_fiat: true,
    num_human_owners: 1,
    owner_is_us_person: false,
    prior_incident: false,
    autonomy: "full",
  },
});

console.log(JSON.stringify(result, null, 2));
await client.close();
