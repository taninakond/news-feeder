import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import NewsProvider from './contexts/NewsProvider';

function App() {
    return (
        <>
            <NewsProvider>
                <Navbar />
                <Main />
            </NewsProvider>
            <Footer />
        </>
    );
}

export default App;
