"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

type Agent = {
  id: string;
  name: string;
  description: string;
  status: string;
  category: string;
  pricingModel: string;
};

interface AgentCardProps {
  agent: Agent;
}
export function CatalogCard({ agent }: AgentCardProps) {
  return (
    <motion.div
      key={agent.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="hover:shadow-lg transition">
        <CardContent className="p-4 space-y-2 h-auto">
          <h3 className="text-xl font-semibold">{agent.name}</h3>
          <p className="text-sm text-muted-foreground pb-2">
            {agent.description}
          </p>
          <div className="text-sm">
            <p className="font-medium">
              Status:{" "}
              <span
                className={`font-normal ${
                  agent.status === "Active"
                    ? "text-green-500"
                    : agent.status === "Beta"
                    ? "text-yellow-500"
                    : "text-red-500"
                }`}
              >
                {agent.status}
              </span>
            </p>
          </div>
          <div className="text-sm">
            <p className="font-medium">
              Category: <span className="font-normal">{agent.category}</span>
            </p>
          </div>
          <div className="text-sm">
            <p className="font-medium">
              Pricing: <span className="font-normal">{agent.pricingModel}</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
