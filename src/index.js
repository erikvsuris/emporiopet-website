const date = new Date().getFullYear()

const copyrightRoot = document.getElementById('copyright')
copyrightRoot.innerHTML = `<div>
                            &copy; ${date}, Empório Pet
                          </div>`