import './App.css';
import Header from "./components/Header";
import MainContent from "./components/MainContent"

export default function App() {
  return (
    <div className='container flex'>
      <Header />
      <MainContent />
    </div>
  );
}
