/* eslint-disable import/no-named-as-default-member */
import { Helmet } from 'react-helmet';
import { Box, Container, Grid, Pagination } from '@mui/material';
import ProductListToolbar from 'src/components/product/ProductListToolbar';
// eslint-disable-next-line import/no-named-as-default
import ProductCard from 'src/components/product//ProductCard';
import products from 'src/__mocks__/products';

const ProductList = () => (
  <>
    <Helmet>
      <title>Products | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item key={product.id} lg={4} md={6} xs={12}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination color="primary" count={3} size="small" />
        </Box>
      </Container>
    </Box>
  </>
);

export default ProductList;
