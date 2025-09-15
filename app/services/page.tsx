import ServiceCard from '@/components/ServiceCard'

export default function Services() {
  const services = [
    { title: 'CCTV Installation', desc: 'HD cameras, analytics, DVR/NVR integration.' },
    { title: 'Electric Fence', desc: 'Perimeter security with safety compliance.' },
    { title: 'POS Systems', desc: 'POS hardware/software with payment & inventory integrations.' },
    { title: 'Web Development', desc: 'Responsive websites, e-commerce, and web apps.' },
    { title: 'IP Phones & Intercoms', desc: 'VoIP and intercom systems for offices & hotels.' },
    { title: 'Fire Alarms', desc: 'Detection systems and emergency compliance.' },
    { title: 'Network Design', desc: 'LAN/WAN, secure connectivity, Wi-Fi surveys.' },
    { title: 'IT Consultancy', desc: 'Audits, backup, disaster recovery, managed services.' },
  ]
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <ServiceCard key={i} title={s.title} desc={s.desc} />
        ))}
      </div>
    </div>
  )
}
