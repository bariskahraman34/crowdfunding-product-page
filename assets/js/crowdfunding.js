const selectRewardBtns = document.querySelectorAll('.select-reward-btn');
const projectBtn = document.querySelector('#back-to-project');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const form = document.querySelector('form');
const pledgeInputs = document.querySelectorAll('.pledge-input');
const continueButtons = document.querySelectorAll('.continue-button');

for (const rewardBtn of selectRewardBtns) {
    rewardBtn.addEventListener('click',(e) => showModal(e))
}

projectBtn.addEventListener('click',e => showModal(e))

closeModalBtn.addEventListener('click',closeModal)

form.addEventListener('submit',e => sendPledge(e))

function showModal(e){
    e.preventDefault();
    modal.showModal();
}

function closeModal(){
    modal.close();
}

function sendPledge(e){
    e.preventDefault();
    let submitBtn = e.submitter;
    for (let i = 0 ; i < continueButtons.length ; i++) {
        if(submitBtn == continueButtons[i]){
            console.log(pledgeInputs[i])
        }
    }
}