const { WebhookClient } = require("dialogflow-fulfillment");
const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));
const mongoose = require("mongoose");
const Demand = mongoose.model("demand");
const Coupon = mongoose.model("coupon");
const Registration = mongoose.model("registration");
const rpn = require("request-promise-native");

module.exports = (app) => {
  app.post("/", async (req, res) => {
    const agent = new WebhookClient({ request: req, response: res });

    function snoopy(agent) {
      agent.add(`Welcome to my Snoopy fulfillment!`);
    }

    async function registration(agent) {
      const registration = new Registration({
        name: agent.parameters.name,
        address: agent.parameters.address,
        phone: agent.parameters.phone,
        email: agent.parameters.email,
        dateSent: Date.now(),
      });
      try {
        let reg = await registration.save();
        console.log(reg);
      } catch (err) {
        console.log(err);
      }
    }

    async function learn(agent) {
      Demand.findOne(
        { course: agent.parameters.courses },
        function (err, course) {
          if (course !== null) {
            course.counter++;
            course.save();
          } else {
            const demand = new Demand({ course: agent.parameters.courses });
            demand.save();
          }
        }
      );
      let responseText = `You want to learn about ${agent.parameters.courses}. 
                    Here is a link to all of my courses: https://www.udemy.com/user/jana-bergant`;

      let coupon = await Coupon.findOne({ course: agent.parameters.courses });
      if (coupon !== null) {
        responseText = `You want to learn about ${agent.parameters.courses}. 
                Here is a link to the course: ${coupon.link}`;
      }

      agent.add(responseText);
    }

    // async function infoHandler(agent){
    //     let movieName = agent.parameters.movie;
    //     agent.add(`The information for ${movieName} is as follow`);
    //     try {
    //         const result = await fetch('http://www.omdbapi.com/?apikey=f4bb01c6&t' + movieName);
    //         const json = await result.json();
    //         let id = json.Search[0].imdbID;
    //         try {
    //             const result_2 = await fetch('http://www.omdbapi.com/?apikey=f4bb01c6&i' + id);
    //             const json_1 = await result_2.json();
    //             agent.add(json_1.Title + json_1.Plot + json_1.imdbRatinng);
    //             return;
    //         } catch (ex) {
    //             console.log(ex);
    //         }
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    // Include nodejs request-promise-native package as dependency
    // because async API calls require the use of Promises
    const rpn = require("request-promise-native");
    const hostAPI = "http://www.omdbapi.com/?apikey=f4bb01c6&t"; // root URL of the API

    console.log("Dialogflow Request headers: " + JSON.stringify(req.headers)); // testing
    console.log("Dialogflow Request body: " + JSON.stringify(req.body)); // testing

    // Default welcome intent
    function welcome(agent) {
      agent.add("Welcome to my chatbot!");
    }

    // Default conversation end
    function endConversation(agent) {
      agent.add("Thank you and have a nice day!");
    }

    // Function for passing data to the myapi.search intent in Dialogflow
    function infoHandler(agent) {
      return new Promise((resolve, reject) => {
        // get parameters given by user in Dialogflow
        const param1 = agent.parameters.movie;
        // const param2 = agent.parameters.param2;
        // and so on...

        console.log(`Parameters from Dialogflow: ${param1}`); // testing

        // If necessary, format the parameters passed by Dialogflow to fit the API query string.
        // Then construct the URL used to query the API.

        var myUrl = `${hostAPI}=${param1}`;
        console.log("The URL is " + myUrl); // testing

        // Make the HTTP request with request-promise-native
        // https://www.npmjs.com/package/request-promise

        var options = {
          uri: myUrl,
          headers: {
            "User-Agent": "Request-Promise-Native",
          },
          json: true,
        };

        // All handling of returned JSON data goes under .then and before .catch
        rpn(options)
          .then((json) => {
            var result = ""; // the answer passed to Dialogflow goes here

            // Make a string out of the returned JSON object
            var myStringData = JSON.stringify(json);
            console.log(`This data was returned: ${myStringData}`); // testing

            // Make an array out of the stringified JSON
            var myArray = JSON.parse(myStringData);
            console.log(`This is my array: ${myArray}`); // testing

            // Code for parsing myArray goes here, for example:

            if (myStringData === null) {
              // For example, the returned JSON does not contain the data the user wants
              result = agent.add("Sorry, could not find any results.");
              resolve(result); // Promise resolved
            } else {
              // If the desired data is found:

              var data = JSON.parse(myStringData);

              // Access "Title" field within the object
              var output =
                "Title: " +
                data.Title +
                ", Year: " +
                data.Year +
                ", Director: " +
                data.Director;

              // put the data here
              result = agent.add(
                `Here are the results of your search: ${output}`
              );
              resolve(result); // Promise resolved
            }
          }) // .then end
          .catch(() => {
            // if .then fails
            console.log("Promise rejected");
            let rejectMessage = agent.add("Sorry, an error occurred.");
            reject(rejectMessage); // Promise rejected
          }); // .catch end
      }); // Promise end
    } // searchMyApi end

    function fallback(agent) {
      agent.add(`I didn't understand`);
      agent.add(`I'm sorry, can you try again?`);
    }

    let intentMap = new Map();
    intentMap.set("snoopy", snoopy);
    intentMap.set("learn courses", learn);
    intentMap.set("recommend courses - yes", registration);
    intentMap.set("infoHandler", infoHandler);
    intentMap.set("Default Fallback Intent", fallback);

    agent.handleRequest(intentMap);
  });
};
