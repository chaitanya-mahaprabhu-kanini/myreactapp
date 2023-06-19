import styled from 'styled-components';
const StyledButton = styled.button`
    border: red;
    background-color: black;
    color: red;
    &:hover{
        background-color: red;
        color: black;
    }
`
const StyledLearning = () => {
    return(
        <>
            <StyledButton>Click Me!</StyledButton>
        </>
    );
}

export {StyledLearning};