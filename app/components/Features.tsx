import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Our Features
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Easy-to-use Interface</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our intuitive interface makes PDF editing accessible to everyone, regardless of technical expertise.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Secure File Handling</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Your documents are encrypted and securely handled, ensuring your sensitive information stays protected.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Fast Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our advanced algorithms ensure quick processing times, so you can edit and convert PDFs in seconds.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}