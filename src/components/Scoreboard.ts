import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Scoreboard = styled.div`
    font-size: 30px;
    font-weight: 700;
    width: 100%;
    padding: 70px 0;
    color:${props => props.color || theme.colors.accent};
    border-radius: 10px;
    border: 2px solid ${theme.colors.accent};
`
