const selectRewardBtns = document.querySelectorAll('.select-reward-btn');
const modal = document.querySelector('.modal');

for (const rewardBtn of selectRewardBtns) {
    rewardBtn.addEventListener('click',(e) => toggleModal(e))
}

modal.showModal();

function toggleModal(e){
    e.preventDefault();
    modal.showModal();
}