import mysql from "../config/sqldb";

export async function adsMigration() {
  await mysql`
    CREATE TABLE IF NOT EXISTS ads (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      images JSON,
      description TEXT,
      price DECIMAL(10, 2) NOT NULL,
      location VARCHAR(255),
      userId INT,
      FOREIGN KEY (userId) REFERENCES users(id) ON DELETE SET NULL,
      categoryId INT,
      FOREIGN KEY (categoryId) REFERENCES categories(id) ON DELETE SET NULL,
      startDate DATETIME,
      endDate DATETIME,
      status ENUM('active', 'inactive', 'expired', 'featured') DEFAULT 'active',
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `;
}