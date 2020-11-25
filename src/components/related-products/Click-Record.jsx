const axios = require("axios");
const moment = require('moment');


var recordClick = (string) => {
    var stringSplit = string.split(' ')
    var midStep = stringSplit[stringSplit.length - 1]
    var toRec = midStep.split('-')
    var widget = toRec[0]
    var element = toRec[1]
    var time = moment().format('h:mm:ss a')

    axios.post(`http://3.21.164.220/interations?element=${element}&widget=${widget}&time=${time}`)
    .then(() => {
        console.log('DATA SUCCESSFULLY RECORDED')
    })
    .catch((err) => {
        console.log('THERE WAS AN ERROR RECORDING DATA:', err)
    })
}
