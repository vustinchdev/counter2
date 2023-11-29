import styled from "styled-components";
import { theme } from "../../styles/Theme";


type StyledInputType = {
    color: string
    $backgroundColor: string
}

const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

& > span {
    font-size: 30px;
    font-weight: 700;
    color: ${theme.colors.accent}
} 

& + & {
        margin-top: 35px;
    }
`

const StyledInput = styled.input<StyledInputType>`
    width: 50%;
    padding: 10px 0;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    border-radius: 10px;
    border: 2px solid  ${props => props.color || theme.colors.accent};
    background-color: ${props => props.$backgroundColor || ''};
    outline: none;
`

export const S = {
    StyledInput,
    InputWrapper
}