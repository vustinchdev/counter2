export type NumbersType = {
    min: number
    max: number
    num: number
}

type ActionsType = IncreaseACType | ResetAC | ChangeMaxACType | ChangeMinACType

const initialState: NumbersType = {
    min: 0,
    max: 5,
    num: 0
}

export const numbersReducer = (state: NumbersType = initialState, action: ActionsType): NumbersType => {
    switch (action.type) {
        case 'INCREASE':
            return {
                ...state,
                num: state.num + 1
            }
        case 'RESET':
            return {
                ...state,
                num: state.min
            }
        case 'CHANGE-MAX-VALUE':
            return {
                ...state,
                max: action.payload.newMaxValue
            }
        case 'CHANGE-MIN-VALUE':
            return {
                ...state,
                min: action.payload.newMinValue
            }
        default:
            return state
    }
}

type IncreaseACType = ReturnType<typeof increaseAC>

export const increaseAC = () => {
    return {
        type: 'INCREASE',
    } as const
}

type ResetAC = ReturnType<typeof resetAC>

export const resetAC = () => {
    return {
        type: 'RESET'
    } as const
}

type ChangeMaxACType = ReturnType<typeof changeMaxAC>

export const changeMaxAC = (newMaxValue: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        payload: {
            newMaxValue
        }
    } as const
}

type ChangeMinACType = ReturnType<typeof changeMinAC>

export const changeMinAC = (newMinValue: number) => {
    return {
        type: 'CHANGE-MIN-VALUE',
        payload: {
            newMinValue
        }
    } as const
}

