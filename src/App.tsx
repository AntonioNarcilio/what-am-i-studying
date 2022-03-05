/* eslint-disable import/extensions */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// components
// @ts-ignore
import { GlobalStyle } from '@/styles/global';
import HomePage from '@/pages/Home';
// styles, others
import dark from '@/themes/dark';

function App() {
  return (
    <ThemeProvider theme={dark}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
