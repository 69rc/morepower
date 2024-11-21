import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Battery, Zap, Users, Globe } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 to-orange-600">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">PowerPulse</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Powering Your World, Anywhere</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At PowerPulse, we're dedicated to keeping you connected and charged, no matter where life takes you.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide reliable, innovative, and eco-friendly power solutions that empower people to stay connected and productive in an increasingly mobile world.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-lg rounded-lg overflow-hidden">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                A world where energy limitations never hold back human potential, creativity, or connection.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Why Choose PowerPulse?</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Battery, title: "Long-lasting", description: "Our power banks offer industry-leading capacity and longevity." },
              { icon: Zap, title: "Fast Charging", description: "Cutting-edge technology for rapid device charging." },
              { icon: Users, title: "Customer-First", description: "Dedicated support and satisfaction guarantee." },
              { icon: Globe, title: "Eco-Friendly", description: "Committed to sustainable practices and materials." },
            ].map((item, index) => (
              <Card key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <CardContent className="p-6 text-center">
                  <item.icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join the PowerPulse Community</h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay charged, stay connected, and never miss a moment. Experience the PowerPulse difference today.
          </p>
          <Button
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Shop Now
          </Button>
        </section>
      </main>
    </div>
  );
}
