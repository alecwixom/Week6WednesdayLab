const Rollbar = require("rollbar")
var rollbar = new Rollbar({
    accessToken: '561c3578023944d682991e487e055f4b',
    captureUncaught: true,
    captureUnhandledRejections: true,
})

const lexusButton = document.getElementById('lexus')
const supraButton = document.getElementById('supra')
const nissanButton = document.getElementById('nissan')
const skylineButton = document.getElementById('skyline')

lexusButton.addEventListener('click', () => {
    console.log("This is a Lexus Button");
    rollbar.info('Fun fact, I own this car.')
})

supraButton.addEventListener('click', () => {
    console.log("This is a supra Button");
    rollbar.error('Uh, you cannot use this. Its too much POWA.')
})

nissanButton.addEventListener('click', () => {
    console.log("This is a nissan Button");
    rollbar.info('This is a cool car.')
})

skylineButton.addEventListener('click', () => {
    console.log("This is a skyline Button");
    rollbar.warning('You dont have enough POWA.')
})