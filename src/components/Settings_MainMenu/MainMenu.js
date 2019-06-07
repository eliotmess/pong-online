import React from 'react';
import styled from 'styled-components';

const MainMenuWrapper = styled.div`
  background: #1e1e1e;
  padding: 3vh 6vw;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  max-height: 80%;
  max-width: 80vw;
  animation: showMenu 150ms ease-out;

  @keyframes showMenu {
    0% {
      opacity: 0.8;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @media (min-width: 1024px) {
    height: 60vh;
    width: 50vw;
  }
`;

const PlayerWelcome = styled.form`
  width: 75%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;

const WelcomeMsg = styled.p`
  color: #fefefe;
  font-size: 0.9rem;
  line-height: 1.8;
  margin: 5px 0;
  text-align: center;
  white-space: pre-wrap;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    margin: 5px 0 20px 0;
    font-size: 1.2rem;
  }
`;

const PlayerNameInput = styled.input`
  width: 100%;
  margin: 5px 0;
  color: #1e1e1e;
  border-radius: 50px;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Concert One', cursive;
  font-size: 0.9rem;
  padding: 0;
  line-height: 2rem;

  &::placeholder {
    overflow: visible;
  }

  @media (min-width: 1024px) {
    padding: 15px 0;
    margin: 15px 0;
    font-size: 1.2rem;
  }
`;

const ToLobbyBtn = styled.button`
  margin: 5px 0;
  width: 100%;
  padding: 0;
  line-height: 2rem;
  background: #ed1c24;
  border-radius: 50px;
  text-align: center;
  border: none;
  font-family: 'Concert One', cursive;
  font-size: 0.9rem;
  color: #fefefe;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background: brown;

    &:hover {
      cursor: not-allowed;
    }
  }

  @media (min-width: 1024px) {
    padding: 15px 0;
    margin: 15px 0;
    font-size: 1.2rem;
  }
`;

const MainMenu = ({ playerName, setPlayerName, goToLobby }) => {
  const handleNameInput = e => {
    setPlayerName(e.target.value.trim());
  };

  const handleToLobby = e => {
    e.preventDefault();
    goToLobby();
  };

  return (
    <MainMenuWrapper>
      <PlayerWelcome>
        <WelcomeMsg>
          {`Log in with your name and duel friends like in the ol${`'`} times.`}
        </WelcomeMsg>
        <PlayerNameInput
          type="text"
          autoFocus
          onChange={e => handleNameInput(e)}
          value={playerName}
          placeholder="YOUR NAME HERE"
        />
        <ToLobbyBtn
          disabled={playerName.length < 2 && true}
          type="submit"
          onClick={e => handleToLobby(e)}
        >
          PLAY PONG
        </ToLobbyBtn>
      </PlayerWelcome>
    </MainMenuWrapper>
  );
};

export default MainMenu;
