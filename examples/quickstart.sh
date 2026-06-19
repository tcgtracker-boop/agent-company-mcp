#!/usr/bin/env bash
# OffshoreProz Agent Company MCP — quickstart
# The diagnostic + discovery tools are FREE (no key). Formation tools need a key.
set -euo pipefail

GATEWAY="https://server.smithery.ai/offshoreproz/agent-company/mcp"
DIRECT="https://splendid-eagerness-production-9b85.up.railway.app"

echo "1) Run the FREE diagnostic through the MCP gateway (no key needed)"
echo "   (config=e30%3D is base64 '{}' — an empty config)"
curl -s -X POST "${GATEWAY}?config=e30%3D" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "agent_company_diagnostic",
      "arguments": {
        "custodies_funds": true,
        "signs_contracts": true,
        "monthly_volume_usd": 25000,
        "needs_fiat": true,
        "num_human_owners": 1,
        "owner_is_us_person": false,
        "prior_incident": false,
        "autonomy": "full"
      }
    }
  }'
echo

echo "2) Get an API key instantly (no signup) for the formation tools"
echo "   curl -X POST ${DIRECT}/register"
echo "   -> then pass it as the  X-API-Key  header and call create_formation_request"
echo
echo "Docs: https://offshoreproz.com/agent_company  |  Free web diagnostic: https://offshoreproz.com/diagnostic"
