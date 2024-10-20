import { useState } from 'react';
import Modal from '../../components/Modal';

/**
 * Composant affichant le Footer
 * @returns JSX.element
 */
function Footer() {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <footer className="footer">
            <div className="footer__logos">
                <a href="https://github.com/StellaMtc/" target="__blank">
                    <img
                        src="/../../assets/icons/github.png"
                        alt="logo github"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/estelle-mitchovitch"
                    target="__blank"
                >
                    <img src="/../../assets/icons/in.png" alt="logo linkedIn" />
                </a>
            </div>
            <div>
                © {new Date().getFullYear()} Tous droits réservés, Estelle MITCHOVITCH
            </div>
            <button
                className="footer__mention"
                onClick={() => setIsOpened(true)}
            >
                Mentions légales
            </button>
            <Modal isOpen={isOpened} handleClose={() => setIsOpened(false)}>
                <h3>Mentions légales</h3>
                <div>
                    <h4>Éditeur</h4>
                    <p>
                        Estelle MITCHOVITCH <br />
                        12 rue du Chandoiseau <br />
                        49080 Bouchemaine <br />
                        France <br />
                        Téléphone : +33 (0)7.76.58.15.24
                    </p>
                </div>
            </Modal>
        </footer>
    );
}

export default Footer;