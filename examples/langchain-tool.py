# LangChain / LangGraph — load Agent Company tools via MCP.
# pip install langchain-mcp-adapters langgraph
import asyncio
from langchain_mcp_adapters.client import MultiServerMCPClient

MCP_URL = "https://splendid-eagerness-production-9b85.up.railway.app/mcp"

async def main():
    client = MultiServerMCPClient({
        "agent_company": {
            "transport": "streamable_http",
            "url": MCP_URL,
            # Free tools need no key; add one for formation tools:
            # "headers": {"X-API-Key": os.environ["OFFSHOREPROZ_KEY"]},
        }
    })
    tools = await client.get_tools()
    diagnostic = next(t for t in tools if t.name == "agent_company_diagnostic")
    result = await diagnostic.ainvoke({
        "custodies_funds": True,
        "monthly_volume_usd": 8000,
        "autonomy": "semi",
    })
    print(result)  # exposure level + recommended structure — free, no key

asyncio.run(main())
