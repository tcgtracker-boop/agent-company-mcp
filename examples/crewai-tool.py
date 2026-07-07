# CrewAI — Agent Company tools inside a crew.
# pip install "crewai-tools[mcp]"
from crewai import Agent
from crewai_tools import MCPServerAdapter

server_params = {
    "url": "https://splendid-eagerness-production-9b85.up.railway.app/mcp",
    "transport": "streamable-http",
}

with MCPServerAdapter(server_params) as tools:
    compliance_officer = Agent(
        role="Agent compliance officer",
        goal="Decide whether our autonomous agent needs a legal entity, and which one.",
        backstory="Keeps the human principal out of personal-liability trouble.",
        tools=tools,  # includes the free agent_company_diagnostic
    )
