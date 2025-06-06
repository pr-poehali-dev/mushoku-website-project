import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const WorldsSection = () => {
  const worlds = [
    {
      title: "Континент Центральный",
      description: "Родина Рудеуса, место где началось его новое путешествие",
      icon: "Home",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Континент Демонов",
      description: "Суровые земли, полные опасностей и древней магии",
      icon: "Flame",
      color: "from-red-500 to-orange-600",
    },
    {
      title: "Континент Милис",
      description: "Священные земли, где правит религия и порядок",
      icon: "Sun",
      color: "from-yellow-500 to-amber-600",
    },
    {
      title: "Небесный Континент",
      description: "Парящие острова и воздушные замки в облаках",
      icon: "Cloud",
      color: "from-blue-500 to-cyan-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Миры Mushoku Tensei
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Исследуйте удивительные континенты, каждый со своей уникальной
            культурой и магией
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {worlds.map((world, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${world.color} rounded-full flex items-center justify-center`}
                >
                  <Icon
                    name={world.icon as any}
                    size={28}
                    className="text-white"
                  />
                </div>
                <CardTitle className="text-xl text-purple-200">
                  {world.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-center">
                  {world.description}
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
