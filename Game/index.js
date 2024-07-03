const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
// let the html know what will be created 2d animations or 3d animations etc

canvas.width = 1024;
canvas.height = 576; 
// this height and width of how big the canvas will be within a webpage


c.fillRect(0, 0, 1024, 576)
// filling the canvas with an color first two is y and x start point top left page and 
// next two is width and height


const gravity = .9;
// this is created for gravity, it will constantly add on till the player hits the bottom


const background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './img/Background.png'
})

const newPlayer = new Player({
    position: {
    x:0,
    y:0
    },
    velocity: {
    x:0,
    y:0  
    },
    offset:{
     x:0,
     y:0  
    },
        imageSrc: './img/idle.png',
        framesMax: 2,
        offset:{
            x: 0,
            y: 0
        },
        sprites: {
         idle:{
             imageSrc: './img/idle.png',
             framesMax: 2
         },
         run: {
             imageSrc: './img/run.png',
             framesMax: 7
         },
         jump:{
              imageSrc: './img/jump.png',
             framesMax: 1
         },
         fall: {
              imageSrc: './img/fall.png',
             framesMax: 1
         },
         attack: {
              imageSrc: './img/attack.png',
             framesMax: 6
         }
        }
}
    )
newPlayer.draw()
// this is the player falling, in the futere can be added to an event listener when clicked


const keys = {
    a:{
        pressed: false    
    },
     d:{
        pressed: false    
    },
    w:{
        pressed: false    
    }
    
    
}



//timer for game
let timer = 50;

function decTimer()
{
  document.getElementById('timer').innerHTML = timer
  
  if(timer > 0 && newPlayer.heath > 0)
  { 
  setTimeout(decTimer, 1000)
  timer--
}

//who won
// if(timer === 0)
// {
// if(newPlayer.health === enenmy.health)
// {
//     document.getElementById('tie').innerHTML = "TIE";
// }
// else if(newPlayer.health > enemy.health)
// {
//     document.getElementById('tie').innerHTML = "YOU WON";
// }
// else{
//     document.getElementById('tie').innerHTML = "YOU LOST";
// }
// }
}
decTimer()



function animiate(){
    window.requestAnimationFrame(animiate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.update();
    newPlayer.update()
    
    
    // newPlayer.image = newPlayer.sprites.idle.image;
    // newPlayer.framesMax = newPlayer.sprites.idle.framesMax
    
    if(keys.a.pressed && newPlayer.lastKey == 'a'){
        newPlayer.image = newPlayer.sprites.run.image
        newPlayer.velocity.x = -5;
        newPlayer.framesMax = newPlayer.sprites.run.framesMax
    } else if(keys.d.pressed && newPlayer.lastKey =='d')
    {

        newPlayer.image = newPlayer.sprites.run.image
        newPlayer.framesMax = newPlayer.sprites.run.framesMax
        newPlayer.velocity.x = 5;
    }else
    {newPlayer.velocity.x = 0;
        newPlayer.image = newPlayer.sprites.idle.image;
    newPlayer.framesMax = newPlayer.sprites.idle.framesMax
    
    }
    
    
    if(newPlayer.velocity.y < 0)
    {
        newPlayer.image = newPlayer.sprites.jump.image
        newPlayer.framesMax = newPlayer.sprites.jump.framesMax
         newPlayer.framesCurrent = 0
        
    }
    else if(newPlayer.velocity.y > 0)
    {
         newPlayer.image = newPlayer.sprites.fall.image
        newPlayer.framesMax = newPlayer.sprites.fall.framesMax
        newPlayer.framesCurrent = 0
    }

    //attack area when touched, enemy will be new class 
    // if(newPlayer.attack.position.x + newPlayer.attack.width >= enemy.position.x &&
    // newPlayer.attack.position.x <= enemy.position.x + enemy.width &&
    // newPlayer.attack.position.y + newPlayer.attack.height >= enemy.position.y &&
    // newPlayer.attack.position.y <= enemy.position.y + enemy.height && newPlayer.attacking)
    // {
    //     newPlayer.attacking = false;
            //this shrink health
            // newPlayer.health -= 20;
        //document.getClassName('missingHealth').style.width = newPlayer.health + '%'
    // }
    
    //who won base on health
    if(newPlayer.health <= 0)
    {
        document.getElementById('tie').innerHTML = "YOU LOST LOSER";
    }
}
animiate()
// this is a little confusing, this constanly repeats/rendors no matter what. Very useful

window.addEventListener('keydown', (event) => {
    // console.log(event.key)
   switch(event.key)
   {
       case 'd':
        keys.d.pressed = true;
        newPlayer.lastKey = 'd'
        break
        
        case 'a':
        keys.a.pressed = true;
        newPlayer.lastKey = 'a'
        break
        
        case 'w':
        // keys.w.pressed = true;
        // lastKey = 'w'
        newPlayer.velocity.y = -10;
        break
        
        case ' ':
        newPlayer.theAttack()
        newPlayer.framesHold = 5
        newPlayer.image = newPlayer.sprites.attack.image
        newPlayer.framesMax = newPlayer.sprites.attack.framesMax
        break
   }
})

window.addEventListener('keyup', (event) => {
    // console.log(event.key)
   switch(event.key)
   {
       case 'd':
        keys.d.pressed = false;
        break
        
        case 'a':
        keys.a.pressed = false;
        break
        
        // case 'w':
        // keys.w.pressed = false;
        // // lastKey = 'w'
        // break
   }
})


