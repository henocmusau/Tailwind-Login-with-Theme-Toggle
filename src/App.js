import Footer from './components/Footer';
import Header from './components/Header';
import LoginScreen from './components/LoginScreen';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="flex-col justify-between h-screen">
       <Header/>
       <LoginScreen/>
       <Footer />
       </div>
    </ThemeProvider>
  );
}

export default App;
