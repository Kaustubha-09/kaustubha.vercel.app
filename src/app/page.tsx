import { Nav }        from '@/components/Nav/Nav';
import { VideoIntro } from '@/components/VideoIntro/VideoIntro';
import { About }      from '@/components/About/About';
import { Experience } from '@/components/Experience/Experience';
import { Projects }   from '@/components/Projects/Projects';
import { Awards }     from '@/components/Awards/Awards';
import { Moments }    from '@/components/Moments/Moments';
import { Leadership } from '@/components/Leadership/Leadership';
import { Contact }    from '@/components/Contact/Contact';

export default function Home() {
  return (
    <main>
      <Nav />
      <VideoIntro />
      <About />
      <Experience />
      <Projects />
      <Awards />
      <Moments />
      <Leadership />
      <Contact />
    </main>
  );
}
