var ext = require("./utils/ext")
var storage = require("./utils/storage")

storage.get('enabled')
.then((data) => {
  var enabled = data.enabled
  toggleBtn.value = 'Toggle (Current: ' + (enabled ? 'On' : 'Off') + ')'
})

var toggleBtn = document.getElementById("toggle-leetspeak-btn");
toggleBtn.addEventListener('click', function(event) {
  event.preventDefault();  

  storage.get('enabled')
  .then((data) => {
    var enabled = !data.enabled    
    toggleBtn.value = 'Toggle (Current: ' + (enabled ? 'On' : 'Off') + ')'
    storage.set({ enabled: enabled })
  })

})
