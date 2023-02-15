# 의류 쇼핑몰 웹사이트

## 기술 스택

React, SCSS, Redux(예정), Typescript(예정), styled-components(예정)

## 주요 기능

### Auth
<img width="1229" alt="스크린샷 2023-02-15 오후 11 07 08" src="https://user-images.githubusercontent.com/104717341/219049584-8c7e2d79-4a6f-4256-855d-3189d696f6ce.png">
이메일 회원가입, 이메일 로그인, 소셜 로그인(구글), 로그아웃 
소셜 로그인 : Pop up 방식과 Redirect 방식 모두 구현해보고, Pop up으로 결정.
Firebase Authentication 활용
useContext를 이용해 유저 정보 저장

### Cart
<img width="288" alt="스크린샷 2023-02-15 오후 11 07 43" src="https://user-images.githubusercontent.com/104717341/219049723-e634c8e7-b090-4b74-98b3-9a0ed19c5c98.png">
장바구니 미리보기 페이지와 장바구니 페이지 따로 구현.
- 장바구니 미리보기 : 이미지, 제품명, 수량, 가격, 아이콘에 전체 수량 표시
- 장바구니 페이지 기능 : 수량 증감 조절, 내역 삭제, 총 금액
useContext를 이용해 장바구니 정보 저장

### Products
<img width="1227" alt="스크린샷 2023-02-15 오후 11 11 10" src="https://user-images.githubusercontent.com/104717341/219050600-f085f727-57a8-4e4f-b154-2e4e52749bce.png">
json파일 mapping하여 리스트로 보여주기.
장바구니 담기 기능. 

Runs the app in the development mode.\: 파
Runs the app in the development mode.\
