import React from 'react';
import { styled } from '@mui/system';
import SubSection from './subsection';

const StyledSection = styled(SubSection)(
    ({ theme }) => ({
        // Only desktop
        [theme.breakpoints.down('md')]: {
            visibility: "hidden",
        }
    })
);

function LegendSection() {
    return (
        <StyledSection title="Legend">
            <table>
                <tbody>
                    <tr>
                        <td><kbd>←</kbd> / <kbd>→</kbd></td><td><p>move piece</p></td>
                    </tr>
                    <tr>
                        <td><kbd>↓</kbd></td><td><p>drop piece</p></td>
                    </tr>
                    <tr>
                        <td><kbd>A</kbd> / <kbd>S</kbd></td><td><p>rotate piece</p></td>
                    </tr>
                    <tr>
                        <td><kbd>Space</kbd></td><td><p>start / pause</p></td>
                    </tr>
                </tbody>
            </table>
        </StyledSection>
    );
}

export default LegendSection;
