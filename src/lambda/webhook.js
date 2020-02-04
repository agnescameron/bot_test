
const { WebhookClient } = require('dialogflow-fulfillment');



exports.handler = async (event) => {
	console.log('heyyyy')
  const agent = new WebhookClient({ request: req, response: res })

function getWishFood() {
    //if contains emoji
    console.log('called getwishfood')
    var regex = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g
    var emoji = agent.request_.body.queryResult.queryText.match(regex);

    console.log(agent.request_.body.queryResult.parameters, emoji)

    agent.add(agent.request_.body.queryResult.fulfillmentText);
  }

//maps an intent (in this case, wish food) 
//to a function that gets triggered when an intent is called
let intentMap = new Map();
intentMap.set('Wish Food', getWishFood);
agent.handleRequest(intentMap);
}
