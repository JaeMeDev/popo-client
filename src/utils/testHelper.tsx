import { JSXElementConstructor, ReactElement, ReactNode } from 'react';

import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import fixtures from '@/fixtures';
import lightTheme from '@/styles/theme';

export function renderWithThemeProviders(node: ReactNode) {
  return render((
    <ThemeProvider theme={{ ...lightTheme, size: fixtures.theme.size }}>
      {node}
    </ThemeProvider>
  ));
}

export function renderWithPortal<P>(ui: ReactElement<P, string | JSXElementConstructor<P>>, elementId = 'popup-portal') {
  const portalContainer = document.createElement('div');
  portalContainer.setAttribute('id', elementId);

  return render(ui, {
    container: document.body.appendChild(portalContainer),
  });
}
