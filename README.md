# week-6-csam
Authentication week

---
### Project

Your project this week is to build a web app that authenticates users and stores user-specific data in a PostgreSQL database.

---

We deployed our application on [Heroku](https://week6-authentication.herokuapp.com/)

---
## Table of Contents

- [Roles](#roles)
- [User Story](#user-story)
- [User Journey](#user-journey)
- [Ideas](#ideas)
- [Schema](#schema)
- [Day 1](#day-1)
- [Day 2](#day-2)
- [Issues with Deploy to Heroku](#issues-with-deploy-to-heroku)
- [Final main page](#final-main-page)
- [How to install the project](#how-to-install-the-project)
- [Things we learned](#things-we-learned)

---

**Roles**

Deployment: Chun<br>
Facilitator: Antonio<br>
User: Safia<br>
Quality: Maryam<br>

---

### User Story

- As a user, I want to: submit information to your site for anyone to see
- As a user, I want to: come back to your site later and see what I posted is still there
- As a user, I want to: be the only person allowed to delete my stuff

---

### User Journey

An example:
landing page - welcome / sign in /register link
post page - form for post, all posts visable
create user page- register form

An example
homepage - can view posts , login/sign up button
login page - form - redirect to homepage
sign up page - form - redirect to homepage

---

**Ideas**

- a place where you can post show off your plants
- a place where you can share book recommendations
- a place where you can post questions for FAC check-ins :tada

---

**Schema**

Tables:  users, sessions , posts

---

`users` table
| Column      | Type | Constraints |
| ----------- | ----------- |----------- |
| id      | serial       |primary key       |
| email   | text   | unique not null        |
| password      | text       | not null     |
| name   | text   |not null        |

---

`posts` table
| Column      | Type | Constraints |
| ----------- | ----------- |----------- |
| id      | serial       |primary key       |
| user_id   | integer     |References users(id) |
| text_content   | Text        |        |
| created_at   | timestamp        |        |

---

`sessions` table
| Column      | Type | Constraints |
| ----------- | ----------- |----------- |
| sid      | text       |primary key       |
| data  | JSON    | not null |

---

### Day 1

- Deciding the roles
- Setting up the repo
- Creating the issues estimates velocity
- Describing our user stories with detailes
- We decide to start from scratch and install everything

---

### Pairs

### Round 1 | 15:40 - 16:35
Chun Antonio | sign Up page (setting up heroku database)
Maryam Safia | log In page

---

### Day two

---

### Inspiration

![](https://i.imgur.com/9JHpccq.png)


### Brain storming 10:00 - 10:16

---

## Round 2 10:20 - 11:40
Safia Chun : log in page
Maryam Antonio : sign Up page


## Round 3 11:50 - 12:00
- Merge the code
- Deployment on heroku

---

## Round 4 14:15 - 15:50
Antonio Safia : Form of the post
Maryam Chun : get all the posts

## Round 5
Maryam Chun Safia : delete posts

## Round 6
Maryam Antonio : delete posts
Chun Safia : Readme & CSS

---

### Issues with Deploy to Heroku

Stop local server
- killall node

In terminal run
- git:remote -a name-of-app
- git push heroku main

ERROR - build failed
`! [remote rejected] main -> main (pre-receive hook declined)
error: failed to push some refs to 'https://git.heroku.com/week6-authentication.git'`

---

Solution 1:
- deploy through git hub using repo name
- press connect
- press deploy branch
- build failed - same error

Solution 2:
- settings - buildpack - add node.js
- deploy branch using github
- build failed

---

Solution 3:
- search VS code for unexpected token `<`
- left over from merge conflicts
- delete node modules
- run npm i

*enable automatic deploy

- deploy branch
- click view :tada:

https://week6-authentication.herokuapp.com/

Enable cookie for Herouku
- settings > config var > add
- cookie_secret:sjhfkshkfj
- click add :tada:

---

**Final main page**

![]()


---



## **💾 How to install the project**

1. `git clone`
2. cd into the directory on your computer
3. run `npm i` to install node modules
4. Run `npm start` to run the website on a nodemon local server on port 3000 ([http://localhost:3000](http://localhost:8000/))
5. You can do `npm test` to run tests on handler.js


---
### Things we learned:

To change a commit message
- git commit --amend -m "new message"

To stash - so not saving but put aside changes
- git stash
- git stash pop - to unstash changes

---
