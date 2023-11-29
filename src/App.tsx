import React, { useEffect, useState } from 'react';
import './App.css';
import { Container } from './components/Container';
import { ButtonsWrapper } from './components/ButtonsWrapper';
import { Button } from './components/button/Button';
import { Counter } from './components/Counter';
import { Input } from './components/input/Input';
import { SettingsDisplay } from './components/SettingsDisplay';
import { Scoreboard } from './components/Scoreboard';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateType } from './state/store';
import { resetAC, increaseAC, changeMaxAC, changeMinAC } from './state/numbers-reducer';




function App() {

  const num = useSelector<RootStateType, number>(state => state.numbers.num)
  const min = useSelector<RootStateType, number>(state => state.numbers.min)
  const max = useSelector<RootStateType, number>(state => state.numbers.max)

  const dispatch = useDispatch()

  const [value, setValue] = useState<string | null>(`enter values and press 'set'`)

  const setSettings = () => {
    setValue(null)
    dispatch(resetAC())
  }

  const increase = () => {
    if (num < max) {
      dispatch(increaseAC())
    }
  }

  const reset = () => {
    dispatch(resetAC())
  }

  const onChangeHandlerMax = (valueNumber: number) => {
    if (valueNumber < 0 || valueNumber <= min) {
      dispatch(changeMaxAC(valueNumber))
      setValue('incorrect value!')
    } else {
      dispatch(changeMaxAC(valueNumber))
      setValue(`enter values and press 'set'`)
    }
  }
  const onChangeHandlerMin = (valueNumber: number) => {
    if (valueNumber < 0 || valueNumber >= max) {
      dispatch(changeMinAC(valueNumber))
      setValue('incorrect value!')
    } else {
      dispatch(changeMinAC(valueNumber))
      setValue(`enter values and press 'set'`)
    }
  }

  let disabledCondition = value === 'incorrect value!'
  let incDisabledCondition = value !== null || num === max
  let resetDisabledCondition = value !== null || num === min


  return (
    <div className="App">
      <Container>
        <Counter>
          <SettingsDisplay>
            <Input title={'max value:'} valueNumber={max} onChangeNumber={onChangeHandlerMax} value={value} />
            <Input title={'min value:'} valueNumber={min} onChangeNumber={onChangeHandlerMin} value={value} />
          </SettingsDisplay>
          <ButtonsWrapper>
            <Button name="set" onClick={setSettings} disabled={disabledCondition} />
          </ButtonsWrapper>
        </Counter>
        <Counter>
          {value === null
            ? <Scoreboard color={disabledCondition || max === num ? 'red' : ''}>{num}</Scoreboard>
            : <Scoreboard color={disabledCondition ? 'red' : ''}>{value}</Scoreboard>}
          <ButtonsWrapper>
            <Button name="inc" onClick={increase} disabled={incDisabledCondition} />
            <Button name="reset" onClick={reset} disabled={resetDisabledCondition} />
          </ButtonsWrapper>
        </Counter>
      </Container>
    </div >
  );
}

export default App;
