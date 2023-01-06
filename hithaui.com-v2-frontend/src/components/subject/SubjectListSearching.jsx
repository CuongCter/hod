import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { subjectAsyncAction } from 'src/store/subject/subject.action';
import { useStyles } from './Styles';

const SubjectListSearching = (props) => {
  const classes = useStyles();
  const { setOpen } = props;
  const [selectedName, setSelectedName] = useState('');
  const handleChangeName = (e) => {
    setSelectedName(e.target.value);
  };

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(subjectAsyncAction({ name: selectedName }));
    setOpen(false);
  };

  return (
    <form>
      <div className={classes.searching}>
        <TextField
          value={selectedName}
          size="small"
          variant="outlined"
          placeholder="Search subject"
          className={classes.exam}
          onChange={(e) => handleChangeName(e)}
        />
        <Button
          variant="contained"
          className={classes.btn}
          onClick={(e) => handleSubmit(e)}
        >
          Search
        </Button>
      </div>
    </form>
  );
};
export default SubjectListSearching;
