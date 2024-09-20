// DEFINE LOGIC FOR HANDLING REQUESTS

import OpenAI from 'openai';

const openAIClient = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const getInspiration = () => {
    console.log("INSPIRED") //UPDATE
};

getInspiration();

// Define controller object for export (bundles functions)
const inspirationController = {
    getInspiration,
};

// Export controller object
export default inspirationController;