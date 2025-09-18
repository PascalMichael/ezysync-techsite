import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <section>
        <h2 className="text-2xl font-bold mb-4">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <ServiceCard title="CCTV Installation" desc="High-definition security cameras and monitoring."/>
          <ServiceCard title="Point of Sale (POS)" desc="POS systems for restaurants and retail."/>
          <ServiceCard title="Network Design" desc="LAN/WAN, Wi‑Fi surveys and secure connectivity."/>
        </div>
      </section>
    </div>
  )
}
