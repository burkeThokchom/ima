//const informationDeskService = require("./services");
const currenciesJSON = require('../../../utils/currencies.json');
const paymentService = require('./services/paymentService');

exports.initiatePayment = async (req, res, next) => {
  try {
    const currencies = currenciesJSON.current;
    const reqBody = req.body;
    const resp = await paymentService.initiatePayment(reqBody);
    console.log("Server resp",resp)
    return res.status(200).send({message:resp.toString()})
  } catch (error) {
    console.log("Error in promise", error)
    next(error);
  }
};