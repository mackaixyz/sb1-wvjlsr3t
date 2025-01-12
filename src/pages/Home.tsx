import React from 'react';
import { Link } from 'react-router-dom';
import {
  SparklesIcon,
  RocketIcon,
  ArrowRightIcon,
  CircuitBoardIcon,
  BoxesIcon,
  FlaskConicalIcon,
  ShieldCheckIcon,
  CodeIcon,
  HeartHandshakeIcon
} from 'lucide-react';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.2),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Productivity that{' '}
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                never sleeps
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Empowering businesses with AI-driven solutions tailored for precision and scalability.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/solutions" className="px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-full transition-colors flex items-center gap-2">
                Learn More <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="px-8 py-4 border border-purple-500/50 hover:bg-purple-500/10 rounded-full transition-colors">
                Schedule Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CircuitBoardIcon,
                title: "Smart Workflow Automation",
                description: "Automate repetitive tasks with intelligent workflows that learn and adapt.",
                metric: "10x Faster"
              },
              {
                icon: BoxesIcon,
                title: "Predictive Insights",
                description: "Harness the power of AI to predict trends and outcomes with precision.",
                metric: "24/7 Operation"
              },
              {
                icon: FlaskConicalIcon,
                title: "Custom AI Solutions",
                description: "Tailored automation systems designed for your unique business needs.",
                metric: "99.9% Accuracy"
              },
              {
                icon: ShieldCheckIcon,
                title: "Enterprise Security",
                description: "Bank-grade encryption and security protocols to protect your data.",
                metric: "SOC 2 Certified"
              },
              {
                icon: CodeIcon,
                title: "Easy Integration",
                description: "Seamlessly integrate with your existing tools and workflows.",
                metric: "15min Setup"
              },
              {
                icon: HeartHandshakeIcon,
                title: "24/7 Support",
                description: "Expert support team available around the clock to help you succeed.",
                metric: "< 1hr Response"
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.08] hover:border-purple-500/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                    <feature.icon className="w-6 h-6 text-purple-500" />
                  </div>
                  <span className="text-sm font-medium text-purple-500 bg-purple-500/20 px-3 py-1 rounded-full">
                    {feature.metric}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(139,92,246,0.2),transparent)]" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center max-w-2xl mx-auto">
            <SparklesIcon className="w-12 h-12 text-purple-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-gray-400 mb-8">
              Join hundreds of companies already using mack.ai to revolutionize their workflows.
            </p>
            <Link to="/contact" className="px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-full transition-colors inline-flex items-center gap-2">
              Get Started Now <RocketIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}