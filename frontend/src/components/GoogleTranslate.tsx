import { useEffect, useState } from "react";

export default function GoogleTranslate() {
  const [status, setStatus] = useState("Initializing...");

  useEffect(() => {
    console.log("GoogleTranslate component mounted");
    
    const initializeWidget = () => {
      console.log("Attempting to initialize widget");
      setStatus("Initializing widget...");
      
      try {
        const div = document.getElementById('google_translate_element');
        console.log("Target div:", div);
        
        if (!div) {
          console.error("Target div not found!");
          setStatus("ERROR: Div not found");
          return;
        }

        // Check if Google Translate API is available
        if (!(window as any).google?.translate) {
          console.log("Google Translate API not ready yet");
          setStatus("Waiting for API...");
          setTimeout(initializeWidget, 500);
          return;
        }

        // Check if already initialized
        if (div.innerHTML.trim() !== '') {
          console.log("Already initialized");
          setStatus("✓ Already loaded");
          return;
        }

        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'ar,en',
            layout: (window as any).google.translate.TranslateElement.InlineLayout.HORIZONTAL
          },
          'google_translate_element'
        );
        
        console.log("TranslateElement created");
        setStatus("Widget created!");
        
        // Check if select appears
        setTimeout(() => {
          const select = document.querySelector('.goog-te-combo');
          console.log("Select element:", select);
          
          // Check what's actually in the div
          console.log("Div innerHTML:", div.innerHTML);
          console.log("Div children:", div.children);
          
          // Check for any Google Translate elements
          const gadget = document.querySelector('.goog-te-gadget');
          const gadgetSimple = document.querySelector('.goog-te-gadget-simple');
          console.log("Gadget:", gadget);
          console.log("Gadget simple:", gadgetSimple);
          
          setStatus(select ? "✓ Working!" : "Select not rendering");
        }, 3000);
        
      } catch (error) {
        console.error("Error initializing:", error);
        setStatus(`ERROR: ${error}`);
      }
    };

    // Define the global callback
    (window as any).googleTranslateElementInit = initializeWidget;

    // Load script if not exists
    const existingScript = document.getElementById('google-translate-script');
    
    if (existingScript) {
      console.log("Script exists, calling init directly");
      // Script already loaded, just initialize
      initializeWidget();
    } else {
      console.log("Adding new script");
      setStatus("Loading script...");
      
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      
      script.onload = () => {
        console.log("Script loaded successfully");
        setStatus("Script loaded");
      };
      
      script.onerror = () => {
        console.error("Script failed to load");
        setStatus("Script failed to load");
      };
      
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="flex items-center gap-2">
      <div id="google_translate_element"></div>
      {/* Debug info - remove this later */}
      
    </div>
  );
}