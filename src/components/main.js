import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import TextSection from './common/textSection';
import MainText from './common/mainText';
import Post from './posts/post';
import Pagination from '@mui/material/Pagination';

// 5 posts per page
const postsPerPage = 5;

function getPostPage(posts, postId) {

    const id = postId ?? -1;

    // If no post id has been fed to the router, just load the first page
    if (id === -1) {
        return 1;
    }

    // The number of posts missing from the last page
    const offset = postsPerPage - (posts.length % postsPerPage);
    const pageNum = Math.round(posts.length / postsPerPage) - Math.round((id - offset) / postsPerPage);

    return pageNum;
}

function Main(props) {
    const params = useParams();
    const pageNum = getPostPage(props.posts, params.id);

    const [page, setPage] = useState(pageNum);

    const handleChange = (e, value) => {
        setPage(value);
    };

    useEffect(() => {
        if (params.id) {
            document.querySelector(`#post${params.id}`)?.scrollIntoView({
                behavior: "smooth"
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [page, params.id]);

    useEffect(() => {
        setPage(getPostPage(props.posts, params.id));
    }, [props.posts, params.id]);

    const range = Math.ceil(props.posts.length / postsPerPage);

    const filteredPosts = props.posts
        .sort((a, b) => b.date - a.date) // newer posts are meant to be shown before the older ones
        .filter((item, idx) => idx >= ((page - 1) * postsPerPage) && (idx < page * postsPerPage));

    const theme = useTheme();
    let useSmallPagination = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <TextSection>
            <Pagination count={range} page={page} onChange={handleChange} showFirstButton showLastButton size={useSmallPagination ? "small" : undefined} />
            <MainText>
                {filteredPosts.map((post, index) => <Post {...post} index={index} key={index} />)}
            </MainText>
            <Pagination count={range} page={page} onChange={handleChange} showFirstButton showLastButton size={useSmallPagination ? "small" : undefined} />
        </TextSection>
    );
}

export default Main;