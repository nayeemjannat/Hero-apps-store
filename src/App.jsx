import { Outlet, useNavigation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Loader from './components/shared/Loader';

function App() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="bg-white min-h-screen font-inter flex flex-col">
      {/* 1. Header */}
      <Header />

      {/* 2. Main Content */}
      <main className="flex-1">
        {isLoading ? <Loader /> : <Outlet />}
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}

export default App;