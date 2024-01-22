![image](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/b484b0e0-4868-4678-876f-e333d026772c)---
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
**Confidence** <br/>
Draw a box around the estimate which tells us how confident we are in the estimate <br/>
-Gives us the upper bound and the lower bound <br/>
-Typical strategy for ranking ratings is to be pessimistic and use the lower bound <br/>
**Why sort by the lower bound** <br/>
-ex.Have 2 items that have 4 stars on average <br/>
Item1: 3 ratings, Item2: 100 ratings <br/>
=> Result: <br/>
![Recommendation_System5](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/5c824294-e84b-4d76-b26e-af6acefd0f0e) <br/>
Item2:<br/>
Confidence interval is skinnier(More confident in its average rating) <br/>
Has more ratings, a bigger sample size <br/>
Item1:<br/>
Confidence interval is fatter(Less confident in its average rating) <br/>
-If using the upper bound, Item1 would be ranked higher than the Item2 <br/>
This is not what we want, because we are more confident that Item2 is the four star item <br/>
**Confidence Intervals** <br/>
Normal approximation for confidence intervals <br/>
-ex. Given a random variable X, we can calculate the distribution of sample mean <br/>
Variable X: Normally distributed with mean mu and variance sigma square <br/>
X bar: Estimate of its sample mean, average of the samples I collected(Sum them all up and divide it by n) <br/>
=> Proof using probability scales: <br/>
X bar is also normally distributed, with the same mean mu, but a variance of sigma squared over n <br/>
-The more samples I collect N, the skinnier its distribution <br/>
N(number of samples) directly affect the variance of X bar <br/>
As N increases, the variance of X bar gets smaller, confidence interval gets skinnier <br/>
More samples I collect, more confident I should be <br/>
![Recommendation_System6](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/abf3d315-eb1a-49da-bdb6-689b807ca1be) <br/>
**Confidence Intervals(Normal Approximation)** <br/>
95% Confidence Interval: <br/>
Interval for which the area under the curve is 95 percent of the total area <br/>
-Total area is one, since it is probability <br/>
-Calculate area of 0.95 using the CDF Function <br/>
![Recommendation_System7](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/e6128bc2-1ac2-4e74-936f-a0c0b698b842) <br/>
-X bar: sample mean <br/>
-Z left & Z right: Inverse CDF of the normal distribution that covers 2.5% of the total prob and 97.5% of the total prob respectively <br/>
Can approximate this number using 1.96 <br/>
-N: Number of samples we collected <br/>
-s: Standard deviation of the data <br/>
**What if X is not normally-distributed?** <br/>
In practice, data might not be normally distributed <br/>
No problem! CLT(Central Limit Theoreum) <br/>
-X bar is sum of all the Xs multiplied by a constant <br/>
-Sum of all variables converges to a normal distribution. X bar is normally distributed <br/>
=> It doesn't matter whether X is normally distributed itself <br/>
![Recommendation_System8](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/eb1d6841-3019-4ec0-a49b-ad95c99250d1) <br/>
**Bernoulli CI Approximation** <br/>
Can derive the confidence interval for Bernoulli as well using the normal approximation <br/>
Possible outcomes: 0 or 1 <br/>
-Bernoulli distribution is the 0 1 distribution <br/>
-Used when we have a binary outcome(Upvote downvote situation) <br/>
![Recommendation_System9](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a3a2854c-8772-477b-9f49-6852c43fe923) <br/>
p hat: proportion of ones you get <br/>
-total number of upvotes divided by total number of all votes <br/>
Variance: p hat times (1-p hat) and the square root of that and plug that to the existing formula <br/>
**Wilson Interval** <br/>
Step further <br/>
Better approximation of the confidence interval for a Bernoulli distributed variable <br/>
![Recommendation_System10](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/58eb5d8c-e5a5-4a94-9148-1bcdf468cd69) <br/>
-p hat: sample mean <br/>
-z: 1.96 for the 95% confidence interval <br/>
-n: Number of samples collected <br/>
=> Entire process is the same <br/>
Sorting process is still the same - sort by lower bound - just that now the lower bound is more accurate <br/>
**Extension to 5-star ratings** <br/>
How to extend this to 5 star ratings? <br/>
-5-possible outcomes(If using half stars, 10) <br/>
-Can use Wilson's interval <br/>
| Stars | Negative | Positive | Total |
|----------|----------|----------|----------|
|    0     |    0     |    0     |    0     |
|    1     |    1     |    0     |    1     |
|    2     |   0.75   |   0.25   |    1     |
|    3     |   0.5    |   0.5    |    1     |
|    4     |   0.25   |   0.75   |    1     |
|    5     |    0     |    1     |    1     |
Each rating is pseudo upvotes and pseudo downvotes <br/>
-1 star is equal to 0 upvotes and 1 downvotes <br/>
-5 star is equal to 1 upvotes and 0 downvotes <br/>
-3 star is middle, equal to 0.5 upvotes and 0.5 downvotes <br/>
=> Plug in the numbers to Wilson's intervals <br/>
**Wilson Interval** <br/>
Where it's used and possible issues it might have <br/>
Hacker news uses the same algorithm for both links and comments while Reddit uses the Wilson's interval for comments <br/>
Reddit's commenting system: <br/>
A great product with one 3-star rating would be penalized heavily <br/>
Penalized twice <br/>
(1)One rating it has happens to be a poor rating <br/>
(2)Confidence interval is wide, meaning the lower bound is a small number <br/>
Lower bound is good, because it accounts for number of people who rated the item <br/>
-Higher the number of raters -> smaller CI(Confidence Interval) -> higher lower bound <br/>
-Popularity increases its score <br/>
## Problems with Averate Rating & Explore vs. Exploit (part 2)
**More problems with average rating** <br/>
Get another method of fixing the problem of ranking by average rating <br/>
What if N is very small, or 0? <br/>
Formula for the average or the sample mean: <br/>
-Problem is that if we have zero ratings, we have 0 out of 0 which is undefined -> What can we do to fix this? <br/>
**Smoothening or Dampening** <br/>
Seen this in a similar context of NLP for word prob also in Page Rank <br/>
-Formula generally works for in the average, but also works for probabilites <br/>
-Basic Idea: <br/>
Add a small number to the Numerator and Denominator <br/>
If we have zero ratings, we can just default to some pre-defined value  <br/>
-Could make u0 to the global average, or just some middle value like 3(stars) <br/>
Problem: 3 stars might not be a good choice
It might appear like all the products in your website doesn't have very good rating <br/>
-Simple transition from u0 to true sample mean <br/>
ex1. Thousand 4 star ratings u0=3, lambda=1 -> 3.999 (Pretty close to 4) <br/>
ex2. Five 4 star ratings u0=3, lambda=1 -> 3.83  <br/>
ex3. One 4 star rating -> 3.5  <br/>
=> Smooth transition from the pre-defined value to the true sample mean as we collect more and more samples <br/>
-See how Baysian approach yields the same formula (Ranking method is different)<br/>
**Explore-Exploit Dilemma** <br/>
Also in the subjects of A/B testing or Reinforcement Learning <br/>
Ex.Play slot machine <br/>
-Some slot machine will give you a better reward than others <br/>
All machines look identical, it is unknown which slot machine is better -> To measure the rewards, the only way to find this out is to play them <br/>
-Only two outcomes exist: lose(0) or win(1) <br/>
Like to play the slot machine where you will win the most -> Play the slot machine and calculate its win rate <br/>
-Each slot machine is a Bernoulli random variable <br/>
![Recommendation_System13](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/a77348e4-45a8-4d9e-8c72-00f3f62e5f74) <br/>
:P hat equals the probability of winning which is number of wins divided by the total number of plays <br/>
-How do we decide how many times we want to play each slot machine? <br/>
Play more? or less? <br/>
Too few times are played, estimate wouldn't be good <br/>
-ex. 3 times played, only win once => p hat is 1 out of 3 <br/>
It is not an accurate estimate because the confidence interval of that estimate will be very fat <br/>
-ex. 300 times played, win 100 times => p hat is 1 out of 3 <br/>
Estimate of one third will be more accurate <br/>
Traditional statistical tests can tell us whether differences in the means between two different slot machines is significantly different <br/>
-Problem:There can be only one slot machine can be optimal, others are suboptimal <br/>
Generally more times we play, the better our estimate is <br/>
Play 10 different slot machines 100 times each (1000 turns)-> 9 machines are suboptimal and 900 turns yielded a suboptimal reward <br/>
This doesn't seem good as well <br/>
-Dilemma: Play more or less? <br/>
**Explore Exploit Dilemma** <br/>
In order to get a good estimate, we must collect more data. The more data is collected, the better the estimate <br/>
But on the other hand, more time is spent doing something suboptimal <br/>
Performing both explore and exploit will be ideal, but they are inherently with odds with one another <br/>
-Want to explore and collect more data, but I want to exploit what I believe to be the best award <br/>
-In order to explore, exploit would be impossible, and in order to exploit, explore will be impossible <br/>
**Explore-Exploit in Recommenders** <br/>
-Ex.Watching a bunch of Youtube videos in how to make eggs <br/>


![Recommendation_System12](https://github.com/growingpenguin/growingpenguin.github.io/assets/110277903/adc57b69-cca9-4b65-b8e2-3ab457b4d58d)<br/>



Reference: https://analystprep.com/cfa-level-1-exam/quantitative-methods/confidence-intervals-2/ <br/>

Reference: <br/>
https://github.com/reddit-archive/reddit/blob/master/r2/r2/lib/db/_sorts.pyx <br/>



