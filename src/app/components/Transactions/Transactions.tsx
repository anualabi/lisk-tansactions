import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTransaction } from '../../shared/hooks/transaction';
import { Spinner } from '../../shared/ui/Spinner';
import { ErrorMessage } from '../../shared/ui/ErrorMessage';
import { ContainedButton } from '../../shared/ui/Button';

const Transactions = () => {
  const { status, data, error, isFetching, fetchNextPage } = useTransaction();

  if (status === 'loading') return <Spinner />;

  if (error || !data) return <ErrorMessage message="Transactions not found" />;

  const transactions = data.pages.map((page) =>
    page.data?.map((transaction) => (
      <Card key={transaction.id} sx={{ backgroundColor: 'skyblue', p: 1, m: 1 }}>
        <Typography variant="body1" component="h6">
          {transaction.moduleAssetName} - {transaction.id}
        </Typography>
      </Card>
    ))
  );

  return (
    <Container>
      <Card sx={{ p: 3 }}>
        {/* List of transactions */}
        <Box>{transactions}</Box>

        {/* Show spinner when fetching more data */}
        {isFetching && <Spinner />}

        {/* Button to fetch more data */}
        <Box sx={{ textAlign: 'center' }} onClick={() => fetchNextPage()}>
          <ContainedButton text="Show more" />
        </Box>
      </Card>
    </Container>
  );
};

export default Transactions;
