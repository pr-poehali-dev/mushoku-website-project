import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const MagicSection = () => {
  const magicTypes = [
    {
      name: "Атакующая магия",
      description: "Разрушительные заклинания огня, воды, земли и воздуха",
      icon: "Zap",
      color: "from-red-500 to-orange-500",
      spells: ["Огненный шар", "Ледяная стрела", "Каменный снаряд"],
    },
    {
      name: "Лечебная магия",
      description: "Исцеляющие заклинания для восстановления здоровья",
      icon: "Heart",
      color: "from-green-500 to-emerald-500",
      spells: ["Лечение", "Детоксикация", "Регенерация"],
    },
    {
      name: "Призывная магия",
      description: "Вызов духов и созданий для помощи в бою",
      icon: "Users",
      color: "from-purple-500 to-violet-500",
      spells: ["Призыв зверя", "Духовная помощь", "Договор"],
    },
    {
      name: "Безмолвная магия",
      description: "Уникальная способность творить магию без заклинаний",
      icon: "Volume",
      color: "from-blue-500 to-cyan-500",
      spells: ["Мгновенное колдовство", "Тихое творение", "Скрытое заклинание"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Система магии
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Откройте для себя разнообразные школы магии и их уникальные
            способности
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {magicTypes.map((magic, index) => (
            <Card
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-purple-500 transition-all duration-300"
            >
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${magic.color} rounded-lg flex items-center justify-center`}
                  >
                    <Icon
                      name={magic.icon as any}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-purple-200">
                      {magic.name}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {magic.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">
                    Примеры заклинаний:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {magic.spells.map((spell, spellIndex) => (
                      <span
                        key={spellIndex}
                        className="bg-slate-700 text-purple-200 px-3 py-1 rounded-full text-sm"
                      >
                        {spell}
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
