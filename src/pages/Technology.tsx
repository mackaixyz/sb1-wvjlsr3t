import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  MessageSquare,
  Eye,
  Bot,
  Shield,
  Zap,
  Cloud,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

export function Technology() {
  const technologies = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Custom algorithms that optimize decision-making and improve over time.",
      features: [
        "Predictive Analytics",
        "Pattern Recognition",
        "Automated Learning"
      ]
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "AI tools for enhanced communication and customer interaction.",
      features: [
        "Sentiment Analysis",
        "Text Classification",
        "Language Understanding"
      ]
    },
    {
      icon: Eye,
      title: "Computer Vision",
      description: "Advanced imaging technology for object recognition and analysis.",
      features: [
        "Object Detection",
        "Image Classification",
        "Visual Search"
      ]
    },
    {
      icon: Bot,
      title: "AI-Powered Automation",
      description: "Intelligent bots that handle complex tasks autonomously.",
      features: [
        "Process Automation",
        "Task Scheduling",
        "Workflow Optimization"
      ]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with GDPR and SOC 2 compliance.",
      points: ["End-to-end encryption", "Regular security audits", "Data privacy controls"]
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Low latency algorithms designed for scalability.",
      points: ["99.9% uptime", "Sub-second response", "Horizontal scaling"]
    },
    {
      icon: Cloud,
      title: "Cloud Integration",
      description: "Seamless integration with major cloud providers.",
      points: ["AWS", "Azure", "Google Cloud"]
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
              Powered by Advanced
              <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                AI Technology
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Cutting-edge artificial intelligence solutions designed for enterprise scalability and performance.
            </p>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technologies.map((tech, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.08] hover:border-purple-500/50 transition-colors"
              >
                <div className="p-3 rounded-2xl bg-purple-500/20 w-fit mb-6">
                  <tech.icon className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{tech.title}</h3>
                <p className="text-gray-400 mb-6">{tech.description}</p>
                <ul className="space-y-3">
                  {tech.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-400">
                      <CheckCircle2 className="w-5 h-5 text-purple-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.08]"
              >
                <div className="p-3 rounded-2xl bg-purple-500/20 w-fit mb-6">
                  <feature.icon className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.points.map((point, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-400">
                      <div className="w-1 h-1 rounded-full bg-purple-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Experience the Power of AI</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              See how our technology can transform your business operations and drive growth.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-full transition-colors"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}