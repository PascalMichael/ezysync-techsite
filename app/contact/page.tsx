'use client'
import { useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    try {
      await emailjs.sendForm(
        'your_service_id',  // replace
        'contact_form',     // template id (created in EmailJS)
        form,
        'your_public_key'   // replace with EmailJS public key
      )
      setSuccess(true)
      form.reset()
    } catch (err) {
      console.error('EmailJS error', err)
      alert('Failed to send message, please try later.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p>We’d love to hear from you! Reach out for quotes, consultations, or support.</p>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl">
        <input name="name" type="text" placeholder="Your Name" className="p-2 border rounded" required />
        <input name="email" type="email" placeholder="Your Email" className="p-2 border rounded" required />
        <textarea name="message" placeholder="Your Message" className="p-2 border rounded" rows={5} required></textarea>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
      {success && <p className="text-green-600 font-semibold">✅ Message sent successfully!</p>}
      <div>
        <p><strong>Phone:</strong> +255 700 123 456</p>
        <p><strong>Email:</strong> info@ezysync.co.tz</p>
        <p><strong>Address:</strong> Dar es Salaam, Tanzania</p>
      </div>
    </div>
  )
}
