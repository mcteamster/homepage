import Button from '@mui/joy/Button';
import Typography from '@mui/joy/Typography';
import TwoSidedLayout from '../components/TwoSidedLayout';

export default function GameMine() {
  return (
    <TwoSidedLayout image="/ms.png">
      <Typography color="primary" fontSize="lg" fontWeight="lg">
        2017 - Excel
      </Typography>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Sweep the Sheets
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        Relive the nostalgia from amidst the spreadsheets.
      </Typography>
      <Button size='lg' target="_blank" component="a" href="https://tonz.io/games/MS.xlsm">
        Download
      </Button>
    </TwoSidedLayout>
  );
}
