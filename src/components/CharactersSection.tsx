import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

const CharactersSection = () => {
  const popularTorrents = [
    {
      name: "Mushoku Tensei S2 [1080p]",
      title: "Последний эпизод",
      description: "Новейший эпизод второго сезона в высоком качестве",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=150&h=150&fit=crop",
      stats: "↓1.2K | ↑456 | 2.1GB",
      seeders: "1,234",
      leechers: "456",
    },
    {
      name: "Mushoku Tensei Manga Vol.1-15",
      title: "Полная коллекция",
      description: "Все доступные тома манги в высоком разрешении",
      image:
        "https://images.unsplash.com/photo-1589998059171-988d887df646?w=150&h=150&fit=crop",
      stats: "↓856 | ↑234 | 1.8GB",
      seeders: "856",
      leechers: "234",
    },
    {
      name: "Mushoku Tensei LN [RUS]",
      title: "Русский перевод",
      description: "Полный перевод лайт-новеллы на русском языке",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=150&h=150&fit=crop",
      stats: "↓634 | ↑189 | 456MB",
      seeders: "634",
      leechers: "189",
    },
    {
      name: "Mushoku Tensei OST Collection",
      title: "Музыкальная коллекция",
      description: "Все саундтреки, опенинги и эндинги сериала",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop",
      stats: "↓423 | ↑167 | 278MB",
      seeders: "423",
      leechers: "167",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
            Популярные торренты
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Самые востребованные файлы от магического сообщества
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularTorrents.map((torrent, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-lg overflow-hidden ring-4 ring-purple-400/50">
                  <img
                    src={torrent.image}
                    alt={torrent.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg text-blue-200 leading-tight">
                  {torrent.name}
                </CardTitle>
                <CardDescription className="text-purple-300 font-semibold">
                  {torrent.title}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <p className="text-gray-400 text-sm">{torrent.description}</p>
                <div className="text-xs text-gray-500">{torrent.stats}</div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-400">S: {torrent.seeders}</span>
                  <span className="text-red-400">L: {torrent.leechers}</span>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  <Icon name="Download" size={16} className="mr-2" />
                  Скачать
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
