import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/system';
import { useMediaQuery } from '@mui/material';
import TextSection from './common/textSection';
import MainText from './common/mainText';
import Post from './posts/post';
import Pagination from '@mui/material/Pagination';

function Main(props) {
    const [page, setPage] = useState(1);

    const handleChange = (e, value) => {
        setPage(value);
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    }, [page]);

    // 5 posts per page
    const postsPerPage = 5;
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