import React from 'react';
import TextSection from './common/textSection';
import MainText from './common/mainText';
import Post from './posts/post';

function Main(props) {
    return(
        <TextSection>
            <MainText>
                {props.posts
                    .sort((a,b) => b.key - a.key) // newer posts are meant to be shown before the older ones
                    .map((post, index) => <Post {...post} index={index}/>)}
            </MainText>
        </TextSection>
    );
}

export default Main;