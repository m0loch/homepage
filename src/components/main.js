import Post from './posts/post';

function Main(props) {
    return(
        <section className="main">
            <div className="main-text">
                {props.posts
                    .sort((a,b) => b.key - a.key) // newer posts are meant to be shown before the older ones
                    .map((post, index) => <Post {...post} index={index}/>)}
            </div>
        </section>
    );
}

export default Main;