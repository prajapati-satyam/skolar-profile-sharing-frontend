// function formater(url) {
//     if (url.startsWith('https://') || url.startsWith('http://') || url.startsWith('www.') || url.startsWith('www')) {
//         return url;
//     } else {
//       return `https://${url}`
//     }
//   }
function formater(url) {
    if (url.startsWith('https://') || url.startsWith('http://')) {
        return url;
    } else if( url.startsWith('www.') || url.startsWith('www')) {
          return `https://${url}`;
    } else {
      return `https://${url}`
    }
  } 
  export default formater;