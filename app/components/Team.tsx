import Image from 'next/image'

export default function Team() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Meet Our Team
        </h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col items-center space-y-2">
            <Image
              alt="Alice Brown"
              className="aspect-square rounded-full object-cover object-center"
              height={200}
              src="/placeholder.svg"
              width={200}
            />
            <h3 className="text-xl font-bold">Alice Brown</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">CEO & Founder</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Image
              alt="Bob Green"
              className="aspect-square rounded-full object-cover object-center"
              height={200}
              src="/placeholder.svg"
              width={200}
            />
            <h3 className="text-xl font-bold">Bob Green</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Lead Developer</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Image
              alt="Carol White"
              className="aspect-square rounded-full object-cover object-center"
              height={200}
              src="/placeholder.svg"
              width={200}
            />
            <h3 className="text-xl font-bold">Carol White</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">UX Designer</p>
          </div>
        </div>
      </div>
    </section>
  )
}