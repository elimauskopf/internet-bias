 
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

 module.exports = {
    // devServer: {
    //     proxy: `http://localhost:${port}/`,      
    // }, 
    lintOnSave: false
} 