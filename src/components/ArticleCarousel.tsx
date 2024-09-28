import Link from 'next/link'

const articles = [
  { id: 1, title: 'Permakultur, Metode Bercocok Tanam yang "Sustainable"', image: '/article/permakultur.jpg' },
  // Add more articles here
]

const ArticleCarousel = () => {
  return (
    <div className="mb-4">
      {articles.map((article) => (
        <div key={article.id} className="mb-4">
          <Link href={`/article/${article.id}`}>
              <img src={article.image} alt={article.title} className="w-full h-48 object-cover rounded" />
              <h3 className="mt-2 text-lg font-semibold">{article.title}</h3>

          </Link>
        </div>
      ))}
    </div>
  )
}

export default ArticleCarousel
