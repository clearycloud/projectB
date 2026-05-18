const data = {
  서울: `
- 플라스틱: 깨끗이 씻어서 배출
- 캔: 내용물 비우기
- 종이: 테이프 제거
  `,

  대전: `
- 비닐: 이물질 제거 후 배출
- 페트병: 라벨 제거
- 캔: 압착 후 배출
  `,

  부산: `
- 유리병: 뚜껑 제거
- 플라스틱: 깨끗이 세척
- 음식물: 반드시 분리
  `,

  대구: `
- 종이: 물기 제거
- 캔: 헹군 후 배출
- 플라스틱: 분리배출
  `
};

function showInfo(region) {
  document.getElementById("result").innerHTML = `
    <h2>${region}</h2>
    <pre>${data[region]}</pre>
  `;
}
