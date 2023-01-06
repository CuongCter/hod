import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@mui/material';
import { useSelector } from 'react-redux';

import DocumentListResults from 'src/components/document/DocumentListResults';
import DocumentListSearching from 'src/components/document/DocumentListSearching';

import DocumentListNotFound from 'src/components/document/DocumentListNotFound';

const RenderBox = (props) => {
  const { page, setPage, found, isOpen, rowsPerPage, setRowsPerPage } = props;

  return (
    <Box sx={{ pt: 3 }}>
      {!isOpen && found && (
        <>
          {' '}
          <DocumentListResults
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
          />{' '}
        </>
      )}
      {!found && (
        <>
          {' '}
          <DocumentListNotFound />{' '}
        </>
      )}
    </Box>
  );
};

const DocumentList = () => {
  const [isOpen, setOpen] = useState(true);
  const [found, setFound] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const checkFound = useSelector((state) => state.documents.found);

  useEffect(() => {
    setFound(checkFound);
  }, [checkFound]);

  return (
    <>
      <Helmet>
        <title>Tài liệu - Câu Lạc Bộ Tin Học DHCNHN</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false} sx={{ width: '100%' }}>
          <DocumentListSearching
            setOpen={setOpen}
            isOpen={isOpen}
            page={page + 1}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
          />
          <RenderBox
            found={found}
            isOpen={isOpen}
            page={page}
            setPage={setPage}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={setRowsPerPage}
          />
        </Container>
      </Box>
    </>
  );
};

export default DocumentList;
