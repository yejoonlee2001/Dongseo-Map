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

## VS Code에서 프로젝트 열기 (초보자용 가이드)

### 1. VS Code 설치
- [VS Code 공식 웹사이트](https://code.visualstudio.com/)에서 운영체제에 맞는 버전을 다운로드하여 설치합니다.

### 2. 프로젝트 폴더 열기
1. VS Code를 실행합니다.
2. 상단 메뉴에서 `파일(File)` > `폴더 열기(Open Folder)`를 선택합니다.
3. 압축 해제한 `dongseou_cafe_map` 폴더를 선택하고 `폴더 선택(Select Folder)` 버튼을 클릭합니다.

### 3. 유용한 확장 프로그램 설치 (선택사항)
VS Code의 왼쪽 사이드바에서 확장 프로그램 아이콘(네모 4개)을 클릭하고 다음 확장 프로그램을 검색하여 설치하면 개발에 도움이 됩니다:
- `Live Server`: HTML 파일을 실시간으로 브라우저에서 미리보기 할 수 있습니다.
- `HTML CSS Support`: HTML과 CSS 작성 시 자동 완성 기능을 제공합니다.
- `JavaScript (ES6) code snippets`: JavaScript 코드 작성을 도와줍니다.

### 4. Live Server로 프로젝트 실행하기
1. `Live Server` 확장 프로그램을 설치한 후, VS Code 하단 상태 표시줄에서 `Go Live` 버튼을 클릭합니다.
2. 또는 `index.html` 파일을 열고 우클릭한 후 `Open with Live Server`를 선택합니다.
3. 브라우저가 자동으로 열리며 프로젝트가 실행됩니다.

### 5. 파일 구조 이해하기
VS Code 왼쪽 사이드바의 탐색기(Explorer)에서 프로젝트 파일들을 확인할 수 있습니다:
- `index.html`: 웹페이지의 기본 구조
- `style.css`: 디자인 스타일시트
- `script.js`: 지도 및 기능 구현 스크립트
- `cafe-data.js`: 카페 정보 및 메뉴 데이터

### 6. 코드 수정하기
1. 파일을 클릭하여 편집기에서 열 수 있습니다.
2. 코드를 수정한 후 저장(`Ctrl+S` 또는 `Cmd+S`)하면 Live Server가 자동으로 브라우저를 새로고침합니다.
3. 변경 사항을 실시간으로 확인할 수 있습니다.

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
