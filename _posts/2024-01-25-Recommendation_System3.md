---
layout: post
title:  "Recommendation System Section3"
---

# Collaborative Filtering
## Collaborative Filtering Section Introduction
**Collaborative Filtering** <br/>
Generalize what we studied so far <br/>
Idea: Rank each item by score <br/>
ex. PageRank, Reddit, HN, Bandit... <br/>
-Finding a score for each item s(j) <br/>
-j is item, s() means score <br/>
-Non-specific to any particular user (Doesn't matter who you are, will see the same score for each item) <br/>
**Notations** <br/>
s(j): Average rating for each item <br/>
![Recommendation_System22](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/8b4d9165-f218-40d9-a74c-eea76d72c4d0) <br/>
![Recommendation_System23](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1e6d28e0-e5cd-45ba-b99f-b494e5a6b962) <br/>
Sum of all ratings for item j divided by the number of ratings for item j <br/>
**Personalize the score** <br/>
s(i,j): Can depend both on the user i and item j <br/>
![Recommendation_System24](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/236215b9-6c43-4274-9387-103a6fa46bf1) <br/>
Right hand side still doesn't depend on i <br/>
->Every user i still sees the same score for each item <br/>
-Useful to introduce new conventions and symbols and modify this formula later on <br/>
-i = 1...N, N: number of users, j = 1...M, M: Number of items in our dataset <br/>
**Ratings Matrix** <br/>
Central object for the next few sections of the course <br/>
![Recommendation_System25](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1635d473-4daa-46b0-b36d-e765dbb37d50) <br/>



