
import './App.css';
import ContextThemeApp, { AppTheme } from './contexts/app';
import { Counter } from './features/counter/counter';
import { WeatherApp } from './weatherAPI/Weatherapp';

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <AppTheme /> */}
      {/* <WeatherApp /> */}
      <ContextThemeApp />
    </>
  );
}

export default App;
