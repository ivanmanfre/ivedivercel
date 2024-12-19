import { Button } from "@/components/ui/button"

async function getData() {
  // This is a placeholder. Replace with your actual data fetching logic
  return {
    title: "Welcome to IVEDI",
    description: "Transform your medical practice with intelligent and automated digital marketing solutions."
  }
}

export default async function Home() {
  const data = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div style={{ color: 'red', fontSize: '24px' }}>
        This text should be red and large.
      </div>
      <h1 className="text-4xl font-bold text-blue-600">
        {data.title}
      </h1>
      <p className="mt-4 text-xl text-gray-600">
        {data.description}
      </p>
      <Button className="mt-6 bg-pink-600 text-white hover:bg-pink-700">
        Get Started
      </Button>
    </main>
  )
}

