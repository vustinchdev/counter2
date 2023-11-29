import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Counter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    min-height: 400px;
    border-radius: 10px;
    padding: 20px;
    border: 2px solid ${theme.colors.accent};

    & + & {
        margin-left: 30px;
    }
` 