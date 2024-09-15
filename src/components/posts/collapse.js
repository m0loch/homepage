import { Collapse } from "@mui/material";
import CollapseHeader from "../projects/common/collapseHeader";
import { styled } from '@mui/system';

export const StyledCollapseHeader = styled(CollapseHeader)(
    ({ theme, isSectionTitle }) => ({
        color: isSectionTitle ? null : theme.palette.primary.contrast,
        fontSize: isSectionTitle ? '1.71rem' : '1.33rem',
    })
);

export const StyledCollapse = styled(Collapse)(
    ({ theme }) => ({
        color: theme.palette.primary.contrast,
        backgroundColor: theme.palette.background.card,
        padding: '10px',
        border: `3px inset ${theme.palette.primary.contrast}`,
        borderRadius: '5px',
    })
);