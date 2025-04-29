
import { 
  Activity, 
  Clock, 
  CheckCircle, 
  Heart, 
  Brain, 
  Zap, 
  BarChart, 
  LifeBuoy,
  Shield,
  Dna
} from "lucide-react";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Преимущества метода «Ось Жизни»</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-orange-50 p-3 rounded-full mr-4">
                <Activity className="text-life-orange h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Эффективность</h3>
            </div>
            <p className="leading-relaxed">Уже после первого сеанса клиент ощущает заметное улучшение самочувствия и тонуса.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-orange-50 p-3 rounded-full mr-4">
                <Shield className="text-life-orange h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Безопасность</h3>
            </div>
            <p className="leading-relaxed">Натуральное воздействие без медикаментов и хирургических вмешательств.</p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="bg-orange-50 p-3 rounded-full mr-4">
                <Dna className="text-life-orange h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Глубина воздействия</h3>
            </div>
            <p className="leading-relaxed">Стимуляция роста новых клеток и восстановление тканей на клеточном уровне.</p>
          </div>
        </div>
        
        <div className="section-divider"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold mb-8 gradient-text text-center md:text-left">Что дают тренировки?</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="feature-item">
                <div className="bg-orange-50 p-2 rounded-full">
                  <Brain className="icon-feature h-6 w-6" />
                </div>
                <p><strong>Перезагрузка нервной системы</strong> — ощущение спокойствия и прилива сил</p>
              </div>
              
              <div className="feature-item">
                <div className="bg-orange-50 p-2 rounded-full">
                  <Shield className="icon-feature h-6 w-6" />
                </div>
                <p><strong>Усиление иммунитета</strong> на уровне ДНК</p>
              </div>
              
              <div className="feature-item">
                <div className="bg-orange-50 p-2 rounded-full">
                  <BarChart className="icon-feature h-6 w-6" />
                </div>
                <p><strong>Восстановление гормонального баланса</strong> и улучшение метаболизма</p>
              </div>
              
              <div className="feature-item">
                <div className="bg-orange-50 p-2 rounded-full">
                  <LifeBuoy className="icon-feature h-6 w-6" />
                </div>
                <p><strong>Регенерация костей</strong> и соединительных тканей</p>
              </div>
              
              <div className="feature-item">
                <div className="bg-orange-50 p-2 rounded-full">
                  <Activity className="icon-feature h-6 w-6" />
                </div>
                <p><strong>Восстановление гибкости суставов</strong> благодаря коллагену</p>
              </div>
              
              <div className="feature-item">
                <div className="bg-orange-50 p-2 rounded-full">
                  <Heart className="icon-feature h-6 w-6" />
                </div>
                <p><strong>Мгновенное поднятие настроения</strong> благодаря гормонам радости</p>
              </div>
              
              <div className="feature-item sm:col-span-2">
                <div className="bg-orange-50 p-2 rounded-full">
                  <Zap className="icon-feature h-6 w-6" />
                </div>
                <p><strong>Мощный прилив энергии</strong> уже во время тренировки!</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/af4d4b2a-0c76-46a8-b249-5fad82a57c02.png" 
                alt="Тренажер 'Ось Жизни'" 
                className="rounded-lg shadow-lg max-w-full mx-auto border-4 border-white"
              />
              <div className="absolute -bottom-4 -right-4 -left-4 h-full bg-gradient-to-r from-life-yellow via-life-orange to-life-purple rounded-lg -z-10 blur-md opacity-30"></div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm mt-10 border border-gray-200">
              <h4 className="text-xl font-bold mb-6 text-center">Гарантированный результат:</h4>
              
              <div className="space-y-4 max-w-md mx-auto">
                <div className="flex items-start">
                  <div className="bg-green-50 p-1 rounded-full mr-3">
                    <CheckCircle className="text-green-600 h-5 w-5" />
                  </div>
                  <p>Быстрое восстановление плотности костей</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-50 p-1 rounded-full mr-3">
                    <CheckCircle className="text-green-600 h-5 w-5" />
                  </div>
                  <p>Идеальная осанка и свобода движений в любом возрасте</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-50 p-1 rounded-full mr-3">
                    <CheckCircle className="text-green-600 h-5 w-5" />
                  </div>
                  <p>Безопасно, без боли и травм</p>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-50 p-1 rounded-full mr-3">
                    <Clock className="text-life-orange h-5 w-5" />
                  </div>
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
