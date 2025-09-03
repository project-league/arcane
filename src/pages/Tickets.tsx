import React from 'react';
import { Box, Button, Container, Image } from '@mantine/core';
import bilety from '../assets/bilety.png';
import otwarte from '../assets/otwarte.png';

interface TicketsProps {
  onNext: () => void;
}

export function Tickets({ onNext }: TicketsProps) {
  return (
    <Container
      size="xs"
      style={{
        minHeight: '100vh',
        backgroundImage: `url(${otwarte})`,
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
          maxWidth: '600px',
          border: '2px solid #4A3F35',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.6)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Image
          src={bilety}
          alt="Tickets"
          style={{
            maxWidth: '100%',
            height: 'auto',
            margin: '0 auto',
            display: 'block',
            width: 'fit-content',
          }}
        />
        <Button
          size="lg"
          onClick={onNext}
          style={{
            marginTop: '2rem',
            padding: '0.75rem 2rem',
            fontSize: '1.2rem',
            backgroundColor: '#4A3F35',
            color: '#E8DFD3',
            border: '1px solid #7A6B5D',
            '&:hover': {
              backgroundColor: '#5C4E42',
            },
          }}
        >
          Dalej
        </Button>
      </Box>
    </Container>
  );
}
