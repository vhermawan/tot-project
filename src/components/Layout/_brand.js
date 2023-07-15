import { useState } from 'react';
import { Group, ActionIcon, Box  } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react'
import { Logo } from './_logo';

export function Brand() {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.xs,
        paddingTop: "5px",
      })}
    >
      <Group position="apart">
        <Logo colorScheme={colorScheme} />
        <ActionIcon variant="default" onClick={() => toggleColorScheme()} size={30}>
          {colorScheme === 'dark' ? <IconSun size={16} /> : <IconMoonStars size={16} />}
        </ActionIcon>
      </Group>
    </Box>
  );
}