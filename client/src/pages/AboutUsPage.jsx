import { ShieldCheck, Leaf, Heart, Users } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] w-full bg-brand-walnut overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="Craftsmanship" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative text-center text-white max-w-3xl px-4 z-10">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Our Story</h1>
          <p className="text-xl opacity-90 leading-relaxed font-sans">
            Redefining modern Indian living through thoughtful design, sustainable practices, and uncompromising quality.
          </p>
        </div>
      </section>

      {/* The Journey */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="font-serif text-4xl font-bold text-brand-walnut mb-6">Born from a simple idea</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2023, MAJIN FURNITURES started with a simple observation: finding high-quality, beautifully designed furniture that truly suits the modern Indian home was incredibly difficult.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Most options were either prohibitively expensive imported brands or cheaply made local alternatives that lacked design sensitivity. We decided to bridge this gap.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We brought together master craftsmen from Rajasthan, modern designers from Bangalore, and sustainable materials to create furniture that doesn't just fill a space, but elevates it.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Design Studio" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-brand-beige p-8 rounded-xl shadow-lg hidden md:block">
                <p className="font-serif text-2xl font-bold text-brand-walnut mb-1">10,000+</p>
                <p className="text-brand-terracotta font-medium">Homes Furnished</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 bg-brand-ivory border-y border-brand-beige">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="font-serif text-4xl font-bold text-brand-walnut mb-4">Our Philosophy</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">
            We believe that good design should be accessible, durable, and bring joy to your everyday life.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-brand-terracotta shadow-sm mb-6">
                <Heart size={36} />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-walnut mb-3">Designed for India</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our furniture accounts for Indian weather conditions, space constraints, and cultural living habits. Every curve and joint is intentional.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-brand-terracotta shadow-sm mb-6">
                <ShieldCheck size={36} />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-walnut mb-3">Uncompromising Quality</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From kiln-dried solid woods to high-density foams and premium fabrics, we use materials meant to last generations, not just seasons.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-brand-terracotta shadow-sm mb-6">
                <Leaf size={36} />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-walnut mb-3">Sustainable Choices</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We source our wood from sustainably managed forests and use non-toxic, lead-free finishes to protect your home and the environment.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-brand-terracotta shadow-sm mb-6">
                <Users size={36} />
              </div>
              <h3 className="font-serif text-xl font-bold text-brand-walnut mb-3">Customer First</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From free delivery and easy assembly to responsive post-purchase support, your experience is our absolute priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="font-serif text-4xl font-bold text-brand-walnut mb-6">Join the Family</h2>
          <p className="text-xl text-gray-600 mb-10">
            We are always looking for passionate designers, craftsmen, and customer champions to join our mission of building better homes.
          </p>
          <button className="bg-brand-walnut hover:bg-brand-walnut/90 text-white px-8 py-4 rounded-md font-medium transition-colors">
            View Career Opportunities
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
