import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* HERO */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Toilet Cubicle Malaysia Supplier & Installation
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Durable compact laminate & HPL toilet cubicle systems for offices, schools, malls, factories & public facilities across Malaysia.
        </p>
        <Button className="text-lg px-6 py-6">
          WhatsApp Now: 016-220 0178
        </Button>
      </section>

      {/* ABOUT */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Trusted Toilet Cubicle Specialist</h2>
        <p className="text-gray-600 leading-relaxed">
          Colorful Cubicle Sdn Bhd is a professional toilet cubicle contractor in Malaysia.
          We provide full design, supply, and installation services with experienced teams,
          reliable project coordination, and after-sales support nationwide.
        </p>
      </section>

      {/* PRICING */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Basic Cubicles</h3>
              <p className="text-lg font-semibold mb-2">From RM480 / door</p>
              <ul className="text-gray-600 space-y-1">
                <li>Compact laminate panels</li>
                <li>Standard stainless steel hardware</li>
                <li>Moisture resistant</li>
                <li>Easy maintenance</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold mb-2">Premium Cubicles</h3>
              <p className="text-lg font-semibold mb-2">From RM680 / door</p>
              <ul className="text-gray-600 space-y-1">
                <li>HPL moisture resistant panels</li>
                <li>Aluminium profile system</li>
                <li>Soft-close hardware</li>
                <li>Custom colors & design</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Client Reviews</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <p className="italic">
                “Our office washrooms look modern and clean. Installation was fast and smooth.”
              </p>
              <p className="mt-2 font-semibold">– Office Client</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <p className="italic">
                “Durable cubicles for heavy school use. Delivered on time and within budget.”
              </p>
              <p className="mt-2 font-semibold">– School Project</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Fast Quotation Today</h2>
        <p className="mb-6">Send us your drawings or site details. We reply within 24 hours.</p>
        <Button className="text-lg px-6 py-6">
          WhatsApp 016-220 0178
        </Button>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 text-center text-sm text-gray-500">
        <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
          <span className="flex items-center gap-2"><Phone size={16}/> 016-220 0178</span>
          <span className="flex items-center gap-2"><Mail size={16}/> info@colorfulcubicle.com</span>
          <span className="flex items-center gap-2"><MapPin size={16}/> Malaysia Nationwide</span>
        </div>
        <p className="mt-4">© Colorful Cubicle Sdn Bhd</p>
      </footer>
    </div>
  );
}
