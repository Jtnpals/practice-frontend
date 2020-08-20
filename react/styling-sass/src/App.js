import React from 'react';
import Button from './components/Button';

import './App.scss';

function App() {
    return (
        <div className="App">
            <div className="buttons">
                <Button size="large">Button</Button>
                <Button>Button</Button>
                <Button size="small">Button</Button>
            </div>
            <div className="buttons">
                <Button size="large" color="gary">
                    Button
                </Button>
                <Button color="gary">Button</Button>
                <Button size="small" color="gary">
                    Button
                </Button>
            </div>
            <div className="buttons">
                <Button size="large" color="pink">
                    Button
                </Button>
                <Button color="pink">Button</Button>
                <Button size="small" color="pink">
                    Button
                </Button>
            </div>
            <div className="buttons">
                <Button size="large" outline={true}>
                    Button
                </Button>
                <Button color="gray" outline={true}>
                    Button
                </Button>
                <Button size="small" color="pink" outline={true}>
                    Button
                </Button>
            </div>
            <div className="buttons">
                <Button size="large" fullWidth={true}>
                    Button
                </Button>
                <Button color="gray" fullWidth={true}>
                    Button
                </Button>
                <Button
                    size="small"
                    color="pink"
                    fullWidth={true}
                    className="customized-button"
                    onClick={() => {
                        console.log('클릭!');
                    }}
                    onMouseMove={() => {
                        console.log('마우스 무브');
                    }}
                >
                    Button
                </Button>
            </div>
        </div>
    );
}

export default App;
