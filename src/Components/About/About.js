import img from '../../images/cine.svg'

import "./about.css";

const About = () => {
    return (
        <div className="about">
            <header>
                <h2>¿what is movieWeb?</h2>
            </header>

            <section className="box-about">
                <article>
                    <p>MovieWeb is a page where you can search for movies and find information
                about them, duration, score, year of release.
                
                It has a ranking section to know the best movies to date, keep you updated
                on all the new series and movie releases.</p>
                </article>

                <div className="btn-ranking">
                    <button><a>see ranking</a></button>
            </div>
            </section>

            

            <section className="container-info">
                <article className="information">
                    <header>
                        <h3>¿que podras encontrar?</h3>
                    </header>
                    <ul>
                        <li>Series</li>
                        <li>Peliculas</li>
                        <li>Informacion detallada</li>
                        <li>Novedades en cartelera</li>
                        <li>las mejores peliculas del momento</li>
                    </ul>
                </article>

                <article className="img-box">
                    <img src={img}></img>
                </article>
            </section>

        </div>
    );
};

export default About;