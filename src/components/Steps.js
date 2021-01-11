import React, { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActive, setIsFinished } from '../redux/actions'
import Step from './Step'

const Steps = () => {
  const steps = useSelector(state => state.steps)
  const isFinished = useSelector(state => state.isFinished)
  const dispatch = useDispatch()
  const activeIndex = useMemo(() => steps.findIndex(({ active }) => active), [
    steps,
  ])

  const stepsContent = useMemo(() => steps[activeIndex].text, [
    steps,
    activeIndex,
  ])

  const isStart = useMemo(() => activeIndex === 0, [activeIndex])

  const isLastStep = useMemo(
    () => activeIndex === steps.length - 1 && !isFinished,
    [steps, activeIndex, isFinished]
  )

  const activeHandler = useCallback(
    idx => {
      dispatch(setActive(idx))
    },
    [dispatch]
  )

  const prevHandler = useCallback(() => {
    if (!isStart) {
      dispatch(setActive(activeIndex - 1))
    }
  }, [dispatch, isStart, activeIndex])

  const nextHandler = useCallback(() => {
    if (!isFinished) {
      if (!isLastStep) {
        dispatch(setActive(activeIndex + 1))
      } else {
        dispatch(setIsFinished(true))
      }
    } else {
      dispatch(setActive(0))
    }
  }, [dispatch, isLastStep, activeIndex, isFinished])

  const btnNextTitle = useMemo(() => {
    return isLastStep ? 'Закончить' : isFinished ? 'Начать заново' : 'Вперед'
  }, [isLastStep, isFinished])

  return (
    <div className='steps'>
      <div className='steps-content'>{stepsContent}</div>
      <ul className='steps-list'>
        {steps.map(({ active, done, title }, idx) => {
          return (
            <Step
              key={title}
              title={title}
              active={active}
              done={done}
              index={idx}
              onClickActive={activeHandler}
            />
          )
        })}
      </ul>
      <div>
        {!isFinished && (
          <button className='btn' disabled={isStart} onClick={prevHandler}>
            Назад
          </button>
        )}
        <button
          className={`btn${!isFinished ? ' primary' : ''}`}
          onClick={nextHandler}
        >
          {btnNextTitle}
        </button>
      </div>
    </div>
  )
}

export default Steps
