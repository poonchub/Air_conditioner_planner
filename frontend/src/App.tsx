import './App.css'
import { Box, ChakraProvider, createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import MainPage from './pages/MainPage/MainPage'
import { DarkMode, LightMode } from './components/ui/color-mode'

function App() {

    const config = defineConfig({
        theme: {
            tokens: {
                colors: {
                    primary: { value: "#FFFFFF" },
                    secondary: { value: "#EE0F0F" },
                },
                fonts: {
                    body: { value: "system-ui, sans-serif" },
                },
            },
        },
    })

    const system = createSystem(defaultConfig, config)

    return (
        <LightMode>
            <Box 
                width={'100vw'} 
                height={'100vh'}
                minWidth={1000} 
                overflow={'auto'}
                bgColor={'#ffffff'}
            >
                <ChakraProvider value={system}>
                    <MainPage />
                </ChakraProvider>
            </Box>
        </LightMode>


    )
}

export default App
