지민 쇼핑 V11

실행 방법
1. 압축을 푼다.
2. index.html을 브라우저로 연다.
3. 실제 위치/지도/주소검색/도로경로 기능은 인터넷 연결이 필요하다.
4. 위치 허용은 https 사이트 또는 Safari/Chrome 환경에 따라 동작한다.

웹사이트로 올리기
- Netlify, Vercel, GitHub Pages, Cloudflare Pages 등에 폴더 전체를 업로드하면 된다.
- 별도 빌드 과정 없음. 정적 HTML/CSS/JS 사이트다.

구성
- index.html
- styles.css
- app.js
- assets/products/*.jpg

지도 기능
- OpenStreetMap 타일
- Nominatim 주소 검색
- OSRM 도로 경로 계산
- 음식 배달은 오토바이 마커, 택배는 택배차 마커가 도로 경로를 따라 이동
