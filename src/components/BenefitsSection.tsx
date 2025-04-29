
import { 
  Activity, 
  Clock, 
  CheckCircle, 
  Heart, 
  Brain, 
  Zap, 
  BarChart, 
  LifeBuoy
} from "lucide-react";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Преимущества метода «Ось Жизни»</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Activity className="text-life-orange h-10 w-10 mr-3" />
              <h3 className="text-xl font-bold">Эффективность</h3>
            </div>
            <p>Уже после первого сеанса клиент ощущает заметное улучшение самочувствия и тонуса.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Shield className="text-life-orange h-10 w-10 mr-3" />
              <h3 className="text-xl font-bold">Безопасность</h3>
            </div>
            <p>Натуральное воздействие без медикаментов и хирургических вмешательств.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <Dna className="text-life-orange h-10 w-10 mr-3" />
              <h3 className="text-xl font-bold">Глубина воздействия</h3>
            </div>
            <p>Стимуляция роста новых клеток и восстановление тканей на клеточном уровне.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Что дают тренировки?</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Brain className="text-life-orange h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                <p><strong>Перезагрузка нервной системы</strong> — ощущение спокойствия и прилива сил</p>
              </div>
              
              <div className="flex items-start">
                <Shield className="text-life-orange h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                <p><strong>Усиление иммунитета</strong> на уровне ДНК</p>
              </div>
              
              <div className="flex items-start">
                <BarChart className="text-life-orange h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                <p><strong>Восстановление гормонального баланса</strong> и улучшение метаболизма</p>
              </div>
              
              <div className="flex items-start">
                <LifeBuoy className="text-life-orange h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                <p><strong>Регенерация костей</strong> и соединительных тканей</p>
              </div>
              
              <div className="flex items-start">
                <Activity className="text-life-orange h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                <p><strong>Восстановление гибкости суставов</strong> благодаря коллагену</p>
              </div>
              
              <div className="flex items-start">
                <Heart className="text-life-orange h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                <p><strong>Мгновенное поднятие настроения</strong> благодаря гормонам радости</p>
              </div>
              
              <div className="flex items-start">
                <Zap className="text-life-orange h-6 w-6 mt-1 mr-4 flex-shrink-0" />
                <p><strong>Мощный прилив энергии</strong> уже во время тренировки!</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/af4d4b2a-0c76-46a8-b249-5fad82a57c02.png" 
                alt="Тренажер 'Ось Жизни'" 
                className="rounded-lg shadow-lg max-w-full mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 -left-4 h-full bg-gradient-to-r from-life-yellow via-life-orange to-life-purple rounded-lg -z-10 blur-md opacity-30"></div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h4 className="text-xl font-bold mb-4">Гарантированный результат:</h4>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="text-life-orange h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                  <p>Быстрое восстановление плотности костей</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-life-orange h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                  <p>Идеальная осанка и свобода движений в любом возрасте</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-life-orange h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                  <p>Безопасно, без боли и травм</p>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-life-orange h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                  <p>Только 45 минут раз в неделю</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
