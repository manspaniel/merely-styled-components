const merely = require('merely');

merely.plugin('merely-styled-components', (options, isDev) => {
  
  console.log("Plugin with config", options);
  
  if(!isDev) {
    merely.on('pageReady', () => {
      const initialStyles = document.getElementById('initialStyles');
      if(initialStyles) {
        initialStyles.remove();
      } else {
        console.error("Couldn't find server-rendered styled-components stylesheet on page.");
      }
    });
  }
  
});