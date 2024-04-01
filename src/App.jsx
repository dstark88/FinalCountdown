import Header from "./components/Header.jsx";
import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Header />
      <div id="content">
        <header>
          <h1>
            The <em>Almost</em> Final Countdown
          </h1>
          <p>Stop the timer once you estimate that time is (almost) up</p>
        </header>
        <Player />
        <div id="challenges">
          <TimerChallenge title="Easy" targetTime={1} />
          <TimerChallenge title="Not easy" targetTime={5} />
          <TimerChallenge title="Getting tough" targetTime={10} />
          <TimerChallenge title="Pros only" targetTime={15} />
        </div>
      </div>
    </>
  );
}

export default App;
