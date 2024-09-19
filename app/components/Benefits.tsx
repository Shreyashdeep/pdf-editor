import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Benefits
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <Card>
            <CardHeader>
              <CardTitle>Time-Saving</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Our tools streamline your workflow, saving you valuable time on document management tasks.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p>We prioritize the security of your documents, ensuring your data remains confidential and protected.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Reliability</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Count on our robust platform for consistent, high-quality PDF editing and conversion results.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}