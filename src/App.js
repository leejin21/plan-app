import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p className="logo-txt">J:PLAN</p>
            </header>
            <div className="Content">
                <p className="Times">여기는 채워지는 시간표</p>
                <p className="TDL">여기는 tdl+스톱워치 기능</p>
            </div>
        </div>
    );
}

export default App;
