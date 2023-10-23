import * as React from 'react';
import { useColorScheme } from '@mui/joy/styles';
import IconButton from '@mui/joy/IconButton';

// Icons import
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

export function ColorSchemeToggle() {
    const { mode, setMode } = useColorScheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    return (
        <IconButton
            id="toggle-mode"
            size="lg"
            variant="soft"
            color="neutral"
            onClick={() => {
                if (mode === 'light') {
                    setMode('dark');
                } else {
                    setMode('light');
                }
            }}
            sx={{
                position: 'fixed',
                zIndex: 999,
                top: '1rem',
                right: '1rem',
                borderRadius: '50%',
                boxShadow: 'sm',
            }}
        >
            {mode === 'light' ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
        </IconButton>
    );
}

export function GitHubButton() {
    return (
        <IconButton
            id="toggle-mode"
            size="lg"
            variant="soft"
            color="neutral"
            sx={{
                position: 'fixed',
                zIndex: 999,
                top: '1rem',
                left: '4.5rem',
                borderRadius: '50%',
                boxShadow: 'sm',
            }}
            target="_blank" component="a" href="https://github.com/mcteamster"
        >
            <GitHubIcon />
        </IconButton>
    );
}

export function ItchButton() {
    return (
        <IconButton
            id="toggle-mode"
            size="lg"
            variant="soft"
            color="neutral"
            sx={{
                position: 'fixed',
                zIndex: 999,
                top: '1rem',
                left: '1rem',
                borderRadius: '50%',
                boxShadow: 'sm',
            }}
            target="_blank" component="a" href="https://mcteamster.itch.io/"
        >
            <SportsEsportsIcon />
        </IconButton>
    );
}

export function CoffeeButton() {
    return (
        <IconButton
            id="toggle-mode"
            size="lg"
            variant="soft"
            color="neutral"
            sx={{
                position: 'fixed',
                zIndex: 999,
                top: '1rem',
                right: '4.5rem',
                borderRadius: '50%',
                boxShadow: 'sm',
            }}
            target="_blank" component="a" href="https://www.buymeacoffee.com/mcteamster/"
        >
            <LocalCafeIcon />
        </IconButton>
    );
}