# Large (A Clone of Medium)

![Screen Shot 2022-04-16 at 10 18 03 PM](https://user-images.githubusercontent.com/60331384/163701522-dad8fa9a-57e5-43c5-9464-0cac67d31a89.png)

[Large](https://large-medium-clone.herokuapp.com/) is a platform where users can share diverse thoughts, read and write stories of any topic, follow certain topics of interest, as well as follow other users. It is inspired by the the social publishing platform Medium.

| [Live Site](https://large-medium-clone.herokuapp.com/) | [MVP Feature List](https://github.com/ethanchen7/Large/wiki/Features-List) | [Database Schema](https://github.com/ethanchen7/Large/wiki/Database-Schema) | [Frontend Routes](https://github.com/ethanchen7/Large/wiki/Front-End-Routes) | [API Documentation](https://github.com/ethanchen7/Large/wiki/API-Documentation) | [User Stories](https://github.com/ethanchen7/Large/wiki/User-Stories) |

# Technologies Used

Large is built on Node JS, HTML, CSS for its frontend, and Express and Sequelize for its backend, and a PostgreSQL database.

# Getting Started

1. Clone this repository <br />

&ensp;&ensp;`git clone git@github.com:ethanchen7/Large.git`

2. Install dependencies  <br />

&ensp;&ensp;`npm install`

3. Create a .env file in the root direction based on the .env.example given.  <br />

4. Create a user in psql based on your .env DATABASE_URL app_name   <br />

&ensp;&ensp;`psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"`

5. Create a database in psql based on your .env DATABASE_URL db_name.  <br />

6. Start your shell and migrate and seed the database.   <br />

&ensp;&ensp;`npx dotenv sequelize db:migrate`   <br />

&ensp;&ensp;`npx dotenv sequelize db:seed:all`

# Features Highlight

## Dynamic Clap and Comment Rendering
&ensp;Users are able to like and comment on a story without being redirected from the page. This allows for a seamless reading and interactive experience.

Welcome (Splash Page for unauthenticated users)
![Screen Shot 2022-04-16 at 10 29 50 PM](https://user-images.githubusercontent.com/60331384/163701872-a00527e8-cd50-4c1b-8af9-0940f8c8ddcf.png)
![Screen Shot 2022-04-16 at 10 30 12 PM](https://user-images.githubusercontent.com/60331384/163701882-3dbc1bf0-9629-4232-8744-e648ab45c4ab.png)

Story Feed
![Screen Shot 2022-04-16 at 10 30 47 PM](https://user-images.githubusercontent.com/60331384/163701887-50a58ca4-e3e1-46f0-9614-6f3b0676b115.png)

Single Story Page
![Screen Shot 2022-04-16 at 10 31 18 PM](https://user-images.githubusercontent.com/60331384/163701899-49d95cf1-9a57-4f1f-a2cd-14a22bed70bb.png)

Comment Modal
![Screen Shot 2022-04-16 at 10 31 50 PM](https://user-images.githubusercontent.com/60331384/163701913-07983341-1235-480e-8185-d8ab3aa09816.png)


