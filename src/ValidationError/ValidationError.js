import React from 'react';

export default function ValidationError(props) {
  if (props.isValid) {
    return <></>
  } else {
    return (
      <div className='form-error'>{props.message}</div>
    )   
  }
}