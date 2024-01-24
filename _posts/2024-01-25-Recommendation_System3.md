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
| User \ Item | Item 1 | Item 2 | ... | Item m |
|-------------|--------|--------|-----|--------|
| User 1      | 5      | 3      | ... | 1      |
| User 2      | 4      |        | ... | 2      |
| ...         | ...    | ...    | ... | ...    |
| User n      | 2      | 1      | ... | 5      | <br/>


**Relationship to NLP** <br/>
User-item matrix is reminiscent of term-document matrix <br/>
(term: word document matrix) <br/>
X(t, d): # of times term t appears in document d <br/>
-In terms of recommendation systems, can think of X(t, d) as "how much does t like the item d?" <br/>
-ex. gravity appears a lot in a document written by Albert Einstein <br/>
=> gravity likes this document Albert Einstein wrote <br/>
-Data having the same structure -> Techniques used to analyze the same matrix, cross over the two fields <br/>
-Matrix Factorization: Deep NLP <br/>
-SVD: Unsupervised Deep Learning + NLP <br/>
**Sparsity** <br/>
Charasteristics of user-item matrix that makes it unique to recommendation system is that it is sparse <br/>
(Not necessarily meaning entries having 0s) <br/>
-Term-document matrix is sparse: <br/>
Most entries are 0 <br/>
-User-item matrix is sparse <br/>
More entries are empty <br/>
(Most entries of user item matrix is undefined or don't exist) <br/>
Why? <br/>
Suppose Netflix having 100 million users <br/>
Ex1. <br/>
Suppose you are an average user, How many movies have you watched? <br/>
Among those watched movies, how many have you rated? <br/>
Ex2. <br/>
In Google, 500,000 movies exist <br/>
Number of movies rated, is just a fraction of a percent of total of movies in the world <br/>
-> Full user-item matrix is expected to be extremely sparse <br/>
**Goal of Collaborative Filtering** <br/>
-Want to make recommendations <br/>
-Ratings matrix, r(i, j), most of the values don't exist-This is good <br/>
-Ex. Matrix is dense, every value filled up <br/>
-> Good mathematically, but business-wise, it sucks (=Every user has already seen every movie) <br/>
Nothing to recommend <br/>
=> Matrix must be sparse so that you can have something to recommend to the user <br/>
-Guess the ratings in the ratings matrix might be <br/>
Want to guess what you might rate a movie you haven't seen yet <br/>
![Recommendation_System26](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/21b926fe-75a1-4d43-9741-903378efe3cf) <br/>
Regression problem, to predict a real value variable <br/>
r hat: prediction for what you will rate an item <br/>
Can recommend items sorted by its scores <br/>
E.g. If you think a movie will be rated 5, definitely recommend that movie <br/>
=> Want to find s(i,j), user item recommendation score, and will be predicted scores of items you haven't seen <br/>
**Regression** <br/>
Want to predict a real number <br/>
Objective is MSE(mean squared error) <br/>
Outline <br/>
User-user Collaborative Filtering <br/>
Item-item Collaborative Filtering <br/>
Process <br/>
(1)Take our model's predicted ratings <br/>
(2)Compare them to the actual ratings <br/>
(3)Square the difference <br/>
(4)Take average of those squared differences <br/>
![Recommendation_System27](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/1594e0b5-b5fc-4312-bd23-ead45e869beb) <br/>
## User-user Collaborative Filtering 
**User-user Collaborative Filtering** <br/>
Ex. Slice of the user-movie matrix <br/>
-Alice really seems to like action movies(Batmen, X-men, Star Wars), dislike romance movies(The Notebook, Bridget Jones's Diary) <br/>
-Bob thinks similar ways as Alice <br/>
Bob likes action movies(Batmen, X-men, Star Wars) as well and really dislikes romance movies(The Notebook, Bridget Jones's Diary) <br/>
-Carol has the opposite perspective to Alice and Bob <br/>
Carol like romance movies(The Notebook, Bridget Jones's Diary), but don't care about the action movies(Batmen, X-men, Star Wars) <br/>
-Bob hasn't seen Star Wars. Would Star Wars be a good recommendation for Bob? <br/>
Intuitive Perspective <br/>
Probably a good recommendation. Looking at Alice's ratings, Bob's is very similar <br/>
-> we can assume Bob will feel the same way Alice does <br/>
Mathematically, Bob and Alice's ratings are highly correlated and Bob's ratings don't agree with Carol's at all(Negative Correlation) <br/>
**Average Rating** <br/>
-Limited <br/>
Not personalized, doesn't take into account the user i at all. Equally treat everyone's rating of the movie <br/>
-Bob's s(i, j) equally depends on Alice's rating and Carol's rating, even though he doesn't agree with Carol <br/>
|       | Batman | X-Men | Star Wars | The Notebook | Bridget Jones's Diary |
|-------|--------|-------|-----------|--------------|-----------------------|
| Alice | 5      | 4.5   | 5         | 2            | 1                     |
| Bob   | 4.5    | 4     |           | 2            | 2                     |
| Carol | 2      | 3     | 1         | 5            | 5                     | <br/>


**Weighting Ratings** <br/>
Way of fixing Average Rating is to put a weight in each rating <br/>
-Want it to be small for users I don't agree with, large for users I do agree with <br/>
Intuitively, want Alice's ratings to matter more, and Carol's weighting to matter less <br/>
-Have to divide by the weights themselves in the denominator (Want the final rating to be on the right scale) <br/> 
![Recommendation_System28](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/470d493c-b8d8-432b-9085-dabaa68e87dd) <br/>
ri'j: Rating that user i' gives to the item j  <br/>
wii': Weight between user i and user i' <br/>
