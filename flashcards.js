// サーバーからデータを取得する関数を作成してください
async function fetchFlashcards() {
  try {
    const response = await fetch("/api/flashcards");
    if (!response.ok) {
      throw new Error(`error`);
    }
    return await response.json();
  } catch (error) {
    console.log(`error`);
    return [];
  }
}
export async function setupFlashcards() {
  // 暗記カード機能に必要な処理を作成してください
  const fll = document.getElementById("flashcards-list");
  const renderFlashcards = async (wordList) => {
    fll.innerHTML = "";
    for (var i = 0; i < wordList.length; i++) {
      const word = wordList[i];
      //雛形
      fll.innerHTML += `<div class="flashcard">
  <div class="flashcard-content">
    <p class="flashcard-title">${word.word}</p>
  </div>
  <div data-meaning="${word.id}">
    <p>${word.meaning}</p>
  </div>
</div>
`;

      /*雛形に追加
      let new_element = document.createElement("p");
      new_element.textContent = "word";
      newElement.appendChild(newContent); // p要素にテキストノードを追加
      newElement.setAttribute("class", "flashcard-title"); // p要素にidを設定
      // 親要素（div）への参照を取得
      let parentDiv = document.getElementsByClassName("flashcard");
      parentDiv.insertBefore(newElement, parentDiv.firstChild);
      */
    }
  };

  const readFlashcards = async () => {
    const datafetchFlashcards = await fetchFlashcards();
    renderFlashcards(datafetchFlashcards);
  };

  await readFlashcards();
}
