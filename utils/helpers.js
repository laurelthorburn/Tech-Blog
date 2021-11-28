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
