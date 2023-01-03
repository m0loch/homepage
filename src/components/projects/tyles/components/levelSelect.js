import React, { useState } from "react";
import { connect } from 'react-redux';
import { styled } from '@mui/system';
import { tylesSetLevel } from "../../../../redux/actions";

import { Box, Button, Tab, Tabs } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MinimizeOutlinedIcon from '@mui/icons-material/MinimizeOutlined';

const CHAPTERS = 6;

const StyledBox = styled(Box)(
    ({ theme }) => ({
        display: 'flex',
        backgroundColor: theme.palette.background.opaque,

    })
);

const StyledTabs = styled(Tabs)(
    () => ({
        minWidth: '105.78px',
    })
);

const StyledLevel = styled(Button)(
    ({ theme, selected }) => ({
        width: "20%",
        color: selected ? theme.palette.primary.contrast : "white"
    })
);

function LevelSelect(props) {
    const [selectedTab, setSelectedTab] = useState(Math.floor(props.level * CHAPTERS / props.scores.length));

    const handleChapterChange = (ev, idx) => {
        setSelectedTab(idx);
    }

    const GetLevelIdx = idx => selectedTab * props.scores.length / CHAPTERS + idx;

    const filteredScores = props.scores.filter((item, idx) => Math.floor(idx * CHAPTERS / props.scores.length) === selectedTab);

    return (
        <StyledBox>
            <StyledTabs
                orientation="vertical"
                variant="scrollable"
                indicatorColor="primary"
                textColor="primary"
                value={selectedTab}
                onChange={handleChapterChange}
            >
                {
                    [...Array(CHAPTERS)].map((value, idx) =>
                        <Tab
                            label={`Chapter ${idx + 1}`}
                            key={idx}
                            id={idx}
                        />
                    )
                }
            </StyledTabs>
            <StyledBox style={{ flexWrap: 'wrap' }}>
                {
                    filteredScores.map((level, idx) =>
                        <StyledLevel
                            key={idx}
                            variant="outlined"
                            selected={GetLevelIdx(idx) === props.level}
                            onClick={() => props.tylesSetLevel(GetLevelIdx(idx))}
                            startIcon={
                                level.isBest ? <StarIcon />
                                    : level.bestScore > 0 ? <StarBorderIcon />
                                        : <MinimizeOutlinedIcon />}
                        >
                            {`${GetLevelIdx(idx)}`}
                        </StyledLevel>
                    )
                }
            </StyledBox>
        </StyledBox>
    )
}

function mapStateToProps(state) {
    return { ...state.tyles };
}

const mapDispatchToProps = {
    tylesSetLevel,
};

export default connect(mapStateToProps, mapDispatchToProps)(LevelSelect);
