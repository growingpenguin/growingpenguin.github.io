---
layout: post
title:  "NLP Question-Answering"
---

Extractive QA(추출적 QA): 문서에 있는 텍스트 일부를 질문의 답변으로 추출 <br/>
Community QA(커뮤니티 QA): 커뮤니티에 질문-답변 쌍 수집 후 새 질문에 가장 잘 맞는 답 조회 <br/>
<br/>
# 7.1 리뷰 기반 QA 시스템 구축
Outline <br/>
'Does this guitar come with a strap?'와 같이 특정 질문의 답변을 찾고자 할 때 <br/>
제품 설명에서 답을 찾기 어렵다. 리뷰에서 이런 질문에 대한 답변을 찾아보자 <br/>
Dataset <br/>
SubjQA <br/>
-"SubjQA: A Dataset for Subjectivity and Review Comprehension", 2020 <br/>
-https://huggingface.co/datasets/subjqa <br/>
-6 category split <br/>
:tripadvisor, restaurant, movie, book, electric device, groceries <br/>
-각 리뷰에는 질문에 맞게 한 문장 이상의 답변할 정보가 들어있음 <br/>
ex. 제품에 대한 질문과 해당 리뷰<br/>
Product: Nokia Lumia 521 RM-917 8GB <br/>
Query: Why is the camera of poor quality? <br/>
Review: Item like the picture, fast deliver 3 days well packed, good quality for the price. THe camera is decent(as phone cameras go), There is no flash though <br/>
-질문과 답변이 주관적임 <br/>
사실 여부가 명확한 질문-답변이 아님 <br/>
('나쁜 품질'(poor quality)) <br/>
-쿼리의 중요 부분이 리뷰에 등장하지 않음 <br/>
키워드 검색이나 입력 질문 재구성만으로 답을 찾기 힘듦 <br/>

