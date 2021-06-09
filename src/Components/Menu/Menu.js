import "./menu.css";

const Menu = ({onScroll}) => {

    return (
        <nav className={`container-menu ${onScroll > 20 ? "scroll" : null}`}>
            <ul>
                <li><a>inicio</a></li>
                <li><a>genre</a>
                    <ul className="children">
                        <li><a>accion</a></li>
                        <li><a>horror</a></li>
                        <li><a>comedy</a></li>
                        <li><a>adventure</a></li>
                        <li><a>science fiction</a></li>
                        <li><a>crime</a></li>
                        <li><a>romance</a></li>
                    </ul>
                </li>
                <li><a>ranking</a></li>
                <li><a>contact</a></li>
            </ul>
        </nav>
    )

}

export default Menu;