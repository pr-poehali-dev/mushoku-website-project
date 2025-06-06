import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const WorldsSection = () => {
  const categories = [
    {
      title: "Аниме",
      description: "Эпизоды, сезоны и фильмы в высоком качестве",
      icon: "Play",
      color: "from-green-500 to-emerald-600",
      count: "1,284",
    },
    {
      title: "Манга",
      description: "Цифровые версии всех глав и томов",
      icon: "BookOpen",
      color: "from-red-500 to-orange-600",
      count: "856",
    },
    {
      title: "Ранобэ",
      description: "Лайт-новеллы в оригинале и переводах",
      icon: "FileText",
      color: "from-yellow-500 to-amber-600",
      count: "324",
    },
    {
      title: "Саундтреки",
      description: "OST, опенинги, эндинги и музыка",
      icon: "Music",
      color: "from-blue-500 to-cyan-600",
      count: "192",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Категории контента
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Выберите тип контента для поиска магических сокровищ знаний
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}
                >
                  <Icon
                    name={category.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-xl text-purple-200">
                  {category.title}
                </CardTitle>
                <div className="text-2xl font-bold text-blue-300">
                  {category.count}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-center">
                  {category.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorldsSection;
