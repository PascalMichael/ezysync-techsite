'use client'
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "255700123456"; // replace with your WhatsApp number (no + or spaces)
  const message = "Hello EzySync Technologies, I’d like to know more about your services!";

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 flex items-center justify-center"
    >
      <FaWhatsapp className="text-3xl" />
    </Link>
  );
}
