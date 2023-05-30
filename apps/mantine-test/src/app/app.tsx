import styled from '@emotion/styled';

import NxWelcome from './nx-welcome';

import { CloseButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <StyledApp>
      {opened ? 'open' : 'close'}
      <CloseButton variant="transparent" onClick={() => toggle()} />
    </StyledApp>
  );
}

export default App;
