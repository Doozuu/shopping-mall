# 🛒 의류 쇼핑몰 웹사이트

## 🖥 기술 스택

React, SCSS -> styled-components, Redux(예정), Typescript(예정)

## 📌 주요 기능

### Auth
<img width="1229" alt="스크린샷 2023-02-15 오후 11 07 08" src="https://user-images.githubusercontent.com/104717341/219049584-8c7e2d79-4a6f-4256-855d-3189d696f6ce.png">
이메일 회원가입, 이메일 로그인, 소셜 로그인(구글), 로그아웃 
<br/>
소셜 로그인 : Pop up 방식과 Redirect 방식 모두 구현해보고, Pop up으로 결정.
<br/>
Firebase Authentication 활용
<br/>
useContext를 이용해 유저 정보 저장

### Products
카테고리별로 4개씩 미리보기가 주어지고, 제목을 클릭하면 상세 페이지로 이어진다.
<img width="1196" alt="스크린샷 2023-02-17 오전 3 51 12" src="https://user-images.githubusercontent.com/104717341/219459968-d9994071-5144-4fe6-90a2-a01253bf875b.png">
<img width="1184" alt="스크린샷 2023-02-17 오전 3 50 08" src="https://user-images.githubusercontent.com/104717341/219460217-daa4b566-2698-414a-8cfd-de42a58bcfcb.png">
Firestore 활용.
<br/>
장바구니 담기 기능. 

### Cart
<img width="288" alt="스크린샷 2023-02-15 오후 11 07 43" src="https://user-images.githubusercontent.com/104717341/219049723-e634c8e7-b090-4b74-98b3-9a0ed19c5c98.png">
<img width="1166" alt="스크린샷 2023-02-16 오전 12 37 29" src="https://user-images.githubusercontent.com/104717341/219075560-02e55836-f38c-4b98-a6fe-8e72ff417e53.png">

장바구니 미리보기 페이지와 장바구니 페이지 따로 구현.
<br/>
- 장바구니 미리보기 : 이미지, 제품명, 수량, 가격, 아이콘에 전체 수량 표시
<br/>
- 장바구니 페이지 기능 : 수량 증감 조절, 내역 삭제, 총 금액 계산
<br/>
useContext를 이용해 장바구니 정보 저장
<br/>
