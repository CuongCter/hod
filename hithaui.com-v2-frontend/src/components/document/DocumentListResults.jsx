import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Moment from 'react-moment';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import IconButton from '@mui/material/IconButton';
import { documentAsyncAction } from 'src/store/document/document.action';
import FolderIcon from '@mui/icons-material/Folder';
import { download } from 'src/utils/fileDownload';
import {
  Avatar,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  TableContainer,
  Paper,
  TableSortLabel
} from '@mui/material';
import { useStyles } from './Styles';

const headCells = [
  {
    id: 'name',
    numeric: false,
    label: 'Name'
  },
  {
    id: 'author',
    numeric: true,
    label: 'Author'
  },
  {
    id: 'updatedAt',
    numeric: true,
    label: 'Released'
  },
  {
    id: 'view',
    numeric: true,
    label: 'Viewed'
  },
  {
    id: 'download',
    numeric: true,
    label: 'Download'
  }
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort, params } = props;
  const { subject, type, name, page } = params;
  const [attribute, setAttribute] = useState('');
  const [oldAtt, setOldAtt] = useState('');
  const [check, setCheck] = useState(true);
  const dispatch = useDispatch();

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
    setCheck(!check);
    setAttribute(check ? `-${property}` : property);
  };

  const repeat = useSelector((state) => state.documents?.repeat);

  const docAsyncAction = () => {
    const options = {
      subject,
      type,
      name,
      page,
      attribute
    };
    dispatch(documentAsyncAction(options));
  };

  useEffect(() => {
    if (!repeat) docAsyncAction();
  }, []);

  useEffect(() => {
    if (attribute !== oldAtt) {
      docAsyncAction();
      setOldAtt(attribute);
    }
  }, [attribute]);

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'left'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{
              backgroundColor: 'white !important'
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              sx={{
                paddingLeft: headCell.numeric
                  ? '10px !important'
                  : '12px !important'
              }}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const RenderTableBody = (props) => {
  const { documents, classes, rowsPerPage } = props;
  return (
    <TableBody>
      {documents.slice(0, rowsPerPage).map((document, index) => {
        const labelId = `enhanced-table-checkbox-${index}`;
        return (
          <TableRow hover key={document?._id} tabIndex={-1}>
            <TableCell
              id={labelId}
              sx={{
                padding: '4px 16px !important',
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
                  {document?.name}
                </Typography>
              </Box>
            </TableCell>
            <TableCell>{document?.user?.full_name}</TableCell>
            <TableCell>
              <Moment format="YYYY/MM/DD">{document.updatedAt}</Moment>
            </TableCell>
            <TableCell sx={{ pl: 5 }}>{document?.view}</TableCell>
            <TableCell sx={{ pl: 5 }}>
              <IconButton
                color="secondary"
                aria-label="download"
                onClick={(e) => download(e, document?._id)}
              >
                <FileDownloadIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

const SubjectListResults = (props) => {
  const { page, setPage, rowsPerPage, setRowsPerPage } = props;
  const [documents, setDocuments] = useState([]);
  const [count, setCount] = useState(-1);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [params, setParams] = useState({});
  const classes = useStyles({ hello: 123 });

  // get params
  const attributes = useSelector((state) => state.documents?.params);
  useEffect(() => {
    if (attributes) {
      setParams(attributes);
    }
  }, [attributes]);

  // get documents
  const data = useSelector((state) => state.documents.data.data);
  const pagination = useSelector((state) => state.documents.data.pagination);
  useEffect(() => {
    if (data) {
      const { total } = pagination;
      setDocuments(data);
      setCount(total);
    }
  }, [data]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // sort
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Paper className={classes.documentResults}>
      <TableContainer className={classes.documentContainer}>
        <Table stickyHeader>
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={documents.length}
            params={params}
          />
          <RenderTableBody
            documents={documents}
            classes={classes}
            page={page}
            rowsPerPage={rowsPerPage}
          />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={count}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default SubjectListResults;
