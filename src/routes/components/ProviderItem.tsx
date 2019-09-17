import React, { useState } from 'react';
import styled from 'styled-components';
import { Provider } from '../../utils';
import Button from './Button';
import Loader from './Loader';
interface ProviderItemProps {
  provider: Provider;
}

const ProviderWrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
  display: flex;
`;
const ProviderStatus = styled.div`
  justify-self: flex-end;
  justify-content: center;
  align-items: center;
  display: flex;
`;
const ProviderLogo = styled.img`
  height: 64px;
`;
const ProviderLogoWrapper = styled.div`
  flex: auto;
  display: flex;
  justify-content: flex-start;
`;

const Connected = styled.div`
  font-size: 12px;
  font-weight: bold;
  text-align: right;
`;
const ConntectedSubtitle = styled.div`
  font-weight: normal;
`;

const ConnectedUser = ({
  connected,
  onClick
}: {
  onClick: any;
  connected: boolean;
}) => {
  return !connected ? (
    // @ts-ignore
    <Button onClick={onClick}>Connect</Button>
  ) : (
    <Connected>
      <ConntectedSubtitle>Connected with:</ConntectedSubtitle>
      Anna Andersson
    </Connected>
  );
};

const ProviderItem: React.FC<ProviderItemProps> = ({ provider }) => {
  const [fakeLoading, setFakeLoading] = useState(false);
  const [connected, setConnected] = useState(false);
  return (
    <ProviderWrapper>
      <ProviderLogoWrapper>
        <ProviderLogo src={provider.logo} />
      </ProviderLogoWrapper>
      <ProviderStatus>
        {fakeLoading ? <Loader></Loader> : null}
        {fakeLoading ? null : (
          <ConnectedUser
            onClick={() => {
              setFakeLoading(true);
              setTimeout(() => {
                setConnected(true);
                setFakeLoading(false);
              }, 2000);
            }}
            connected={connected}
          />
        )}
      </ProviderStatus>
    </ProviderWrapper>
  );
};

export default ProviderItem;
