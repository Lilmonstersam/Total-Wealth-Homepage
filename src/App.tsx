import { motion } from 'motion/react';
import { Award, ShieldCheck, CheckCircle2, ChevronRight, Star, Quote, ArrowRight, Phone, Mail, MapPin, Building2, Briefcase, Scale, Calculator, TrendingUp, Umbrella, Sunset, Landmark, Files } from 'lucide-react';

export default function App() {
  const services = [
    { title: "Wealth Accumulation", url: "https://totalwealth.com.au/wealth-accumulation/", icon: TrendingUp },
    { title: "Personal Risk Insurance", url: "https://totalwealth.com.au/personal-risk-insurance/", icon: Umbrella },
    { title: "Tax Minimisation & Planning", url: "https://totalwealth.com.au/tax-minimisation-strategies-tax-planning/", icon: Calculator },
    { title: "Pre-Retirement & Retirement Planning", url: "https://totalwealth.com.au/pre-retirement-retirement-planning/", icon: Sunset },
    { title: "Superannuation Advice", url: "https://totalwealth.com.au/superannuation-advice/", icon: Landmark },
    { title: "Centrelink Maximisation Strategies", url: "https://totalwealth.com.au/centrelink-maximisation-strategies/", icon: Files }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-ice">
      {/* Top Contact Bar */}
      <div className="bg-brand-navy text-white py-2 px-6 flex justify-between items-center text-xs font-semibold tracking-wider font-sans hidden sm:flex">
        <div className="flex gap-6">
          <span className="flex items-center gap-2"><Phone size={14} className="text-brand-primary" /> 07 3281 1226</span>
          <span className="flex items-center gap-2"><Mail size={14} className="text-brand-primary" /> info@totalwealth.com.au</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-brand-primary" /> Ipswich, QLD
        </div>
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex-shrink-0">
            <img 
              src="https://totalwealth.com.au/wp-content/uploads/2017/06/logo-300x78-c.png" 
              alt="Total Wealth Logo" 
              className="h-10 w-auto"
              referrerPolicy="no-referrer"
            />
          </a>
          
          <nav className="hidden md:flex gap-8 items-center text-[13px] font-semibold text-brand-navy uppercase tracking-widest">
            <a href="#" className="hover:text-brand-primary transition-colors">Our Services</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Our Advisers</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Advice Process</a>
            <a href="#" className="hover:text-brand-primary transition-colors">FAQs</a>
          </nav>

          <a href="#enquiry" className="bg-brand-primary hover:bg-brand-navy hover:text-white text-white px-[24px] py-[12px] rounded-sm text-[14px] font-bold uppercase tracking-[1px] transition-all shadow-sm shadow-brand-primary/20 hidden sm:block">
            Book Free Meeting
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://totalwealth.com.au/wp-content/uploads/2022/06/main-banner-dim.jpg" 
            alt="Total Wealth Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand-navy/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="col-span-1 max-w-2xl text-white"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/20 backdrop-blur-sm text-white border border-white/30 text-xs font-bold tracking-wide uppercase mb-6">
              <ShieldCheck size={16} /> Independent & Commission-Free
            </div>
            <h1 className="text-5xl md:text-6xl font-serif text-white leading-[1.1] mb-6 drop-shadow-md">
              Wealth management built on <span className="text-brand-primary italic opacity-90 drop-shadow-sm">trust.</span>
            </h1>
            <p className="text-lg text-slate-100 mb-8 max-w-xl leading-relaxed drop-shadow-sm">
              We provide independent, fee-based financial advice in Ipswich. Free from structural conflicts, focused entirely on your future.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#enquiry" className="bg-brand-primary hover:bg-white hover:text-brand-navy text-white px-[24px] py-[12px] rounded-sm text-[14px] font-bold uppercase tracking-[1px] transition-all flex items-center gap-2 shadow-xl">
                Start Your Journey <ChevronRight size={18} />
              </a>
              <a href="tel:0732811226" className="bg-white/10 hover:bg-white hover:text-brand-navy text-white border border-white/30 px-[24px] py-[12px] rounded-sm text-[14px] font-bold uppercase tracking-[1px] transition-all flex items-center gap-2 backdrop-blur-sm shadow-xl">
                <Phone size={16} /> (07) 3281 1226
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-1 hidden lg:block"
          >
            <div className="bg-white p-8 rounded-sm shadow-2xl border border-white/20 relative ml-auto max-w-md text-brand-navy">
              <Quote size={40} className="text-brand-primary/10 absolute top-6 left-6" />
              <div className="flex text-brand-primary mb-4 relative z-10 pl-2">
                {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-700 mb-6 italic text-base leading-relaxed relative z-10 pl-2">
                "Joel and Emma are totally independent. They don't push products. I finally feel confident about my transition to retirement and superannuation strategy."
              </p>
              <div className="pl-2">
                <p className="font-bold text-brand-navy text-sm">David M.</p>
                <p className="text-xs text-slate-500">Pre-Retiree</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Partner Logos - Extremely Prominent */}
      <section className="bg-white py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold tracking-widest text-slate-400 uppercase mb-8">Recognised & Regulated By Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-20 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3 font-serif font-bold text-xl"><Building2 size={24} className="text-brand-primary" /> CIFA Member</div>
            <div className="flex items-center gap-3 font-serif font-bold text-xl"><Briefcase size={24} className="text-brand-primary" /> FPA Practice</div>
            <div className="flex items-center gap-3 font-serif font-bold text-xl"><Scale size={24} className="text-brand-primary" /> AFCA Member</div>
            <div className="flex items-center gap-3 font-serif font-bold text-xl"><Calculator size={24} className="text-brand-primary" /> Tax Practitioners Board</div>
          </div>
        </div>
      </section>
      
      {/* Services Carousel Area */}
      <section className="py-24 bg-brand-ice overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-navy mb-4">Our Financial Services</h2>
            <p className="text-slate-600">Comprehensive, independent advice tailored to your personal goals and stage of life.</p>
          </div>
          <a href="https://totalwealth.com.au/services/" className="inline-flex items-center gap-2 text-[13px] font-bold text-brand-primary uppercase tracking-widest hover:text-brand-navy transition-colors whitespace-nowrap">
            View All Services <ArrowRight size={16} />
          </a>
        </div>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbars">
            {services.map((service, idx) => (
              <a 
                href={service.url} 
                key={idx}
                className="flex-none w-[280px] md:w-[320px] bg-white p-8 rounded-sm shadow-sm border border-slate-200 hover:border-brand-primary/50 transition-colors snap-start group flex flex-col justify-between h-[280px]"
              >
                <div>
                  <div className="w-12 h-12 bg-slate-50 flex items-center justify-center rounded-sm text-brand-navy mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors">
                    <service.icon size={24} />
                  </div>
                  <h3 className="text-xl font-serif text-brand-navy font-bold leading-tight mb-3">
                    {service.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-brand-primary uppercase tracking-wide group-hover:text-brand-navy transition-colors mt-auto">
                  Learn more <ChevronRight size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* The Independence Difference */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/10 blur-3xl rounded-sm translate-x-1/3 -translate-y-1/4"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-serif mb-6">Why True Independence Matters.</h2>
              <p className="text-slate-300 mb-8 leading-relaxed max-w-lg">
                Many advisers are restricted in what they can recommend, or earn commissions on their advice. We operate under a strict fee-based model, meaning our only loyalty is to you and your goals.
              </p>
              
              <ul className="space-y-4 font-medium">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-primary mt-1 shrink-0" size={20} />
                  <span>No commissions or hidden Kickbacks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-primary mt-1 shrink-0" size={20} />
                  <span>We don't sell our own financial products</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-primary mt-1 shrink-0" size={20} />
                  <span>Transparent fee-for-service model</span>
                </li>
              </ul>
              
              <a href="#" className="inline-flex items-center gap-2 mt-10 text-brand-primary font-bold hover:text-white transition-colors uppercase tracking-wider text-sm">
                Learn About Our Process <ArrowRight size={16} />
              </a>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/office/800/600" 
                alt="Total Wealth Office" 
                className="rounded-sm border border-white/10 shadow-2xl grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -left-6 bg-brand-primary text-white p-6 rounded-sm shadow-xl max-w-[200px]">
                <p className="font-serif text-3xl font-bold mb-1">100%</p>
                <p className="text-sm font-medium">Conflict-Free Advice Guarantee.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Meet the Team */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-serif text-brand-navy mb-4">Meet the Team</h2>
              <p className="text-slate-600">The experienced professionals dedicated to growing and protecting your wealth.</p>
            </div>
            <a href="https://totalwealth.com.au/meet-the-team/" className="inline-flex items-center gap-2 text-[13px] font-bold text-brand-primary uppercase tracking-widest hover:text-brand-navy transition-colors">
              Read Full Bios <ArrowRight size={16} />
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm mb-6 bg-slate-100 aspect-[3/4]">
                <img 
                  src="https://totalwealth.com.au/wp-content/uploads/2026/03/Joel-Mullen-scaled-e1772738207862-762x1030.jpg" 
                  alt="Joel Mullen" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-serif text-brand-navy font-bold mb-1">Joel</h3>
              <p className="text-brand-primary font-bold text-sm tracking-widest uppercase">Principal & Senior Adviser</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-sm mb-6 bg-slate-100 aspect-[3/4]">
                <img 
                  src="https://totalwealth.com.au/wp-content/uploads/2018/04/Emma-n.jpg" 
                  alt="Emma" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-serif text-brand-navy font-bold mb-1">Emma</h3>
              <p className="text-brand-primary font-bold text-sm tracking-widest uppercase">Paraplanner</p>
            </div>
            
            <div className="flex flex-col justify-center items-center bg-brand-ice rounded-sm p-8 text-center border border-slate-200">
               <h3 className="text-2xl font-serif text-brand-navy mb-4">Join Our Practice</h3>
               <p className="text-slate-600 mb-6 text-sm leading-relaxed">We are always looking for dedicated professionals who share our commitment to independent advice.</p>
               <a href="#" className="text-[13px] font-bold text-brand-primary uppercase tracking-widest hover:text-brand-navy transition-colors border-b-2 border-brand-primary pb-1">View Opportunities</a>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-24 bg-brand-ice">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-navy mb-4">Don't just take our word for it.</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Discover why hundreds of families in Ipswich trust us with their financial future and retirement planning.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "A breath of fresh air in the financial industry. Clear, fee-based advice without any hidden commissions. We've been with them for 5 years now.", name: "Sarah & John T.", role: "Business Owners" },
              { text: "Total Wealth provided excellent objective advice for our family insurance. They took the time to explain everything without industry jargon.", name: "Michael R.", role: "Young Family" },
              { text: "The peace of mind I get knowing they have my best interest at heart is priceless. Highly recommended for comprehensive wealth advice.", name: "Eleanor P.", role: "Retiree" }
            ].map((testimonial, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-sm shadow-sm border border-slate-200 relative"
              >
                <Quote size={40} className="text-brand-primary/10 absolute top-6 left-6" />
                <div className="flex text-brand-primary mb-4 relative z-10 pl-2">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 mb-6 italic text-sm leading-relaxed relative z-10 pl-2">"{testimonial.text}"</p>
                <div className="pl-2">
                  <p className="font-bold text-brand-navy text-sm">{testimonial.name}</p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA / Enquiry Form */}
      <section id="enquiry" className="py-24 bg-brand-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/abstract/1920/1080?blur=10')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
               <h2 className="text-4xl md:text-5xl font-serif mb-6">Ready to secure your future?</h2>
               <p className="text-slate-300 text-lg mb-8 max-w-lg leading-relaxed">Book a free, no-obligation initial meeting with one of our independent advisers today and take control of your financial destiny.</p>
               <div className="flex items-center gap-6 mb-8 text-slate-300">
                 <div className="flex items-center gap-3"><Phone size={20} className="text-brand-primary" /> 07 3281 1226</div>
                 <div className="flex items-center gap-3"><Mail size={20} className="text-brand-primary" /> info@totalwealth.com.au</div>
               </div>
            </div>
            
            <div className="bg-white rounded-sm p-8 md:p-10 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary rounded-t-sm"></div>
              <h3 className="text-2xl font-serif text-brand-navy mb-8">Send an Enquiry</h3>
              <form className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block">Full Name</label>
                  <input type="text" id="name" className="w-full border-b border-slate-300 px-0 py-2 focus:outline-none focus:border-brand-primary bg-transparent transition-colors" placeholder="John Doe" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block">Email Address</label>
                    <input type="email" id="email" className="w-full border-b border-slate-300 px-0 py-2 focus:outline-none focus:border-brand-primary bg-transparent transition-colors" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block">Phone Number</label>
                    <input type="tel" id="phone" className="w-full border-b border-slate-300 px-0 py-2 focus:outline-none focus:border-brand-primary bg-transparent transition-colors" placeholder="0400 000 000" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-[11px] font-bold text-slate-500 uppercase tracking-widest block">How can we help?</label>
                  <select id="service" className="w-full border-b border-slate-300 px-0 py-2 focus:outline-none focus:border-brand-primary bg-transparent text-slate-700 appearance-none cursor-pointer transition-colors">
                    <option value="">Select a service category</option>
                    <option value="wealth">Wealth Accumulation</option>
                    <option value="retirement">Pre-Retirement & Retirement Planning</option>
                    <option value="super">Superannuation Advice</option>
                    <option value="insurance">Personal Risk Insurance</option>
                    <option value="tax">Tax Minimisation Strategies</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                <button type="button" className="w-full bg-brand-primary hover:bg-brand-navy text-white px-[24px] py-[16px] rounded-sm text-[14px] font-bold uppercase tracking-[1px] transition-colors mt-8">
                  Submit Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-ice py-12 text-sm border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <img 
              src="https://totalwealth.com.au/wp-content/uploads/2017/06/logo-300x78-c.png" 
              alt="Total Wealth Logo" 
              className="h-8 w-auto mb-6 grayscale opacity-80"
              referrerPolicy="no-referrer"
            />
            <p className="text-slate-500 leading-relaxed">
              Independent financial advisers dedicated to growing and protecting your wealth through trust and transparency.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-brand-navy mb-4 uppercase tracking-wider text-xs">Services</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-brand-primary">Superannuation</a></li>
              <li><a href="#" className="hover:text-brand-primary">Retirement Planning</a></li>
              <li><a href="#" className="hover:text-brand-primary">Investment Advice</a></li>
              <li><a href="#" className="hover:text-brand-primary">Personal Insurance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-brand-navy mb-4 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#" className="hover:text-brand-primary">About Us</a></li>
              <li><a href="#" className="hover:text-brand-primary">Our Advisers</a></li>
              <li><a href="#" className="hover:text-brand-primary">Financial Services Guide</a></li>
              <li><a href="#" className="hover:text-brand-primary">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-brand-navy mb-4 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-2 text-slate-600">
              <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-slate-400" /> 123 Limestone St, Ipswich QLD</li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-slate-400" /> 07 3281 1226</li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-slate-400" /> info@totalwealth.com.au</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-slate-200 text-slate-400 text-xs text-center uppercase tracking-widest font-semibold">
          &copy; {new Date().getFullYear()} Total Wealth Management. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
