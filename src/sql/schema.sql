CREATE TABLE users (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  name TEXT NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  phone VARCHAR(10) UNIQUE NOT NULL,
  role ENUM('admin','manager','worker') DEFAULT 'worker',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  name TEXT NOT NULL,
  description TEXT,
  start_date DATE NOT NULL,
  end_date DATE,
  budget DECIMAL(10,2) NOT NULL,
  location TEXT NOT NULL,
  status ENUM('planned','active','completed') DEFAULT 'planned',
  created_by CHAR(36),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (created_by) REFERENCES users(id)
);

CREATE TABLE daily_reports (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  project_id CHAR(36),
  user_id CHAR(36),
  date DATE,
  work_description TEXT,
  weather TEXT,
  worker_count INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id)
);