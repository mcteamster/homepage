import { CssVarsProvider } from '@mui/joy/styles';
import Box from '@mui/joy/Box';
import CssBaseline from '@mui/joy/CssBaseline';

import framesxTheme from './theme';
import { CoffeeButton, ColorSchemeToggle, GitHubButton, ItchButton } from './components/Icons';
import GameOrange from './blocks/GameOrange';
import GameTwinge from './blocks/GameTwinge';
import GameDrink from './blocks/GameDrink';
import GameBlank from './blocks/GameBlank';
import GameHalloween from './blocks/GameHalloween';
import GameMine from './blocks/GameMine';
import Game2048 from './blocks/Game2048';

export default function App() {
  return (
    <CssVarsProvider disableTransitionOnChange theme={framesxTheme}>
      <CssBaseline />
      <ItchButton />
      <GitHubButton />
      <CoffeeButton />
      <ColorSchemeToggle />
      <Box
        sx={{
          height: '100vh',
          overflowY: 'scroll',
          scrollSnapType: 'y mandatory',
          '& > div': {
            scrollSnapAlign: 'start',
          },
        }}
      >
        <GameOrange />
        <GameTwinge />
        <GameDrink />
        <GameBlank />
        <GameHalloween />
        <GameMine />
        <Game2048 />
      </Box>
    </CssVarsProvider>
  );
}
