import { theme } from './../../styles/Theme';
import styled from 'styled-components';

export const StyledButton = styled.button`
font-size: 40px;
font-weight: 700;
padding: 5px 20px;
border-radius: 10px;
border: none;
color: ${theme.colors.primaryColor};
background-color: ${theme.colors.accent};

&:disabled {
    opacity: 0.5;
}
`


