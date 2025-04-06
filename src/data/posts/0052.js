import { splitText } from '../../components/common/textFunctions';
import { Link } from 'react-router-dom';

const post = {
    title: "Sudoku time!",
    date: new Date("2024-12-19"),
    smartContent: (
        <>
            {splitText(`
            Lately I ended up doing some QA on a sudoku minigame developed by a third party, so I just decided to make one of my own because I was kind of mad at being in charge of a lot of collateral, not-so-funny work while such things get developed by external contractors.

            But I think that this is the price of getting old and thus being engulfed in the more functional aspect of the job.
            `)}

            <p>Well, <Link to="/projects/sudoku">enjoy 200 free sudokus if you will.</Link></p>
        </>
    ),
    signature: `Romeo`
};

export default post;