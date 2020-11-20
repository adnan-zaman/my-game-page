/**
 * Mock database for testing purposes
 */

let db = [
  { id: 1, email: "first@abc.com", password: "password1" },
  { id: 2, email: "second@abc.com", password: "password2" },
  { id: 3, email: "third@abc.com", password: "password3" },
  { id: 4, email: "fourth@abc.com", password: "password4" },
];

let currId = 4;

/**
 * Finds a user based on id
 *
 * @param {number} id user id
 * @returns {object} user if found, null otherwise
 */
exports.findById = (id) => {
  for (const user of db) {
    if (user.id === id) return user;
  }
  return null;
};

/**
 * Finds a user based on a specified column
 *
 * @param {string} column column to search by
 * @param {*} value column value to match
 * @returns {object} user if found, null otherwise
 */
exports.findByColumn = (column, value) => {
  for (const user of db) {
    if (user[column] === value) return user;
  }
  return null;
};

exports.add = (record) => {
  record.id = ++currId;
  db.push(record);
};

exports.resetToDefault = () => {
  db = [
    { id: 1, email: "first@abc.com", password: "password1" },
    { id: 2, email: "second@abc.com", password: "password2" },
    { id: 3, email: "third@abc.com", password: "password3" },
    { id: 4, email: "fourth@abc.com", password: "password4" },
  ];

  currId = 4;
};
