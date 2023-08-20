import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProgressProvider } from './context/ProgressContext';
import { useProgressInit } from './hooks/useProgressInit';
import { FlexWrapper } from './components/shared/FlexWrapper';

const Wrapper = styled(FlexWrapper)`
  --borderRadius: 20px;
  height: ${({height}) => height}px;
  overflow-x: hidden;
  align-items: center;
  background: #1C1C1C;
  color: white;
  white-space: pre-line;
`;

const ComponentWrapper = styled(FlexWrapper)`
  position: relative;
  max-width: 640px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: #1C1C1C;

  @media screen and (min-width: 640px) {
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
