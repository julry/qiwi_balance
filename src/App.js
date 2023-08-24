import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProgressProvider } from './context/ProgressContext';
import { useProgressInit } from './hooks/useProgressInit';
import { FlexWrapper } from './components/shared/FlexWrapper';

const Wrapper = styled(FlexWrapper)`
  --borderRadius: calc(var(--cardSize) * 20 / 80);
  --cardSize: min(80px, 20vw);
  --cardBorder: 14px;
  --smallRadius: calc(var(--cardSize) * 12 / 80);
  height: ${({height}) => height}px;
  overflow-x: hidden;
  align-items: center;
  background: #1C1C1C;
  color: white;
  white-space: pre-line;

  @media screen and (max-height: 800px){
    --cardBorder: 10px;
    --cardSize: min(70px, 15vw);
  }

  @media screen and (max-height: 700px){
    --cardBorder: 10px;
    --cardSize: min(60px, 15vw);
  }

  @media screen and (max-height: 600px){
    --cardBorder: 10px;
    --cardSize: min(55px, 16vw);
  }
`;

const ComponentWrapper = styled(FlexWrapper)`
  position: relative;
  max-width: 640px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #1C1C1C;

  @media screen and (min-width: 640px) {
    max-width: 500px;
    border: 3px solid white;
    border-radius: 20px;
  }
`;

function App() {
    const [height, setHeight] = useState(100);
    const progress = useProgressInit();
    const {screen} = progress;

    const Component = screen?.component || (() => null);

    useEffect(() => {
        function handleResize() {
            const viewportHeight = document.documentElement.clientHeight;
            setHeight(viewportHeight);
        }

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ProgressProvider value={progress}>
            <Wrapper height={height}>
                <ComponentWrapper>
                    <Component />
                </ComponentWrapper>
            </Wrapper>
        </ProgressProvider>
    );
}

export default App;
