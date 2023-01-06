import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { TextField, Typography, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { documentAsyncAction } from 'src/store/document/document.action';
import { subjectAsyncAction } from 'src/store/subject/subject.action';
import LoadingIndicator from 'src/components/loading/LoadingIndicator';
import categories from 'src/__mocks__/categories';
import { useNavigate } from 'react-router';
import { useStyles } from './Styles';

const styles = {
  control: (base) => ({
    ...base,
    fontFamily: 'Arial'
  }),
  menu: (base) => ({
    ...base,
    fontFamily: 'Arial',
    fontSize: '.67 5rem'
  })
};

const LoadingElement = (props) => {
  const { isOpen } = props;
  if (isOpen) {
    return <div />;
  }
  return <LoadingIndicator />;
};

const DocumentListSearching = (props) => {
  const classes = useStyles({ hello: 'Hung' });
  const navigate = useNavigate();
  const { setOpen, isOpen, page, rowsPerPage, setPage } = props;
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedCate, setSelectedCate] = useState(null);
  const [selectedName, setSelectedName] = useState('');
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();

  const handleChangeDoc = (selected) => {
    setSelectedSubject(selected);
  };
  const handleChangeCate = (selected) => {
    setSelectedCate(selected);
  };
  const handleChangeName = (e) => {
    setSelectedName(e.target.value);
  };

  // get subjects
  const data = useSelector((state) => state.subjects.data.data);
  const token = useSelector((state) => state.auth.data.token, shallowEqual);

  useEffect(() => {
    if (data) {
      const subjects = data?.map(({ _id: value, name: label }) => ({
        value,
        label
      }));
      setOptions(subjects);
    }
  }, [data]);

  // get options of subject
  useEffect(() => {
    dispatch(subjectAsyncAction());
  }, [dispatch]);

  // get list of documents
  const params = {
    subject: selectedSubject?.value,
    type: selectedCate?.value,
    name: selectedName,
    attribute: '-updatedAt',
    limit: rowsPerPage
  };
  useEffect(() => {
    params.page = 1;
    setPage(0);
    dispatch(documentAsyncAction(params));
    setOpen(false);
  }, [selectedSubject, selectedCate, rowsPerPage]);

  useEffect(() => {
    params.page = page;
    dispatch(documentAsyncAction(params));
    setOpen(false);
  }, [page]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!token) {
      navigate('/login');
    }

    params.page = 1;
    setPage(0);
    dispatch(documentAsyncAction(params));
    setOpen(false);
  };

  return (
    <div className={classes.custom}>
      <Typography
        variant="overline"
        sx={{ mb: -4, color: '#ff8a80' }}
        display="block"
        gutterBottom
      >
        HIT CLOUD - HAUI
      </Typography>
      <form>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Select
              value={selectedSubject}
              onChange={handleChangeDoc}
              options={options}
              styles={styles}
              placeholder="Tên môn học"
              className={classes.document}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Select
              value={selectedCate}
              onChange={handleChangeCate}
              options={categories}
              isSearchable={false}
              styles={styles}
              placeholder="Thể loại"
              className={classes.document}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              value={selectedName}
              size="small"
              variant="outlined"
              placeholder="Tên tài liệu"
              className={classes.exam}
              onChange={(e) => handleChangeName(e)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Button
              variant="contained"
              className={classes.btn}
              onClick={(e) => handleSubmit(e)}
            >
              Tìm kiếm
            </Button>
          </Grid>
        </Grid>
      </form>
      <LoadingElement isOpen={isOpen} />
    </div>
  );
};
export default DocumentListSearching;
