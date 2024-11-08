import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function Games() {
  const games = [
    { name: 'Virtual Reality Experience', description: 'Immersive VR games for all ages', image: '/placeholder.svg?height=400&width=400' },
    { name: 'Interactive Trivia', description: 'Customizable trivia games for your event theme', image: '/placeholder.svg?height=400&width=400' },
    { name: 'Giant Board Games', description: 'Oversized classic games for group fun', image: '/placeholder.svg?height=400&width=400' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Interactive Games
          </h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            Elevate your event with our selection of interactive games. From high-tech VR experiences to classic
            favorites, we have something to entertain guests of all ages and interests.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <Card key={index}>
                <CardHeader>
                  <Image
                    src={game.image}
                    alt={game.name}
                    width={400}
                    height={400}
                    className="rounded-lg object-cover w-full h-64 mb-4"
                  />
                  <CardTitle>{game.name}</CardTitle>
                  <CardDescription>{game.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Interactive Games?</h2>
            <ul className="list-disc list-inside text-left max-w-2xl mx-auto">
              <li className="mb-2">Suitable for all age groups and event types</li>
              <li className="mb-2">Customizable to match your event theme</li>
              <li className="mb-2">Experienced game hosts and facilitators</li>
              <li className="mb-2">State-of-the-art equipment and technology</li>
              <li>Promotes guest interaction and memorable experiences</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  )
}