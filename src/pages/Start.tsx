import React, { useState } from 'react';
import { Box, Button, Container, Stack, Text, TextInput, Title } from '@mantine/core';
import logo from '../assets/logo.png';
import tlo from '../assets/tlo.png';
import wstep from '../assets/wstęp1.png';
import wstep2 from '../assets/wstęp3.png';

export function Start() {
  return (
    <>
      <Container
        size="xs"
        style={{
          minHeight: '80vh',
          backgroundImage: `url(${tlo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '20px',
          paddingBottom: '30px',
          color: 'white',
          gap: '20px',
        }}
      >
        <img src={logo} alt="logo" style={{ width: '40%', height: 'auto' }} />

        <Stack
          style={{
            backgroundColor: 'rgba(6, 26, 45, 0.6)',
            padding: '30px',
            borderRadius: '10px',
            width: '100%',
            maxWidth: '400px',
            border: '2px solid #C1AF7F',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.6)',
          }}
        >
          <Title order={4} ta="left">
            Witaj w interaktywnym pokoju zagadek Arcane!
          </Title>

          <Text>
            Twoim zadaniem jest wcielenie się w Noxiańskiego szpiega i znalezienie informacji na
            temat obecnego miejsca pobytu Singeda. Przeszukaj pokój strażników Piltover oraz
            laboratorium alchemika aby znaleźć poszlaki, które doprowadzą Cię do rozwiązania tej
            sprawy. Dotykaj, podnoś, i odwracaj elementy dekoracji, a trafisz na to czego szukasz.
          </Text>

          <Text>
            Zacznij od przeczytania poniższego listu i sprawdzenia dołączonej listy podejrzanych.
          </Text>
        </Stack>
      </Container>
      <Container
        size="xs"
        style={{
          minHeight: '100vh',
          backgroundImage: `url(${wstep})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          color: 'black',
        }}
      >
        <Stack
          gap="lg"
          style={{
            fontFamily: '"Special Elite", system-ui',
            fontWeight: 400,
            fontStyle: 'normal',
            letterSpacing: '0.05em',
          }}
        >
          <Title
            order={2}
            ta="left"
            style={{
              marginTop: '10px',
              fontFamily: '"Special Elite", system-ui',
              marginBottom: '10px',
            }}
          >
            Agencie!
          </Title>
          <Text>
            Zostajesz oddelegowany na misję przeszukania, odnalezienia oraz zwerbowania geniusza
            alchemii, dr Corina Revecka, obecnie znanego pod pseudonimem Singed. Jego wiedza i
            badania mogą zmienić oblicze Wielkiego Imperium.
          </Text>

          <Text>
            Twoim zadaniem jest zinfiltrowanie struktur policyjnych Piltover pod przykrywką
            funkcjonariusza - to twój punkt wyjścia. Według najnowszych doniesień dr Reveck nie
            figuruje jako podejrzany w żadnej sprawie w Dwumieście, jednak ślad po nim zaginął.
            Nasza siatka informacyjna podaje kilka frakcji, które mogą być “zainteresowane
            przejęciem” tego geniuszu dla siebie lub zamknięciem go w niewoli. Nie możemy na to
            pozwolić.
          </Text>

          <Text ta="right">Noxus nie przyjmuje porażki.</Text>

          <Text ta="right">Powodzenia, Agencie.</Text>

          <img src={wstep2} alt="wstep2" style={{ width: '100%', height: 'auto' }} />
        </Stack>
      </Container>
    </>
  );
}
