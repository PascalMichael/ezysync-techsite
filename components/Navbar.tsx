'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-blue-600 text-lg">EzySync</Link>
        <nav className="hidden md:flex gap-6 font-medium">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/photos">Photos</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <button onClick={()=>setOpen(!open)} className="md:hidden p-2 border rounded">☰</button>
      </div>
      {open && (
        <div className="md:hidden bg-blue-50 p-4 space-y-2">
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/photos">Photos</Link>
          <Link href="/contact">Contact</Link>
        </div>
      )}
    </header>
  )
}
