
import { 
  Brain, 
  Heart, 
  Dna, 
  ActivitySquare, 
  BookOpen, 
  Sparkles 
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProgramsSection = () => {
  return (
    <section id="programs" className="section-padding section-bg-alt border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Наши программы</h2>
        
        <div className="mb-20">
          <div className="bg-white p-8 rounded-lg shadow-md border-2 border-gray-100">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
                <span className="gradient-text block mb-2">РЕВОЛЮЦИЯ В ОМОЛОЖЕНИИ</span>
                АДАПТИВНАЯ ГИМНАСТИКА ПРОТИВ ОСТЕОПОРОЗА И ХРУПКОСТИ КОСТЕЙ
              </h3>
              
              <p className="text-lg text-center mb-10 leading-relaxed">
                Адаптивно Функциональная Гимнастика (АФГ) — это не просто тренировка, а революционный, 
                научно доказанный метод восстановления организма, запускающий механизмы регенерации 
                суставов, связок и костной ткани!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-life-orange flex items-center">
                  <span className="bg-life-orange text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                  Вы узнаете себя?
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-life-orange font-bold mr-2">•</span>
                    <span>Постоянная усталость и сонливость</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-life-orange font-bold mr-2">•</span>
                    <span>Боли в суставах, спине, шее</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-life-orange font-bold mr-2">•</span>
                    <span>Потеря гибкости и мелкой моторики</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-life-orange font-bold mr-2">•</span>
                    <span>Хрупкость костей и остеопороз</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-life-orange font-bold mr-2">•</span>
                    <span>Стресс, раздражительность, апатия</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-life-orange font-bold mr-2">•</span>
                    <span>Сколиоз, искривления позвоночного столба</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4 text-life-orange flex items-center">
                  <span className="bg-life-orange text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                  Уникальность метода
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-life-orange font-bold mr-2">•</span>
                    <span>Адаптивная гимнастика на уникальном тренажёре создаёт осевую нагрузку, запускает рост костей</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-life-orange font-bold mr-2">•</span>
                    <span>Комплекс упражнений невозможно повторить в обычном спортзале</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-life-orange font-bold mr-2">•</span>
                    <span>Без медикаментов, операций и боли — только естественная активация ресурсов организма</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-life-orange font-bold mr-2">•</span>
                    <span>Научно доказанная эффективность подтверждена исследованиями и более 100 научными публикациями</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="section-divider"></div>
        
        <h3 className="text-2xl font-bold text-center mb-12">Дополнительные программы</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="card-highlight border-2">
            <CardHeader className="pb-2">
              <div className="bg-orange-50 p-3 rounded-full inline-block mb-3">
                <Brain className="h-10 w-10 text-life-orange" />
              </div>
              <CardTitle>Антистресс и восстановление ЦНС</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3"><strong className="text-life-orange">Для кого:</strong> люди с хронической усталостью, выгоранием, бессонницей</p>
              <p><strong className="text-life-orange">Результат:</strong> снижение тревожности, глубокий сон, ясность мышления</p>
            </CardContent>
          </Card>
          
          <Card className="card-highlight border-2">
            <CardHeader className="pb-2">
              <div className="bg-orange-50 p-3 rounded-full inline-block mb-3">
                <BookOpen className="h-10 w-10 text-life-orange" />
              </div>
              <CardTitle>Когнитивный фокус</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3"><strong className="text-life-orange">Для кого:</strong> подростки и студенты при утомляемости, интеллектуальной перегрузке</p>
              <p><strong className="text-life-orange">Результат:</strong> улучшение внимания, памяти, эмоциональной устойчивости</p>
            </CardContent>
          </Card>
          
          <Card className="card-highlight border-2">
            <CardHeader className="pb-2">
              <div className="bg-orange-50 p-3 rounded-full inline-block mb-3">
                <Heart className="h-10 w-10 text-life-orange" />
              </div>
              <CardTitle>Гормональный баланс (женская)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3"><strong className="text-life-orange">Для кого:</strong> женщины с гормональными сбоями, снижением энергии</p>
              <p><strong className="text-life-orange">Результат:</strong> стабилизация цикла, улучшение внешнего вида, нормализация сна</p>
            </CardContent>
          </Card>
          
          <Card className="card-highlight border-2">
            <CardHeader className="pb-2">
              <div className="bg-orange-50 p-3 rounded-full inline-block mb-3">
                <Sparkles className="h-10 w-10 text-life-orange" />
              </div>
              <CardTitle>Гормональный баланс (мужская)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3"><strong className="text-life-orange">Для кого:</strong> мужчины с пониженным уровнем энергии, снижением либидо</p>
              <p><strong className="text-life-orange">Результат:</strong> рост тестостерона, высокое либидо, уверенность в себе</p>
            </CardContent>
          </Card>
          
          <Card className="card-highlight border-2">
            <CardHeader className="pb-2">
              <div className="bg-orange-50 p-3 rounded-full inline-block mb-3">
                <Dna className="h-10 w-10 text-life-orange" />
              </div>
              <CardTitle>Поддержка иммунитета</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3"><strong className="text-life-orange">Для кого:</strong> восстановление после болезни, вирусных нагрузок</p>
              <p><strong className="text-life-orange">Результат:</strong> повышается уровень энергии, уходит вялость и сонливость</p>
            </CardContent>
          </Card>
          
          <Card className="card-highlight border-2">
            <CardHeader className="pb-2">
              <div className="bg-orange-50 p-3 rounded-full inline-block mb-3">
                <ActivitySquare className="h-10 w-10 text-life-orange" />
              </div>
              <CardTitle>Коррекция осанки</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3"><strong className="text-life-orange">Для кого:</strong> офисные сотрудники, пожилые, подростки</p>
              <p><strong className="text-life-orange">Результат:</strong> уходит зажатость, появляется опора, спина выпрямляется</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-center mt-14">
          <Button className="btn-gradient text-lg px-8 py-6" onClick={() => {
            const element = document.getElementById("contact");
            if (element) element.scrollIntoView({ behavior: "smooth" });
          }}>
            Записаться на программу
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
