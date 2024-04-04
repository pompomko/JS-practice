function addItelm() {
  // 할일 목록 (<ul> 요소)에 대한 참조 가져오기
  let list = document.getElementById("todolist");
  // 입력 필드의 값 가져오기
  let todo = document.getElementById("item").value;
  // 입력 필드가 비어 있는지 확인
  if (todo.trim() !== "") {
    // 할일을 나타내는 새로운 <li> 요소 생성
    let listitem = document.createElement("li");
    // 리스트 아이템의 텍스트 내용 설정
    listitem.textContent = todo;

    // 할일 항목용 삭제 버튼 생성
    let deleteButton = document.createElement("button");
    // 삭제 버튼의 텍스트 설정
    deleteButton.textContent = "삭제";
    // 삭제 버튼의 클래스 이름 설정
    deleteButton.className = "delete-button";
    // 삭제 버튼에 클릭 이벤트 핸들러 설정
    deleteButton.onclick = function () {
      // 클릭된 리스트 아이템 삭제
      list.removeChild(listitem);
    };

    // 삭제 버튼을 리스트 아이템에 추가
    listitem.appendChild(deleteButton);
    // 리스트 아이템을 할일 목록에 추가
    list.appendChild(listitem);
    // 할일 입력 필드 비우기
    document.getElementById("item").value = "";
    document.getElementById("item").focus();
  } else {
    // 입력 필드가 비어 있을 경우 알림 표시
    alert("할일을 입력하세요.");
  }
}
