import { createRoot } from 'react-dom/client';

import Home from "./pages/Home";

import "./index.css";

const rootEl = document.getElementById("root");

const root = createRoot(rootEl);


root.render(<Home />);  