import logo from "../../images/Logo-FilmWeb.png";

import "./footer.css";

const Footer = () => {
    return (
        <>
        <footer>
            <div className="footer-logo">
                <img src={logo}></img>
            </div>
            <section className="box-social-network">
                <h4>follow me</h4>
                <article className="icons">
                    <a href="https://www.instagram.com/santiagogr19/" target="_blank"><span className="icon-instagram"></span></a>
                    <a href="" target="_blank"><span className="icon-facebook"></span></a>
                    <a href="https://www.linkedin.com/in/santiago-guillen-ramirez-b162211a7/" target="_blank"><span className="icon-linkedin"></span></a>
                </article>

                <article className="box-gmail">
                    <a href="mailto:santiagogui1909@gmail.com" target="_blank"><span className="icon-gmail"></span>send email</a>
                </article>
            </section>
            <section className="box-github">
                <h4>look at my repository</h4>
                <a href="https://github.com/santiagogui1909" target="_blank"><span className="icon-github-circled"></span></a>
            </section>
        </footer>
        <div className="copy">
            <p>Copyright &copy; 2021 - MovieWeb</p>
        </div>
        </>
    );
};

export default Footer;