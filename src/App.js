import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/experience';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Portfolio from './components/projects/Portfolio';
import ChatPage from './components/chat/ChatPage.js'; // <- New Chat Page

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Normal Website Route */}
        <Route path="/" element={
          <>
            <Header />
            <main className='main'>
              <Home />
              <About />
              <Skills />
              <Experience />
              <Qualification />
              <Portfolio />
              <Contact />
            </main>
            <Footer />
          </>
        } />

        {/* Chat Page Route */}
        <Route path="/chat" element={<ChatPage />} />

      </Routes>
    </Router>
  );
}

export default App;
