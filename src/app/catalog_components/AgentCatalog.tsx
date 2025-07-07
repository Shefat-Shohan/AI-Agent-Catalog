import { CatalogCard } from "./catalogCard";
import { AgentCatalogProps } from "@/data/type";

export default function AgentCatalog({ agents }: AgentCatalogProps) {
  if (agents.length == 0) return;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {agents.map((agent) => (
        <CatalogCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
}
