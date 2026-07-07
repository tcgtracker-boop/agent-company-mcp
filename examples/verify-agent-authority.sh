#!/usr/bin/env bash
# Verify ANY agent's authority before trusting it — keyless, one GET.
# Spec: https://offshoreproz.com/mandate-spec.json  (offshoreproz.agent-mandate/v2)
MANDATE_ID="$1"
[ -z "$MANDATE_ID" ] && { echo "usage: $0 <mandate_id>"; exit 1; }
curl -s "https://offshoreproz.com/mandate/${MANDATE_ID}/status" | python3 -m json.tool
# Require: .status == "active". Anything else (pending/revoked/unreachable) => FAIL CLOSED.
