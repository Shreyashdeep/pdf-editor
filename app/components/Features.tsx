import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { FileText, Shield, Zap } from 'lucide-react'

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-purple-700 dark:text-purple-400">
          Our Premium Features
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center">
              <FileText className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-200">Intuitive Interface</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600 dark:text-gray-400">
              Our sleek interface makes PDF editing accessible to everyone, regardless of technical expertise.
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-200">Secure File Handling</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600 dark:text-gray-400">
              Your documents are encrypted and securely handled, ensuring your sensitive information stays protected.
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-col items-center">
              <Zap className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-200">Lightning-Fast Processing</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-gray-600 dark:text-gray-400">
              Our advanced algorithms ensure quick processing times, so you can edit and convert PDFs in seconds.
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}