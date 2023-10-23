import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import TwoSidedLayout from '../components/TwoSidedLayout';

export default function GameOrange() {
  return (
    <TwoSidedLayout image='/fton.png'>
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        2022 - Desktop
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        A Point-and-Click Fever Dream
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Can you overcome your crippling hangover and find the Orange Narwhal?
      </Typography>
      <Button size='lg' target="_blank" component="a" href="https://orange.mcteamster.com/">
        Play Now!
      </Button>
    </TwoSidedLayout>
  );
}
