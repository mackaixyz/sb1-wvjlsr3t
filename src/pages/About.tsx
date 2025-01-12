import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Users,
  ArrowRight,
  Rocket,
  LineChart,
  Shield
} from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Rocket,
      title: "Innovation",
      description: "Pushing the boundaries of what's possible with AI technology."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with clients to deliver tailored solutions."
    },
    {
      icon: LineChart,
      title: "Excellence",
      description: "Committed to delivering the highest quality solutions."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Building lasting relationships through reliability and transparency."
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
              Revolutionizing Business
              <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Through AI
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              At mack.ai, we are committed to revolutionizing the way businesses operate by harnessing the power of AI to drive efficiency and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="p-4 rounded-2xl bg-purple-500/20 w-fit mb-6">
                <Target className="w-8 h-8 text-purple-500" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                We believe in the transformative power of artificial intelligence to solve complex business challenges. Our mission is to make AI technology accessible and practical for businesses of all sizes, enabling them to automate processes, gain insights, and achieve unprecedented levels of efficiency.
              </p>
            </div>
            <div className="flex-1">
              <div className="aspect-square rounded-3xl bg-gradient-to-tr from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <div className="w-24 h-24 relative">
                  <Target className="w-full h-full text-purple-500" />
                  <div className="absolute inset-0 bg-purple-500 blur-3xl opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The principles that guide us in delivering exceptional AI solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="text-center">
                <div className="p-4 rounded-2xl bg-purple-500/20 w-fit mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="rounded-3xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Be part of the AI revolution. Let's build the future of business automation together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 hover:bg-purple-600 rounded-full transition-colors"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}