CREATE TABLE users (
  id BIGINT PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL,
  email VARCHAR(255)
);

CREATE TABLE expenses (
  id SERIAL PRIMARY KEY,
  description TEXT,
  amount DECIMAL(10, 2),
  category VARCHAR(50),
  expense_date DATE,
  status VARCHAR(20),
  user_id INTEGER REFERENCES users(id)
);
