import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import TwoSidedLayout from '../components/TwoSidedLayout';

export default function Game2048() {
  return (
    <TwoSidedLayout image="/2048.png">
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        2016 - Excel
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Viral Sensation
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        An Office remake of the 2014 game by Gabriele Cirulli.
      </Typography>
      <Button size='lg' target="_blank" component="a" href="https://tonz.io/games/2048.xlsm">
        Download
      </Button>
    </TwoSidedLayout>
  );
}
