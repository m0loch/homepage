import React from 'react';
import { styled } from '@mui/system';

import TextSection from './common/textSection';
import MainText from './common/mainText';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import { ReactComponent as ItchIoIcon } from '../images/itchio-logo-textless-white.svg';

const StyledContainer = styled('div')(
    () => ({
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    })
);
    
const StyledContact = styled('a')(
    () => ({
        display: "flex",
        flexDirection: "row",
        height: "25px",
        alignItems: "baseline",
        columnGap: "8px",
    })
);

const StyledItchIoIcon = styled(ItchIoIcon)(
    () => ({
        userSelect: "none",
        width: "1em",
        height: "1em",
        display: "inline-block",
        fill: "currentColor",
        flexShrink: 0,
    })
);

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
        <TextSection>
            <MainText>
                <h1>About me</h1>
                <br/>
                <StyledContainer>
                    <p>Hi, my name is Romeo Graifenberg,</p>
                    <p>born near <a href="https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=it&msa=0&ll=46.06286390189817%2C11.146944484837856&spn=0.02025%2C0.058193&z=12&om=0&mid=1KXpKOoOTpXmqH9Hhr7aah7l2CkI">Trento, Italy</a> {calcAge()} years ago, I'm currently a Unity developer working for <a href="https://www.sisal.it/">Sisal</a>.</p>

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
                    
                    <StyledContact href="https://twitter.com/ilmeodev"><TwitterIcon/> @ilmeodev</StyledContact>
                    <StyledContact href="https://github.com/m0loch"><GitHubIcon/>m0loch on GitHub</StyledContact>
                    <StyledContact href="https://m0loch666.itch.io/"><StyledItchIoIcon/>m0loch666 on itch.io</StyledContact>
                    <StyledContact href="https://www.linkedin.com/in/romeo-graifenberg-a5770117b"><LinkedInIcon/>My LinkedIn profile</StyledContact>
                    <StyledContact href="mailto:romeo.graifenberg@gmail.com"><MailOutlineIcon/>Send me an email</StyledContact>

                    <h2>Special thanks to:</h2>
                    <p>My friend <a href="https://www.instagram.com/silviasheroo/?hl=en">Silvia</a> for the logo image</p>
                </StyledContainer>
            </MainText>
        </TextSection>
    );
}

export default About;