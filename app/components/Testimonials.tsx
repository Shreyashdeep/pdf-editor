import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle>John Doe</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"This PDF editor has revolutionized my document workflow. It's fast, easy to use, and incredibly reliable."</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Jane Smith</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"I love how secure this platform is. I can edit sensitive documents without worrying about data breaches."</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Mike Johnson</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"The ability to quickly merge and split PDFs has saved me countless hours. Highly recommended!"</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}