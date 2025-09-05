"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RippleNetwork from "@/components/RippleNetwork";
import LiveMonitor from "@/components/LiveMonitor";
import SimulationEngine from "@/components/SimulationEngine";

// Mock data for the dashboard
const mockData = {
  riskIndex: 72,
  scenario: "EU Carbon Tax + Rare Earth Shortage",
  stakeholders: {
    suppliers: "China, Chile",
    governments: "EU, US, India",
    competitors: "Tesla, BYD",
    markets: "Europe, US"
  },
  financialImpact: {
    expectedLoss: -2.4,
    potentialGain: 900
  },
  rippleNetwork: [
    { id: "carbon-tax", label: "EU Carbon Tax", type: "risk", x: 200, y: 150 },
    { id: "globalauto", label: "GlobalAuto", type: "company", x: 400, y: 250 },
    { id: "supply-chain", label: "Supply Chain", type: "warning", x: 600, y: 200 },
    { id: "india-opportunity", label: "India Opportunity", type: "opportunity", x: 400, y: 350 }
  ],
  predictiveChain: [
    { step: 1, title: "EU Carbon Tax Implementation", description: "EV battery cost rises 20%", color: "red" },
    { step: 2, title: "Demand Reduction", description: "EU customer demand falls 12%", color: "orange" },
    { step: 3, title: "Competitor Shift", description: "Tesla, BYD focus on Asia markets", color: "blue" },
    { step: 4, title: "Emerging Opportunity", description: "India & Africa show +7% EV adoption", color: "green" }
  ],
  strategies: [
    {
      type: "Primary Strategy",
      title: "Diversify lithium sourcing to Chile & Australia",
      details: "Risk reduction: 30% • Timeline: 6 months",
      status: "RECOMMENDED",
      color: "green"
    },
    {
      type: "Alternative Strategy",
      title: "Invest in battery recycling technology",
      details: "Dependency reduction: 30% • ROI: 18 months",
      status: "HIGH IMPACT",
      color: "blue"
    },
    {
      type: "Market Strategy",
      title: "Enter Indian EV market immediately",
      details: "Government subsidies • Low competition",
      status: "OPPORTUNITY",
      color: "purple"
    }
  ],
  decisionComparison: [
    {
      title: "Do Nothing",
      revenueImpact: -12,
      riskIndex: 72,
      marketShare: -5,
      status: "NOT RECOMMENDED",
      color: "red"
    },
    {
      title: "Diversify Supply",
      revenueImpact: 4,
      riskIndex: 50,
      marketShare: "Stable",
      status: "RECOMMENDED",
      color: "yellow"
    },
    {
      title: "Recycling + India",
      revenueImpact: 9,
      riskIndex: 42,
      marketShare: 6,
      status: "OPTIMAL STRATEGY",
      color: "green"
    }
  ],
  liveMonitoring: [
    {
      title: "Social Sentiment",
      content: '"Carbon tax unfair" trending in EU',
      timestamp: "Updated 2 min ago",
      type: "sentiment"
    },
    {
      title: "Market Data",
      content: "Lithium spot price +14% (30 days)",
      timestamp: "Live feed",
      type: "market"
    },
    {
      title: "News Scraping",
      content: "Chile investing in lithium expansion",
      timestamp: "Reuters • 1 hour ago",
      type: "news"
    },
    {
      title: "Regulatory Tracker",
      content: "EU vote on stricter EV regulations pending",
      timestamp: "Expected: Q2 2024",
      type: "regulatory"
    }
  ]
};

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-800/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-xl">
                S
              </div>
              <div>
                <h1 className="text-2xl font-bold">Simulux Dashboard</h1>
                <p className="text-slate-400 text-sm">Quantum-Inspired Multi-Agent Ripple Model</p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-xl font-semibold">GlobalAuto Inc.</h2>
              <p className="text-slate-400 text-sm">EV Manufacturing • European Expansion</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Simulation Overview */}
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Simulation Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Active Scenario */}
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-6 rounded-lg border border-red-800/30">
                <h3 className="text-red-400 font-semibold mb-2">Active Scenario</h3>
                <p className="text-white font-medium">{mockData.scenario}</p>
                <div className="mt-4">
                  <h4 className="text-white font-semibold mb-2">Risk Index</h4>
                  <div className="flex items-center space-x-3">
                    <Progress value={mockData.riskIndex} className="flex-1 h-3" />
                    <span className="text-red-400 font-bold text-xl">{mockData.riskIndex}/100</span>
                  </div>
                </div>
              </div>

              {/* Key Stakeholders */}
              <div>
                <h3 className="text-white font-semibold mb-4">Key Stakeholders</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Suppliers:</span>
                    <span className="text-white">{mockData.stakeholders.suppliers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Governments:</span>
                    <span className="text-white">{mockData.stakeholders.governments}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Competitors:</span>
                    <span className="text-white">{mockData.stakeholders.competitors}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Markets:</span>
                    <span className="text-white">{mockData.stakeholders.markets}</span>
                  </div>
                </div>
              </div>

              {/* Financial Impact */}
              <div>
                <h3 className="text-white font-semibold mb-4">Financial Impact</h3>
                <div className="space-y-4">
                  <div className="bg-red-900/30 p-4 rounded-lg border border-red-800/30">
                    <p className="text-red-400 text-sm">Expected Loss (No Action)</p>
                    <p className="text-red-400 font-bold text-2xl">-${Math.abs(mockData.financialImpact.expectedLoss)}B</p>
                  </div>
                  <div className="bg-green-900/30 p-4 rounded-lg border border-green-800/30">
                    <p className="text-green-400 text-sm">Potential Gain (Strategy)</p>
                    <p className="text-green-400 font-bold text-2xl">+${mockData.financialImpact.potentialGain}M</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Dashboard Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="simulation">Simulation</TabsTrigger>
            <TabsTrigger value="network">Network</TabsTrigger>
            <TabsTrigger value="monitoring">Live Monitor</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            {/* Ripple Effect Network */}
            <RippleNetwork />

            {/* 4-Step Predictive Chain */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span>4-Step Predictive Chain</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockData.predictiveChain.map((step) => (
                    <div
                      key={step.step}
                      className={`p-4 rounded-lg border-l-4 ${
                        step.color === 'red' ? 'bg-red-900/20 border-red-500' :
                        step.color === 'orange' ? 'bg-orange-900/20 border-orange-500' :
                        step.color === 'blue' ? 'bg-blue-900/20 border-blue-500' :
                        'bg-green-900/20 border-green-500'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          step.color === 'red' ? 'bg-red-500' :
                          step.color === 'orange' ? 'bg-orange-500' :
                          step.color === 'blue' ? 'bg-blue-500' :
                          'bg-green-500'
                        }`}>
                          {step.step}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{step.title}</h4>
                          <p className="text-slate-400">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* AI Strategic Recommendations */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>AI Strategic Recommendations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockData.strategies.map((strategy, index) => (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border ${
                        strategy.color === 'green' ? 'bg-green-900/20 border-green-800/30' :
                        strategy.color === 'blue' ? 'bg-blue-900/20 border-blue-800/30' :
                        'bg-purple-900/20 border-purple-800/30'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className={`font-semibold ${
                          strategy.color === 'green' ? 'text-green-400' :
                          strategy.color === 'blue' ? 'text-blue-400' :
                          'text-purple-400'
                        }`}>
                          {strategy.type}
                        </h4>
                        <Badge variant={strategy.color === 'green' ? 'default' : 'secondary'}>
                          {strategy.status}
                        </Badge>
                      </div>
                      <h5 className="font-medium text-white mb-1">{strategy.title}</h5>
                      <p className="text-slate-400 text-sm">{strategy.details}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Decision Simulation Comparison */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Decision Simulation Comparison</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {mockData.decisionComparison.map((decision, index) => (
                    <div
                      key={index}
                      className={`p-6 rounded-lg border ${
                        decision.color === 'red' ? 'bg-red-900/20 border-red-800/30' :
                        decision.color === 'yellow' ? 'bg-yellow-900/20 border-yellow-800/30' :
                        'bg-green-900/20 border-green-800/30'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-white">{decision.title}</h4>
                        {decision.color === 'red' && <span className="text-red-400 text-2xl">✕</span>}
                        {decision.color === 'yellow' && <span className="text-yellow-400 text-2xl">✓</span>}
                        {decision.color === 'green' && <span className="text-yellow-400 text-2xl">⭐</span>}
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Revenue Impact:</span>
                          <span className={`font-semibold ${
                            decision.revenueImpact > 0 ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {decision.revenueImpact > 0 ? '+' : ''}{decision.revenueImpact}%
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Risk Index:</span>
                          <span className="text-white font-semibold">{decision.riskIndex}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Market Share:</span>
                          <span className={`font-semibold ${
                            typeof decision.marketShare === 'number' 
                              ? decision.marketShare > 0 ? 'text-green-400' : 'text-red-400'
                              : 'text-slate-300'
                          }`}>
                            {typeof decision.marketShare === 'number' 
                              ? `${decision.marketShare > 0 ? '+' : ''}${decision.marketShare}%`
                              : decision.marketShare
                            }
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <Badge 
                          variant={decision.color === 'green' ? 'default' : 'secondary'}
                          className={`w-full justify-center ${
                            decision.color === 'red' ? 'bg-red-900 text-red-200' :
                            decision.color === 'yellow' ? 'bg-yellow-900 text-yellow-200' :
                            'bg-green-900 text-green-200'
                          }`}
                        >
                          {decision.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-red-900/30 to-red-800/20 border-red-800/30">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-1">72</div>
                    <div className="text-red-300 text-sm">Risk Index</div>
                    <div className="text-xs text-red-400/70 mt-1">↗️ +5 from yesterday</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border-orange-800/30">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-400 mb-1">$2.4B</div>
                    <div className="text-orange-300 text-sm">Potential Loss</div>
                    <div className="text-xs text-orange-400/70 mt-1">Without intervention</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-900/30 to-green-800/20 border-green-800/30">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-1">$900M</div>
                    <div className="text-green-300 text-sm">Opportunity Value</div>
                    <div className="text-xs text-green-400/70 mt-1">India market entry</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-800/30">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-1">87%</div>
                    <div className="text-blue-300 text-sm">Confidence</div>
                    <div className="text-xs text-blue-400/70 mt-1">Model accuracy</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="simulation">
            <SimulationEngine />
          </TabsContent>
          
          <TabsContent value="network">
            <RippleNetwork />
          </TabsContent>
          
          <TabsContent value="monitoring">
            <LiveMonitor />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
