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

export default function Portfolio() {
  return (
    <main className="min-h-screen w-full bg-background">
      {/* Hero Section */}
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

      {/* Services Section */}
      <section id="uslugi" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="outline" className="px-4 py-1">
              Usługi
            </Badge>
            <h2 className="text-3xl font-bold">Co oferuję</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pan od Plam */}
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="/api/placeholder/600/400"
                  alt="Cleaning service"
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <Star className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Pan od Plam</CardTitle>
                <CardDescription>
                  Profesjonalne pranie tapicerki
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Pranie kanap i foteli
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Czyszczenie wykładzin
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Pranie materacy
                  </li>
                </ul>
              </CardContent>
            </Card>

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
