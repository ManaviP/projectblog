const { SummarizerManager } = require('node-summarizer');

// Function to generate summary using node-summarizer
const generateSummary = (content) => {
  try {
    // Initialize the SummarizerManager with the content and the number of sentences for the summary (3 sentences)
    const summarizer = new SummarizerManager(content, 3);

    // Get the summary using frequency-based summarization
    const summaryObject = summarizer.getSummaryByFrequency(); 

    // Extract the summary text
    const summary = summaryObject.summary;

    // Return the summary
    return summary;
  } catch (error) {
    console.error("Error generating summary:", error.message);
    throw error; // Rethrow the error for higher-level handling
  }
};

// Example usage:
const content = `
This is a simple example text that can be summarized. It contains a few sentences that can be processed. The summarizer will extract key points and generate a brief version.
Another sentence to provide more context for the summarizer to work with.
The goal is to test if it can summarize the content efficiently.
`;

const summary = generateSummary(content);
console.log(summary); // Logs the summary