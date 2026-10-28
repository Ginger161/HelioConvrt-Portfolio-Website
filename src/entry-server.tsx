import { renderToString } from 'react-dom/server';
import App from './App';

// Build-time only (see scripts/prerender.mjs): renders the page to a string so the text is in the HTML crawlers download.
export function render() {
  return renderToString(<App />);
}
