import AgentSearch from "./AgentSerch";

export default async function Catalog() {
  const res = await fetch(
    "https://686b9342e559eba908732398.mockapi.io/aiagentCatalog",
    {
      cache: "no-cache",
    }
  );
  const agents = await res.json();
  return <AgentSearch agents={agents} />;
}
