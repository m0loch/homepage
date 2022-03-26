import '../css/about.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';

function calcAge() {
    const today = new Date();
    const bday = new Date("1 July 1984");

    let age = today.getFullYear() - bday.getFullYear();

    let month = today.getMonth() - bday.getMonth();
    if (month < 0 || ((month === 0) && today.getDate() < bday.getDate())) {
        // No b-day yet, this year
        age--;
    }

    return age;
}

function About() {
    return (
        <div>
            <section className="main">
            <div className="main-text">
                <h1>About me</h1>
                <br/>
                <div className="container">
                    <p>Hi, my name is Romeo Graifenberg,</p>
                    <p>born near <a href="https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=it&msa=0&ll=46.06286390189817%2C11.146944484837856&spn=0.02025%2C0.058193&z=12&om=0&mid=1KXpKOoOTpXmqH9Hhr7aah7l2CkI">Trento, Italy</a> {calcAge()} years ago, I'm currently a web developer working for <a href="https://ivemind.com/">Ivemind</a> with a penchant for game development.</p>

                    <h2>Hobbies</h2>
                    <ul>
                        <li>Loves JRPGs and indie games</li>
                        <li>Former Magic the Gathering player</li>
                        <li>Former RTS player (Starcraft, Warcraft 3)</li>
                        <li>Former Go player</li>
                        <li>Football lover (just don't call it "soccer"...)</li>
                        <li>Loves any kind of music - as long as it's metal</li>
                    </ul>

                    <h2>You can reach me via any of the following:</h2>
                    <br/>
                    
                    <a className="contact" href="https://twitter.com/ilmeodev"><TwitterIcon/> @ilmeodev</a>
                    <a className="contact" href="https://github.com/m0loch"><GitHubIcon/>m0loch on GitHub</a>
                    <a className="contact" href="https://www.linkedin.com/in/romeo-graifenberg-a5770117b"><LinkedInIcon/>My LinkedIn profile</a>
                    <a className="contact" href="mailto:romeo.graifenberg@gmail.com"><MailOutlineIcon/>Send me an email</a>

                    <h2>Special thanks to:</h2>
                    <p>My friend <a href="https://www.instagram.com/silviasheroo/?hl=en">Silvia</a> for the logo image</p>
                </div>
            </div>
            </section>
        </div>
    );
}

export default About;