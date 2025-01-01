import * as SQLite from "expo-sqlite";
import { HolidayModel } from "../models/holiday-model";

const db = SQLite.openDatabaseSync("manager.db");

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.execAsync(
      `CREATE TABLE IF NOT EXISTS holidays(
          id INTEGER PRIMARY KEY NOT NULL,
          startDate TEXT NOT NULL,
          endDate TEXT NOT NULL,
          totalDays INTEGER NOT NULL,
          notes TEXT
        )`
    )
      .then(() => resolve("Database initialized"))
      .catch((err) => reject(err));
  });

  return promise;
};

export const insertHoliday = (holiday: HolidayModel) => {
  const promise = new Promise((resolve, reject) => {
    db.execAsync(
      `INSERT INTO holidays (startDate, endDate, totalDays, notes) 
        VALUES ('${holiday.startDate}', '${holiday.endDate}', '${holiday.totalDays}', '${holiday.notes}')`
    )
      .then((res) => {
        console.log(res);
        resolve(res);
      })
      .catch((err) => reject(err));
  });

  return promise;
};

export const fetchHolidays = () => {
  const promise = new Promise((resolve, reject) => {
    db.getAllAsync("SELECT * FROM holidays", [])
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });

  return promise;
};
