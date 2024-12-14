import React from "react";
import { connect } from 'react-redux';
import { styled } from '@mui/system';
import { TextField, InputLabel, Select, MenuItem } from "@mui/material";
import {
    mosaicSetImage,
    mosaicSetRows,
    mosaicSetCols,
 } from '../../../redux/actions';

const images = [
    {
        caption: 'Cyberpunk 2077',
        value: '/assets/mosaic/cyberpunk.jpg',
        description: (<p style={{ margin: "auto" }}>Taken from <a href="syanart.com">syanart.com</a></p>)
    },
    {
        caption: 'Final Fantasy 7 Remake',
        value: '/assets/mosaic/ff7remake.jpg',
        description: (<p style={{ margin: "auto" }}>Taken from <a href="syanart.com">syanart.com</a></p>)
    },
    {
        caption: 'The Last of Us 2',
        value: '/assets/mosaic/thelastofus.jpg',
        description: (<p style={{ margin: "auto" }}>Taken from <a href="syanart.com">syanart.com</a></p>)
    },
];

const StyledContainer = styled('div')(
    () => ({
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    })
);

function MosaicSettings(props) {

    const selected = images.find(item => item.value === props.img) ?? 0;

    return (
        <StyledContainer>
            <InputLabel>Tiling</InputLabel>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                <TextField id="outlined-value"
                    type="number"
                    label="Columns"
                    value={props.cols}
                    margin="normal"
                    variant="outlined"
                    onChange={ev => props.mosaicSetCols(ev.target.value)}
                    style={{ flexGrow: 1 }}
                />
                <TextField id="outlined-value"
                    type="number"
                    label="Rows"
                    value={props.rows}
                    margin="normal"
                    variant="outlined"
                    onChange={ev => props.mosaicSetRows(ev.target.value)}
                    style={{ flexGrow: 1 }}
                />
            </div>
            <InputLabel>Image</InputLabel>
            <Select
                id="image-selector"
                value={selected.value}
                label="Image"
                onChange={ev => props.mosaicSetImage(ev.target.value)}
            >
                {images.map((item, idx) =>
                    <MenuItem key={idx} value={item.value}>{item.caption}</MenuItem>
                )}
            </Select>
            <img style={{ width: "100%" }} src={process.env.PUBLIC_URL + selected?.value} alt={selected?.caption} />
            {selected.description}
        </StyledContainer >
    );
}

function mapStateToProps(state) {
    return { ...state.mosaic };
}

const mapDispatchToProps = {
    mosaicSetImage,
    mosaicSetRows,
    mosaicSetCols,
};

export default connect(mapStateToProps, mapDispatchToProps)(MosaicSettings);
