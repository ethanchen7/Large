# Large (A Clone of Medium)

![Screen Shot 2022-04-16 at 10 18 03 PM](https://user-images.githubusercontent.com/60331384/163701522-dad8fa9a-57e5-43c5-9464-0cac67d31a89.png)

[Large](https://large-medium-clone.herokuapp.com/) is a platform where users can share diverse thoughts, read and write stories of any topic, follow certain topics of interest, as well as follow other users. It is inspired by the the social publishing platform Medium.

| [Live Site](https://large-medium-clone.herokuapp.com/) | [MVP Feature List](https://github.com/ethanchen7/Large/wiki/Features-List) | [Database Schema](https://github.com/ethanchen7/Large/wiki/Database-Schema) | [Frontend Routes](https://github.com/ethanchen7/Large/wiki/Front-End-Routes) | [API Documentation](https://github.com/ethanchen7/Large/wiki/API-Documentation) | [User Stories](https://github.com/ethanchen7/Large/wiki/User-Stories) |

# Technologies Used

Large is built on Node JS, HTML, and CSS for its frontend, Express and Sequelize for its backend, and a PostgreSQL database.

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

## Dynamic Clap, Comment, and Edit Bio Rendering
&ensp;Users are able to clap and comment on a story without being redirected from the page. They are also able to edit their biography from their user profile page. This allows for a seamless reading and interactive experience.

![](https://media.giphy.com/media/ndjICdYqwbQ7WnkJNx/giphy.gif)

![](https://media.giphy.com/media/lk0fwNXiWWgw1DFcfm/giphy.gif)

## User Following/Followers Feature
&ensp;Users are able to follow and unfollow other users. This involved associated User instances with other User instances in a self-joining association: 

```js
const columnMappingOne = {
      // User -> User, through Follow as follower
      through: "Follow",
      otherKey: "followingId",
      foreignKey: "followerId",
      as: "followings",
};
const columnMappingTwo = {
      // User -> User, through Follow as following
      through: "Follow",
      otherKey: "followerId",
      foreignKey: "followingId",
      as: "followers",
};
User.belongsToMany(models.User, columnMappingOne);
User.belongsToMany(models.User, columnMappingTwo);
```
![Screen Shot 2022-04-17 at 11 08 07 AM](https://user-images.githubusercontent.com/60331384/163726974-46a20af7-5205-4b5e-b538-96a28f4d52a7.png)

![](https://media.giphy.com/media/TvQ1xdtxd2xEdO5vL4/giphy.gif)

### Welcome (Splash Page for unauthenticated users) <br />

![Screen Shot 2022-04-16 at 10 29 50 PM](https://user-images.githubusercontent.com/60331384/163701872-a00527e8-cd50-4c1b-8af9-0940f8c8ddcf.png)
![Screen Shot 2022-04-16 at 10 30 12 PM](https://user-images.githubusercontent.com/60331384/163701882-3dbc1bf0-9629-4232-8744-e648ab45c4ab.png)

### Story Feed <br />

![Screen Shot 2022-04-16 at 10 30 47 PM](https://user-images.githubusercontent.com/60331384/163701887-50a58ca4-e3e1-46f0-9614-6f3b0676b115.png)

### Single Story Page <br />

![Screen Shot 2022-04-16 at 10 31 18 PM](https://user-images.githubusercontent.com/60331384/163701899-49d95cf1-9a57-4f1f-a2cd-14a22bed70bb.png)

### Comment Modal <br />

![Screen Shot 2022-04-16 at 10 31 50 PM](https://user-images.githubusercontent.com/60331384/163701913-07983341-1235-480e-8185-d8ab3aa09816.png)

### Profile Page <br />

![Screen Shot 2022-04-17 at 11 32 00 AM](https://user-images.githubusercontent.com/60331384/163727770-e76b8337-c252-470c-a74a-7a77fc77d12b.png)

![Screen Shot 2022-04-17 at 11 32 34 AM](https://user-images.githubusercontent.com/60331384/163727790-b8196cd1-0d91-4130-805a-6be502fa7455.png)

