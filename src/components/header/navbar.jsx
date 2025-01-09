import { NavLink } from "react-router-dom";
import iconOfSociety from "../../assets/formcarry_logo.svg"

const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <div className="navbar-container">
                    <NavLink to="/"><img src={iconOfSociety} alt="formcarry's logo" className="logo" /></NavLink>
                    <div className="navigation-links">
                        <div className="link">

                            <NavLink to="/examples">Examples</NavLink>
                        </div>
                        <div className="link">

                            <NavLink to="/form_generator">Form Generator</NavLink>
                        </div>
                        <div className="link">

                            <NavLink to="/integrations">Integrations</NavLink>
                        </div>
                        <div className="link">

                            <NavLink to="/docs">Documents</NavLink>
                        </div>
                        <div className="link">

                            <NavLink to="/pricing">Tarifs</NavLink>
                        </div>
                    </div>
                    <div className="navigation-links-connection">
                        <div className="link">

                            <NavLink to="/login">Login</NavLink>
                        </div>
                        <div className="link">

                            <NavLink to="/register" className="register">Sign up</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;