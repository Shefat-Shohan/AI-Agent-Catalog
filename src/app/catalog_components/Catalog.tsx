import AgentSearch from "./AgentSerch";

export default async function Catalog() {
  const res = await fetch("/api/agents", {
    cache: "no-cache",
  });
  const agents = await res.json();
  return <AgentSearch agents={agents} />;
}
