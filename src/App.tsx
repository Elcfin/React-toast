import Provider from "./components/Provider";
import Hello from "./components/Hello";
import Hi from "./components/Hi";
const App = () => {
  return (
    <Provider>
      <Hello />
      {/* <Hi /> */}
    </Provider>
  );
};
export default App;
