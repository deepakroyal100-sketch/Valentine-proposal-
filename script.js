// script.js for interactive proposal functionality

function displayProposal() {
    const proposalMessage = "Will you marry me?";
    const proposalContainer = document.getElementById('proposal');

    proposalContainer.innerText = proposalMessage;
    proposalContainer.style.fontSize = '2em';
    proposalContainer.style.color = 'red';
    proposalContainer.style.textAlign = 'center';
    proposalContainer.style.marginTop = '20%';
}

document.addEventListener('DOMContentLoaded', displayProposal);