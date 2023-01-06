import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import FolderIcon from '@mui/icons-material/Folder';
import {
  Avatar,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material';
import { useStyles } from './Styles';

const SubjectListResults = () => {
  const [subjects, setSubjects] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const classes = useStyles();

  // get subjects from store
  const data = useSelector((state) => state.subjects.data);
  useEffect(() => {
    if (data) {
      setSubjects(data);
    }
  }, [data]);

  //
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.title}>Name</TableCell>
              {/* <TableCell className={classes.author}>Author</TableCell>
              <TableCell className={classes.released}>Released</TableCell>
              <TableCell>Downloaded</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {subjects
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((subject) => (
                <TableRow hover key={subject._id} role="checkbox" tabIndex={-1}>
                  <TableCell
                    sx={{
                      padding: '8px 16px !important',
                      minWidth: '440px !important'
                    }}
                  >
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar className={classes.avatar} sx={{ mr: 2 }}>
                        <FolderIcon />
                      </Avatar>
                      <Typography color="textPrimary" variant="body1">
                        {subject.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  {/* <TableCell>MinHungg</TableCell>
                  <TableCell>02/01/2001</TableCell>
                  <TableCell sx={{ pl: 6 }}>36</TableCell> */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={subjects.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default SubjectListResults;
