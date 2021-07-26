import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './VotingElegibility.css';

const VotingElegibility = () => {
    const eligibleVotersAge = 18;
    const [voterAge, setVoterAge] = useState('');
    const [votedMsg, setVotedMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const history = useHistory();

    const voterAgeHandler = (event) => {
        setVoterAge(event.target.value);
        console.log(event.target.value);
        console.log('voterAge=', voterAge)
        if (event.target.value < eligibleVotersAge) {
            setErrorMsg('You are not eligible to vote.')
        }
        else {
            setErrorMsg('');
        }
        setVotedMsg('');
    }
    console.log('outside voterAge=', voterAge)

    const hasVotedHandler = () => {
        setVotedMsg('You have voted successfully');
        history.push('/votingDone');

    }

    return (
        <div className='container'>
            <h1 className='header'>Vote Here!!</h1>
            <div className='label'><label>Enter your age</label></div>
            <div><input className='input'
                type='number'
                min='1'
                max='120'
                value={voterAge}
                onChange={voterAgeHandler} /></div>
            <div className='errorMessage'>{errorMsg}</div>
            <button className='button' onClick={hasVotedHandler}
                disabled={voterAge < eligibleVotersAge}>
                Click To Vote</button>
            <div className='successMessage'>{votedMsg}</div>

        </div>
    )
}

export default VotingElegibility;