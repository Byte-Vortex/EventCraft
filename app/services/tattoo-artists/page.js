import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function TattooArtists() {
  const artists = [
    { name: 'Alex Johnson', specialty: 'Watercolor Tattoos', image: '/1.jpg' },
    { name: 'Sam Lee', specialty: 'Black and Grey Realism', image: '/2.jpg' },
    { name: 'Morgan Taylor', specialty: 'Neo-Traditional', image: '/3.jpg' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Tattoo Artists
          </h1>
          <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
            Our talented tattoo artists bring a unique flair to your events, offering custom designs and temporary
            tattoos that will leave a lasting impression on your guests.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artists.map((artist, index) => (
              <Card key={index}>
                <CardHeader>
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    width={400}
                    height={400}
                    className="rounded-lg object-cover w-full h-64 mb-4"
                  />
                  <CardTitle>{artist.name}</CardTitle>
                  <CardDescription>{artist.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-sm">Book This Artist</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-16 text-center">
            <h2 className="text-4xl font-bold mb-10">Why Choose Our Tattoo Artists?</h2>
            <ul className="list-inside text-lg text-justify-center max-w-2xl mx-auto">
              <li className="mb-2">Professional artists with years of experience</li>
              <li className="mb-2">Custom designs tailored to your event theme</li>
              <li className="mb-2">Safe, high-quality temporary tattoos</li>
              <li className="mb-2">Diverse styles to suit all preferences</li>
              <li>Unforgettable and interactive guest experience</li>
            </ul>
          </div>
        </div>
      </main>

    </div>
  )
}