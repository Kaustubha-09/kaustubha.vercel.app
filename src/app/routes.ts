import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { EducationPage } from './pages/EducationPage';
import { SkillsPage } from './pages/SkillsPage';
import { LeadershipPage } from './pages/LeadershipPage';
import { ContactPage } from './pages/ContactPage';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: AboutPage },
      { path: 'experience', Component: ExperiencePage },
      { path: 'projects', Component: ProjectsPage },
      { path: 'education', Component: EducationPage },
      { path: 'skills', Component: SkillsPage },
      { path: 'leadership', Component: LeadershipPage },
      { path: 'contact', Component: ContactPage },
      { path: '*', Component: NotFound },
    ],
  },
]);
