import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Clock, Shield, Zap } from 'lucide-react'

export default function Benefits() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-800 dark:text-purple-300">
          Why Choose Our PDF Editor?
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center">
              <Clock className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">Time-Saving</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600 dark:text-gray-300">
              Our tools streamline your workflow, saving you valuable time on document management tasks.
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">Enhanced Security</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600 dark:text-gray-300">
              We prioritize the security of your documents, ensuring your data remains confidential and protected.
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center">
              <Zap className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">Unmatched Reliability</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600 dark:text-gray-300">
              Count on our robust platform for consistent, high-quality PDF editing and conversion results.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}