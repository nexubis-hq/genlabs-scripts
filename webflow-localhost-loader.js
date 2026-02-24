(() => {
  const isWebflowPreview = location.hostname.includes('.webflow.io');
  
  if (!isWebflowPreview) return;
  
  console.log('[Localhost Loader] Webflow preview detected, loading localhost scripts...');
  
  // Load your main.js from localhost
  const script = document.createElement('script');
  script.type = 'module';
  script.src = 'http://localhost:5173/src/main.js'; // Vite dev server default
  document.head.appendChild(script);
  
  // Optional: Load localhost CSS
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'http://localhost:5173/src/style.css';
  document.head.appendChild(link);
})();
