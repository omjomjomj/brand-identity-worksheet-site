const ANALYTICS_SCRIPT_ID = "umami-analytics";

function normalizeEndpoint(endpoint: string) {
  return endpoint.endsWith("/") ? endpoint.slice(0, -1) : endpoint;
}

export function loadAnalytics() {
  const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
  const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

  if (!endpoint || !websiteId) return;
  if (document.getElementById(ANALYTICS_SCRIPT_ID)) return;

  const script = document.createElement("script");
  script.id = ANALYTICS_SCRIPT_ID;
  script.defer = true;
  script.src = `${normalizeEndpoint(endpoint)}/umami`;
  script.dataset.websiteId = websiteId;

  document.body.appendChild(script);
}
