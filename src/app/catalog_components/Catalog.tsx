import AgentSearch from "./AgentSerch";

export default async function Catalog() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/agents`, {
    cache: "no-cache",
  });
  const agents = await res.json();
  return <AgentSearch agents={agents} />;
}
