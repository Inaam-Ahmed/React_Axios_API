import React from 'react';
import OutputTable from './OutputTable';

const UserForm = (props) => {
  return (
    <form onSubmit={props.getUser}>
      <label>Enter valid GitHub username </label>
      <input type="username" id="textField"   placeholder="GitHub Username" style={{ margin:"20px auto", display:"block" }} type="text" name= "username"/>
      <button>Submit</button>
    </form>
  );
}
export default UserForm;