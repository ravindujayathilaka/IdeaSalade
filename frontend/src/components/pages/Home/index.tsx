import React from 'react';
import Container from '../../layouts/Container';
import News from '../Category/News';
import TimeAnalysis from '../Category/Time Analysis';
import WhatIf from '../Category/What If';

const HomePage = () => {
    return (
        <Container>
            <div>
                Home Page
                <br />
                <br />
                <News />
                <br />
                <br />
                <TimeAnalysis />
                <br />
                <br />
                <WhatIf />
            </div>
        </Container>
    );
};

export default HomePage;
