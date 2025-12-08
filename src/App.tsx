import './App.css';

export default function App() {
  return (
    <main className="decorated-bg fade-in-up min-h-screen bg-gradient-to-b from-black via-[#080808] to-black px-6 py-12 md:px-12 text-white">
      <header className="safe-area w-full max-w-6xl mx-auto mb-10 px-4 sm:px-0">
        <nav className="flex flex-col items-center text-center gap-4 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#E6C14F]">
            CSI SB CEP
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[0.7rem] font-semibold tracking-[0.2em] text-white/70 sm:justify-end">
            {[
              { label: 'Events', href: '#events' },
              { label: 'Membership', href: '#membership' },
              { label: 'Execom', href: '#executive-committee' },
              { label: 'Reach Us', href: '#reach-us' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-[#D4AF37]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section className="safe-area w-full max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-center gap-6 md:flex-col">
            <div className="hero-logo">
              <img src="/src/assets/CSI.png" alt="Primary logo placeholder" />
              <span className="hero-badge">CSI</span>
            </div>
            <div className="hero-logo">
              <img src="/src/assets/CSICEP.png" alt="Secondary logo placeholder" />
              <span className="hero-badge">CSI CEP</span>
            </div>
          </div>

          <div className="flex-1 space-y-6 text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#E6C14F]">
              Innovation • Community • Excellence
            </p>
            <h1 className="gold-gradient-text text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              CSI SB CEP
            </h1>
            <p className="mx-auto md:mx-0 max-w-2xl text-base md:text-lg text-white/80">
              Empowering technologists, creators, and leaders through curated programs, mentorship, and collaborative research opportunities within the CSI student body.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <a
                href="https://example.com/join"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-[#D4AF37] bg-black px-8 py-3 text-sm font-semibold uppercase tracking-widest text-[#D4AF37] transition duration-200 hover:border-[#E6C14F] hover:text-[#E6C14F] hover:shadow-[0_0_25px_rgba(230,193,79,0.55)]"
              >
                Join The Chapter
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="announcements" className="safe-area w-full max-w-6xl mx-auto mt-10">
        <div className="rounded-[28px] border border-[#C8A43B] bg-[#050505] px-8 py-10 shadow-[0_0_65px_rgba(212,175,55,0.08)]">
          <h2 className="text-lg font-semibold tracking-[0.3em] text-[#D4AF37]">
            Announcements
          </h2>
          <ul className="mt-6 space-y-4 text-left text-white/85">
            <li className="border-l-2 border-[#D4AF37] pl-4">
              <a
                href="https://example.com/announcements/symposium"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-[#D4AF37]"
              >
                Upcoming tech symposium schedule drops on Monday — stay tuned.
              </a>
            </li>
            <li className="border-l-2 border-[#1f1f1f] pl-4">
              <a
                href="https://example.com/announcements/membership-drive"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-[#D4AF37]"
              >
                Membership drive opens next week; early registrations get perks.
              </a>
            </li>
            <li className="border-l-2 border-[#1f1f1f] pl-4">
              <a
                href="https://example.com/announcements/committee-meet"
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-200 hover:text-[#D4AF37]"
              >
                Executive committee meet-up this Friday at 5 PM in the innovation lab.
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="about" className="safe-area w-full max-w-6xl mx-auto mt-12">
        <div className="rounded-[32px] border border-[#1f1f1f] bg-[#050505]/90 px-8 py-12 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#E6C14F]">
            About CSI
          </p>
          <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">
            Computer Society of India (CSI) is the first and largest body of computer professionals in India. It was started on 6 March 1965 by a few computer professionals and has now grown to be the national body representing computer professionals.
          </p>
          <p className="mt-5 text-sm sm:text-base text-white/75 leading-relaxed">
            Being closely associated with Students the Society has developed a well-established net-work of “Student Branches” all across the country. CSI has 488 student branches with more than 90,000 Student Volunteers across the nation. The activities conducted for the Students associated with the Society include lecture meetings, seminars, conferences, training programmes, programming contests and practical visits to installations. CSI has a strong Educational Directorate based at Chennai which undertakes activities related to Certification of professionals related to the latest technologies. Its recent initiative of distance education in the Business Domain areas offers technology enabled learning supported by personal counseling & expert advice. In an ever changing environment, CSI offers professional counseling being a great need of the hour. And this is done by being in close contact with it’s young members through various events, conferences, symposia to name a few. CSI regularly organises SEARCC Programming Contest, Alan Turning Quiz, Discover Thinking Project Contest, On-line Programming Contest etc. for the students.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { value: '15,000+', label: 'Members' },
              { value: '780+', label: 'Institutes' },
              { value: '25+', label: 'Industries' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border-2 border-[#D4AF37]/70 bg-gradient-to-b from-[#141313] to-[#050505] px-6 py-5 ring-1 ring-inset ring-[#1f1607] shadow-[0_0_35px_rgba(212,175,55,0.25)]"
              >
                <p className="text-2xl font-semibold text-[#F1D27E]">{stat.value}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.35em] text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="safe-area w-full max-w-6xl mx-auto mt-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D4AF37]">
          CSI SB CEP Chapter
        </p>
        <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-white/80 max-w-4xl mx-auto">
          <p>
            The CSI Student Branch at the College of Engineering Perumon is a vibrant hub where passionate tech enthusiasts come together to learn, build, and innovate! As part of the prestigious Computer Society of India (CSI)—the country’s oldest and largest body of computer professionals—our student branch opens the door to a world of opportunities, experiences, and skill-building like never before.
          </p>
          <p>
            We aim to empower students with the knowledge, confidence, and exposure they need to excel in the ever-evolving tech landscape. From hands-on workshops and coding challenges to expert talks, community projects, and tech events, CSI SB Perumon is all about inspiring students to push boundaries and transform ideas into impactful solutions.
          </p>
          <p>
            With a focus on collaboration, creativity, and continuous learning, CSI helps students stay future-ready while building a strong network of peers, mentors, and industry leaders. Whether you're a beginner exploring tech or a seasoned developer aiming higher, CSI SB Perumon gives you the perfect platform to grow, lead, and shine.
          </p>
          <div className="flex justify-center pt-2">
            <span className="tagline-callout">
              <span>Learn.</span>
              <span>Build.</span>
              <span>Inspire.</span>
            </span>
          </div>
          <p className="text-[#D4AF37] font-semibold">
            That’s the spirit of CSI SB Perumon.
          </p>
        </div>
      </section>
    </main>
  );
}
