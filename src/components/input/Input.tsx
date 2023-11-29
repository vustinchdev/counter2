import React, { ChangeEvent } from 'react'
import { S } from './Input_Style'

type InputType = {
    title: string
    valueNumber: number
    value: string | null
    onChangeNumber: (valueNumber: number) => void
}

export const Input = (props: InputType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeNumber(Number(e.currentTarget.value))
    }

    return (
        <S.InputWrapper>
            <span>{props.title}</span>
            <S.StyledInput
                type='number'
                value={props.valueNumber}
                onChange={onChangeHandler}
                color={props.value === 'incorrect value!' ? 'red' : ''}
                $backgroundColor={props.value === 'incorrect value!' ? '#e66260' : ''}
            />
        </S.InputWrapper>
    )
}
