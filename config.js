// @ts-check

const config = {
    endpoint: "https://farmacia.documents.azure.com:443/",
    key: "QzA6qsGIKKK3yt7QAiYKmUGxuJYaMD9Kyt03YSd9dFnovy6KUKq5oVAP94jGy0SUmkTUfLIAuI0QuJW0A9oMrg==",
    databaseId: "Tasks",
    containerId: "Items",
    partitionKey: { kind: "Hash", paths: ["/category"] }
  };
  
  module.exports = config;