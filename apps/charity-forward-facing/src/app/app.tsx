import styled from '@emotion/styled';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../pages/landing/landing';
import { Nav } from '@givinga-philantech/ui-shared/nav';
import Campaigns from '../pages/campaigns/campaigns/campaigns';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const StyledApp = styled.div``;

export function App() {
  return (
    <StyledApp>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Nav />
          <Route path="/" exact render={() => <Landing />} />
          <Route path="/campaigns" exact render={() => <Campaigns />} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    </StyledApp>
  );
}

export default App;
