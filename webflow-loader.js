(() => {
  const isWebflowPreview = location.hostname.includes('.webflow.io');
  
  if (!isWebflowPreview) return;
  
  console.log('[Localhost Loader] Webflow preview detected');
  
  // Option A: Use localtunnel/ngrok HTTPS URL (RECOMMENDED)
  // Replace with your tunnel URL after running: npx localtunnel --port 5173
  const LOCALHOST_URL = 'http://localhost:5173';
  
  // Option B: If using a tunnel service, paste the HTTPS URL here:
  // const LOCALHOST_URL = 'https://your-tunnel-url.loca.lt';
  
  console.log('[Localhost Loader] Loading from:', LOCALHOST_URL);
  
  const script = document.createElement('script');
  script.type = 'module';
  script.src = `${LOCALHOST_URL}/src/main.js`;
  
  script.onerror = () => {
    console.error(`
[Localhost Loader] Failed to load from ${LOCALHOST_URL}

This usually means:
1. Vite is not running (run: bun run dev)
2. CORS/mixed content blocking (HTTPS → HTTP)

To fix: Use a tunnel service for HTTPS:
  npx localtunnel --port 5173

Then update LOCALHOST_URL in this script to the https:// URL provided.
    `);
  };
  
  document.head.appendChild(script);
})();
