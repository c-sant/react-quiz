import * as SQLite from "expo-sqlite";

async function getConnection() {
  return await SQLite.openDatabaseAsync("quiz.db");
}

export async function createTables() {
  const query = `
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

  const conn = await getConnection();

  try {
    await conn.execAsync(query);
  } finally {
    await conn.closeAsync();
  }
}

export async function insertTheme(theme) {
  var query = "INSERT INTO themes (name) VALUES (?)";
  var conn = await getConnection();

  try {
    result = await conn.runAsync(query, [theme.name]);
    return result.changes == 1;
  } finally {
    await conn.closeAsync();
  }
}
