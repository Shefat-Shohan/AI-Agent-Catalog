import AgentSearch from "./AgentSerch";

export default async function Catalog() {
  const isProd = process.env.NODE_ENV === "production";
  const baseUrl = isProd
    ? process.env.NEXT_PUBLIC_BASE_URL ??
      "https://ai-agent-catalog-six.vercel.app/"
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/agents`, {
    cache: "no-cache",
  });

  const agents = await res.json();

  return <AgentSearch agents={agents} />;
}
