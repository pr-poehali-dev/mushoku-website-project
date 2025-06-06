import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const CharactersSection = () => {
  const characters = [
    {
      name: "Рудеус Грейрат",
      title: "Главный герой",
      description: "Магический вундеркинд, получивший второй шанс в жизни",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=face",
      element: "Все виды магии",
    },
    {
      name: "Роксана Мигурдия",
      title: "Наставник магии",
      description: "Молодая учительница магии из племени Мигурд",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b282?w=150&h=150&fit=face",
      element: "Водная магия",
    },
    {
      name: "Эрис Боре Грейрат",
      title: "Мечник",
      description: "Благородного происхождения воин со взрывным характером",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=face",
      element: "Меч богов",
    },
    {
      name: "Сильфиетта",
      title: "Эльф-маг",
      description: "Верный друг детства с уникальными способностями",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=face",
      element: "Безмолвная магия",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Главные персонажи
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Познакомьтесь с удивительными героями, которые формируют судьбу мира
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {characters.map((character, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-purple-400/50">
                  <AvatarImage src={character.image} alt={character.name} />
                  <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg">
                    {character.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl text-blue-200">
                  {character.name}
                </CardTitle>
                <CardDescription className="text-purple-300 font-semibold">
                  {character.title}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-400 mb-3">{character.description}</p>
                <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {character.element}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
