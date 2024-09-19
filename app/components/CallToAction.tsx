import { Button } from "./ui/button"

export default function CallToAction() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-700 to-indigo-600">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Ready to Transform Your PDF Experience?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Join thousands of satisfied users and elevate your document workflow today.
            </p>
          </div>
          <Button className="bg-white text-purple-700 hover:bg-gray-100 hover:text-purple-800 transition-colors duration-200">
            Start Your Free Trial
          </Button>
        </div>
      </div>
    </section>
  )
}