import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { useTransaction } from '../../shared/hooks/transaction';
import { Spinner } from '../../shared/ui/Spinner';
import { ErrorMessage } from '../../shared/ui/ErrorMessage';
import { ContainedButton } from '../../shared/ui/Button';

const Transactions = () => {
  const { isLoading, isError, data } = useTransaction();

  if (isLoading) return <Spinner />;

  if (isError) return <ErrorMessage message="Transactions not found" />;

  const transactions = data?.data.map((transaction) => (
    <Card key={transaction.id} sx={{ backgroundColor: 'skyblue', p: 1, m: 1 }}>
      <p>{transaction.moduleAssetName}</p>
    </Card>
  ));

  return (
    <Container>
      <Card sx={{ p: 3 }}>
        <Box>{transactions}</Box>
        <Box sx={{ textAlign: 'center' }}>
          <ContainedButton text="Show more" />
        </Box>
      </Card>
    </Container>
  );
};

export default Transactions;
