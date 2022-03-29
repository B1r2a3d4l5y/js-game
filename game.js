let state = {}
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

function startGame(){
    state =   {}
    showTextNode(1)

}

function showTextNode(textNodeIndex){
    const textNode = textNodes.find(textNode => textNode.id ===textNodeIndex)
    textElement.innerText = textNode.text
    while(optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    
}

textNode.options.forEach(option => {
    if(showOption(option)) {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)

    }
})
}
function showOption(option){
    return option.requiredState == null || option.requiredState(state)
}


function showNow(option) {
    return requiredState.option == null || option.requiredState(state)

}

function selectOption(option){
    const nextTextNodeId = option.nextText
    if(nextTextNodeId <= 0) {
        return startGame()

    }
    state = Object.assign(state, option.setState)
   showTextNode(nextTextNodeId)

}

const textNodes = [
    {
        id : 1,
        text: 'You wake up in a strange place and see a jar of blue goo.',
        options: [
            {
                text: 'Take goo',
                setState: {blueGoo: true},
                nextText: 2
            },
            {
                text : 'Leave goo',
                nextText: 2,
            }
        ]
    },
    {
        id: 2,
        text: 'Your venture forth in search of answers to where you  are when you come across a merchant.',
        options: [
            {
                text: 'Trade  the goo for a sword',
                requiredState: (currentState) => currentState.blueGoo,
                setState: {blueGoo: false, sword: true},
                nextText: 3
            },
            {
                text: 'Trade for a shield',
                requiredState: (currentState) => currentState.blueGoo,
                setState: {blueGoo: false, shield:true},
                nextText: 3
            },
            {
                text: 'Trade goo for bow',
                requiredState: (currentState)=> currentState.blueGoo,
                setState: {blueGoo: false, bow: true},
                nextText: 3
            },
            {
                text: 'Ignore the  merchant',
                nextText: 3
            }
        ]
    },
    {
        id: 3,
        text: 'After leaving the merchant you start to feel tired and stumble upon a small town next to a dangerous looking castle',
        options: [
            {
                text: 'Explore the castle',
                nextText: 4
            },
            {
                text: 'Find a room to sleep at in the town',
                nextText: 5

            },
            {
                text: 'Find some hay in a stable to sleep in',
                nextText: 6
            }
        ]
    },
    {
        id: 4,
        text: 'You are so tired that fall asleep exploring the castle and are killed by a terrible monster in your sleep.',
        options:[
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 5,
        text: 'Witout any money to a room you break into a inn and fall asleep. After a few hours of sleep the in manager finds you and calls the guards to lock you up  ',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 6,
        text: 'You wake up well rested and ready to explore the castle',
        options:[
            {
                text: 'Explore the castle ',
                nextText: 7
            }
        ]
    },
    {
        id: 7,
        text: 'While exploring the castle you come across  a terrble monster  within your path.',
        options: [
            {
                text: 'Try to run',
                nextText: 8

            },
            

            
            {
                text: 'Attack it with your sword',
                requiredState: (currentState) => currentState.sword,
                nextText: 9
            },
            {
                text: 'Hide behind sheild',
                requiredState: (currentState) => currentState.shield,
                nextText: 10
            },
            {

                text: 'shoot it with your bow',
                requiredState: (currentState) => currentState.bow,
                nextText: 11
            },
            {
                text: 'Throw blue goo at it',
                requiredState: (currentState) => currentState.blueGoo,
                nextText: 12

            },
            
            

            
        ]
    
        
    },
    {
        id: 8,
        text: 'Your attempts to run are vain and the monster easily catches you.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]

    },
    {
        id: 9,
        text: 'You foolishy thought that you could slay the monster with your sword',
        options:[
            {
                text: 'Restart',
                nextText: -1

            }
        ]
    },
    {
        id: 10,
        text: 'The monster laughs at you as you hid behind your sheid and ate you',
        options:[
            {
                text: 'Restart',
                nextText: -1
                
            },
          
        ]
        
            
        
    },
    {

        id: 11,
        text: 'you decide to shoot the monster with your bow but it does not work and it eats you',
        options: [
            {
                text : 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 12,
        text: 'You threw the jar of blue goo at the monster and it exploded. After the dust has settled you see that monster has being destroyed. After claiming your victory you decide to claim the castle for yourself.',
        options:  [
            {
                text: 'You win. Play again',
                nextText: -1
            }
        ]
    }
  
]
startGame()