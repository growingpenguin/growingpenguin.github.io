---
layout: post
title:  "Recommendation System Section2"
---

# Simple Recommendation System 

## Hacker News
**Hacker News** <br/>
How hacker news handles the concept of age? <br/>
Simple and intuitive approach of recommendations: Go by popularity <br/>
=> Most people like this, it is likely you might like this as well <br/>
Problem: For example in New York times, we would not want to put an article of three years earlier even though it is popular <br/>
**Balancing popularity with age** <br/>
![Recommendation_System1](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/d804b993-f520-4bf7-b2d6-0698950d0c86) <br/>
Go by the ratio of popularity to time <br/>
-> Specifics of Hacker News algorithm and how it balances the ratio <br/>
**Hacker News Formula** <br/>
Measure of the article's popularity:Number of upvotes minus the number of downvotes minus one raised the power of 0.8 <br/>
Measure of time: Age and hours raised to the power of 1.8 <br/>
-gravity=1.8: Controls how fast or slow the score falls with respect to time <br/>
-penalty:multiplier to implement custom "business rules"(e.g. penalize self-posts, "controversial" posts, + ,many more) <br/>
-2: Added to the age and hours, so every link starts from two hours old. Or else, article will start as zero years old and score will reach infinity <br/>
![Recommendation_System2](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/bae74656-c8e2-4f33-8c1c-30a8137165e5) <br/>
Effect of each parameters on the score: <br/>
-gravity = 1.8 > 0.8: Exponent for numerator is small than the denomimtor <br/>
Denominator will always grow faster than the numerator <br/>
Means the age will overtake the popularity, brining new articles closer to the top so relatively it doesn't matter how many votes an article gets <br/>
Popularity term: <br/>
Raising the net votes to the power of 0.8 grows sublinearly <br/>
ex.0 -> 100 worth more than 1000 -> 1100 <br/>
**Power Law** <br/>
-Article votes are distributed according to power law <br/>
-Few articles get a very high number of votes, but a majority of articles will get very few votes <br/>
-ex. Words like 'the' get used very often, but words like 'frog' don't get used often in a single document <br/>
-If score grew linearly with popularity, they would be spread out <br/>
Most article will have 1~2 votes, while a few articles will have 500 or 1000+ votes <br/>
-Also appears in the Reddit formula <br/>
-Hacker news uses the same ranking formula for links and comments(Different from Reddit) <br/>
Hacker new algorithm pattern: <br/>
Score will grow very quickly and taper off at a slower rate due to gravity term <br/>
This is because, article receives votes early on, but don't have much effect during the time, but after a while gravity term takes over <br/>
**Interesting Tidbits** <br/>
Penalty terms isn't known, but the inferred tidbits, according to data <br/>
-Link is penalized if site is too popular (github.com, reddit.com) <br/>
-Article is about NSA(no longer the case) <br/>
-Too many comments(proxy for how controversial the link is) <br/>
-Business related penalites can also exist (who owns the company) <br/>
=> Penalties itself could be applied for any reason or no reason at all <br/>

## Reddit
How Reddit implements its ranking algorithm <br/>
-Difference between reddit and hacker news algorithm: Everyone can downvote <br/>
(Hacker news, to downvote, a certain amount of points need to be earned before being allowed to downvote while in Reddit everyone has equal power to upvote or downvote) <br/>
**Reddit Formula** <br/>
-Look quite different compared to hacker news formula, but concepts are similar<br/>
Two terms popularity and age exists the same, but instead divided by a plus sign instead of division sign <br/>
Measure of popularity <br/>
log(): Log of the absolute votes of net votes <br/>
-Also sublinear(respect to the net votes): <br/>
Have the idea of diminishing returns <br/>
max(): Take the max between one and net votes, because it is impossible to take the log of zero <br/>
signs(ups-downs):  <br/>
-Can be positive or negative <br/>
If net votes are positive, term will be positive, and vice versa <br/>
More downvotes received, the more score will decrease negatively <br/>
age: time in seconds in the inception of Reddit <br/>
-Term is always positive <br/>
-The newer the link is, the more score it receives <br/>
-Reddit scores will forever increase linearly <br/>
For Hacker news, the score for news decreases over time, but for Reddit, they get bigger <br/>
Only the relative score matters, so it doesn't matter whether the scores will become much larger or smaller <br/>
=> Similar pattern with HN <Br/>
![Recommendation_System3](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/aa9172b8-ea88-40a3-ba5f-cb516d5c2d0f) <br/>
Age grows faster than the popularity term, which means newer stories will always get pushed to the top <br/>
Reddit Algorithm Code: <br/>
https://github.com/reddit-archive/reddit/blob/master/r2/r2/lib/db/_sorts.pyx <br/>
**Controversy** <br/>
-CEO of Reddit editing the posts he didn't like around the 2016 election <br/>
-Some content related to Donald Trump didn't appear in the front page despite popularity <br/>
-Censoring conservative content <br/>
**Don't I own my site** <br/>
It is true we have some freedom in editing my own site, but big sites like Reddit, Google, and etc, have some public responsibility to be neutral <br/>

## Problems with Averate Rating & Explore vs. Exploit (part 1)
**Ratings** <br/>
-Previous: News feed items, typically having upvotes/downvotes likes <br/>
Usually have just 1 or 2 items <br/>
-Sites with 5 star ratings <br/>
ex. Amazon, Best Buy, and Walmart (Netflix used to.. but changed to binary system)<br/>
-Can feel like.. 5 star ratings, more like regression, and binary outcomes as classification <br/>
**How to Recommend?** <br/>
Simple approach: Sort by average rating<br/>
-Recommending items is like sorting them with a score <br/>
Problem: <br/>
Top item has 4.5 stars with 2377 reviews, while bottom item has 5 stars with one review <br/>
5 stars is bigger than 4.5 stars, but how **confident** we are in the rating should also be considered <br/>
Is the item with 5 stars better than the item with 4.5 stars? A: Maybe Not <br/>
![Recommendation_System4](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/9697d4f5-5455-49a6-ad2d-d40ea61ae14d) <br/>
Reference: https://www.amazon.com/s?k=airpod&crid=19DKOK0P2QQDI&sprefix=airpo%2Caps%2C347&ref=nb_sb_noss_2 <br/>



Reference: <br/>
https://github.com/reddit-archive/reddit/blob/master/r2/r2/lib/db/_sorts.pyx <br/>



