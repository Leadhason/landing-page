import Link from 'next/link'

export default function Demo() {
  return (
    <section className="py-8 justify-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="aspect-w-16 aspect-h-9 mb-8 justify-center items-center">
        <iframe
          title="Demo Video"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg shadow-lg"
        ></iframe>

        </div>
        <div className="text-center">
          <Link
            href="/schedule-demo"
            className="inline-block bg-green-600 text-white hover:bg-green-700 transition-colors duration-300 font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl"
          >
            Book Your Live Demo
          </Link>
        </div>
      </div>
    </section>
  )
}