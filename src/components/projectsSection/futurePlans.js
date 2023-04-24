import React from 'react';

export default function FuturePlans() {
    return (
        <>
            <h4>Coming up next:</h4>
            <p>
                There's some restructuring to do here and there on the whole website structure.
                On one hand I want to refactor components in order to have a shared library across the whole site,
                on the other I'm well aware I'm not an UI/UX designer by any means but I'd still like the site
                to feel a little less "basic" and just a little more polished.
                <br/>
                Now that I've reached the mileston of having 10 minigames available, I should start to really think about some real refactoring...
            </p>

            <h4>Future games that <i>I'd like</i> to implement in the future (in no particular order)</h4>
            <ul>
                <li>Sudoku</li>
                <li>Snake</li>
                <li>Jigsaw puzzle</li>
            </ul>

        </>
    );
}