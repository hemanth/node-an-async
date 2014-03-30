module.exports = function(method){
   return /(callback|cb)/.test(method.toString());
}