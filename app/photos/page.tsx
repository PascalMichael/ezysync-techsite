export default function Photos() {
  const images = [
    '/photos/cctv.jpg',
    '/photos/fence.jpg',
    '/photos/pos.jpg',
    '/photos/network.jpg',
    '/photos/fire.jpg',
    '/photos/web.jpg',
  ]
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Our Work</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <img key={i} src={src} alt="EzySync project" className="rounded-lg shadow" />
        ))}
      </div>
    </div>
  )
}
