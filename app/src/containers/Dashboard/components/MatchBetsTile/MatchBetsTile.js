import React from 'react';
import PropTypes from 'prop-types';
import {MatchBet} from "../../../../compontents/MatchBet/MatchBet";

export const MatchBetsTile = React.memo(function MatchBetsTile({matchBets}) {
    const renderMatchBet = (matchBet) => {
        return <MatchBet />
    };

    return <section>
        {matchBets.map(matchBet => <MatchBet {...matchBet}/>)}
    </section>;
});

MatchBetsTile.propTypes = {
    matchBets: PropTypes.arrayOf(
        PropTypes.shape({

        })
    )
};
