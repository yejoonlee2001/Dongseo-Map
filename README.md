# 동서대학교 카페 맵

OpenStreetMap과 Leaflet.js를 활용한 동서대학교 내 카페 위치 및 메뉴 정보 웹 애플리케이션입니다.

## 프로젝트 개요

이 프로젝트는 동서대학교 캠퍼스 내 위치한 카페들의 정보를 지도 상에서 쉽게 확인할 수 있도록 제작되었습니다. 사용자는 지도에서 카페 위치를 확인하고, 각 카페의 기본 정보와 메뉴를 조회할 수 있습니다.

## 주요 기능

- **지도 표시**: OpenStreetMap을 기반으로 동서대학교 캠퍼스 지도 표시
- **카페 위치 마커**: 캠퍼스 내 카페 위치를 마커로 표시
- **카페 정보 팝업**: 마커 클릭 시 카페 기본 정보(위치, 연락처, 영업시간) 팝업 표시
- **가상 메뉴판**: '메뉴판 보기' 버튼 클릭 시 해당 카페의 가상 메뉴판 모달창 표시
- **반응형 디자인**: 모바일 및 데스크톱 환경 모두 지원하는 반응형 웹 디자인

## 기술 스택

- **HTML5**: 웹페이지 구조
- **CSS3**: 스타일링 및 반응형 디자인
- **JavaScript**: 동적 기능 구현
- **Leaflet.js**: 오픈소스 지도 라이브러리
- **OpenStreetMap**: 오픈소스 지도 데이터

## 파일 구조

- **index.html**: 웹페이지 기본 구조와 Leaflet.js 라이브러리 로드
- **style.css**: 지도, 팝업, 메뉴판 등의 디자인을 정의한 스타일시트
- **script.js**: 지도 초기화, 마커 생성, 팝업 및 메뉴판 기능을 구현한 자바스크립트
- **cafe-data.js**: 동서대학교 내 카페 정보와 메뉴 데이터

## 설치 및 실행 방법

1. 저장소 클론
   ```bash
   git clone https://github.com/YOUR_USERNAME/dongseou_cafe_map.git
   cd dongseou_cafe_map
   ```

2. 웹 서버 실행 (예: Python 내장 웹 서버)
   ```bash
   # Python 3
   python -m http.server
   
   # Python 2
   python -m SimpleHTTPServer
   ```

3. 브라우저에서 접속
   ```
   http://localhost:8000
   ```

## 배포 URL

실제 동작하는 웹사이트는 다음 URL에서 확인할 수 있습니다:
https://pbkplmez.manus.space

## 기여 방법

1. 이 저장소를 포크합니다.
2. 새 기능 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`).
3. 변경사항을 커밋합니다 (`git commit -m '새로운 기능 추가'`).
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`).
5. Pull Request를 생성합니다.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 연락처

프로젝트 관리자 - [이메일 주소]

프로젝트 링크: [https://github.com/YOUR_USERNAME/dongseou_cafe_map](https://github.com/YOUR_USERNAME/dongseou_cafe_map)
