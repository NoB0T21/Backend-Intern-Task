# Backend Intern Task

## 🛠 Tech Stack

### 🔹 Backend
- **Node.js** with **TypeScript**
- **MySQL** for database
- **Sequelize** for ORM
- **Zod** for form validation

### 🔹 Authentication
- **JWT (Basic Auth)**

---
## 🐬 SQL Setup
1. **Download the SQL exe** [click here](https://dev.mysql.com/downloads/installer/)
2. **setup the server locally** and keep remember the  password 
3. After completing setup open **SQL CLI Application** and create database by running command **CREATE DATABASE construction_app;** (construction_app = your database naem)
4. run **use construction_app;** to use that database
5. now run sql schema from project or just run this command **SOURCE c://.../sql/schema.sql;**
6.to check run **SHOW DATABASES;** and **SHOW TABLES;**

---
## 📦 Installation
1. **Download the project files** and open them in your code editor.
2. **Configure `.env` File**
  - In the root folder, create a `.env` file with the following:
     ```env
     PORT=4000
     CLIENT_URL=http://localhost:3080 #not imp
     DB_HOST=localhost   #keep same if sql is running locally
     DB_USER=root     #keep same if sql is running locally
     DB_PASSWORD=yourpassword
     DB_NAME=your_construction_app
     TOKEN_SECRET=Your_Secret
     ```
   - **Do NOT** share this file publicly.

3. **install Dependencies**
     ```terminal
    npm install
     ```

4. **Run Project**

    open terminal in root folder
     ```terminal
    npm run dev
     ```
     the server will run on http://localhost:4000/  
     4000 is port you define in `.env` file

5. **To Run this project**
    use `postman` recommended  
    [click here for all postman routes](https://aryangawade65418-539824.postman.co/workspace/aryan-gawade's-Workspace~78a32904-5710-4978-8d2d-9cd940a00ae0/collection/47299461-5b560e24-82be-471a-b318-9afb7a1a3352?action=share&source=copy-link&creator=47299461)

## 🙋‍♂️ Author
**Aryan Gawade**
- 🔗 [LinkedIn](https://www.linkedin.com/in/aryan-gawade-3723672ab/)
- 🔗 [GitHub URL](https://github.com/NoB0T21)
- 🔗 [Portfolio](https://aryan-s-developer-showcase.vercel.app/)