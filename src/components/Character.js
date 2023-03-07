// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const StyledCharacter = styled.div`




`
















const Character = (props) => {
    return (
        <StyledCharacter className='character-wrapper'>
            <h3>{props.people.name}</h3>
        </StyledCharacter>
    )
}


export default Character;