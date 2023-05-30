import { CloseButton, Container, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

export function App() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <Container>
      <Title>Close button will toggle</Title>
      <CloseButton variant="transparent" onClick={() => toggle()} />
      {opened ? 'open' : 'close'}
    </Container>
  );
}

export default App;
