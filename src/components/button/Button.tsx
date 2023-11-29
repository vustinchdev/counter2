import React from 'react'
import { StyledButton } from './Button_Style'

type ButtonPropsType = {
    name: string
    disabled?: boolean
    onClick: () => void
}

export const Button: React.FC<ButtonPropsType> = (props) => {

    const onClickHandler = () => {
        props.onClick()
    }

    return (
        <StyledButton
            onClick={onClickHandler}
            disabled={props.disabled}>
            {props.name}
        </StyledButton>
    )
}
