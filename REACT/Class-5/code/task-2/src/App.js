import "./App.css";

const App = () => {
  let date = new Date();

  const currentTime = () => {
    let today = new Date().toLocaleTimeString();
    document.getElementById("time").innerHTML = today;
  };

  setInterval(currentTime, 1000);

  return (
    <>
      <h1>React Workshop</h1>

      <img
        alt="img"
        src="https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg"
      />

      <h2>Learn React JSX, CSS, and JS in this workshop!"</h2>
      <h3>Event Time : 10:00 AM - 12:00 PM</h3>

      <h3>Event Date : {date.toLocaleDateString()}</h3>

      <span>
        Current Time : <span id="time"></span>
      </span>
    </>
  );
};

export default App;
