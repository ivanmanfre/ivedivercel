import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Calendar, User, Tag, ChevronLeft } from 'lucide-react'
import { Button } from "../../../components/ui/button"
import { BlogPost } from '../../../types/blog'
import { getBlogPost } from '../../../utils/markdown'

const inter = Inter({ subsets: ['latin'] })

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b from-pink-50 to-white ${inter.className}`}>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold">IVADI</span>
            </Link>
            <div className="hidden md:flex space-x-4">
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

      {/* Blog Post Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/blog" className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-8">
          <ChevronLeft className="w-5 h-5 mr-2" />
          Volver al Blog
        </Link>

        {post.coverImage && (
          <div className="relative w-full h-[400px] mb-8 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={post.coverImage}
              alt={post.title}
              className="object-cover w-full h-full"
            />
          </div>
        )}

        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-pink-500" />
              <time dateTime={post.date}>{post.date}</time>
            </div>
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2 text-pink-500" />
              <span>{post.author}</span>
            </div>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <div
                  key={tag}
                  className="flex items-center bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm"
                >
                  <Tag className="w-4 h-4 mr-1" />
                  {tag}
                </div>
              ))}
            </div>
          )}
        </header>

        <div
          className="prose prose-pink max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link href="/blog">
            <Button variant="outline" className="text-pink-600 hover:text-pink-700 hover:bg-pink-50">
              ← Volver al Blog
            </Button>
          </Link>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-pink-400">IVADI</span>
            <p>&copy; {new Date().getFullYear()} IVADI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

