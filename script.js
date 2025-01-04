// キャラクターを動かす
const character = document.getElementById("character");
const piano = document.getElementById("piano");

let characterX = 0;
const step = 10; // キャラクターの移動ステップ

// キーボード入力でキャラクターを動かす
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        characterX += step;
        character.style.transform = `translateX(${characterX}px)`;
    }

    // ゴールに到達したか確認
    checkGoal();
});

// ゴール判定
function checkGoal() {
    const characterRect = character.getBoundingClientRect();
    const pianoRect = piano.getBoundingClientRect();

    if (characterRect.right >= pianoRect.left) {
        alert("ゴール！ピアノに到着しました！");
    }
}
