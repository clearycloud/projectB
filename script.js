const recyclingInfo = {
  "대전": `
    - 페트병 라벨 제거
    - 비닐은 깨끗이 세척
    - 캔은 내용물 비우기
  `,
  "서울": `
    - 종이팩은 따로 분리
    - 플라스틱 뚜껑 분리
  `
};

function searchRegion() {
  const region = document.getElementById("region").value;
  const result = document.getElementById("result");

  if (recyclingInfo[region]) {
    result.innerHTML = recyclingInfo[region];
  } else {
    result.innerHTML = "지역 정보를 찾을 수 없습니다.";
  }
}
