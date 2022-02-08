const utils = {

  // 2 methodes que je vais utiliser pour formatter les dates et les secondes en minutes
  // J'ai utilisé momentjs
  // https://momentjs.com/
    
    formatDate : function(date) {
        return dateFormatted = moment(date).format("lll"); 
      },

      formatSecsInMinutes : function(seconds) {
        return result = moment.utc(seconds*1000).format('mm:ss');
      }
}