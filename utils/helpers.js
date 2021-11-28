// module.exports = {
//     // TODO: Create a custom helper 'format_date' that takes in a timestamp,
//     // adds five years to the date, and formats it as M/D/YYYY
//     format_date: (date) => {
//         date = new Date();
//         y = date.getFullYear();
//         m = date.getMonth();
//         d = date.getDate();
   
//         return m + "/" + d + "/" + y;
//     }
//   };

const hb = require('handlebars');

hb.registerHelper('format_date', function(date) {
    date = new Date();
        y = date.getFullYear();
        m = date.getMonth();
        d = date.getDate();
   
        return m + "/" + d + "/" + y;
});

hb.registerHelper('loud', function (aString) {
    return aString.toUpperCase()
})
