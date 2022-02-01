import Question from './Components/Question'
import CodeComponent from './Components/CodeComponent';
//import MathComponent from './Components/MathComponent';
import PrefixSums from './Components/Easy/PrefixSums';
function App() {
  let data = "public static void main(String[] args)";
  
  return (
    <div className="App">
      <PrefixSums/>
      <CodeComponent code={data}/>
      <Question/>
    </div>
  );
}

export default App;
