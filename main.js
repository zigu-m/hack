const words = ["😀", "😵‍💫", "🥲", "🙃", "😛", "😎", "🤓"];

function generateRandomText() {
    let text = '';
    for (let i = 0; i < 500; i++) { // 글자 수를 늘리려면 숫자를 키우세요
        text += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return text;
}

function displayRandomText() {
    const resultDiv = document.getElementById('result');
    
    // 화면 전체를 덮도록 설정
    resultDiv.style.position = 'fixed';
    resultDiv.style.top = '0';
    resultDiv.style.left = '0';
    resultDiv.style.width = '100vw';
    resultDiv.style.height = '100vh';
    resultDiv.style.zIndex = '1000'; // 검색창 위로 올라오게 설정
    
    resultDiv.innerHTML = '';
    
    const text = generateRandomText();
    const wordArray = text.split(' ');

    wordArray.forEach((word, index) => {
        setTimeout(() => {
            const span = document.createElement('span');
            span.textContent = word;
            span.className = 'word';
            
            span.style.left = `${Math.random() * 100}%`;
            span.style.top = `${Math.random() * 100}%`;
            span.style.fontSize = `${Math.random() * 190 + 10}px`;
            
            resultDiv.appendChild(span);
        }, index * 3); 
    });
}

document.getElementById('searchButton').addEventListener('click', () => {
    
    // 검색창과 버튼 숨기기
    document.getElementById('searchInput').style.display = 'none';
    document.getElementById('searchButton').style.display = 'none';

    // 텍스트 표시
    displayRandomText();
});