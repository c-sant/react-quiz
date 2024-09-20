import * as SQLite from "expo-sqlite";

async function getConnection() {
  return await SQLite.openDatabaseAsync("quiz.db");
}

export async function createTables() {
  var query = `
    CREATE TABLE IF NOT EXISTS themes
    (
      id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS questions
    (
      id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
      theme_id INTEGER NOT NULL,
      question TEXT NOT NULL,
      answer TEXT NOT NULL,
      alternative_1 TEXT NOT NULL,     
      alternative_2 TEXT NOT NULL,     
      alternative_3 TEXT NOT NULL,     
      FOREIGN KEY (theme_id) REFERENCES themes(id)
    )
  `;

  var conn = await getConnection();

  try {
    await conn.execAsync(query);
  } finally {
    await conn.closeAsync();
  }
}

async function executeSelect(query, query_params = []) {
  var conn = await getConnection();

  try {
    return await conn.getAllAsync(query, query_params);
  } finally {
    await conn.closeAsync();
  }
}

async function executeQuery(query, query_params = []) {
  var conn = await getConnection();

  try {
    result = await conn.runAsync(query, query_params);
    return result.changes === 1;
  } finally {
    await conn.closeAsync();
  }
}

export async function getNumberOfQuestions() {
  var query = "SELECT COUNT(id) AS 'numberOfQuestions' FROM questions";
  let response = await executeSelect(query);

  return response[0].numberOfQuestions;
}

export async function getThemes() {
  var query = "SELECT id, name FROM themes";
  return await executeSelect(query);
}

export async function insertTheme(theme) {
  var query = "INSERT INTO themes (name) VALUES (?)";
  var query_params = [theme.name];

  return await executeQuery(query, query_params);
}

export async function insertQuestion(question) {
  var query =
    "INSERT INTO questions (theme_id, question, answer, alternative_1, alternative_2, alternative_3) VALUES (?, ?, ?, ?, ?, ?)";
  var query_params = [
    question.theme_id,
    question.question,
    question.answer,
    question.alternative_1,
    question.alternative_2,
    question.alternative_3,
  ];

  return await executeQuery(query, query_params);
}
