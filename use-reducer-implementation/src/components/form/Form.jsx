import React, { useReducer } from 'react'
import { useRef } from 'react'
import { formReducer, FORM_INITITAL_STATE } from './formReducer'
import style from './form.module.css'

export const Form = () => {
  const tagRef = useRef()
  const [state, dispatch] = useReducer(formReducer, FORM_INITITAL_STATE)

  const handleChange = (e) => {
    dispatch({
      type: 'ON_INPUT',
      payload: { name: e.target.name, value: e.target.value },
    })
  }
  const handleTags = (e) => {
    const tags = tagRef.current.value.split(',')
    tags.forEach((element) => {
      dispatch({ type: 'ON_ADD_TAG', payload: element })
    })
  }

  console.log('state :', state)
  return (
    <div>
      {' '}
      <form>
        <input
          type='text'
          placeholder='Title'
          onChange={handleChange}
          name='title'
        />
        <input
          type='text'
          placeholder='Desc'
          onChange={handleChange}
          name='desc'
        />
        <input
          type='number'
          placeholder='Price'
          onChange={handleChange}
          name='price'
        />
        <p>Category:</p>
        <select onChange={handleChange} name='category'>
          <option value='sneakers'>Sneakers</option>
          <option value='tshirts'>T-shirts</option>
          <option value='jeans'>Jeans</option>
        </select>
        <p>Tags:</p>
        <textarea
          ref={tagRef}
          placeholder='Seperate tags with commas...'
        ></textarea>
        <button onClick={handleTags} type='button'>
          Add Tags
        </button>
        <div className={style.tags}>
          {state.tags.map((tag) => (
            <small
              onClick={() => dispatch({ type: 'ON_REMOVE_TAG', payload: tag })}
              key={tag}
            >
              {tag}
            </small>
          ))}
        </div>
        <div className={style.quantity}>
          <button
            onClick={() => dispatch({ type: 'ON_DECREASE' })}
            type='button'
          >
            -
          </button>
          <span>Quantity ({state.quantity})</span>
          <button
            onClick={() => dispatch({ type: 'ON_INCREASE' })}
            type='button'
          >
            +
          </button>
        </div>
      </form>
    </div>
  )
}
