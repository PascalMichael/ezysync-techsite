export default function Footer() {
  return (
    <footer className="bg-yellow-100 text-gray-700 mt-12 py-6">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-2">
        <p className="font-bold">EzySync Technologies Ltd</p>
        <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  )
}
