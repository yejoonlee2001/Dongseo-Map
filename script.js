// Leaflet.js를 활용한 동서대학교 카페 맵 스크립트
document.addEventListener('DOMContentLoaded', function() {
    // LeafletMap 네임스페이스 사용 (L 네임스페이스 충돌 회피)
    const LeafletMap = window.LeafletMap;
    
    // 지도 초기화 (동서대학교 중심 - 수정된 좌표)
    const map = LeafletMap.map('map').setView([35.143744, 129.010981], 17);

    // OpenStreetMap 타일 레이어 추가
    LeafletMap.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    // 현재 열려있는 팝업 추적
    let currentPopup = null;
    
    // 모든 카페에 마커 생성 및 팝업 연결
    cafeData.forEach(cafe => {
        // 마커 생성 (LeafletMap 네임스페이스 사용)
        const marker = LeafletMap.marker(cafe.latlng).addTo(map);
        
        // 팝업 내용 생성
        const popupContent = createPopupContent(cafe);
        
        // 마커에 팝업 연결
        marker.bindPopup(popupContent);
        
        // 마커 클릭 이벤트 처리
        marker.on('click', function(e) {
            // 이전 팝업 닫기
            if (currentPopup) {
                map.closePopup(currentPopup);
            }
            
            // 현재 팝업 저장
            currentPopup = this.getPopup();
            
            // 메뉴 버튼 클릭 이벤트 연결
            setTimeout(() => {
                const menuBtn = document.getElementById(`menu-btn-${cafe.name.replace(/\s+/g, '-').toLowerCase()}`);
                if (menuBtn) {
                    menuBtn.addEventListener('click', function() {
                        showMenuModal(cafe);
                    });
                }
            }, 100);
        });
    });
    
    // 팝업 내용 생성 함수
    function createPopupContent(cafe) {
        const cafeId = cafe.name.replace(/\s+/g, '-').toLowerCase();
        
        return `
            <div class="cafe-popup">
                <div class="cafe-popup-header">${cafe.name}</div>
                <div class="cafe-popup-content">
                    <div class="cafe-popup-info">
                        <p><strong>위치:</strong> ${cafe.address}</p>
                        <p><strong>연락처:</strong> ${cafe.contact}</p>
                        <p><strong>영업시간:</strong> ${cafe.hours}</p>
                    </div>
                    <button id="menu-btn-${cafeId}" class="cafe-popup-menu-btn">메뉴판 보기</button>
                </div>
            </div>
        `;
    }
    
    // 메뉴판 모달 표시 함수
    function showMenuModal(cafe) {
        // 기존 모달이 있으면 제거
        let menuModal = document.getElementById('menu-modal');
        if (menuModal) {
            document.body.removeChild(menuModal);
        }
        
        // 새 모달 생성
        menuModal = document.createElement('div');
        menuModal.id = 'menu-modal';
        menuModal.className = 'menu-modal';
        
        // 메뉴 테이블 생성
        let menuTableHTML = `
            <div class="menu-modal-content">
                <div class="menu-modal-header">
                    <h3>${cafe.name} 메뉴판</h3>
                    <button class="menu-modal-close">&times;</button>
                </div>
                <div class="menu-modal-body">
                    <table class="menu-table">
                        <thead>
                            <tr>
                                <th>메뉴</th>
                                <th>가격</th>
                            </tr>
                        </thead>
                        <tbody>
        `;
        
        // 메뉴 항목 추가
        cafe.menu.forEach(item => {
            menuTableHTML += `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.price.toLocaleString()}원</td>
                </tr>
            `;
        });
        
        menuTableHTML += `
                        </tbody>
                    </table>
                </div>
            </div>
        `;
        
        menuModal.innerHTML = menuTableHTML;
        document.body.appendChild(menuModal);
        
        // 모달 표시
        menuModal.style.display = 'flex';
        
        // 닫기 버튼 이벤트 연결
        const closeBtn = menuModal.querySelector('.menu-modal-close');
        closeBtn.addEventListener('click', function() {
            menuModal.style.display = 'none';
        });
        
        // 모달 외부 클릭 시 닫기
        menuModal.addEventListener('click', function(e) {
            if (e.target === menuModal) {
                menuModal.style.display = 'none';
            }
        });
    }
});
