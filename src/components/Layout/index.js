import {
  AppShell,
  Navbar,
  Header,
  ScrollArea,
  Box,
  Container,
  UnstyledButton,
  Group,
  ThemeIcon,
  Text,
} from '@mantine/core';
import { MainLinks } from './_mainLinks';
import { Brand } from './_brand';
import { IconLogout } from '@tabler/icons-react';
import Head from 'next/head';

const Layout = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Example project for TOT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell
        padding="md"
        navbar={
        <Navbar width={{ base: 300 }} height={'90vh'} p="xs">
          <Navbar.Section mt="xs">
          </Navbar.Section>
          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
            <Box>
              <MainLinks />
            </Box>
          </Navbar.Section>
          <Navbar.Section>
            <UnstyledButton
              sx={(theme) => ({
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
              <Group>
                <ThemeIcon color={'blue'} variant="light">
                  <IconLogout />
                </ThemeIcon>
                
                <Text size="sm">Log out</Text>
              </Group>
            </UnstyledButton>
          </Navbar.Section>
        </Navbar>
        }
        header={
          <Header height={'10vh'} p="xs">
            <Brand />
          </Header>
        }
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
        })}
    >
      <Container
        size='xl'
        style={{width:'100%'}}
      >
        {children}
      </Container>
      </AppShell>
    </>
  );
}

export default Layout;