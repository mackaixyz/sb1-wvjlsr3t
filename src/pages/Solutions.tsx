import React from 'react';
import { Link } from 'react-router-dom';
import {
  Factory,
  LineChart,
  ShoppingBag,
  Heart,
  Share2,
  BarChart3,
  BrainCircuit,
  Clock,
  ArrowRight
} from 'lucide-react';

export function Solutions() {
  const industries = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Automate production pipelines with precision and reduce operational costs.",
      features: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization"]
    },
    {
      icon: LineChart,
      title: "Finance",
      description: "Streamline risk analysis and ensure compliance with automated monitoring.",
      features: ["Risk Assessment", "Fraud Detection", "Automated Reporting"]
    },
    {
      icon: ShoppingBag,
      title: "Retail",
      description: "Optimize inventory and enhance customer engagement with AI-driven insights.",
      features: ["Inventory Management", "Customer Analytics", "Price Optimization"]
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Enhance diagnostics and streamline patient management workflows.",
      features: ["Patient Monitoring", "Resource Allocation", "Treatment Planning"]
    },
    {
      icon: Share2,
      title: "Social Media",
      description: "Automate posting and engagement farming for 24/7 social presence.",
      features: ["Content Scheduling", "Engagement Analytics", "Audience Insights"]
    }
  ];

  const features = [
    {
      icon: BarChart3,
      title: "Dynamic AI Dashboards",
      description: "Real-time insights and analytics at your fingertips."
    },
    {
      icon: BrainCircuit,
      title: "Process Optimization",
      description: "AI-driven workflows that save time and reduce costs."
    },
    {
      icon: Clock,
      title: "24/7 Operation",
      description: "Continuous automation that never sleeps."
    }
  ];

  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.2),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Solutions for Every
              <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Industry
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Tailored AI solutions that adapt to your unique business challenges and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.08] hover:border-purple-500/50 transition-colors"
              >
                <div className="p-3 rounded-2xl bg-purple-500/20 w-fit mb-6">
                  <industry.icon className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{industry.title}</h3>
                <p className="text-gray-400 mb-6">{industry.description}</p>
                <ul className="space-y-2">
                  {industry.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1 h-1 rounded-full bg-purple-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Features</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Powerful tools and features designed to maximize efficiency and drive results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div key={i} className="text-center">
                <div className="p-4 rounded-2xl bg-purple-500/20 w-fit mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Transform your business with AI-powered automation. Schedule a demo to see how we can help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-full transition-colors"
            >
              Schedule a Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}