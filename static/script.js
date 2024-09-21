window.onload = function() {
    // 오늘 날짜로부터 이번 주 토요일 날짜를 계산하여 표시
    const date = new Date();
    const day = date.getDay();
    const diff = 6 - day;  // 토요일까지 남은 일 수 계산
    const nextSaturday = new Date(date.setDate(date.getDate() + diff)); 
    const formattedDate = nextSaturday.toISOString().split('T')[0];

    // 회차 정보와 날짜 표시
    document.getElementById('game-info').innerText = `1137회차 (${formattedDate})`;

    // 서버에서 로또 번호 가져오기
    fetch('/generate-lotto')
        .then(response => response.json())
        .then(data => {
            const gameNumbers = data.numbers;

            // 각 게임에 로또 번호 추가
            appendNumbers('game1', gameNumbers[0]);
            appendNumbers('game2', gameNumbers[1]);
            appendNumbers('game3', gameNumbers[2]);
            appendNumbers('game4', gameNumbers[3]);
            appendNumbers('game5', gameNumbers[4]);
        })
        .catch(error => console.error('Error:', error));

    // 게임별 로또 번호를 추가하는 함수
    function appendNumbers(gameId, numbers) {
        const gameDiv = document.getElementById(gameId);
        gameDiv.innerHTML = ''; // 기존 번호를 지움
        numbers.forEach(num => {
            const img = document.createElement('img');
            img.src = `static/image/numbers/${num}.png`; // 번호에 해당하는 이미지를 로드
            img.alt = `${num}번`;
            img.classList.add('lotto-ball'); // 스타일링을 위해 클래스 추가
            gameDiv.appendChild(img);
        });
    }
}
