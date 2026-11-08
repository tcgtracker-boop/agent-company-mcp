# Install the OffshoreProz MCP servers

These servers are already hosted. Do not clone this repository, do not run npm or pip, and do not start a local process. Add a remote Streamable HTTP entry. In Cline, `type` must be `streamableHttp`. If `type` is omitted, Cline falls back to SSE and the handshake fails.

This repository lists two different products. Install only the one the user asked for. They are not interchangeable.

## Agent Company

Legal home for an autonomous agent: a Wyoming LLC (US$299 to start + US$185/year) or a Nevis LLC. The free `agent_company_diagnostic` tool needs no API key.

- Endpoint: `https://mcp.offshoreproz.com/mcp`
- Transport: Streamable HTTP
- Docs: https://offshoreproz.com/agent_company
- Registry name: `io.github.tcgtracker-boop/agent-company-mcp`

Add this to Cline's MCP settings (`cline_mcp_settings.json`):

```json
{
  "mcpServers": {
    "offshoreproz-agent-company": {
      "type": "streamableHttp",
      "url": "https://mcp.offshoreproz.com/mcp",
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

Formation tools need an API key. Get one with `POST https://mcp.offshoreproz.com/register` and send it as the `X-API-Key` header. Leave `headers` out for the free diagnostic.

## Agent API

A separate developer server. REST plus MCP for programmatic company formation (Wyoming LLC or Marshall Islands DAO LLC). A human owner confirms the cost before a formation is created. This is not the Agent Company server above.

- Endpoint: `https://api.offshoreproz.com/mcp`
- Transport: Streamable HTTP
- Docs: https://offshoreproz.com/docs
- Registry name: `io.github.tcgtracker-boop/offshoreproz-agent-api`

```json
{
  "mcpServers": {
    "offshoreproz-agent-api": {
      "type": "streamableHttp",
      "url": "https://api.offshoreproz.com/mcp",
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

Public tools such as `offshoreproz_list_jurisdictions` need no key. Authenticated tools take `Authorization: Bearer op_...` or `X-API-Key`. A test key is available from the `offshoreproz_register` tool.

## Check

After saving the config, Cline should list tools from the server you added. A successful Agent Company connection can call `agent_company_diagnostic` with no key. A successful Agent API connection can call `offshoreproz_list_jurisdictions` with no key.
