const axios = require("axios").default;

const checkStatus = async () => {
  try {
    const response = await axios.get('https://status.cfx.re/api/v2/status.json');
    const config = require("./config.json");
    const status = response.data.status.description
    axios({
      url: config.webhook,
      method: "POST",
      data: {
        embeds: [
          {
            title: "Fivem Status Check By Serresz",
            description: `**status** : ${status}`,
            color: 11564031,
          }
        ]
      }
    });
    console.log(`Sent a status update to Discord at : ${new Date().toLocaleTimeString()}`);
  } catch (error) {
    console.error(error);
  }
};

setInterval(checkStatus, 3000);
