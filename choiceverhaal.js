let readlineSync = require('readline-sync');

let rls = require('readline-sync');
 
begin();
 
function begin() {
    let Beginquestion = ['Yes', 'No'];
    console.log('Do you want to play a game?');
    let beginchoice = rls.keyInSelect(Beginquestion, '', { cancel: false });
 
    switch (beginchoice) {
        case 0:
            chapter1();
            break;
        case 1:
            console.log('Maybe next time. Goodbye!');
            break;
    }
}

function chapter1(){
    console.log("It’s late in the night and you go to the attic to get some stuff. When you are walking in there looking for what you need, you suddenly hear that the wooden planks of the floor sound hollow. You move the planks on the floor and discover a staircase that is very long, as far as you can see. The staircase contain stairs that look pretty old and there are modern lamps hanging on the ceiling of the underground tunnel that goes down. It is probably a mile or more. You are curious and want to check it out, but you are not sure if it’s a good idea to go alone… what do you do?")

    cht1answer = ['You enter the tunnel alone', 'You wait until tomorrow to enter the tunnel with a friend. ',],
    cht1index = readlineSync.keyInSelect(cht1answer, ' ');
    
    if (cht1index == 0) {
        chapter2()     
    } else if (cht1index == 1){
        chapter3()
    }

}
function chapter2(){
    console.log("You decide to enter the tunnel now, because you are too curious. You begin going down the staircase. While you are walking, you see very strange symbols drawn on the walls. You have no idea what they mean. It suddenly gets very cold in the tunnel and you can feel a slight breeze touching you, which is weird, because all the windows in your house are closed. When you are almost at the end of the staircase you see a small door in front of you. Right when you are about to open it, you hear a very loud noise coming from the beginning of the tunnel. You look behind you and see that the entrance to the tunnel begins to collapse and big rocks and dust are coming your way at incredible speed. In a reflex you try to open the door in front of you, but it is locked. There is nothing you can do but watch until the rocks have reached you and you are crushed to death. ")


}
function chapter3(){
    console.log("You put the wooden planks back in their place and you go to your room to sleep. The next morning you call your friend and tell him about what you found. He’s very excited and rushes to your house. When you move the planks and show him, he rushes into the tunnel and begins to run. You yell his name and tell him that you and him should be careful, because you don’t know how old this place is. You begin to check the entrance with loose rocks and you see that they’re about to collapse. You get a crowbar from the attic and put it between the rocks, so they don’t fall. You take another crowbar with you, just in case. You begin going down the tunnel with your friend and end up at a small door. You try to open it, but it’s locked. You use the crowbar and open the door. Inside it’s all dark and there is no source of light at all. Luckily you brought flashlights. You begin to doubt if you should continue walking or go back up. What do you do?")

    cht3answer = ['You go back up with your friend.', 'You enter the dark room with your friend. ',],
    cht3index = readlineSync.keyInSelect(cht3answer, ' ');
    
    if (cht3index == 0) {
        chapter4()     
    } else if (cht3index == 1){
        chapter5()
    }

}
function chapter4(){
    console.log("You decide to not enter the dark room and you guys go back up through the tunnel. While you are going up the stairs, you hear a scream behind you. You turn around and see how your friend is being ripped in half by a weird looking being that is very pale and tall. It looks at you and lets a terrifying growl before he runs towards you. In the few seconds that it’s running, the only thing you can do is pray in your lasts moments. It eats you alive.")
    



}

function chapter5(){
    console.log("You enter the room with your friend. The first thing you notice is how bad it smells and the air feels really weird. It begins hard to breathe and the air feels heavy. Suddenly, your flashlights turn off and they won’t turn on again. You are breathing heavily in fear as you are trying to see through the darkness. Suddenly you hear a voice calling your name from a distance. It’s the voice of your friend, but something doesn’t seem right. His voice sounds a bit off, but you can’t explain why.")
    cht5answer = ['Go in the direction your friend is calling your name.', 'Stay in the dark room and wait until something happens',],
    cht5index = readlineSync.keyInSelect(cht5answer, ' ');
  
    if (cht5index == 0) {
        chapter6()     
} else if (cht5index == 1){
        chapter7()
}

}

function chapter6(){
    console.log("You walk slowly to the direction your friend was calling you from. You begin to hear a heavy breathing, as you are coming closer to your friend. Suddenly, your flashlight turns on again and you see what is in front of you. Fortunately, it’s your friend. He tells you his flashlight still isn’t working, but that you and him should keep moving. Right when you are about to move, you hear your friend calling your name from the place you just came from. You look at your friend in front of you, and he looks really weird. His face is completely emotionless and he opens his mouth. Out of his mouth comes the sound of you calling your friends name. You look in confusion, but you quickly realise that what’s standing in front of you, isn’t your friend. Your “friend” smiles from ear to ear and his eyes start crying blood. You look in fear as it slices your stomach open. As you are bleeding on the ground and dying you see your real friend coming towards your fake friend and you see how your real friend gets beheaded. You died.")

    
}
function chapter7(){
     console.log("You decide to stay in the dark. You suddenly hear a noise behind you of someone grunting in pain. Your flashlight turns on and you see that your friend hurt his knee because he tripped in the dark. “Hey, did you hear something just now?” you say. He says “No, what do you mean?” “Nothing.” You say. You continue walking until you come out to two doors. One is green and the other one is blue. Which door do you enter?")
     cht7answer = [' The green door. ', " The blue door. "],
     cht7index = readlineSync.keyInSelect(cht7answer, ' ');
   
    if (cht7index == 0) {
        chapter8()     
} else if (cht7index == 1){
    chapter9()
}

}

    
function chapter8(){
    console.log("You and your friend enter the green door. You walk a few steps and then the green door behind you suddenly slams shut with a loud noise. You start panicking and see how the small hallway you are standing in is being filled with some weird, yellow gas. You look in front of you and see that the hallway leads to a concrete wall, a dead end. You start coughing up blood and you feel that you are passing out. There is no escape. You died.")

}
function chapter9(){
    console.log("You and your friend enter the blue door and the first thing you notice is the brightness of the room behind the door. It’s very hard to see where you are walking. The entire room is filled with a very bright light. Out of nowhere, the light turns green and you start floating up. You and your friend look at each other in confusion and you start to accelerate up faster and faster. Everything goes black and you wake up laying in grass and the first thing you notice is how blue the sky is and it is filled with big clouds. You think to yourself that you are dead for a second. You see your friend laying in the grass passed out. He wakes up and he asks where he is. You say you don’t know. You start walking into a random direction. After a couple of hours walking, you see a big, yellow door in the distance, with nothing around it. Just a single yellow door in the middle of nowhere. You and you friend walk up to it and open the door. You look inside and to your surprise you see a empty office type of room with yellow walls. What do you do?")
    cht9answer = [' You enter through the door. ', " You keep walking and ignore the door. "],
    cht9index = readlineSync.keyInSelect(cht9answer, ' ');
   
        if (cht9index == 0) {
                chapter10()     
        } else if (cht9index == 1){
                chapter11()
}

}


            
function chapter10(){
    console.log("You and you friend decide to enter the yellow room. The door closes behind you when you are inside. It smells like sulfur and there’s a loud buzzing noise coming from the lamps on the ceiling. You start walking, with no idea where you are. You hear footsteps in the distance, but something is wrong. They don’t sound like normal, human footsteps. They don’t even sound human at all. Out of nowhere, you see a big, tall, black figure running towards you and your friend. It looks like it’s made of some kind of rubber and it’s skin is very shiny and it looks really smooth. You and your friend start running, but your friend trips and falls. You look behind you and see him screaming for help. The thing chasing you comes closer to your friend. What do you do?")
    cht10answer = [' Run back and help your friend. ', " Run for your life and leave your friend to die. "],
    cht10index = readlineSync.keyInSelect(cht10answer, ' ');
   
    if (cht10index == 0) {
    chapter12()     
    } else if (cht10index == 1){
    chapter13()

}

}

            
function chapter11(){
    console.log("You decide to keep walking and not enter the door. The sun is burning hot and before you know it, you and your friend pass out. You both die of dehydration.")
}
function chapter12(){
    console.log("You decide to go back and help your friend. The rest is self-explanatory. You help him on his feet but you get caught by the creature following both of you. You both get killed instantly.")
}
function chapter13(){
    console.log("You make a hard decision and start running faster. You don’t look back and you run around a corner. You see a small gap where you can hide. You decide to hide there and not make a sound. You can hear the creature eating your friend while he’s still screaming. After that everything goes quiet and you are still hiding there. You hear a noise of human footsteps in the distance. A male voice asks if somebody is there.")
    cht13answer = [' Stay hidden for as long as you can. ', " Stop hiding and follow the sound of the footsteps. "],
    cht13index = readlineSync.keyInSelect(cht13answer, ' ');
  
    if (cht13index == 0) {
        chapter14()     
    } else if (cht13index == 1){
         chapter15()

}

}
         
function chapter14(){
    console.log("You decide to ignore the voice, because you don’t know if it’s a trap or not. You suddenly see the creature that killed your friend before. At first, it doesn’t see you. Then you accidently drop your flashlight. The creature kills you.")
}

function chapter15() {
    console.log('You leave your hiding spot and follow the footsteps.');
    console.log('You see a man in a weird looking suit. It says “A-SYNC” on his back.');
    console.log('He’s wearing some kind of gas mask. He says his name is Jeremy.');
    console.log('You hear a loud noise in the distance and you see the creature that was following you earlier running towards you and Jeremy.');
    console.log('He tells you to stand back and he uses a flamethrower. The creature dies. ');
 
    let choices = ['A.Follow Jeremy.'];
    let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B Go your own way alone.' });
 
    if (choiceIndex === -1) {
        console.log('You say goodbye to Jeremy and begin to walk on your own.');
        console.log('You regret your decision and run back to where Jeremy was, but he is nowhere to be found.');
        console.log('Behind you, you hear a a heavy, slow growl. Before you can even turn around, it kills you. ');
        return;
    }
    switch (choiceIndex) {
        case 0:
            console.log('');
            chapter16();
            break;
    }
}
 
 
function chapter16() {
    console.log('You decide to follow Jeremy. You ask him what this place is. He says “Nobody really knows, but we do know it’s not safe.”');
    console.log('“Who’s we?” you ask. “My organisation, it’s called A-SYNC” answers Jeremy.');
    console.log('“How did you come here?” you ask. “My bosses gave me orders to come to this place.”');
    console.log('“So you are there’s a way out of this place?” you ask.');
    console.log('“Yes, but it’s very hard to find, since this place is liminal.” Out of nowhere, you fall through the ground.');
    console.log('In the second that you are falling, you try to grab Jeremy’s hand, but he refuses to help you. You see nothing but black and it feels like you are falling.');
    console.log('You fall on the ground. The impact is so big that you wonder how you are not dead.');
    console.log('You begin to walk in a random direction. You see a small white light.');
    console.log('As you keep getting closer, it starts to get bigger, eventually you are fully covered in a bright light.');
    console.log('The green light appears again and you are being shot up. ');
    console.log('You pass out and wake up in a long and narrow hallway. You notice there are big pipes on the ceiling.');
 
   
let choices = ['A.Turn around and walk in that direction.'];
let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B. Walk in the direction you are facing.' });
   
if (choiceIndex === -1) {
    console.log('You turn back and walk in that direction. You see someone in the distance.');
    console.log('When you come closer, you can see it’s your friend! You want to run towards him and hug him, but something is not right.');
    console.log('You recognize it’s the same creature that tried to look like your friend from before.');
    console.log('It starts to grin and cry blood again. It calls your name with your mom’s voice.');
    console.log('You start running, but you have no chance. It catches you and cuts your body in half.');
    return;
}
switch (choiceIndex) {
    case 0:
        console.log('');
        chapter19();
        break;
}
}  
function chapter19() {
    console.log('You walk forward. You keep walking. You start to see a weird, purple looking light.');
    console.log('It’s movement is weird, almost as if the light is being distorted. You come closer and see it’s a portal.');
    console.log('It makes a weird humming noise and the outline is purple light, but it looks like some sort of floating liquid.');
    console.log('The inside is entirely dark, deep blue and you have no idea what’s inside.');
    console.log('You hear your friend calling your name behind you and you realise it’s that thing from before.');
 
   
let choices = ['A.Dont enter the portal and fight the creature behind you.'];
let choiceIndex = rls.keyInSelect(choices, 'What do you want to do?', { cancel: 'B. Enter the portal.' });
 
if (choiceIndex === -1) {
    console.log('You enter the portal. You don’t remember if you fell asleep or not, but suddenly you are in this very weird, empty space.');
    console.log('Well, it actually isn’t empty. You can see a lot of stars, at least they look like stars. Time and space feels different in this dimension.');
    console.log('You can walk in any direction. You hear a loud banging noise, as if somebody is knocking very loud on a door.');
    console.log('Everything around you stars to move and warp. It feels like you are under water. You wake up laying on your back.');
    console.log('You open your eyes and see a bright modern lamp on the ceiling. You get up and look around you. ');
    console.log('To your surprise, you are back in the staircase that leads to your attic. You are very relieved that you are finally back home. ');

    return;
}
switch (choiceIndex) {
    case 0:
        console.log('You are too scared to enter the portal and turn around to fight.');
        console.log('You hit it with your flashlight and it falls on th e ground. It stand back up and tries to cut you.');
        console.log('You dodge his attacks and hit him again. You can se how angry it gets.');
        console.log('It suddenly teleports behind you and stabs you with his long, sharp fingernail through your stomach.');
        console.log('You fall on the ground and die.');   
        chapter22();
        break;
}
}

function chapter22(){
    console.log("You enter your attic and walk downstairs, but your parents aren’t home. Your house looks different. You see an old lady on the couch watching tv. When she sees you, she starts to scream that she will call the police if you don’t leave her house. You are confused and you say you have lived here your whole life. The woman says she has been living here for over 40 years. You leave the house and walk around your neighbourhood. You enter a small shop and you start looking around.")
    cht22answer = [' Look at a world map.  ', " Leave the store "],
    cht22index = readlineSync.keyInSelect(cht22answer, ' ');
  
    if (cht22index == 0) {
        chapter23()     
    } else if (cht22index == 1){
         chapter24()

}

}

function chapter23(){
    console.log("You look at a world map in the shop, but something isn’t right. The continents look completely different and the history books in the story are different than what you know. You realise that this isn’t your world. It’s a parallel universe. It must have happened when you entered the portal.")

}

function chapter24(){
    console.log("You decide to leave the store. You start walking outside and you notice how hot it is. You look up in the sky and you see two suns. One is small and blue and the other one is red and big. You can also see other planets that look like the earth in the sky. And it also looks like the earth has rings. You realise that this isn’t your world. It’s a parallel universe. It must have happened when you entered the portal.")

}
