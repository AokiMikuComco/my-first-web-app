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
    <div class="flashcard-icons">
    <button class="flashcard-meaning" data-toggle="${word.id}">
    <span class="ri-eye-line"></span>
    </button>
    </div>
  </div>
  <div data-meaning="${word.id}" class="hidden">
    <p>${word.meaning}</p>
  </div>
</div>
`;
    }
  };

  const readFlashcards = async () => {
    const datafetchFlashcards = await fetchFlashcards();

    renderFlashcards(datafetchFlashcards);
  };

  await readFlashcards();

  //各カードの「意味」を表示・非表示に切り替える
  const toggleMeaning = (id) => {
    const cardMeaning = document.querySelector(`[data-meaning="${id}"]`);

    if (cardMeaning.classList.contains("hidden")) {
      cardMeaning.classList.remove("hidden");
    } else {
      cardMeaning.classList.add("hidden");
    }
  };

  fll.addEventListener("click", function (event) {
    const element = event.target.closest(".flashcard-meaning");
    if (element != null) {
      const getId = element.getAttribute("data-toggle");
    } else {
      return;
    }
    toggleMeaning(getId);
  });
}
