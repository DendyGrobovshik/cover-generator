import { AppShell, Stack } from '@mantine/core';
import Header from '~/components/Header';
import Form from '~/components/Form';
import Covers from '~/components/covers/Covers';
import React from 'react';
import AbstractPage from "~/AbstractPage";

export default class Index extends AbstractPage {
  returnFunc() {
    return (
      <AppShell
        navbar={<Stack><Header/><Form/></Stack>}
        styles={{
          main: {
            padding: 0,
          },
        }}
      >
        <Covers/>
      </AppShell>
    );
  }
}
