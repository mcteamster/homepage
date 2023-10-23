import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import TwoSidedLayout from '../components/TwoSidedLayout';

export default function GameTwinge() {
  return (
    <TwoSidedLayout image="/twinge.png">
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        2022 - Web
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        One-Button Co-Op Counting
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        How hard could it possibly be to count upwards together? 
      </Typography>
      <Button size='lg' target="_blank" component="a" href="https://twinge.mcteamster.com/">
        Play Now!
      </Button>
    </TwoSidedLayout>
  );
}
