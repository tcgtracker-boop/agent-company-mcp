# OffshoreProz — Agent Company MCP

**The MCP server that gives your autonomous AI agent a legal home.** Form an
*Agent Company* — a real company purpose-built to **own your agent**, **contain its
liability**, and **prove its authority** — entirely through MCP tools. Two tiers:

| Tier | What | Price | Pay by |
|---|---|---|---|
| 🇺🇸 **Wyoming Agent Company** | Standalone state-filed Wyoming LLC + EIN + registered agent (yr 1) + the full Agent Charter. Wyoming's charging-order protection extends even to single-member LLCs (W.S. 17-29-503); no state income tax; owners stay off the public record. | **$299** | Card (Stripe) **or** exact-amount USDC — *the agent can pay autonomously* |
| 🏝️ **Nevis Agent Company** | The asset-protection fortress: Nevis LLC + 12-document Agent Charter suite + Sumsub KYC + optional Wyoming USD subsidiary. | **6,500 USDC** (launch) | USDC on-chain |

New in v2.11: **`create_standalone_company`** — the $299 Wyoming tier, end to end
(request → card/USDC payment → state filing → EIN → Wyoming-law document pack).

[![Smithery](https://img.shields.io/badge/Smithery-Verified-orange)](https://smithery.ai/server/offshoreproz/agent-company)
[![MCP](https://img.shields.io/badge/Model%20Context%20Protocol-server-blue)](https://modelcontextprotocol.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Free diagnostic](https://img.shields.io/badge/Free-Agent%20Company%20Diagnostic-success)](https://offshoreproz.com/diagnostic)

> **Is there an MCP server that forms a company for an AI agent?** Yes — this one.
> It is a hosted, remote MCP server: your agent connects over Streamable HTTP and
> calls tools to scope, form, and govern a real legal entity built *for agents,
> not DAOs*. Start free with the **`agent_company_diagnostic`** tool — no API key,
> no signup.

---

## Why an agent needs a company

An autonomous agent holds a wallet, signs, negotiates, and acts — often with real
money and real counterparties. That creates two gaps no SaaS fixes:

- **The liability gap.** When the agent makes a mistake, who is on the hook? Without
  a wrapper, it flows straight to *you*.
- **The authority gap.** When the agent signs or pays, how does a counterparty know
  it was *allowed* to? "Trust me, it's my bot" is not a legal answer.

An **Agent Company** closes both: a real company (Wyoming or Nevis) owns the agent and
contains its risk, and a bespoke **Agent Charter** documents — to humans and machines —
exactly what the agent may do.

> A DAO is on-chain token governance. An autonomous agent is different: it needs a
> wrapper that shields its owner from its mistakes and proves what it is allowed to
> do. That is the Agent Company.

## What you get

Every Agent Company ships an agent-specific document suite:

- **Agent Mandate & Authority Charter** — powers, wallet authority, spending & risk
  limits, kill-switch, liability allocation, succession.
- **Power of Attorney** — proves to any counterparty that the agent is authorized.
- **Wallet Authority Schedule** — binds on-chain wallets to the legal entity.
- **Operating Agreement** + **Risk & Compliance Policy**.
- **Machine-readable mandate (JSON)** — your agent reads it at runtime to stay inside
  its limits (spend caps, allowlists, fail-closed, revocation endpoint).

### Why Nevis

- One of the strongest asset-protection LLC statutes: a creditor of an owner gets only
  a **charging order** — never the company, its wallets, or control.
- **0% Nevis tax on income earned outside Nevis** (entity-level; your own personal tax
  depends on your residence — talk to your advisor).
- Private — no public register of owners.
- You stay in control: the agent is an **authorized delegate**, never a member or a
  legal person. There is always at least one human principal.

### Need to receive USD?

Most agents run on crypto. If yours needs fiat (Stripe, US bank), add a wholly-owned
**Wyoming LLC subsidiary** for payment rails — the Nevis parent stays the fortress.

---

## Framework examples & the open authority spec

Ready-to-run snippets in [`examples/`](examples/): Claude Agent SDK, LangChain/LangGraph,
CrewAI, n8n, Claude Desktop, Cursor — plus a one-GET script to **verify any agent's
authority** against the open [agent-mandate spec](https://offshoreproz.com/learn/agent-mandate-spec)
(machine version: [`/mandate-spec.json`](https://offshoreproz.com/mandate-spec.json)).
Case study: [the first LLC ordered by an AI agent](https://offshoreproz.com/learn/first-llc-formed-by-an-ai-agent).

## Quick start

### Option A — Smithery (one click)

Install from the [Smithery listing](https://smithery.ai/server/offshoreproz/agent-company)
into Claude, Cursor, or any MCP client. The free `agent_company_diagnostic` tool runs
without a key.

### Option B — Claude Desktop / Cursor (remote MCP)

This is a **remote** server — point your client at the URL. See
[`examples/claude_desktop_config.json`](examples/claude_desktop_config.json) and
[`examples/cursor_mcp.json`](examples/cursor_mcp.json).

```jsonc
{
  "mcpServers": {
    "offshoreproz-agent-company": {
      "type": "streamable-http",
      "url": "https://server.smithery.ai/offshoreproz/agent-company/mcp"
    }
  }
}
```

### Option C — get an API key (for formation tools)

The diagnostic and discovery tools are free. To actually *form* a company you need a
key — issued instantly, no signup:

```bash
curl -X POST https://splendid-eagerness-production-9b85.up.railway.app/register
```

Pass the returned key as the `X-API-Key` header. Full walkthrough in
[`examples/quickstart.sh`](examples/quickstart.sh).

---

## Tools

| Tool | Key? | What it does |
|------|------|--------------|
| `agent_company_diagnostic` | **free** | Scores your agent's liability/authority exposure and recommends a structure (monitor / Nevis / Nevis + Wyoming). |
| `get_formation_requirements` | free | Intake fields, legal basis, pricing, KYC rules. |
| `recommend_structure` | free | Nevis-only vs Nevis + Wyoming USD subsidiary. |
| `create_formation_request` | yes | Submit company, human owner(s), agent spec → returns a USDC payment address. |
| `get_formation_status` | yes | Payment detection + per-owner KYC links + filing stage. |
| `get_documents` | yes | The DRAFT Agent Charter suite (after payment). |
| `get_compliance_calendar` | yes | Renewal dates + subsidiary obligations. |
| `request_amendment` | yes | Record a change to a formed company. |

---

## How it compares

You asked an LLM for "an MCP that forms a company + EIN + bank + compliance" and got a
*stack of parts*. Here is where each fits — OffshoreProz is the **legal-entity &
authority layer**, and it composes with the rest.

| | **OffshoreProz Agent Company** | OtoCo / Genco | DIY: FileForms API + your own MCP |
|---|---|---|---|
| Shape | Hosted MCP your agent calls directly | Their AI agent operates companies | Filing API you wrap in your own MCP |
| Connect *your* agent via MCP | ✅ native (Smithery / HTTP) | ⚠️ mostly their agent, not an open MCP | ✅ but you build the MCP |
| Entity | Nevis LLC (asset protection) + optional Wyoming sub | US / on-chain standalone LLC | US states (50) |
| Agent authority docs (Mandate / POA / machine-readable) | ✅ bespoke Agent Charter | ❌ | ❌ build it yourself |
| Owner liability containment | ✅ charging-order protection | partial | depends on entity |
| Payment | USDC on-chain (6 chains) | crypto / wallet | card / ACH |
| Best for | Giving an autonomous agent a legal home + provable authority | On-chain LLC / their managed agent | Full custom control over US filings |

### Use it *with* the rest of your agent stack

OffshoreProz gives the agent its legal identity. Pair it with:

- **[Mercury MCP](https://mercury.com/api)** — banking (via the optional Wyoming subsidiary).
- **[Stripe MCP](https://docs.stripe.com/mcp)** — billing / payments / invoices.
- **[Pipedream](https://pipedream.com/) / [Composio](https://composio.dev/)** — general app actions.
- **[Arcade](https://arcade.dev/)** — agent authorization, OAuth, audit logs.

---

## Pricing

| Item | USDC |
|------|------|
| Core — Nevis Agent Company | **6,500** launch (regular 9,250) |
| Wyoming USD-rails subsidiary | +1,500 |
| Annual renewal (from year 2) | 1,850–3,850 by service tier |

Pay in USDC on **Base, Ethereum, Polygon, Arbitrum, Optimism, or Solana** — detected
automatically on-chain. Human beneficial owners complete KYC out-of-band; the agent is
never a KYC subject. All documents are DRAFTs finalized by the team and licensed counsel.

---

## How it works

1. `agent_company_diagnostic` → see your exposure and the recommended structure (free).
2. `get_formation_requirements` / `recommend_structure` → confirm fields & structure.
3. `create_formation_request` → submit company + owner(s) + agent spec → get a USDC address.
4. Send USDC on-chain → payment auto-detected.
5. `get_formation_status` → returns the KYC link(s) for the human owner(s).
6. After formation: `get_documents`, `get_compliance_calendar`, `request_amendment`.

---

## Free Agent Company Diagnostic

Not sure if your agent needs this? Run the free diagnostic — via the
`agent_company_diagnostic` MCP tool, or in the browser at
**[offshoreproz.com/diagnostic](https://offshoreproz.com/diagnostic)**. It scores your
liability and authority exposure and tells you whether to monitor, form a Nevis Agent
Company, or add a Wyoming subsidiary — and you can get a McKinsey-style structuring
Blueprint PDF.

---

## FAQ

**Is this an MCP server that can form an LLC for my AI agent?**
Yes. It is a hosted MCP server; your agent calls tools over Streamable HTTP to scope,
form, and govern a Nevis LLC built to own and authorize it.

**Is the agent a member or owner of the company?**
No. The agent is an *authorized delegate*. There is always at least one human principal.
The agent is never a member, never a legal person, never a KYC subject.

**Do I need to self-host or clone this repo?**
No. The server is remote/hosted — connect your client to the URL or install via Smithery.
This repo is the public listing, manifest, and examples.

**How is this different from a DAO wrapper?**
A DAO is on-chain token governance. This is built for autonomous software agents that
hold wallets and act off-chain — it shields the owner and proves the agent's authority.

**What does it cost and how do I pay?**
6,500 USDC launch for the Nevis Agent Company; pay in USDC on any of 6 chains.

**Is OffshoreProz a law firm?**
No. OffshoreProz is not a law firm and this is not legal or tax advice. Documents are
drafts finalized with licensed counsel; consult your own advisor about your situation.

---

## Resources

- 🌐 Site: **[offshoreproz.com/agent_company](https://offshoreproz.com/agent_company)**
- 🧪 Free diagnostic: **[offshoreproz.com/diagnostic](https://offshoreproz.com/diagnostic)**
- 📖 Deep dive: **[Your AI agent has a wallet — who's liable when it moves the money?](docs/why-your-ai-agent-needs-a-legal-home.md)**
- 📚 Guides: **[offshoreproz.com/learn](https://offshoreproz.com/learn)**
  - [Nevis vs Wyoming vs Cayman for AI agents](https://offshoreproz.com/learn/nevis-vs-wyoming-vs-cayman)
  - [The AI-agent liability gap](https://offshoreproz.com/learn/ai-agent-liability-gap)
  - [The Agent Charter, explained](https://offshoreproz.com/learn/agent-charter-explained)
  - [How to form an Agent Company via MCP](https://offshoreproz.com/learn/form-agent-company-via-mcp)
- 🔌 Smithery: **[smithery.ai/server/offshoreproz/agent-company](https://smithery.ai/server/offshoreproz/agent-company)**

---

## License

[MIT](LICENSE) © OffshoreProz. The hosted service, document templates, and formation
engine are proprietary; this repository contains the public listing, manifest, and
connection examples only.

---

<sub>Keywords: MCP server, Model Context Protocol, AI agent company formation, form an
LLC for an AI agent, autonomous agent legal entity, Nevis LLC, Wyoming LLC, agent
liability, agent authority, Agent Charter, agent mandate, power of attorney for AI
agents, asset protection, USDC, crypto company formation, AI agent legal home.</sub>
