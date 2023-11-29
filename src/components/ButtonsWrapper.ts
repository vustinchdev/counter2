import styled from "styled-components";
import { theme } from "../styles/Theme";

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    border: 2px solid ${theme.colors.accent};
    width: 100%;
    padding: 20px 0;
    border-radius: 10px;
`
