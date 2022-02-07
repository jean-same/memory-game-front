const utils = {
    
    formatDate : function(date) {
        return dateFormatted = moment(date).format("lll"); 
      },

      formatSecsInMinutes : function(seconds) {
        return result = moment.utc(seconds*1000).format('mm:ss');
      }
}