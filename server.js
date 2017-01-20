const merely = require('merely');
const styleSheet = require("styled-components/lib/models/StyleSheet");

merely.plugin('merely-styled-components', (options, isDev) => {
  
  merely.on('beforeRender', () => {
    // styleSheet.flush();
  });
  
  merely.filter('getHeadContents', (contents) => {
    contents.push("<style type='text/css' id='initialStyles'>" + styleSheet.rules().map(item => item.cssText).join('\n')+"</style>");
    return contents;
  });
  
});