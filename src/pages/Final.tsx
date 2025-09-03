import React, { useState } from 'react';
import { Stack, Transition } from '@mantine/core';
import { FirstPage } from './First';
import { SecondPage } from './Second';
import { Tickets } from './Tickets';

export function Final() {
  const [passCorrect, setPassCorrect] = useState(false);
  const [showTickets, setShowTickets] = useState(false);
  const correctPassword = '7312'; // You can change this to any password you want

  const handlePasswordSubmit = (password: string) => {
    if (password === correctPassword) {
      setShowTickets(true);
    }
  };

  const handleTicketsNext = () => {
    setPassCorrect(true);
  };

  return (
    <Stack style={{ position: 'relative', minHeight: '100vh' }} className="final-page">
      <Transition
        mounted={!showTickets && !passCorrect}
        transition="fade"
        duration={600}
        timingFunction="ease"
      >
        {(styles) => (
          <div style={{ ...styles, position: 'absolute', width: '100%', height: '100%' }}>
            <FirstPage onPasswordSubmit={handlePasswordSubmit} />
          </div>
        )}
      </Transition>

      <Transition
        mounted={showTickets && !passCorrect}
        transition="fade"
        duration={600}
        timingFunction="ease"
      >
        {(styles) => (
          <div style={{ ...styles, position: 'absolute', width: '100%', height: '100%' }}>
            <Tickets onNext={handleTicketsNext} />
          </div>
        )}
      </Transition>

      <Transition mounted={passCorrect} transition="fade" duration={600} timingFunction="ease">
        {(styles) => (
          <div style={{ ...styles, position: 'absolute', width: '100%', height: '100%' }}>
            <SecondPage />
          </div>
        )}
      </Transition>
    </Stack>
  );
}
