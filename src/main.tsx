import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { UI } from './ui';

createRoot(document.getElementById('__root')!).render(
  <StrictMode>
    <UI />
  </StrictMode>
);
