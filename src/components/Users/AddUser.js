import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddUser.module.css';

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' />
        </div>
        <div>
          <label htmlFor='age'>Age</label>
          <input id='age' type='number' />
        </div>

        <Button type={'submit'}>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
