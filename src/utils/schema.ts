/**
 * Injects a JSON-LD schema into the document head and returns a cleanup function
 * to remove it on component unmount.
 * 
 * @param id - Unique identifier for the script tag
 * @param schema - The JSON-LD schema object
 * @returns A cleanup function to remove the script tag
 */
export const injectSchema = (id: string, schema: Record<string, any>): (() => void) => {
  if (typeof window === 'undefined') {
    return () => {};
  }

  // Remove existing script with this ID to prevent duplicate injection
  const existingScript = document.getElementById(id);
  if (existingScript) {
    existingScript.remove();
  }

  // Create and inject the new script tag
  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.innerHTML = JSON.stringify(schema);
  document.head.appendChild(script);

  // Return cleanup function for useEffect
  return () => {
    const el = document.getElementById(id);
    if (el) {
      el.remove();
    }
  };
};
