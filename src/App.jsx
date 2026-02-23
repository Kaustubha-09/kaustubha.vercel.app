import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import { Home, AboutMe, Experience, Education, Projects, Skills, Contact, NotFound } from "./pages";
import "./index.css";

function App() {
  // Handle GitHub Pages redirect from 404.html
  React.useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const redirect = searchParams.get('redirect');
    
    if (redirect) {
      // Remove the redirect parameter and navigate to the correct path
      window.history.replaceState(null, null, redirect);
    } else if (sessionStorage.getItem('redirect')) {
      // Fallback: use sessionStorage if query param is missing
      const storedRedirect = sessionStorage.getItem('redirect');
      sessionStorage.removeItem('redirect');
      if (storedRedirect !== window.location.pathname) {
        window.history.replaceState(null, null, storedRedirect);
      }
    }
  }, []);

  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
