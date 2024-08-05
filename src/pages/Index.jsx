import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dog, Heart, PawPrint } from "lucide-react";

const dogBreeds = [
  { name: "Labrador Retriever", image: "https://images.unsplash.com/photo-1579213838058-0a0a0e5a3648?w=500&h=500&fit=crop" },
  { name: "German Shepherd", image: "https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=500&h=500&fit=crop" },
  { name: "Golden Retriever", image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=500&h=500&fit=crop" },
  { name: "French Bulldog", image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&h=500&fit=crop" },
  { name: "Beagle", image: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=500&h=500&fit=crop" },
];

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 text-blue-800">Paw-some World of Dogs</h1>
          <p className="text-xl text-gray-600">Discover the joy and companionship of man's best friend</p>
        </div>

        <div className="mb-16 relative">
          <img 
            src="https://images.unsplash.com/photo-1534361960057-19889db9621e?w=1200&h=400&fit=crop" 
            alt="Happy dogs" 
            className="w-full h-[400px] object-cover rounded-xl shadow-2xl"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <Button 
              size="lg" 
              className="text-xl"
              onClick={() => setLikes(likes + 1)}
            >
              <Heart className="mr-2 h-6 w-6" /> Love Dogs ({likes})
            </Button>
          </div>
        </div>

        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center"><Dog className="mr-2" /> What are Dogs?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">Dogs are domesticated mammals, not natural wild animals. They were originally bred from wolves. They have been bred by humans for a long time, and were the first animals ever to be domesticated. Their loyalty, playfulness, and ability to fit into human households have earned them the nickname "man's best friend".</p>
          </CardContent>
        </Card>

        <Card className="mb-16">
          <CardHeader>
            <CardTitle className="text-3xl flex items-center"><PawPrint className="mr-2" /> Characteristics of Dogs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-4 text-lg">
              <li className="flex items-center"><Heart className="mr-2 text-red-500" /> Loyal and affectionate</li>
              <li className="flex items-center"><PawPrint className="mr-2 text-blue-500" /> Highly trainable</li>
              <li className="flex items-center"><Dog className="mr-2 text-green-500" /> Various sizes and breeds</li>
              <li className="flex items-center"><PawPrint className="mr-2 text-yellow-500" /> Excellent sense of smell</li>
              <li className="flex items-center"><Heart className="mr-2 text-purple-500" /> Understand human emotions</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">Popular Dog Breeds</CardTitle>
            <CardDescription>Swipe to see some of the most popular dog breeds worldwide:</CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full max-w-xs mx-auto">
              <CarouselContent>
                {dogBreeds.map((breed, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <img src={breed.image} alt={breed.name} className="w-full h-full object-cover rounded-lg" />
                        </CardContent>
                      </Card>
                      <h3 className="text-center mt-2 font-semibold">{breed.name}</h3>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
