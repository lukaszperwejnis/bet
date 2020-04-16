import React from "react";
import PropTypes from 'prop-types';
import {TeamScoreField} from "../ScoreField/ScoreField";

const MatchBetTeam = ({name, form, field, onScoreChange, teamScore}) => {
    const onTeamScoreChange = () => {
        onScoreChange();
    };

    return <div className='match-bet-team'>
        <div className='match-bet-team__name'>{name}</div>
        <TeamScoreField value={teamScore} onChange={onTeamScoreChange}/>
    </div>
};

MatchBetTeam.propTypes = {
    name: PropTypes.string.isRequired,
    onScoreChange: PropTypes.func.isRequired,
    teamScore: PropTypes.number.isRequired
};

