import Button from '@mui/material/Button';

type Props = { text: string };

export const ContainedButton = (props: Props) => {
  return <Button variant="contained">{props.text}</Button>;
};
