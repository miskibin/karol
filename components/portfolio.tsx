import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ArrowRight,
  Star,
  Users,
  Music,
  Sparkles,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Portfolio() {
  const cleaningExamples = [
    {
      title: "Pranie kanapy",
      description: "Usunięcie trudnych plam z kawy",
      image: "/pranie/pranie1.jpg"
    },
    {
      title: "Czyszczenie wykładziny",
      description: "Przywrócenie świeżości w biurze",
      image: "/pranie/pranie3-before.jpg"
    },
    {
      title: "Czyszczenie wykładziny",
      description: "Przywrócenie świeżości w biurze",
      image: "/pranie/pranie3-after.jpg"
    },

  ];

  return (
    <main className="min-h-screen w-full bg-background">
  <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <img
          src="/api/placeholder/1920/1080"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative container mx-auto px-4 flex flex-col items-center text-center space-y-6 z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Profesjonalne Usługi i{" "}
            <span className="text-primary">Artystyczna Pasja</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-[600px]">
            Łączę doskonałość w usługach czyszczenia z pasją do muzyki
          </p>
          <div className="flex gap-4">
            <Button size="lg">
              Zobacz Usługi
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg">
              Skontaktuj się
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="o-mnie" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="px-4 py-1">
              O mnie
            </Badge>
            <h2 className="text-3xl font-bold">Witaj w moim świecie</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  Nazywam się Karol i z pasją podchodzę do każdej dziedziny
                  mojego życia i pracy. Niezależnie od tego, czy zajmuję się
                  praniem tapicerki, czy graniem na skrzypcach, zawsze stawiam
                  na rozwój, najwyższą jakość usług i indywidualne podejście do
                  klienta.
                </p>
                <p className="text-lg text-muted-foreground">
                  Moim priorytetem jest zawsze dobro i zadowolenie klienta.
                  Staram się dawać więcej niż tylko usługę – chcę, aby każda
                  współpraca była przyjemnym i wartościowym doświadczeniem.
                </p>
              </div>
              <div className="relative aspect-square">
                <img
                  src="/api/placeholder/600/600"
                  alt="Profile"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cleaning Services Section */}
      <section id="czyszczenie" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-4 py-1">
              Pan od Plam
            </Badge>
            <h2 className="text-3xl font-bold">Profesjonalne Usługi Czyszczenia</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specjalizuję się w kompleksowym czyszczeniu tapicerki meblowej, wykorzystując
              najnowocześniejsze technologie i środki czyszczące przyjazne dla środowiska.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Specjalizacja</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Pranie Tapicerki Meblowej</h4>
                      <p className="text-sm text-muted-foreground">
                        Kanapy, fotele, krzesła, narożniki - przywracamy świeżość każdemu meblowi
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Czyszczenie Wykładzin</h4>
                      <p className="text-sm text-muted-foreground">
                        Kompleksowe czyszczenie wykładzin w domach i biurach
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Odświeżanie Materacy</h4>
                      <p className="text-sm text-muted-foreground">
                        Usuwanie roztoczy, bakterii i nieprzyjemnych zapachów
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dlaczego ja?</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-2">
                    <Star className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Doświadczenie</h4>
                      <p className="text-sm text-muted-foreground">
                        Wieloletnie doświadczenie w branży i setki zadowolonych klientów
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Nowoczesny Sprzęt</h4>
                      <p className="text-sm text-muted-foreground">
                        Wykorzystuję najnowocześniejsze urządzenia i środki czyszczące
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Indywidualne Podejście</h4>
                      <p className="text-sm text-muted-foreground">
                        Każde zlecenie traktuję indywidualnie, dopasowując się do potrzeb klienta
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-center">Przykładowe Realizacje</h3>
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {cleaningExamples.map((example, index) => (
                  <CarouselItem key={index}>
                    <Card className="border-0">
                      <CardContent className="p-0">
                        <div className="relative w-full h-0 pb-[56.25%]">
                          <Image
                          src={example.image}
                          alt={example.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                          />
                        </div>
                        <div className="p-4 text-center">
                          <h4 className="font-medium">{example.title}</h4>
                          <p className="text-sm text-muted-foreground">{example.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section id="uslugi" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-4 py-1">
              Pozostałe Usługi
            </Badge>
            <h2 className="text-3xl font-bold">Inne Specjalizacje</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sprzątanie Podłóg */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="/api/placeholder/600/400"
                  alt="Floor cleaning"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <Sparkles className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Sprzątanie Podłóg</CardTitle>
                <CardDescription>
                  Nowoczesne rozwiązania czyszczące
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Bezprzewodowe urządzenie
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Mycie i odkurzanie w jednym
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Oszczędność czasu
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Muzyka */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="/api/placeholder/600/400"
                  alt="Music"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <Music className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Muzyka</CardTitle>
                <CardDescription>Usługi muzyczne</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sekcja w przygotowaniu. Wkrótce pojawią się informacje o
                  usługach muzycznych.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section id="cennik" className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-4 py-1">
              Cennik
            </Badge>
            <h2 className="text-3xl font-bold">Przejrzyste ceny</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-4">
                  {[
                    { service: "Pranie kanapy/wersalki", price: "od 150 zł" },
                    { service: "Pranie narożnika", price: "od 200 zł" },
                    { service: "Pranie fotela", price: "od 40 zł" },
                    { service: "Pranie krzesła", price: "od 20 zł" },
                    { service: "Pranie materaca", price: "od 80 zł" },
                    { service: "Pranie wykładzin", price: "od 18 zł/m²" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                    >
                      <span>{item.service}</span>
                      <span className="font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
                <Separator className="my-6" />
                <p className="text-sm text-muted-foreground">
                  * Cena końcowa zależy od: wielkości mebla, stopnia
                  zabrudzenia, kształtu mebla i czasu pracy. Usługi dla firm
                  wyceniane są indywidualnie.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-4 py-1">
              Kontakt
            </Badge>
            <h2 className="text-3xl font-bold">Skontaktuj się ze mną</h2>
            <p className="text-lg text-muted-foreground">
              Chętnie odpowiem na wszystkie pytania
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-muted-foreground">661 094 441</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">
                        kontakt@example.com
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Lokalizacja</p>
                      <p className="text-muted-foreground">
                        Warszawa i okolice
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
