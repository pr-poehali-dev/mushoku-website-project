import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MagicSection = () => {
  const userFeatures = [
    {
      name: "Личная библиотека",
      description: "Сохраняйте избранные торренты и отслеживайте загрузки",
      icon: "Library",
      color: "from-red-500 to-orange-500",
      features: ["Закладки", "История", "Списки желаемого"],
    },
    {
      name: "Система рейтингов",
      description: "Оценивайте контент и получайте персональные рекомендации",
      icon: "Star",
      color: "from-green-500 to-emerald-500",
      features: ["Рейтинг 5★", "Отзывы", "Рекомендации"],
    },
    {
      name: "Уведомления",
      description: "Получайте оповещения о новых релизах и обновлениях",
      icon: "Bell",
      color: "from-purple-500 to-violet-500",
      features: ["Новые серии", "Обновления", "Избранные авторы"],
    },
    {
      name: "Статистика",
      description: "Подробная аналитика ваших загрузок и активности",
      icon: "BarChart3",
      color: "from-blue-500 to-cyan-500",
      features: ["Трафик", "Время", "Топ контента"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Магические возможности
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Расширенные функции для истинных ценителей аниме-культуры
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {userFeatures.map((feature, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center`}
                  >
                    <Icon
                      name={feature.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-purple-200">
                      {feature.name}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">
                    Функции:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {feature.features.map((func, funcIndex) => (
                      <span
                        key={funcIndex}
                        className="bg-slate-700 text-purple-200 px-3 py-1 rounded-full text-sm"
                      >
                        {func}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MagicSection;
