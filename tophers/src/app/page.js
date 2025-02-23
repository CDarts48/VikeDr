import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative">
          <div className="relative h-[600px] w-full">
            <Image
              src=""
              alt="Tools on wooden surface"
              fill
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h2 className="text-5xl font-bold text-[#4169E1]">Trusted Solutions</h2>
              <p className="mt-4 text-2xl font-semibold">Since 2012</p>
              <p className="mt-6 max-w-2xl text-center text-xl">
                Professional handyman for residential and commercial properties.
              </p>
              <Button className="mt-8 bg-[#4169E1] hover:bg-[#4169E1]/90">Contact Me Today!</Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16">
          <div className="container">
            <h2 className="mb-12 text-center text-4xl font-bold text-[#4169E1]">Remodel / Build / Maintenance</h2>
            <Carousel className="mx-auto max-w-5xl">
              <CarouselContent>
                {[1, 2, 3].map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Image
                        src="/placeholder.svg"
                        alt={`Project ${index + 1}`}
                        width={800}
                        height={400}
                        className="rounded-lg object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Reviews Section */}
        <section id="reviews" className="bg-gray-50 py-16">
          <div className="container">
            <h2 className="mb-12 text-center text-4xl font-bold text-[#4169E1]">Customer Reviews</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((_, index) => (
                <Card key={index} className="p-6">
                  <div className="flex gap-1">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                  </div>
                  <p className="mt-4">
                    "Excellent service! Very professional and quality work. Would highly recommend!"
                  </p>
                  <p className="mt-2 font-semibold">- Happy Customer</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container">
            <h2 className="mb-12 text-center text-4xl font-bold text-[#4169E1]">Contact Us</h2>
            <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-[#4169E1]" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-[#4169E1]" />
                  <span>contact@tophersmandr.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#4169E1]" />
                  <span>Denver, Colorado</span>
                </div>
              </div>
              <form className="space-y-4">
                <Input placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input placeholder="Phone" />
                <Textarea placeholder="Message" className="min-h-[120px]" />
                <Button className="w-full bg-[#4169E1] hover:bg-[#4169E1]/90">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-gray-50 py-8">
        <div className="container text-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Topher&apos;s Maintenance and Repair. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
