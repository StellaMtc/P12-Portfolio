import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Timeline from '../../components/Timeline';
import TimelineItem from '../../components/TimelineItem';
import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

/**
 * Composant affichant la section "Présentation"
 * @returns JSX.element
 */
function Presentation() {
    return (
        <section id="presentation" className="container presentation">
            <div className="presentation__main">
                <div className="presentation__text">
                    <h2 className="presentation__title">Présentation</h2>
                    <p>
                        Bonjour, moi c'est Estelle MITCHOVITCH,{' '}
                        <strong>développeur web junior</strong> spécialisée dans le <strong>front-end</strong> ! Passionnée par
                        les nouvelles technologies, j'ai découvert le code il y
                        a quelque temps et cela m'a immédiatement captivée.
                        J'ai donc pris la décision de me reconvertir en tant
                        qu'<strong>intégrateur web</strong> en suivant
                        une <strong>formation diplômante</strong> chez
                        OpenClassrooms.
                    </p>
                    <div className="presentation__links">
                    <Button
                            target="_blank"
                            title="Télécharger mon CV"
                            url="/assets/cv.pdf"
                            icon={<FontAwesomeIcon icon={faFilePdf} />}
                        />

                        <a
                            href="https://www.linkedin.com/in/estelle-mitchovitch"
                            target="__blank"
                        >
                            <img
                                src="/../../assets/icons/linkedin.png"
                                alt="logo de linkedIn"
                                width="128"
                            />
                        </a>
                    </div>
                </div>
                <div className="presentation__image">
                    <picture>
                        <source
                            srcSet="/assets/portrait.webp"
                            type="image/webp"
                        />
                        <img src="/assets/portrait.jpg" alt="Estelle MITCHOVITCH" />
                    </picture>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Formations</Tab>
                    <Tab>Emplois</Tab>
                </TabList>

                <TabPanel>
                    <Timeline>
                    <TimelineItem
                            title="2002"
                            subtitle="BTS TRANSPORT LOGISTIQUE"
                        />
                        <TimelineItem
                            title="2020"
                            subtitle="DAEU A"
                            content="Option français,anglais,espagnol,SVT"
                        />
                        <TimelineItem
                            title="2021"
                            subtitle="MOOC ENSEIGNER LE FLE"
                            content="Enseignement français langue étrangère"
                        />
                        <TimelineItem
                            title="2024"
                            subtitle="INTEGRATEUR WEB"
                            content="Titre RNCP niveau 5 - Openclassrooms"
                        />
                    </Timeline>
                </TabPanel>
                <TabPanel>
                    <Timeline>
                    <TimelineItem
                            title="2000-2015"
                            subtitle="ASSISTANTE SERVICE CLIENTS"
                            content="BUT,STREAM,DDS Logistics, Nec Computers,Fleurs Eclair"
                        />
                        <TimelineItem
                            title="2017-2018"
                            subtitle="GERANTE E-COMMERCE"
                            content="La Halle du Secours"
                        />
                        <TimelineItem
                            title="2022-2023"
                            subtitle="ENSEIGNANTE DE FLE"
                            content="Italki"
                        />
                    </Timeline>
                </TabPanel>
            </Tabs>
        </section>
    );
}

export default Presentation;