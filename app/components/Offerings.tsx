import { FileText, Scissors, Minimize2 } from "lucide-react"

export default function Offerings() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          What We Offer
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 items-start">
          <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
            <FileText className="h-12 w-12 text-gray-800 dark:text-gray-100" />
            <h3 className="text-xl font-bold">Merge PDFs</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Combine multiple PDFs into a single document effortlessly.</p>
          </div>
          <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
            <Scissors className="h-12 w-12 text-gray-800 dark:text-gray-100" />
            <h3 className="text-xl font-bold">Split PDFs</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Divide large PDFs into smaller, more manageable files.</p>
          </div>
          <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
            <Minimize2 className="h-12 w-12 text-gray-800 dark:text-gray-100" />
            <h3 className="text-xl font-bold">Compress PDFs</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Reduce file size without compromising quality.</p>
          </div>
        </div>
      </div>
    </section>
  )
}