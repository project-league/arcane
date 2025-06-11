import React, { useState } from 'react';
import { Box, Button, Container, Stack, TextInput, Title } from '@mantine/core';
import zamkniete from '../assets/zamkniete.png';

interface FirstPageProps {
  onPasswordSubmit: (password: string) => void;
}

export function FirstPage({ onPasswordSubmit }: FirstPageProps) {
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onPasswordSubmit(password);
  };

  return (
    <Container
      size="xs"
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${zamkniete})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Box
        style={{
          backgroundColor: 'rgba(28, 26, 23, 0.72)',
          padding: '30px',
          borderRadius: '10px',
          width: '100%',
          maxWidth: '400px',
          border: '2px solid #4A3F35',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.6)',
        }}
      >
        <Stack gap="lg">
          <Title order={2} ta="center" style={{ marginBottom: '20px', color: '#E8DFD3' }}>
            Przechowalnia rzeczy "Chmurnik"
          </Title>

          <TextInput
            label="Podaj kod dostępu"
            placeholder="Wprowadź kod"
            size="md"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            styles={{
              label: {
                color: '#E8DFD3',
                fontWeight: 500,
              },
              input: {
                backgroundColor: '#2A2522',
                borderColor: '#4A3F35',
                color: '#E8DFD3',
                '&::placeholder': {
                  color: '#7A6B5D',
                },
                '&:focus': {
                  borderColor: '#7A6B5D',
                },
              },
            }}
          />

          <Button
            fullWidth
            size="md"
            mt="md"
            onClick={handleSubmit}
            styles={{
              root: {
                backgroundColor: '#4A3F35',
                color: '#E8DFD3',
                border: '1px solid #7A6B5D',
                '&:hover': {
                  backgroundColor: '#5C4E42',
                },
              },
            }}
          >
            Zatwierdź
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
