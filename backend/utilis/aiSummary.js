const { SummarizerManager } = require('node-summarizer');

const generateSummary = (content) => {
  try {
    const summarizer = new SummarizerManager(content, 2); // Limit to 2 sentences
    const summaryObject = summarizer.getSummaryByFrequency();
    return summaryObject.summary.trim(); 
  } catch (error) {
    console.error("Error generating summary:", error.message);
    return ""; 
  }
};

module.exports = generateSummary;