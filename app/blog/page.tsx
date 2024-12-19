import Link from 'next/link'
import { Inter } from 'next/font/google'
import { getAllBlogPosts } from '../../utils/markdown'
import { BlogPost } from '../../types/blog'
import { Twitter } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] })

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <div className={`min-h-screen bg-gradient-to-b from-pink-50 to-white ${inter.className}`}>
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold">IVADI</Link>
            <div className="flex space-x-4">
              <Link href="/#casos-de-estudio" className="text-white hover:text-pink-200 transition duration-150 ease-in-out">
                Casos de Estudio
              </Link>
              <Link href="/#cómo-funciona" className="text-white hover:text-pink-200 transition duration-150 ease-in-out">
                Cómo Funciona
              </Link>
              <Link href="/#servicios" className="text-white hover:text-pink-200 transition duration-150 ease-in-out">
                Servicios
              </Link>
              <Link href="/blog" className="text-white hover:text-pink-200 transition duration-150 ease-in-out">
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post: BlogPost) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                {post.coverImage && (
                  <img src={post.coverImage} alt={post.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.author}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
      <div>
        <h3 className="text-pink-400 font-semibold mb-4">Sobre Nosotros</h3>
        <p className="text-sm">IVADI es una agencia de marketing digital especializada en profesionales de la salud. Nuestro enfoque basado en resultados garantiza el crecimiento de tu práctica.</p>
      </div>
      <div>
        <h3 className="text-pink-400 font-semibold mb-4">Enlaces Rápidos</h3>
        <ul className="space-y-2">
          <li><Link href="/" className="hover:text-pink-400 transition duration-300">Inicio</Link></li>
          <li><Link href="/#casos-de-estudio" className="hover:text-pink-400 transition duration-300">Casos de Estudio</Link></li>
          <li><Link href="/#cómo-funciona" className="hover:text-pink-400 transition duration-300">Cómo Funciona</Link></li>
          <li><Link href="/#servicios" className="hover:text-pink-400 transition duration-300">Servicios</Link></li>
          <li><Link href="/blog" className="hover:text-pink-400 transition duration-300">Blog</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-pink-400 font-semibold mb-4">Contacto</h3>
        <p>Email: info@ivadi.com</p>
      </div>
    </div>

    <div className="flex justify-between items-center pt-8 border-t border-gray-800">
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-bold text-pink-400">IVADI</span>
      </div>
      <div className="flex items-center space-x-4">
        <Link href="#" className="text-pink-400 hover:text-pink-300 transition duration-300">
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </Link>
      </div>
    </div>

    <div className="text-center mt-8 text-sm text-gray-500">
      © {new Date().getFullYear()}. Todos los derechos reservados por IVADI
    </div>
  </div>
</footer>
    </div>
  )
}

