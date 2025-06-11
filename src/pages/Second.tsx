import React from 'react';
import { Box, Container, Stack, Text, Title } from '@mantine/core';
import otwarte from '../assets/otwarte.png';

export function SecondPage() {
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
        }}
      >
        <Stack gap="lg">
          <Title order={2} ta="center" style={{ marginBottom: '20px', color: '#E8DFD3' }}>
            Gratulacje, Agencie!
          </Title>

          <Text style={{ color: '#E8DFD3', lineHeight: 1.6, textAlign: 'justify' }}>
            Misja zakończona sukcesem. Po wyczerpującym śledztwie, skrupulatnym eliminowaniu
            podejrzanych i sprytnym zdobywaniu informacji udało ci się odkryć prawdę…
          </Text>

          <Text style={{ color: '#E8DFD3', lineHeight: 1.6, textAlign: 'justify' }}>
            Dr Corin Reveck, znany jako Singed, NIE został porwany przez wrogów Imperium. Nie ukrywa
            się w podziemiach, nie pracuje w sekrecie nad nową, niebezpieczną formułą. Nic z tych
            rzeczy.
          </Text>

          <Text
            style={{ color: '#E8DFD3', lineHeight: 1.6, textAlign: 'center', fontWeight: 'bold' }}
          >
            Singed… wyjechał na wakacje.
          </Text>

          <Text style={{ color: '#E8DFD3', lineHeight: 1.6, textAlign: 'justify' }}>
            Z dala od alchemicznych eksperymentów, szaleństwa i chaosu, odpoczywa w tropikach,
            obserwując zachód słońca i popijając coś zapewne nieco radioaktywnego.
          </Text>

          <Text style={{ color: '#E8DFD3', lineHeight: 1.6, textAlign: 'justify' }}>
            Czy to znaczy, że Wieczne Imperium musi poczekać na jego geniusz?
            {'\n'}
            Najwyraźniej tak. Ale ty, Agencie, odniosłeś sukces - rozwiązałeś zagadkę i udowodniłeś
            swoją wartość.
          </Text>

          <Text
            style={{ color: '#E8DFD3', lineHeight: 1.6, textAlign: 'center', fontStyle: 'italic' }}
          >
            Noxus nie zapomina o takich talentach.
          </Text>

          <Text
            style={{
              color: '#E8DFD3',
              lineHeight: 1.6,
              textAlign: 'center',
              fontWeight: 'bold',
              marginTop: '20px',
            }}
          >
            Koniec gry.
          </Text>
        </Stack>
      </Box>
    </Container>
  );
}
