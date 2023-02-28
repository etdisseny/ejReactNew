import "./App.css";
import { TwiterFolowCard } from "./TwiterFolowCard";

function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="app">
      <TwiterFolowCard
        img="https://unavatar.io/sindresorhus@gmail.com"
        name="Pepito Pérez"
        userName="@Pepito"
        formatUserName={formatUserName}
      />
      <TwiterFolowCard
        img="https://unavatar.io/sindresorhus@gmail.com"
        name="Critian Blanco"
        userName="@Cristian"
        formatUserName={formatUserName}
      />
    </section>
  );
}

export default App;
