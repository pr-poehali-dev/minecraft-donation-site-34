import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/7b7a4f0f-cb4b-4d67-a279-d05d4a7eefc6/files/4f497074-0334-43af-9dab-dfddcf38b83c.jpg";

const NAV_ITEMS = [
  { id: "home", label: "Главная" },
  { id: "packages", label: "Пакеты" },
  { id: "about", label: "О сервере" },
  { id: "status", label: "Статус" },
];

const PACKAGES = [
  {
    id: "sprout",
    name: "Росток",
    emoji: "🌱",
    price: "149 ₽",
    color: "from-green-400 to-emerald-500",
    badge: null,
    description: "Идеально для начала пути на сервере",
    perks: [
      { icon: "Tag", text: "Префикс [Росток] в чате" },
      { icon: "Palette", text: "Цветной ник" },
      { icon: "Home", text: "2 домашних точки /home" },
      { icon: "Package", text: "Стартовый набор предметов" },
      { icon: "Zap", text: "Приоритет входа на сервер" },
    ],
  },
  {
    id: "sunflower",
    name: "Подсолнух",
    emoji: "🌻",
    price: "349 ₽",
    color: "from-yellow-400 to-orange-500",
    badge: "Популярный",
    description: "Золотой уровень для активных игроков",
    perks: [
      { icon: "Tag", text: "Префикс [Подсолнух] в чате" },
      { icon: "Sparkles", text: "Кастомные эффекты частиц" },
      { icon: "Home", text: "5 домашних точек /home" },
      { icon: "ShoppingBag", text: "Доступ к /shop и /market" },
      { icon: "Hammer", text: "Улучшенные инструменты" },
      { icon: "Users", text: "Клановые команды" },
      { icon: "Star", text: "Двойной опыт в выходные" },
    ],
  },
  {
    id: "summer",
    name: "Лето",
    emoji: "☀️",
    price: "749 ₽",
    color: "from-sky-400 to-blue-500",
    badge: "Макс. привилегии",
    description: "Полный контроль и максимум возможностей",
    perks: [
      { icon: "Crown", text: "Префикс [Лето] в чате" },
      { icon: "Wand2", text: "Кастомное оружие и броня" },
      { icon: "MapPin", text: "Безлимитные домашние точки" },
      { icon: "Plane", text: "Режим полёта /fly" },
      { icon: "Zap", text: "Команда /speed — ускорение" },
      { icon: "Shield", text: "Иммунитет к гриферам" },
      { icon: "Gift", text: "Ежемесячный набор предметов" },
      { icon: "Star", text: "Тройной опыт всегда" },
      { icon: "Headphones", text: "Приоритетная поддержка" },
    ],
  },
];

const SERVER_FEATURES = [
  { icon: "Trees", title: "Летняя карта", desc: "Огромный мир с тропическими биомами, пляжами и тёплым летним освещением" },
  { icon: "Users", title: "Сообщество", desc: "Более 1200 активных игроков. Дружелюбная атмосфера, совместные ивенты" },
  { icon: "Trophy", title: "Турниры", desc: "Еженедельные PvP-турниры и строительные конкурсы с призами" },
  { icon: "Shield", title: "Защита", desc: "Античит, защита регионов и активная модерация 24/7" },
];

const STATUS_ITEMS = [
  { name: "Основной сервер", version: "1.20.4", players: "87 / 200", ping: 12, online: true },
  { name: "Творческий режим", version: "1.20.4", players: "23 / 100", ping: 15, online: true },
  { name: "Мини-игры", version: "1.20.4", players: "0 / 50", ping: 0, online: false },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen font-golos">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-yellow-200/50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
            <span className="text-2xl animate-float">☀️</span>
            <span className="font-pacifico text-xl text-amber-600">SummerCraft</span>
          </button>

          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-amber-400 text-amber-900 shadow-md"
                    : "text-amber-800 hover:bg-amber-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollTo("packages")}
            className="summer-gradient text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
          >
            Задонатить
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative pt-16 min-h-screen flex flex-col">
        <div className="relative h-[70vh] overflow-hidden">
          <img
            src={HERO_IMAGE}
            alt="SummerCraft сервер"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FFFBEB]" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-transparent" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-amber-200 rounded-full px-4 py-1.5 mb-6 text-amber-700 text-sm font-medium">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block" />
                Сервер онлайн · 87 игроков
              </div>
              <h1 className="font-pacifico text-6xl md:text-8xl text-white mb-4 drop-shadow-2xl" style={{ textShadow: '0 2px 30px rgba(245,158,11,0.5)' }}>
                SummerCraft
              </h1>
              <p className="text-white/90 text-xl md:text-2xl font-medium drop-shadow-lg max-w-xl mx-auto mb-8">
                Лучшее лето начинается здесь. Поддержи сервер и получи уникальные привилегии!
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button
                  onClick={() => scrollTo("packages")}
                  className="summer-gradient text-white font-bold px-8 py-4 rounded-2xl shadow-2xl glow-sun hover:scale-105 transition-all duration-200 text-lg"
                >
                  🎁 Выбрать пакет
                </button>
                <button
                  onClick={() => scrollTo("about")}
                  className="bg-white/80 backdrop-blur-sm text-amber-800 font-bold px-8 py-4 rounded-2xl hover:bg-white transition-all duration-200 text-lg"
                >
                  О сервере
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-white/80 backdrop-blur-sm border-y border-amber-100">
          <div className="max-w-4xl mx-auto grid grid-cols-3 divide-x divide-amber-100 py-6">
            {[
              { value: "1200+", label: "Игроков зарегистрировано", icon: "Users" },
              { value: "3 года", label: "Сервер работает", icon: "Clock" },
              { value: "24/7", label: "Онлайн без выходных", icon: "Zap" },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-6">
                <div className="flex justify-center mb-1">
                  <Icon name={stat.icon} size={20} className="text-amber-500" />
                </div>
                <div className="font-pacifico text-2xl text-amber-600">{stat.value}</div>
                <div className="text-xs text-amber-700/70 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              💰 Поддержи сервер
            </span>
            <h2 className="font-pacifico text-5xl text-amber-800 mb-4">Донат-пакеты</h2>
            <p className="text-amber-700/70 text-lg max-w-xl mx-auto">
              Выбери пакет и получи уникальные привилегии. Все пакеты работают навсегда!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PACKAGES.map((pkg, i) => (
              <div
                key={pkg.id}
                className={`relative glass-card rounded-3xl overflow-hidden card-hover ${pkg.badge === "Популярный" ? "ring-2 ring-amber-400" : ""}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {pkg.badge && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full text-white bg-gradient-to-r ${pkg.color}`}>
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className={`bg-gradient-to-br ${pkg.color} p-8 text-white text-center`}>
                  <div className="text-6xl mb-3">{pkg.emoji}</div>
                  <h3 className="font-pacifico text-3xl mb-1">{pkg.name}</h3>
                  <p className="text-white/80 text-sm mb-4">{pkg.description}</p>
                  <div className="text-4xl font-black">{pkg.price}</div>
                  <div className="text-white/70 text-xs mt-1">навсегда</div>
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {pkg.perks.map((perk, j) => (
                      <li key={j} className="flex items-center gap-3 text-amber-800">
                        <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${pkg.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon name={perk.icon} size={14} className="text-white" />
                        </div>
                        <span className="text-sm font-medium">{perk.text}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full bg-gradient-to-r ${pkg.color} text-white font-bold py-3.5 rounded-2xl hover:opacity-90 transition-all duration-200 hover:scale-105 shadow-lg text-sm`}
                  >
                    Купить пакет
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-gradient-to-b from-transparent to-amber-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              🌿 Наш сервер
            </span>
            <h2 className="font-pacifico text-5xl text-amber-800 mb-4">О SummerCraft</h2>
            <p className="text-amber-700/70 text-lg max-w-xl mx-auto">
              Мы создали уютный уголок для любителей Minecraft с тёплой летней атмосферой
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {SERVER_FEATURES.map((feat, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 card-hover flex gap-4">
                <div className="w-12 h-12 rounded-2xl summer-gradient flex items-center justify-center flex-shrink-0 glow-sun">
                  <Icon name={feat.icon} size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-amber-900 text-lg mb-1">{feat.title}</h3>
                  <p className="text-amber-700/70 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-3xl p-8 text-center">
            <p className="text-amber-800/60 text-sm mb-2 font-medium">Адрес для подключения</p>
            <div className="inline-flex items-center gap-3 bg-amber-50 border-2 border-amber-200 rounded-2xl px-6 py-3">
              <Icon name="Server" size={20} className="text-amber-500" />
              <span className="font-mono font-bold text-amber-900 text-xl">play.summercraft.ru</span>
              <button className="text-amber-500 hover:text-amber-700 transition-colors">
                <Icon name="Copy" size={16} />
              </button>
            </div>
            <p className="text-amber-600/60 text-sm mt-3">Версия: Java 1.20.4 · Bedrock поддерживается</p>
          </div>
        </div>
      </section>

      {/* Status */}
      <section id="status" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              📡 Статус
            </span>
            <h2 className="font-pacifico text-5xl text-amber-800 mb-4">Статус серверов</h2>
            <p className="text-amber-700/70 text-lg">Обновляется каждые 5 минут</p>
          </div>

          <div className="space-y-4">
            {STATUS_ITEMS.map((srv, i) => (
              <div key={i} className="glass-card rounded-2xl p-5 card-hover">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full flex-shrink-0 ${srv.online ? "bg-green-500 shadow-[0_0_8px_rgba(74,222,128,0.8)]" : "bg-red-400"}`} />
                    <div>
                      <h3 className="font-bold text-amber-900">{srv.name}</h3>
                      <p className="text-amber-600/60 text-xs">Версия {srv.version}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <div className="text-center hidden sm:block">
                      <div className="font-bold text-amber-900">{srv.players}</div>
                      <div className="text-amber-600/60 text-xs">Игроков</div>
                    </div>
                    <div className="text-center hidden sm:block">
                      <div className={`font-bold ${srv.online ? "text-green-600" : "text-red-400"}`}>
                        {srv.online ? `${srv.ping} мс` : "—"}
                      </div>
                      <div className="text-amber-600/60 text-xs">Пинг</div>
                    </div>
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                      srv.online ? "bg-green-100 text-green-700" : "bg-red-100 text-red-600"
                    }`}>
                      {srv.online ? "Онлайн" : "Оффлайн"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <span className="inline-flex items-center gap-2 text-amber-600/60 text-sm">
              <Icon name="RefreshCw" size={14} />
              Последнее обновление: только что
            </span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-amber-100 bg-white/50 py-10 px-6 text-center">
        <div className="font-pacifico text-2xl text-amber-600 mb-2">SummerCraft</div>
        <p className="text-amber-700/50 text-sm mb-4">Лучшее лето начинается здесь ☀️</p>
        <div className="flex justify-center gap-6 text-amber-600/50 text-xs">
          <a href="#" className="hover:text-amber-600 transition-colors">Правила</a>
          <a href="#" className="hover:text-amber-600 transition-colors">Политика возврата</a>
          <a href="#" className="hover:text-amber-600 transition-colors">Поддержка</a>
        </div>
      </footer>
    </div>
  );
}