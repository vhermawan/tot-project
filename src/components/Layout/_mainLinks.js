import React from 'react';
import {
  IconLayoutDashboard,
  IconBuilding,
} from '@tabler/icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import Link from 'next/link'

function MainLink({ icon, color, label, path }) {
  return (
    <UnstyledButton
      sx={theme => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
    >
      <Link href={`/${path}`} style={{ textDecoration: 'none', color: 'black' }}>
        <Group>
          <ThemeIcon color={color} variant="light">
            {icon}
          </ThemeIcon>

          <Text size="sm">{label}</Text>
        </Group>
      </Link>
    </UnstyledButton>
  );
}

const data = [
  { icon: <IconLayoutDashboard size={16} />, color: 'blue', label: 'Dashboard', path: '' },
  { icon: <IconBuilding size={16} />, color: 'violet', label: 'Product', path: 'product' },
];

export function MainLinks() {
  const links = data.map(link => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}
