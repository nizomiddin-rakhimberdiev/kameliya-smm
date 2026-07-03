import { useState } from 'react'
import Icon from './Icon'
import './App.css'

const NAV_LINKS = [
  { href: '#about', label: 'Men haqimda' },
  { href: '#services', label: 'Xizmatlar' },
  { href: '#skills', label: 'Ko’nikmalar' },
  { href: '#portfolio', label: 'Postlar' },
  { href: '#results', label: 'Natijalar' },
  { href: '#contact', label: 'Bog’lanish' },
]

const STATS = [
  { value: '158K+', label: 'Instagram obunachi' },
  { value: '246+', label: 'Foydali post va reels' },
  { value: '3+', label: 'Yillik SMM tajriba' },
  { value: '100%', label: 'Natijaga yo’naltirilgan' },
]

const STRENGTHS = [
  'SMMda natijaga garantiya bera oladigan mutaxassislardan biri',
  'Xalqaro toifadagi SMM mutaxassis (🇺🇿 🇷🇺 🇰🇿)',
  'KBM Agency — O’zbekistonda natijaga kafolat beruvchi yagona SMM agentligi asoschisi',
  '150K+ auditoriyani qiziqarli va foydali kontent bilan band qilib turadi',
]

const SERVICES = [
  {
    icon: 'chart' as const,
    title: 'SMM Boshqaruvi',
    desc: 'Instagram va Telegram sahifalarni to’liq boshqarish, kontent-plan tuzish va statistikani muntazam tahlil qilish.',
  },
  {
    icon: 'target' as const,
    title: 'Target Reklama',
    desc: 'Facebook Ads Manager orqali byudjetni tejab, aniq auditoriyaga mo’ljallangan samarali reklama sozlash.',
  },
  {
    icon: 'audit' as const,
    title: 'Instagram Diagnostika',
    desc: 'Sahifangizni professional audit qilib, o’sishga to’sqinlik qilayotgan kamchiliklarni aniqlash.',
  },
  {
    icon: 'camera' as const,
    title: 'Kontent va Reels Strategiyasi',
    desc: 'Trendga mos, ko’rishlar sonini oshiradigan Reels, Stories va post formatlarini ishlab chiqish.',
  },
  {
    icon: 'users' as const,
    title: 'Shogirdlik / Praktikum',
    desc: 'SMM sohasida amaliy bilim beruvchi individual va guruh shaklidagi mentorlik dasturlari.',
  },
  {
    icon: 'brand' as const,
    title: 'Brend Rivojlantirish',
    desc: 'Shaxsiy yoki biznes brendingizni ijtimoiy tarmoqlarda tanilgan va ishonchli qilib shakllantirish.',
  },
]

const SKILLS = [
  { label: 'Instagram Marketing', value: 96 },
  { label: 'Target Reklama (Facebook Ads)', value: 93 },
  { label: 'Kontent Strategiya', value: 92 },
  { label: 'SMM Boshqaruvi', value: 95 },
  { label: 'Reels / Video Prodakshn', value: 88 },
  { label: 'Mentorlik va Ta’lim', value: 91 },
  { label: 'Sahifa Diagnostikasi', value: 89 },
  { label: 'Copywriting', value: 84 },
]

const TOOLS = [
  'Meta Business Suite',
  'Canva Pro',
  'CapCut',
  'Facebook Ads Manager',
  'Instagram Insights',
  'Telegram',
]

const PORTFOLIO = [
  { title: 'SMM ishi odamlarga qanday ko’rinadi?', tag: 'Sanoat sirlari' },
  { title: 'Yomon xizmat, ko’p mijoz — nega?', tag: 'Tahlil' },
  { title: 'Target vs SMM', tag: 'Qiyoslash' },
  { title: 'Instagram algoritmlari o’zgardi!', tag: 'Yangilik' },
  { title: 'Stories oxvatini pulga ko’taramiz', tag: 'Strategiya' },
  { title: 'Mehnat natijasi', tag: 'Case-study' },
]

const RESULTS = [
  { value: '30 000+', label: 'obunachi — bor-yo’g’i 15 kunda', tag: 'Instagram o’sish' },
  { value: '10 000+', label: 'obunachi — atigi 1 oyda', tag: 'Instagram o’sish' },
  { value: '5X', label: 'sotuvlar o’sishi', tag: 'Stilist keysi' },
  { value: '3 000 000 so’m', label: 'sotuv — bor-yo’g’i 20$ target byudjeti bilan, 3 kunda', tag: 'Target reklama' },
  { value: '812 lid', label: '124$ target byudjeti bilan', tag: 'Open Grants keysi' },
  { value: '$10 000', label: 'mijozga tejashga yordam berildi', tag: 'Konsalting' },
]

const CASES = [
  { title: 'Plastik xirurg', desc: '5 oylik hamkorlik davomida sahifa va bron oqimi kuchaytirildi' },
  { title: 'Rieltor', desc: 'Target reklama orqali sifatli lidlar oqimi yo’lga qo’yildi' },
  { title: 'Kosmetolog', desc: 'Kontent va target birga ishlab, band qilinishlar oshdi' },
  { title: 'Shaxsiy brend — pediatr', desc: 'Oyiga 10K+ o’sish bilan ishonchli shaxsiy brend yaratildi' },
]

const PARTNERS = [
  'Kerasys Hair Clinic',
  'Royal Gardens Resort',
  'Chinor Medical Center',
  'KAIS Aesthetic & Beauty',
  'RoNo Bakery',
  'Buran Consulting',
  'Open Grants',
  'Feya',
  'Rits Tour',
  'La Kandil',
  'Dust Busters',
  'Phonex',
  'BUKA',
  'isystem IT Academy',
]

const TG_BOT_TOKEN = '8839581442:AAEqZczGR3hrnXklHQ_8LsLEboy1HksrOcU'
const TG_CHAT_IDS = ['726130790', '8675594932']

function App() {
  const [formState, setFormState] = useState({ name: '', contact: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    const text = [
      '📩 Kameliya SMM saytidan yangi xabar',
      '',
      `👤 Ism: ${formState.name}`,
      `📞 Kontakt: ${formState.contact}`,
      `💬 Xabar: ${formState.message}`,
    ].join('\n')
    try {
      const results = await Promise.all(
        TG_CHAT_IDS.map((chatId) =>
          fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: chatId, text }),
          }),
        ),
      )
      if (!results.some((r) => r.ok)) throw new Error('Telegram send failed')
      setStatus('sent')
      setFormState({ name: '', contact: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <header className="header">
        <div className="container nav">
          <a href="#top" className="logo">
            Kameliya <span>SMM</span>
          </a>
          <nav className="nav-links">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn btn-primary nav-cta">
            Konsultatsiya
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero section">
          <div className="glow-blob blob-1" />
          <div className="glow-blob blob-2" />
          <div className="container hero-inner">
            <div className="hero-text">
              <span className="hero-badge">
                <Icon name="sparkle" size={16} /> SMM &middot; Target &middot; Marketing
              </span>
              <h1 className="hero-title">
                SMM Mutaxassisi &amp;
                <br />
                <span className="accent">Kontent Strategisti</span>
              </h1>
              <p className="hero-desc">
                Salom, men <strong>Kamilla Abdullaeva</strong> &mdash; SMMda natijaga garantiya
                bera oladigan mutaxassislardan biriman. 158K+ auditoriyaga ega Instagram
                sahifamda SMM, Target va marketing bo’yicha amaliy bilim ulashaman.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  Bepul konsultatsiya <Icon name="arrow" size={18} />
                </a>
                <a
                  href="https://t.me/kameliya_smm_marketing"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  <Icon name="telegram" size={18} /> Telegram
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="avatar-ring">
                <div className="avatar-placeholder">KA</div>
                <img
                  src="/avatar.jpg"
                  alt="Kamilla Abdullaeva"
                  className="avatar-img"
                  onError={(e) => {
                    ;(e.currentTarget as HTMLImageElement).style.display = 'none'
                  }}
                />
              </div>
              <div className="float-badge badge-1">
                <span className="badge-value">158K+</span>
                <span className="badge-label">Followers</span>
              </div>
              <div className="float-badge badge-2">
                <span className="badge-value">246+</span>
                <span className="badge-label">Postlar</span>
              </div>
              <div className="float-badge badge-3">
                <Icon name="check" size={16} /> KBM Agency
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about">
          <div className="container about-grid">
            <div>
              <span className="section-tag">Tanishuv</span>
              <h2 className="section-title">
                Men haqimda <span className="accent">Kamilla Abdullaeva</span>
              </h2>
              <p className="section-subtitle" style={{ maxWidth: 560, marginBottom: 28 }}>
                Entrepreneur &middot; Pro SMM | Target | Marketing. Xalqaro toifadagi SMM
                mutaxassisi sifatida O’zbekiston, Rossiya va Qozog’iston bo’ylab
                mijozlarga xizmat ko’rsataman va <strong>KBM Agency</strong> jamoasiga
                boshchilik qilaman.
              </p>
              <ul className="about-list">
                {STRENGTHS.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-stats">
              {STATS.map((stat) => (
                <div key={stat.label} className="stat-card card">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section services">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Xizmatlar</span>
              <h2 className="section-title">
                Qanday yordam bera <span className="accent">olaman?</span>
              </h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Sahifangiz sotuvga aylanishi uchun kerakli barcha xizmatlar bir joyda.
              </p>
            </div>
            <div className="services-grid">
              {SERVICES.map((service) => (
                <div key={service.title} className="service-card card">
                  <div className="service-icon">
                    <Icon name={service.icon} size={26} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Ko’nikmalar</span>
              <h2 className="section-title">
                Nimalarni <span className="accent">bilaman?</span>
              </h2>
            </div>
            <div className="skills-grid">
              <div className="skill-bars">
                <h4 className="skills-col-title">Asosiy ko’nikmalar</h4>
                {SKILLS.map((skill) => (
                  <div key={skill.label} className="skill-row">
                    <div className="skill-row-top">
                      <span>{skill.label}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-fill" style={{ width: `${skill.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="skills-side">
                <div className="card tools-card">
                  <h4 className="skills-col-title">Ishlatiladigan vositalar</h4>
                  <div className="tool-tags">
                    {TOOLS.map((tool) => (
                      <span key={tool} className="tool-tag">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="card cert-card">
                  <h4 className="skills-col-title">Sertifikatlar</h4>
                  <ul className="cert-list">
                    <li>
                      <Icon name="sparkle" size={16} /> SMM va Target Reklama bo’yicha
                      malaka sertifikati
                    </li>
                    <li>
                      <Icon name="sparkle" size={16} /> Digital Marketing ixtisoslashtirilgan
                      kurs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PORTFOLIO */}
        <section id="portfolio" className="section portfolio">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Kontent namunalari</span>
              <h2 className="section-title">
                Postlar va <span className="accent">natijalar</span>
              </h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Instagram sahifamdagi eng mashhur mavzulardan namunalar.
              </p>
            </div>
            <div className="portfolio-grid">
              {PORTFOLIO.map((item) => (
                <a
                  key={item.title}
                  href="https://www.instagram.com/kameliya_smm/"
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio-card"
                >
                  <span className="portfolio-tag">{item.tag}</span>
                  <span className="portfolio-title">{item.title}</span>
                  <span className="portfolio-arrow">
                    <Icon name="arrow" size={18} />
                  </span>
                </a>
              ))}
            </div>
            <div className="portfolio-cta">
              <a
                href="https://www.instagram.com/kameliya_smm/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                <Icon name="instagram" size={18} /> Instagramda ko’proq ko’rish
              </a>
            </div>
          </div>
        </section>

        {/* RESULTS */}
        <section id="results" className="section results">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">KBM Agency natijalari</span>
              <h2 className="section-title">
                Raqamlarda <span className="accent">natijalar</span>
              </h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Men boshchilik qilayotgan <strong>KBM Agency</strong> jamoasi hamkorlik qilgan
                haqiqiy loyihalardan namunalar.
              </p>
            </div>
            <div className="results-grid">
              {RESULTS.map((item) => (
                <div key={item.label} className="card result-card">
                  <span className="result-tag">{item.tag}</span>
                  <div className="result-value">{item.value}</div>
                  <div className="result-label">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="cases-grid">
              {CASES.map((c) => (
                <div key={c.title} className="case-card">
                  <span className="case-dot" />
                  <div>
                    <div className="case-title">{c.title}</div>
                    <div className="case-desc">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="section partners">
          <div className="container">
            <div className="section-head" style={{ marginBottom: 40 }}>
              <span className="section-tag">Hamkorlarimiz</span>
              <h2 className="section-title">
                KBM Agency bilan <span className="accent">hamkor brendlar</span>
              </h2>
            </div>
            <div className="partners-strip">
              {PARTNERS.map((p) => (
                <span key={p} className="partner-tag">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact">
          <div className="container">
            <div className="section-head">
              <span className="section-tag">Bog’lanish</span>
              <h2 className="section-title">
                Loyihangiz haqida <span className="accent">gaplashamiz</span>
              </h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Savolingiz bormi yoki hamkorlik qilmoqchimisiz? Xabar qoldiring.
              </p>
            </div>
            <div className="contact-grid">
              <form className="card contact-form" onSubmit={handleSubmit}>
                <h4 className="skills-col-title">Xabar yuborish</h4>
                <label>
                  Ismingiz
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Ismingizni kiriting"
                  />
                </label>
                <label>
                  Telegram yoki telefon
                  <input
                    type="text"
                    required
                    value={formState.contact}
                    onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
                    placeholder="@username yoki +998 ..."
                  />
                </label>
                <label>
                  Xabaringiz
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Loyihangiz haqida qisqacha yozing"
                  />
                </label>
                <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
                  {status === 'sending'
                    ? 'Yuborilmoqda…'
                    : status === 'sent'
                      ? 'Yuborildi ✓'
                      : 'Yuborish'}{' '}
                  <Icon name="send" size={16} />
                </button>
                {status === 'error' && (
                  <p className="form-error">
                    Xabar yuborilmadi. Iltimos, qayta urinib ko’ring yoki Telegram orqali
                    bog’laning.
                  </p>
                )}
              </form>

              <div className="card contact-direct">
                <h4 className="skills-col-title">Bevosita bog’laning</h4>
                <a
                  className="direct-item"
                  href="tel:+998957757565"
                >
                  <Icon name="send" size={20} />
                  <div>
                    <div className="direct-label">Telefon</div>
                    <div className="direct-value">+998 95 775 75 65</div>
                  </div>
                </a>
                <a
                  className="direct-item"
                  href="https://t.me/kameliya_smm_agency"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="telegram" size={20} />
                  <div>
                    <div className="direct-label">Telegram</div>
                    <div className="direct-value">t.me/kameliya_smm_agency</div>
                  </div>
                </a>
                <a
                  className="direct-item"
                  href="https://www.instagram.com/kameliya_smm/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="instagram" size={20} />
                  <div>
                    <div className="direct-label">Instagram (shaxsiy)</div>
                    <div className="direct-value">@kameliya_smm</div>
                  </div>
                </a>
                <a
                  className="direct-item"
                  href="https://www.instagram.com/kbm_agency_uz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon name="brand" size={20} />
                  <div>
                    <div className="direct-label">Agentlik</div>
                    <div className="direct-value">@kbm_agency_uz</div>
                  </div>
                </a>
                <div className="direct-note">
                  Ish vaqti: <strong>Dushanba &ndash; Shanba</strong>
                  <br />
                  09:00 &ndash; 19:00
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span className="logo">
            Kameliya <span>SMM</span>
          </span>
          <p>&copy; {new Date().getFullYear()} Kamilla Abdullaeva &middot; Barcha huquqlar himoyalangan</p>
        </div>
      </footer>
    </>
  )
}

export default App
