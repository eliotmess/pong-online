import React from 'react';
import styled from 'styled-components';
import * as io from 'socket.io-client';
import RatioError from './templates/RatioError/RatioError';
import SocketContext from './components/SocketContext/SocketContext';
import MainViewWithSocket from './templates/MainView/MainViewWithSocket';

const pong = io();

const AppWrapper = styled.div`
  text-align: center;
  height: 100%;
`;

const Main = styled.main`
  height: 100%;
  width: 100vw;
  background: #ffed90;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppWrapper>
      <SocketContext.Provider value={pong}>
        <Main>
          {window.innerWidth < window.innerHeight ? (
            <RatioError />
          ) : (
            <MainViewWithSocket />
          )}
        </Main>
      </SocketContext.Provider>
    </AppWrapper>
  );
}

export default App;
