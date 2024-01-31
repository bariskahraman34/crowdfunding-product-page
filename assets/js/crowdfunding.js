const selectRewardBtns = document.querySelectorAll('.select-reward-btn');
const projectBtn = document.querySelector('#back-to-project');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const form = document.querySelector('form');
const pledgeInputs = document.querySelectorAll('.pledge-input');
const continueButtons = document.querySelectorAll('.continue-button');
const resultDialog = document.querySelector('.success-dialog');
const successCloseBtn = document.querySelector('.success-close-btn');
const successDialog = document.querySelector('.success-dialog');

for (const rewardBtn of selectRewardBtns) {
    rewardBtn.addEventListener('click',(e) => showDialog(e))
}

projectBtn.addEventListener('click',e => showDialog(e))

closeModalBtn.addEventListener('click',closeModal)

form.addEventListener('submit',e => sendPledge(e))

successCloseBtn.addEventListener('click',closeSuccessModal);

function showDialog(e){
    e.preventDefault();
    modal.showModal();
}

function closeModal(){
    modal.close();
}

function sendPledge(e){
    e.preventDefault();
    let submitBtn = e.submitter;
    let inputValue = 0;
    for (let i = 0 ; i < continueButtons.length ; i++) {
        if(submitBtn == continueButtons[i]){
            inputValue = Number(pledgeInputs[i].value);
        }
    }
    if(inputValue === 0) return;

    return showSuccess();
}

function showSuccess(){
    setTimeout(openModalDelay,1000)
    modal.close();
}

function openModalDelay(){
    successDialog.showModal();
}

function closeSuccessModal(){
    successDialog.close();
}
