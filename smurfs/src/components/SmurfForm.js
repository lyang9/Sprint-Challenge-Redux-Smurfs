import React from 'react';

const SmurfForm = props => {
  return (
    <div>
      <form onSubmit={props.handleAddSmurf}>
        <input
          name='name'
          text='text'
          placeholder='name'
          value={props.state.name}
          onChange={props.handleInput}
        />
        <input
          name='age'
          text='text'
          placeholder='age'
          value={props.state.age}
          onChange={props.handleInput}
        />
        <input
          name='height'
          text='text'
          placeholder='height'
          value={props.state.height}
          onChange={props.handleInput}
        />
        <button type='submit'>Add Smurf</button>
      </form>
    </div>
  );
}

export default SmurfForm;