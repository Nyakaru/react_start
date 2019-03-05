import React from 'react';
import '../assets/styles/landingpage.css';
import { Link } from 'react-router-dom';

const Landing = () => (
<div className="wrapper ui middle align center">  

    <header>
    <button className=" ui large teal button" type="button"> <Link to="signup">Sign Up</Link></button>
    <button className=" ui large teal button" type="submit"> <Link to="login">Log In</Link></button>
    </header>
    <section class="main">
    <h3>Store Manager is a web application that helps store owners manage sales and product inventory records.
        </h3>
        Developed by Kinara Nyakaru
    </section>

</div>
)

export default Landing;
