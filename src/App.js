import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Utilisation de Routes au lieu de Switch
import Header from './blocks/Header';
import Banner from './blocks/Banner';
import Presentation from './blocks/Presentation';
import Skills from './blocks/Skills';
import Projects from './blocks/Projects';
import Contact from './blocks/Contact';
import Footer from './blocks/Footer';
import NotFound from './NotFound'; // Assurez-vous que ce fichier existe et est correctement exporté
import { ProjectsProvider } from './contexts/projects_context';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={
                    <>
                        <Banner />
                        <Presentation />
                        <Skills />
                        <ProjectsProvider>
                            <Projects />
                        </ProjectsProvider>
                        <Contact />
                        <Footer />
                    </>
                } />
                {/* Ajout des autres routes si nécessaire */}
                
                {/* Gestion de la page d'erreur 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}

export default App;
