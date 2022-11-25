var express = require("express");
const { MongoClient } = require("mongodb");

async function initializing() {
  const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.qbpz0.mongodb.net/?retryWrites=true&w=majority`;
  const client = new MongoClient(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  let c = await client.connect();
  return c;
}

module.exports = initializing();
