import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import SubjectListResults from '@components/subject/SubjectListResults';
import SubjectListSearching from 'src/components/subject/SubjectListSearching';
import DocumentListNotFound from 'src/components/document/DocumentListNotFound';
import LoadingIndicator from 'src/components/loading/LoadingIndicator';

const SubjectList = () => {
  const [isOpen, setOpen] = useState(true);
  const [found, setFound] = useState(true);

  const checkFound = useSelector((state) => state.subjects.found);
  useEffect(() => {
    setFound(checkFound);
  }, [checkFound]);

  return (
    <>
      <Helmet>
        <title>Customers | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <SubjectListSearching setOpen={setOpen} />
          <Box sx={{ pt: 3 }}>
            {!isOpen && found && (
              <>
                {' '}
                <SubjectListResults />
                <LoadingIndicator />{' '}
              </>
            )}
            {!found && (
              <>
                {' '}
                <DocumentListNotFound />
                <LoadingIndicator />{' '}
              </>
            )}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default SubjectList;
