import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'kaustubha.ev@gmail.com', href: 'mailto:kaustubha.ev@gmail.com' },
    { icon: Phone, label: 'Phone', value: '669-204-6927', href: 'tel:669-204-6927' },
    { icon: MapPin, label: 'Location', value: 'San Jose, CA', href: null },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Kaustubha-09' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/kaustubha-ve' },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6">Let's Work Together</h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          I'm actively seeking full-time SWE/AI/ML opportunities. Feel free to reach out if you'd like to collaborate or discuss opportunities!
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info) => (
            <div key={info.label} className="bg-white/5 backdrop-blur-sm rounded-lg p-6">
              <info.icon className="mx-auto mb-3" size={24} />
              <p className="text-sm text-slate-400 mb-1">{info.label}</p>
              {info.href ? (
                <a href={info.href} className="text-white hover:text-blue-400 transition-colors">
                  {info.value}
                </a>
              ) : (
                <p className="text-white">{info.value}</p>
              )}
            </div>
          ))}
        </div>

        <a
          href="mailto:kaustubha.ev@gmail.com"
          className="inline-block px-8 py-4 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors mb-12"
        >
          Send Me an Email
        </a>
        
        <div className="flex justify-center gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              aria-label={link.label}
            >
              <link.icon size={24} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}