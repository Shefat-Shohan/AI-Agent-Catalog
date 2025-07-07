import AgentSearch from "./AgentSerch";

export default async function Catalog() {
  const res = await fetch("http://localhost:3000/api/agents", {
    cache: "no-cache",
  });
  const agents = await res.json();
  return <AgentSearch agents={agents} />;
}
