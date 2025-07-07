// ai agent list types
enum AgentStatus {
  Active = "Active",
  Beta = "Beta",
  Archived = "Archived",
}

enum pricingModel {
  FreeTier = "Free Tier",
  Subscription = "Subscription",
  PerUse = "Per-Use",
}

export interface Agent {
  id: string;
  name: string;
  description: string;
  status: AgentStatus;
  category: string;
  pricingModel: pricingModel;
}

export interface AgentCatalogProps {
  agents: Agent[];
}
