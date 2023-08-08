import MainComponent from "./src/components/main/mainComponent";
import { AuthProvider } from './src/components/contexts/AuthContext';


const App = () => {
    return (
        <AuthProvider>
            <MainComponent />
        </AuthProvider>
    );
}

export default App;