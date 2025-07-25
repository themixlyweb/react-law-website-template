import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Shield, Gavel, Users, Award, Clock } from "lucide-react";
import HeroBG from "../img//hero-bg.webp";
import WhoWeAreImg from "../img/lawyer-judge-counselor-having-team-meeting-with-client-law-legal-services.webp";

const Home = () => {
  const practiceAreas = [
    {
      icon: Scale,
      title: "Family Law",
      description:
        "Divorce, custody, adoption, and family legal matters handled with care and expertise.",
      link: "/services/family-law",
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description:
        "Aggressive defense for criminal charges with a proven track record of success.",
      link: "/services/criminal-defense",
    },
    {
      icon: Gavel,
      title: "Business Law",
      description:
        "Corporate legal services, contracts, and business formation guidance.",
      link: "/services/business-law",
    },
  ];

  const stats = [
    { icon: Users, number: "500+", label: "Cases Won" },
    { icon: Award, number: "25+", label: "Years Experience" },
    { icon: Clock, number: "24/7", label: "Emergency Support" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 1) 19%, rgba(27, 7, 56, 1) 65%, rgba(254, 188, 56, 1) 100%)",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${HeroBG})`,
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fade-in">
            Justice. <span className="text-law-gold">Integrity.</span> Results.
          </h1>
          <p className="text-l mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            LawEdge provides premier legal counsel with unwavering dedication to
            achieving the best outcomes for our clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="bg-law-gold hover:bg-law-gold/90 text-royal-blue font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200 hover:shadow-xl "
            >
              Schedule Free Consultation
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white bg-transparent hover:bg-white hover:text-[#1B0738] font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-200"
            >
              <Link to="#">Know More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{ backgroundColor: "#D4AE36" }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100} // optional staggered delay
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-royal-blue rounded-full flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-law-gold" />
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-royal-blue mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-4xl font-serif font-bold text-royal-blue">
                Who We Are
              </h2>
              <p className="text-l text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p className="text-l text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button
                size="lg"
                className="bg-law-gold hover:bg-law-gold/90 text-royal-blue font-semibold px-8 py-4"
              >
                Schedule a Consultation
              </Button>
            </div>
            <div className="relative">
              <img
                src={WhoWeAreImg}
                alt="Who We Are | LawEdge"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-royal-blue/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-4xl font-serif font-bold text-royal-blue mb-6">
              Our Practice Areas
            </h2>
            <p className="text-l text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive legal services across multiple practice
              areas, delivering expert counsel tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-royal-blue rounded-full flex items-center justify-center group-hover:bg-law-gold transition-colors duration-300">
                      <area.icon className="w-10 h-10 text-law-gold group-hover:text-royal-blue transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-royal-blue mb-4">
                    {area.title}
                  </h3>
                  <p className="text-l text-gray-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-royal-blue hover:bg-royal-blue/90 text-white font-semibold px-8 py-4"
            >
              <Link to="#">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
