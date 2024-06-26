var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Node-API',
  description: 'API node para VFicha',
  script: 'D:\\APP\\VFicha\\node\\www\\index.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();