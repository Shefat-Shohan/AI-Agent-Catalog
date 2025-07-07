"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { CatalogCard } from "./catalogCard";

type Agent = {
  id: string;
  name: string;
  description: string;
  status: string;
  category: string;
  pricingModel: string;
};

interface AgentCatalogProps {
  agents: Agent[];
}

export default function AgentSearch({ agents }: AgentCatalogProps) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<string[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [pricing, setPricing] = useState<string | null>(null);

  const statusOptions = useMemo(
    () => Array.from(new Set(agents.map((a) => a.status))),
    [agents]
  );
  const categoryOptions = useMemo(
    () => Array.from(new Set(agents.map((a) => a.category))),
    [agents]
  );
  const pricingOptions = useMemo(
    () => Array.from(new Set(agents.map((a) => a.pricingModel))),
    [agents]
  );

  const filteredAgents = useMemo(() => {
    return agents.filter((agent) => {
      const matchesSearch =
        agent.name.toLowerCase().includes(search.toLowerCase()) ||
        agent.description.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        status.length === 0 || status.includes(agent.status);
      const matchesCategory =
        category.length === 0 || category.includes(agent.category);
      const matchesPricing = !pricing || agent.pricingModel === pricing;

      return (
        matchesSearch && matchesStatus && matchesCategory && matchesPricing
      );
    });
  }, [agents, search, status, category, pricing]);

  const handleClearFilters = () => {
    setSearch("");
    setStatus([]);
    setCategory([]);
    setPricing(null);
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6">AI Agents Catalog</h1>

      {/* Filter Controls */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        {/* Search */}
        <div>
          <Input
            placeholder="Search by name or description"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Status Filter */}
        <div>
          <h2 className="font-semibold mb-2">Status</h2>
          {statusOptions.map((opt) => (
            <div key={opt} className="flex items-center space-x-2 mb-1">
              <Checkbox
                checked={status.includes(opt)}
                onCheckedChange={() =>
                  setStatus((prev) =>
                    prev.includes(opt)
                      ? prev.filter((s) => s !== opt)
                      : [...prev, opt]
                  )
                }
              />
              <label>{opt}</label>
            </div>
          ))}
        </div>

        {/* Category Filter */}
        <div>
          <h2 className="font-semibold mb-2">Category</h2>
          {categoryOptions.map((opt) => (
            <div key={opt} className="flex items-center space-x-2 mb-1">
              <Checkbox
                checked={category.includes(opt)}
                onCheckedChange={() =>
                  setCategory((prev) =>
                    prev.includes(opt)
                      ? prev.filter((c) => c !== opt)
                      : [...prev, opt]
                  )
                }
              />
              <label>{opt}</label>
            </div>
          ))}
        </div>

        {/* Pricing Model Filter */}
        <div>
          <h2 className="font-semibold mb-2">Pricing Model</h2>
          <RadioGroup onValueChange={setPricing} value={pricing || ""}>
            {pricingOptions.map((opt) => (
              <div key={opt} className="flex items-center space-x-2 mb-1">
                <RadioGroupItem value={opt} id={opt} />
                <label htmlFor={opt}>{opt}</label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </div>

      {/* Clear Filters Button */}
      <Button variant="outline" onClick={handleClearFilters} className="mb-6">
        Clear All Filters
      </Button>

      {/* Agent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAgents.length > 0 ? (
          filteredAgents.map((agent) => (
            <CatalogCard key={agent.id} agent={agent} />
          ))
        ) : (
          <p>No agents match your filters.</p>
        )}
      </div>
    </div>
  );
}
