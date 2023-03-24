import { Container } from 'components/Container';
import { Search } from 'components/Search';
import { TheHeader } from 'components/TheHeader';
import { UserCard } from 'components/UserCard';

import { defaulUser } from 'defaultUser';

function App() {
  return (
    <Container>
      <TheHeader/>
      <Search hasError onSumbmit={() => {}}/>
      <UserCard {...defaulUser}/>
    </Container>
  );
}

export default App;
