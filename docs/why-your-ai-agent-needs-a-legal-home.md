# Your AI agent has a wallet. Who goes to jail when it moves the money?

*A technical + legal look at the liability gap that opens the moment an autonomous agent can sign, spend, or custody funds — and how to close it with a legal entity and a machine-readable mandate.*

You wired up an agent. It has an API key, a wallet, and a loop. It rebalances a treasury, pays for its own infra, maybe signs a SaaS agreement through a tool call. It works. You ship it.

Here's the question almost nobody in the agent-building space is asking: **when that agent moves money or enters an obligation, who is the legal person on the hook?**

The answer, by default, is *you*. Personally. And that's a bigger deal than most of us realize until it's too late.

## The liability gap, precisely

A software agent is not a legal person. It can't own property, can't be a party to a contract, can't be sued, can't hold a bank account or a wallet *in its own name*. So every action it takes with legal or financial weight has to attach to some legal person somewhere up the chain.

Right now that chain usually terminates at **you, the individual developer or operator**, because:

- The wallet's private key was generated on your machine / under your account.
- The API keys and cloud bill are in your name.
- There is no entity between "the agent's behavior" and "your personal assets."

So when the agent does something expensive-and-wrong — overpays, gets prompt-injected into approving a malicious transfer, signs something it shouldn't, triggers a tax or compliance obligation in a jurisdiction you've never heard of — the counterparty, the tax authority, or the plaintiff's lawyer looks up the chain and finds *your name*. Unlimited personal liability. Your house is in scope.

This isn't a "move fast" risk you can eat like a flaky test. It's an uncapped downside on an autonomous system whose whole point is that it acts *without you in the loop*.

A longer breakdown of exactly where this gap opens up — the four failure modes and why "I'll just be careful" doesn't close it — is here: **[the AI agent liability gap](https://offshoreproz.com/learn/ai-agent-liability-gap)**.

## Why the usual dev instincts don't fix it

A few reflexes that feel like they should work, and why they don't:

**"I'll cap spending in code."** Good, do that — but a spending cap is a *control*, not a *liability shield*. If the cap has a bug (and it's software, so it has a bug), the loss is still yours. Controls reduce probability; they don't change who owns the downside.

**"It's just my side project, no one will care."** Liability doesn't scale with how seriously you take the project. It scales with how much money moved and who got hurt. A $40k mis-send is a $40k problem whether or not you meant it to be a business.

**"I'll put it in an LLC later."** Retroactive incorporation doesn't retroactively shield actions the agent already took while it was legally *you*. The entity has to exist *before* the agent acts under it.

## The actual fix: give the agent a legal home

The structurally correct move is to insert a **legal entity** between the agent and every human, and make the agent an **authorized delegate of that entity** — never a member, never an owner, never a legal person itself.

Concretely, three things have to be true:

1. **An entity owns the agent's operations.** An LLC (or equivalent) is the party to contracts, holds/authorizes the wallet, and is the thing that gets sued or taxed. Liability stops at the entity's assets instead of flowing to your personal ones. This is the entire point of limited liability — it's just never been applied to agents.

2. **The agent's authority is explicit and bounded.** The agent acts *on behalf of* the entity under a written, ideally **machine-readable mandate**: what it may do, spending/risk limits, a kill-switch, who the human override-holders are, and an expiry. This is the part that maps cleanly to engineering — it's basically an authz policy for a legal actor, and you can have the agent read and enforce it at runtime.

3. **The jurisdiction actually protects you.** Not all entities are equal. The relevant axes for an agent operator are asset-protection strength (charging-order rules), tax treatment on non-local income, whether members stay off the public record, and whether you can get US fiat rails (Stripe/banking) if you need them.

That third point is where the choice gets real. The short version of the trade-offs:

- **Wyoming LLC** — cheap, fast, US-based (so US banking/Stripe works), single-member charging-order protection under W.S. 17-29, no state income tax. The pragmatic default for most solo operators and small agent fleets.
- **Nevis LLC** — the fortress: charging order as the *sole* creditor remedy, strong statutory barriers to foreign judgments, 0% tax on non-Nevis income, members off the public record. Heavier and pricier; worth it once real value is at stake.
- **Cayman** — gold-standard for funds/institutional setups, but the cost floor is high enough that it's overkill for a single agent.

The full side-by-side (cost, protection, tax, banking, privacy) is here: **[Nevis vs Wyoming vs Cayman for agent operators](https://offshoreproz.com/learn/nevis-vs-wyoming-vs-cayman)**.

## The part that's interesting for MCP builders specifically

Here's the detail this community will appreciate: the formation itself can be done **through an MCP server**, which means an agent can (with a human principal always attached) provision its own legal home as a tool call — submit the company details, get back a Stripe checkout for the human to pay by card *or* a unique USDC amount the agent can pay autonomously on-chain, then poll for status until the entity is formed and the charter documents are generated.

The mandate mentioned in point 2 gets emitted as a JSON document the agent can fetch and enforce — powers, wallet authority, limits, kill-switch, and a live `status` endpoint that fails closed if authority is revoked. That's the machine-readable version of "here's what you're allowed to do," which is exactly the abstraction an autonomous system needs and exactly the thing a PDF from a traditional law firm can't give it.

If you want to see whether your specific setup actually needs this (it might not — a read-only agent that never touches money probably doesn't), there's a free, no-signup exposure check that asks what your agent does and tells you where the liability lands: **[OffshoreProz Agent Company](https://offshoreproz.com/agent_company)**.

## TL;DR

- An AI agent is not a legal person, so its money-moving actions attach to a human — usually you, personally, with uncapped downside.
- Spending caps are controls, not shields. Retroactive incorporation doesn't cover past actions.
- The fix is an entity that owns the agent's operations + a bounded, machine-readable mandate + a jurisdiction that actually protects you.
- Wyoming for the pragmatic default, Nevis for the fortress. And yes — an agent can form its own legal home via MCP and pay for it in USDC.

If you're building agents that touch money, this is worth an afternoon of thought *before* the agent's first expensive mistake, not after.

---

*This article is part of the [OffshoreProz Agent Company MCP](../README.md) project. Start free with the `agent_company_diagnostic` tool — no API key, no signup.*
