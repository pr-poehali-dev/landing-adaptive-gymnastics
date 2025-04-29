
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
    <section id="programs" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Наши программы</h2>
        
        <div className="mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              <span className="gradient-text">РЕВОЛЮЦИЯ В ОМОЛОЖЕНИИ:</span>
              <br />
              АДАПТИВНАЯ ГИМНАСТИКА ПРОТИВ ОСТЕОПОРОЗА И ХРУПКОСТИ КОСТЕЙ
            </h3>
            
            <p className="text-lg text-center mb-10">
              Адаптивно Функциональная Гимнастика (АФГ) — это не просто тренировка, а революционный, 
              научно доказанный метод восстановления организма, запускающий механизмы регенерации 
              суставов, связок и костной ткани!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-xl font-bold mb-4 text-life-orange">Вы узнаете себя?</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-life-orange mr-2">•</span>
                    <span>Постоянная усталость и сонливость</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-life-orange mr-2">•</span>
                    <span>Боли в суставах, спине, шее</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-life-orange mr-2">•</span>
                    <span>Потеря гибкости и мелкой моторики</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-life-orange mr-2">•</span>
                    <span>Хрупкость костей и остеопороз</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-life-orange mr-2">•</span>
                    <span>Стресс, раздражительность, апатия</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-life-orange mr-2">•</span>
                    <span>Сколиоз, искривления позвоночного столба</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-xl font-bold mb-4 text-life-orange">Уникальность метода</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-life-orange mr-2">•</span>
                    <span>Адаптивная гимнастика на уникальном тренажёре создаёт осевую нагрузку, запускает рост костей</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-life-orange mr-2">•</span>
                    <span>Комплекс упражнений невозможно повторить в обычном спортзале</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-life-orange mr-2">•</span>
                    <span>Без медикаментов, операций и боли — только естественная активация ресурсов организма</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-life-orange mr-2">•</span>
                    <span>Научно доказанная эффективность подтверждена исследованиями и более 100 научными публикациями</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-bold text-center mb-8">Дополнительные программы</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <Brain className="h-10 w-10 text-life-orange mb-2" />
              <CardTitle>Антистресс и восстановление ЦНС</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3"><strong>Для кого:</strong> люди с хронической усталостью, выгоранием, бессонницей</p>
              <p><strong>Результат:</strong> снижение тревожности, глубокий сон, ясность мышления</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <BookOpen className="h-10 w-10 text-life-orange mb-2" />
              <CardTitle>Когнитивный фокус</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3"><strong>Для кого:</strong> подростки и студенты при утомляемости, интеллектуальной перегрузке</p>
              <p><strong>Результат:</strong> улучшение внимания, памяти, эмоциональной устойчивости</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <Heart className="h-10 w-10 text-life-orange mb-2" />
              <CardTitle>Гормональный баланс (женская)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3"><strong>Для кого:</strong> женщины с гормональными сбоями, снижением энергии</p>
              <p><strong>Результат:</strong> стабилизация цикла, улучшение внешнего вида, нормализация сна</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <Sparkles className="h-10 w-10 text-life-orange mb-2" />
              <CardTitle>Гормональный баланс (мужская)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3"><strong>Для кого:</strong> мужчины с пониженным уровнем энергии, снижением либидо</p>
              <p><strong>Результат:</strong> рост тестостерона, высокое либидо, уверенность в себе</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <Dna className="h-10 w-10 text-life-orange mb-2" />
              <CardTitle>Поддержка иммунитета</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3"><strong>Для кого:</strong> восстановление после болезни, вирусных нагрузок</p>
              <p><strong>Результат:</strong> повышается уровень энергии, уходит вялость и сонливость</p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <ActivitySquare className="h-10 w-10 text-life-orange mb-2" />
              <CardTitle>Коррекция осанки</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3"><strong>Для кого:</strong> офисные сотрудники, пожилые, подростки</p>
              <p><strong>Результат:</strong> уходит зажатость, появляется опора, спина выпрямляется</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-center mt-10">
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
