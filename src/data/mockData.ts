export const simulationData = {
  scenarios: [
    {
      id: "carbon-tax-shortage",
      name: "EU Carbon Tax + Rare Earth Shortage",
      riskIndex: 72,
      probability: 85,
      timeframe: "6 months",
      description: "Combined impact of EU carbon tax implementation and rare earth material shortages affecting EV production"
    },
    {
      id: "supply-chain-disruption",
      name: "Global Supply Chain Disruption",
      riskIndex: 68,
      probability: 70,
      timeframe: "3 months",
      description: "Major shipping delays and port congestion affecting component delivery"
    },
    {
      id: "regulatory-changes",
      name: "New EV Regulations",
      riskIndex: 55,
      probability: 90,
      timeframe: "12 months",
      description: "Stricter safety and environmental regulations for electric vehicles"
    }
  ],
  
  riskFactors: [
    {
      id: "carbon-tax",
      name: "EU Carbon Tax Implementation",
      category: "regulatory",
      impact: 85,
      probability: 90,
      trend: "increasing",
      description: "New carbon tax policies affecting battery production costs"
    },
    {
      id: "supply-shortage",
      name: "Rare Earth Supply Shortage",
      category: "operational",
      impact: 75,
      probability: 70,
      trend: "stable",
      description: "Limited availability of critical materials for EV batteries"
    },
    {
      id: "market-volatility",
      name: "EV Market Volatility",
      category: "market",
      impact: 60,
      probability: 80,
      trend: "increasing",
      description: "Fluctuating demand and pricing in the electric vehicle market"
    },
    {
      id: "currency-risk",
      name: "EUR/USD Exchange Risk",
      category: "financial",
      impact: 45,
      probability: 65,
      trend: "decreasing",
      description: "Currency fluctuations affecting international operations"
    }
  ],

  strategies: [
    {
      id: "diversify-supply",
      title: "Diversify Lithium Sourcing",
      description: "Expand supplier base to Chile and Australia",
      riskReduction: 30,
      cost: 150000000,
      timeline: "6 months",
      category: "supply-chain",
      status: "recommended"
    },
    {
      id: "battery-recycling",
      title: "Battery Recycling Investment",
      description: "Develop in-house battery recycling capabilities",
      riskReduction: 25,
      cost: 200000000,
      timeline: "18 months",
      category: "technology",
      status: "high-impact"
    },
    {
      id: "india-expansion",
      title: "India Market Entry",
      description: "Accelerate expansion into Indian EV market",
      riskReduction: 20,
      cost: 300000000,
      timeline: "12 months",
      category: "market",
      status: "opportunity"
    }
  ],

  liveFeeds: [
    {
      type: "news",
      title: "Reuters Business",
      items: [
        "Chile announces $2B lithium mining expansion",
        "EU Parliament votes on stricter EV battery standards",
        "Tesla reports Q3 production delays due to chip shortage"
      ]
    },
    {
      type: "market",
      title: "Financial Data",
      items: [
        "Lithium carbonate price +14% (30 days)",
        "EV sector volatility index at 23.4",
        "EUR/USD exchange rate: 1.0847 (-0.3%)"
      ]
    },
    {
      type: "sentiment",
      title: "Social Media",
      items: [
        '"Carbon tax unfair" trending in EU social media',
        "EV adoption sentiment positive in Asia-Pacific",
        "Environmental groups support stricter regulations"
      ]
    },
    {
      type: "regulatory",
      title: "Policy Updates",
      items: [
        "EU Commission proposes battery passport system",
        "India announces EV subsidy extension until 2025",
        "US considers rare earth mining incentives"
      ]
    }
  ]
};

export const companyProfiles = {
  globalauto: {
    name: "GlobalAuto Inc.",
    sector: "EV Manufacturing",
    focus: "European Expansion",
    headquarters: "Munich, Germany",
    employees: 45000,
    revenue: "€12.8B (2023)",
    marketCap: "€28.5B",
    keyMetrics: {
      evSales: 285000,
      marketShare: "8.2%",
      productionCapacity: 350000,
      rndSpending: "€1.2B"
    }
  },
  tesla: {
    name: "Tesla Inc.",
    sector: "EV Manufacturing",
    focus: "Global Market Leader",
    headquarters: "Austin, Texas",
    employees: 140000,
    revenue: "$96.8B (2023)",
    marketCap: "$800B",
    keyMetrics: {
      evSales: 1808000,
      marketShare: "20.1%",
      productionCapacity: 2000000,
      rndSpending: "$3.1B"
    }
  }
};

export const marketData = {
  regions: [
    {
      name: "Europe",
      evAdoption: 12.1,
      growthRate: 8.5,
      regulations: "Strict",
      keyPlayers: ["Volkswagen", "BMW", "Mercedes"],
      opportunities: ["Carbon neutrality goals", "Government incentives"],
      risks: ["Regulatory complexity", "Supply chain dependencies"]
    },
    {
      name: "Asia-Pacific",
      evAdoption: 15.8,
      growthRate: 12.3,
      regulations: "Moderate",
      keyPlayers: ["BYD", "NIO", "Tesla"],
      opportunities: ["Large market size", "Manufacturing capabilities"],
      risks: ["Trade tensions", "Raw material access"]
    },
    {
      name: "North America",
      evAdoption: 7.2,
      growthRate: 6.8,
      regulations: "Moderate",
      keyPlayers: ["Tesla", "GM", "Ford"],
      opportunities: ["Infrastructure investment", "Consumer adoption"],
      risks: ["Political uncertainty", "Infrastructure gaps"]
    }
  ]
};
