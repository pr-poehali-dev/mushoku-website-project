import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-purple-900 to-slate-800 overflow-hidden">
      {/* Magical particles background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-300 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-yellow-300 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-purple-300 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="mb-8 inline-block">
          <div className="w-20 h-20 mx-auto bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mb-4">
            <Icon name="Sparkles" size={32} className="text-white" />
          </div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-fade-in">
          Mushoku Tensei
        </h1>

        <p className="text-xl md:text-2xl text-purple-200 mb-4 animate-fade-in delay-300">
          無職転生 〜異世界行ったら本気だす〜
        </p>

        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in delay-500">
          Погрузитесь в мир магии, приключений и второго шанса. История о
          перерождении, росте и поиске смысла жизни в новом мире.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Начать приключение
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-300 text-purple-300 hover:bg-purple-900/50 px-8 py-3"
          >
            <Icon name="BookOpen" size={20} className="mr-2" />
            Изучить мир
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
