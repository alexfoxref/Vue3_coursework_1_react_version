import React from 'react'
import PropTypes from 'prop-types'

const Step = ({ title, active, done, onClickActive, index }) => {
  return (
    <li className={`steps-item${active ? ' active' : done ? ' done' : ''}`}>
      <span
        onClick={() => {
          onClickActive(index)
        }}
      >
        {index + 1}
      </span>
      {title}
    </li>
  )
}

Step.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  done: PropTypes.bool.isRequired,
  onClickActive: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}

export default Step
