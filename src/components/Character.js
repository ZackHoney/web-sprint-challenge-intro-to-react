// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const StyledCharacter = styled.div`
display: flex;
flex-direction: column;
align-items: center;

h3 {
    color: ${pr => pr.theme.primaryColor}
}



`

const Character = (props) => {
    return (
        <StyledCharacter className='character-wrapper'>
           <h3>{props.data.name}</h3>
        </StyledCharacter>
    )
};


export default Character;