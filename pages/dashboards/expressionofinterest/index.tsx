import Head from 'next/head';

import SidebarLayout from '@/layouts/SidebarLayout';

import PageHeader from '@/content/Dashboards/Crypto/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';
import Footer from '@/components/Footer';


function ExpressionofInterest() {
  return (
    <>
      <Head>
        <title>Crypto Dashboard</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader title="Expression of Interest!" />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={4}
        >
          {/* <Grid item xs={12}>
            <AccountBalance />
          </Grid>
          <Grid item lg={8} xs={12}>
            <Wallets />
          </Grid>
          <Grid item lg={4} xs={12}>
            <AccountSecurity />
          </Grid>
          <Grid item xs={12}>
            <WatchList />
          </Grid> */}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

ExpressionofInterest.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default ExpressionofInterest;
