import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-400 to-yellow-200 rounded-2xl p-10 text-white text-center">
      <h1 className="text-4xl font-extrabold mb-4">Protect • Connect • Power Your Business</h1>
      <p className="max-w-2xl mx-auto mb-6">CCTV, POS, Web Development, IP Phones, Fire Alarms, Networking & IT Consultancy — trusted solutions for businesses.</p>
      <div className="flex justify-center gap-4">
        <Link href="/services" className="bg-blue-600 px-4 py-2 rounded font-semibold">Explore Services</Link>
        <Link href="/contact" className="bg-yellow-400 text-blue-900 px-4 py-2 rounded font-semibold">Get a Quote</Link>
      </div>
    </section>
  )
}
