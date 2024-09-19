import { Card, CardContent } from "./ui/card"
import { Star } from 'lucide-react'

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-800 dark:text-purple-200">
          What Our Customers Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{testimonial.content}</p>
                <div className="font-semibold text-purple-700 dark:text-purple-300">{testimonial.author}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.position}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    content: "This PDF editor has revolutionized our document workflow. It's intuitive, fast, and secure!",
    author: "Sarah Johnson",
    position: "Marketing Director"
  },
  {
    content: "I've tried many PDF editors, but this one stands out for its ease of use and powerful features.",
    author: "Michael Chen",
    position: "Freelance Designer"
  },
  {
    content: "The time we've saved using this tool has been invaluable. Highly recommended for any business.",
    author: "Emily Rodriguez",
    position: "Operations Manager"
  }
]