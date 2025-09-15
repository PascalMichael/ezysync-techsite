export default function ServiceCard({title, desc}:{title:string, desc:string}) {
  return (
    <div className="bg-white shadow rounded-lg p-6 hover:shadow-lg transition">
      <h3 className="font-bold text-lg mb-2 text-blue-600">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  )
}
