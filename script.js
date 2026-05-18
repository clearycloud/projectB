const recyclingData = {

  서울: `
    ♻️ 서울 분리수거 안내

    • 페트병 라벨 제거
    • 플라스틱 내용물 비우기
    • 종이팩은 따로 배출
  `,

  대전: `
    ♻️ 대전 분리수거 안내

    • 비닐은 깨끗이 세척
    • 캔은 압착 후 배출
    • 스티로폼 테이프 제거
  `,

  부산: `
    ♻️ 부산 분리수거 안내

    • 유리병 뚜껑 제거
    • 음식물 제거 후 배출
    • 페트병 투명 분리
  `,

  대구: `
    ♻️ 대구 분리수거 안내

    • 플라스틱 라벨 제거
    • 캔 내부 세척
    • 종이는 물기 제거
  `
};

function showInfo(region){

  const result = document.getElementById("result");

  result.innerHTML = `
    <h2>${region}</h2>
    <p>${recyclingData[region]}</p>
  `;
}
