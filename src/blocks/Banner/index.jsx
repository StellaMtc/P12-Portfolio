import Button from '../../components/Button';
import smoothScroll from '../../helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

/**
 * Composant affichant la section "Banner"
 * @returns JSX.element
 */
function Banner() {
    return (
        <section id="banner" className="banner">
            <div className="banner__container container">
                <div className="banner__content">
                    <h1 className="banner__welcome">
                        Bienvenue, je suis Estelle MITCHOVITCH <br />
                        <span className="banner__title">DÉVELOPPEUR WEB</span>
                    </h1>
                    <Button
                        title="Mes projets"
                        icon={<FontAwesomeIcon icon={faArrowDown} />}
                        onClick={(e) => smoothScroll(e, 'projects')}
                    />
                </div>
                <div className="banner__image">
                    <img
                        src="/assets/computer.png"
                        alt="femme devant un ordinateur assis a un bureau"
                    />
                </div>
            </div>
        </section>
    );
}

export default Banner;