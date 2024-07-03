const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024;
canvas.height = 576;

// c.fillStyle = 'black'
c.fillRect(0, 0, 1024, 576)

const gravity = .9;

class Player extends Sprite{
    constructor({position, velocity = {x: 0, y:0}, imageSrc, scale = 1, framesMax = 1, offset = {x:0, y:0}, 
    sprites})
    {
        super({
        position,
        imageSrc,
        scale,
        framesMax,
        offset
    })
    this.health = 100;
    this.velocity = velocity
    this.height = 50;
    this.width = 50;
    this.lastKey;
    this.key = {
        d: false,
        a: false
    }
    this.attackbox = {
        width: 10,
        height: 10
    };
    this.isAttack = false;
    this.attackAn = false;
    this.dash = false;
    this.framesCurrent = 0,
    this.framesElapsed = 0,
    this.framesHold = 7
    this.sprites = sprites;
    this.hitted = false;
    for(const sprite in this.sprites){
        sprites[sprite].image = new Image()
        sprites[sprite].image.src = sprites[sprite].imageSrc
        // sprites[sprite].framesMax = sprites[sprite].framesMax
    }
    }
    
    attacking(a)
    {
    if(this.lastKey == 'd')
    {
    this.image = this.sprites.attack.image
    this.framesMax = this.sprites.attack.framesMax
    // c.fillStyle = 'red';
    // c.fillRect(this.position.x + 40, this.position.y + 8, this.attackbox.width, this.attackbox.height)
    }
    if(this.lastKey == 'a'){
     this.image = this.sprites.attack1.image
    this.framesMax = this.sprites.attack1.framesMax 
    // c.fillStyle = 'red';
    // c.fillRect(this.position.x - 2, this.position.y + 8, this.attackbox.width, this.attackbox.height)
    }
    }
    
    // draw(){
    //     c.fillStyle = 'blue'
    //     c.fillRect(this.position.x, this.position.y, this.width, this.height)
    // }
    
    update(){
        this.draw()
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;
        
        this.framesElapsed++
        
        if(this.framesElapsed % this.framesHold === 0)
        {
            if(this.framesCurrent < this.framesMax - 1){
                this.framesCurrent++
            }else{
                this.framesCurrent = 0
            }
        }
        
           if(this.position.y + this.height + this.velocity.y >= canvas.height + 25)
        {
            this.velocity.y = 0
        }
        else{
            this.velocity.y += gravity;
        }
         platform.forEach(platform => {
        if(this.position.y + this.height <= platform.position.y + 20&&
        this.position.y + this.height + this.velocity.y
        >= platform.position.y + 20 && this.position.x + this.width >=
        platform.position.x + 30 && this.position.x <= platform.position.x + platform.width - 10)
        {
        this.velocity.y = 0
        }})
        
        
    //      if(this.hitted == true)
    // {
    //     this.velocity.x = 5;
    //     setTimeout(() => {this.velocity.x = 0}, 300)
    // }
        
        this.movement()
        if(this.hitted == true)
        {
            this.velocity.x = -2;
            this.velocity.y = -.5;
            // setTimeout(() => {this.velocity.x = 0;
            // this.velocity.y = 0}, 1000)
            console.log(this.hitted)
        }else{
            this.movement()
        }
        
        if(this.velocity.y < 0)
        {
        this.switchAnime('jump')
        }else if(this.velocity.y > 0)
        {
         this.switchAnime('fall')
        }
        
    }
    
    movement()
    {
        
        //  if(this.lastKey == 'd' && this.dash == true)
        // {
        //         if(this.lastKey == 'd' && this.dash == true)
        //       this.velocity.x = 20;
        // }
        
        if(this.key.d == true && this.lastKey == 'd')
        {
            // console.log(this.position.x)
          this.switchAnime('run') 
        }
        else if(this.key.a == true && this.lastKey == 'a')
        {
          this.switchAnime('run1')
        }else if(this.isAttack == true && this.lastKey == 'd')
        {
        this.switchAnime('attack')
        }else if(this.isAttack == true && this.lastKey == 'a')
        {
        this.switchAnime('attack1')
        }else
        {
            this.velocity.x = 0;
        }
        
        if(this.velocity.x == 0 && this.velocity.y == 0 && this.isAttack != true)
        {
            if(this.lastKey == 'd')
            {
            this.switchAnime('idle')
            }
            if(this.lastKey == 'a')
            {
            this.switchAnime('idle1')
            }
        }
        if(this.velocity.x == 0 && this.velocity.y == 0 && this.isAttack != true)
        {
            if(this.lastKey == 'd')
            {
            this.switchAnime('idle')
            }
            if(this.lastKey == 'a')
            {
            this.switchAnime('idle1')
            }
        }
    }
    
    switchAnime(anime)
    {
        switch(anime)
        {
            case 'idle':
            if(this.image !== this.sprites.idle.image)
            {
            this.image = this.sprites.idle.image
            this.velocity.x = 0;
            this.framesMax = this.sprites.idle.framesMax
            this.framesHold = 7 
            this.framesCurrent = 0
            }
            break
            case 'idle1':
            if(this.image !== this.sprites.idle1.image)
            {
            this.image = this.sprites.idle1.image
            this.velocity.x = 0;
            this.framesMax = this.sprites.idle1.framesMax
            this.framesHold = 7 
            this.framesCurrent = 0
            }
            break
            case 'attack':
            if(this.image !== this.sprites.attack.image)
            {
            this.attacking()
            this.framesHold = 4
            this.framesCurrent = 0
            setTimeout(() => {this.attackAn = false}, 200)
            }
            break
            case 'attack1':
            if(this.image !== this.sprites.attack1.image)
            {
            this.attacking()
            this.framesHold = 4
            this.framesCurrent = 0
            setTimeout(() => {this.attackAn = false}, 200)
            }
            break
            case 'run':
            if(this.image !== this.sprites.run.image)
            {
            this.framesHold = 7 
            this.velocity.x = 3;
            this.image = this.sprites.run.image
            this.framesMax = this.sprites.run.framesMax
            this.framesCurrent = 0
            }
            break
            case 'run1':
            if(this.image !== this.sprites.run1.image)
            {
            this.framesHold = 7 
            this.velocity.x = -3;
            this.image = this.sprites.run1.image
            this.framesMax = this.sprites.run1.framesMax
            this.framesCurrent = 0
            }
            break
            case 'jump':
            if(this.image !== this.sprites.jump.image)
            {
            this.image = this.sprites.jump.image
            this.framesMax = this.sprites.jump.framesMax
            this.framesHold = 1
            this.framesCurrent = 0
            }
            break
            case 'fall':
            if(this.image !== this.sprites.fall.image)
            {
            this.image = this.sprites.fall.image
            this.framesMax = this.sprites.fall.framesMax
            this.framesHold = 1
            this.framesCurrent = 0
            }
            break
            case 'walkAt':
            if(this.image !== this.sprites.walkAttack.images)
            {
            this.framesHold = 4
            this.velocity.x = 3;
            this.image = this.sprites.walkAttack.image
            this.framesMax = this.sprites.walkAttack.framesMax
            setTimeout(() => {this.attackAn = false}, 1000)
            // this.framesCurrent = 0
            }
        }
    }
}







































let enemy2 = [new Enemy({position: {x: 1700, y:300},  imageSrc: './img/enemy2/idle.png',
        framesMax: 4,
        offset:{
            x: 50,
            y: 0
        },
        sprites: {
         idle:{
             imageSrc: './img/enemy2/idle.png',
             framesMax: 4
         },
         run: {
             imageSrc: './img/enemy2/run.png',
             framesMax: 8
         },
         run1: {
             imageSrc: './img/enemy/run1.png',
             framesMax: 6
         },
         attack: {
              imageSrc: './img/enemy2/attack.png',
             framesMax: 8
         },
         hit: {
              imageSrc: './img/enemy2/hit.png',
             framesMax: 4
         },
         dead: {
              imageSrc: './img/enemy2/Death.png',
             framesMax: 4
         },
        }}), new Enemy({position: {x: 1600, y:300},  imageSrc: './img/enemy/idle.png',
        framesMax: 4,
        offset:{
           x: 50,
            y: 0
        },
         sprites: {
         idle:{
             imageSrc: './img/enemy2/idle.png',
             framesMax: 4
         },
         run: {
             imageSrc: './img/enemy2/run.png',
             framesMax: 8
         },
         run1: {
             imageSrc: './img/enemy/run1.png',
             framesMax: 6
         },
         attack: {
              imageSrc: './img/enemy2/attack.png',
             framesMax: 8
         },
         hit: {
              imageSrc: './img/enemy2/hit.png',
             framesMax: 4
         },
         dead: {
              imageSrc: './img/enemy2/Death.png',
             framesMax: 4
         },
        }}),
        new Enemy({position: {x: 1400, y:300},  imageSrc: './img/enemy2/idle.png',
        framesMax: 4,
        offset:{
            x: 50,
            y: 0
        },
        sprites: {
         idle:{
             imageSrc: './img/enemy2/idle.png',
             framesMax: 4
         },
         run: {
             imageSrc: './img/enemy2/run.png',
             framesMax: 8
         },
         run1: {
             imageSrc: './img/enemy/run1.png',
             framesMax: 6
         },
         attack: {
              imageSrc: './img/enemy2/attack.png',
             framesMax: 8
         },
         hit: {
              imageSrc: './img/enemy2/hit.png',
             framesMax: 4
         },
         dead: {
              imageSrc: './img/enemy2/Death.png',
             framesMax: 4
         },
        }}),new Enemy({position: {x: 1300, y:300},  imageSrc: './img/enemy2/idle.png',
        framesMax: 4,
        offset:{
            x: 50,
            y: 0
        },
        sprites: {
         idle:{
             imageSrc: './img/enemy2/idle.png',
             framesMax: 4
         },
         run: {
             imageSrc: './img/enemy2/run.png',
             framesMax: 8
         },
         run1: {
             imageSrc: './img/enemy/run1.png',
             framesMax: 6
         },
         attack: {
              imageSrc: './img/enemy2/attack.png',
             framesMax: 8
         },
         hit: {
              imageSrc: './img/enemy2/hit.png',
             framesMax: 4
         },
         dead: {
              imageSrc: './img/enemy2/Death.png',
             framesMax: 4
         },
        }}),new Enemy({position: {x: 1250, y:0},  imageSrc: './img/enemy/idle.png',
        framesMax: 4,
        offset:{
            x: 0,
            y: 0
        },
        sprites: {
         idle:{
             imageSrc: './img/enemy/idle.png',
             framesMax: 4
         },
         run: {
             imageSrc: './img/enemy/run.png',
             framesMax: 12
         },
         run1: {
             imageSrc: './img/enemy/run1.png',
             framesMax: 6
         },
         attack: {
              imageSrc: './img/enemy/attack.png',
             framesMax: 13
         },
         hit: {
              imageSrc: './img/enemy/hit.png',
             framesMax: 1
         },
         dead: {
              imageSrc: './img/enemy/dead.png',
             framesMax: 13
         }
        }}), 
        new Enemy({position: {x: 1970, y:0},  imageSrc: './img/enemy/idle.png',
        framesMax: 4,
        offset:{
            x: 0,
            y: 0
        },
        sprites: {
         idle:{
             imageSrc: './img/enemy/idle.png',
             framesMax: 4
         },
         run: {
             imageSrc: './img/enemy/run.png',
             framesMax: 12
         },
         run1: {
             imageSrc: './img/enemy/run1.png',
             framesMax: 6
         },
         attack: {
              imageSrc: './img/enemy/attack.png',
             framesMax: 13
         },
         hit: {
              imageSrc: './img/enemy/hit.png',
             framesMax: 1
         },
         dead: {
              imageSrc: './img/enemy/dead.png',
             framesMax: 13
         }
        }}),
        new Enemy({position: {x: 1850, y:0},  imageSrc: './img/enemy/idle.png',
        framesMax: 4,
        offset:{
            x: 0,
            y: 0
        },
        sprites: {
         idle:{
             imageSrc: './img/enemy/idle.png',
             framesMax: 4
         },
         run: {
             imageSrc: './img/enemy/run.png',
             framesMax: 12
         },
         run1: {
             imageSrc: './img/enemy/run1.png',
             framesMax: 6
         },
         attack: {
              imageSrc: './img/enemy/attack.png',
             framesMax: 13
         },
         hit: {
              imageSrc: './img/enemy/hit.png',
             framesMax: 1
         },
         dead: {
              imageSrc: './img/enemy/dead.png',
             framesMax: 13
         }
        }})]




let background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './img/Background.png'
})

let enemy = new Enemy({position: {x: 500, y:0},  imageSrc: './img/enemy1/idle.png',
        framesMax: 6,
        offset:{
            x: 50,
            y: 80
        },
        sprites: {
         idle:{
             imageSrc: './img/enemy1/idle.png',
             framesMax: 6
         },
         run: {
             imageSrc: './img/enemy1/run.png',
             framesMax: 12
         },
         run1: {
             imageSrc: './img/enemy/run1.png',
             framesMax: 6
         },
         attack: {
              imageSrc: './img/enemy1/attack.png',
             framesMax: 15
         },
         hit: {
              imageSrc: './img/enemy1/hit.png',
             framesMax: 5
         },
         dead: {
              imageSrc: './img/enemy1/dead.png',
             framesMax: 22
         }, 
        }})



let platform = [new Platform({position: {x: 3000, y: 430},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 2800, y: 410},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 2600, y: 460},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 1730, y: 270},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 1800, y: 270},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 1870, y: 270},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 1940, y: 270},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 1480, y: 300},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 1240, y: 280},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 1120, y: 280},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 1180, y: 280},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 800, y: 430},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 960, y: 350},  imageSrc: './img/floor2.png'}), 
new Platform({position: {x: 0, y: 530},  imageSrc: './img/floor.png', width: 920}), new Platform({position: {x: 1300, y: 530},  imageSrc: './img/floor1.png', width: 520}), new Platform({position: {x: 2000, y: 530},  imageSrc: './img/floor1.png',  width: 520})]

let player1 = new Player({position: {x: 100, y:500}, imageSrc: './img/idle.png',
        framesMax: 4,
        offset:{
            x: 0,
            y: 0
        },
        sprites: {
         idle:{
             imageSrc: './img/idle.png',
             framesMax: 4
         },
         idle1:{
             imageSrc: './img/idle1.png',
             framesMax: 4
         },
         run: {
             imageSrc: './img/run.png',
             framesMax: 6
         },
         run1: {
             imageSrc: './img/run1.png',
             framesMax: 6
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
             framesMax: 10
         },
         attack1: {
              imageSrc: './img/attack1.png',
             framesMax: 10
         },
         walkAttack: {
              imageSrc: './img/walkAttack.png',
             framesMax: 3
         },
         walkAttack1: {
              imageSrc: './img/walkAttack1.png',
             framesMax: 6
         }
        }})

function init(){
     background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './img/Background.png'
})
enemy2 = [new Enemy({position: {x: 1700, y:300},  imageSrc: './img/enemy2/idle.png',
        framesMax: 4,
        offset:{
            x: 50,
            y: 0
        },
        sprites: {
         idle:{
             imageSrc: './img/enemy2/idle.png',
             framesMax: 4
         },
         run: {
             imageSrc: './img/enemy2/run.png',
             framesMax: 8
         },
         run1: {
             imageSrc: './img/enemy/run1.png',
             framesMax: 6
         },
         attack: {
              imageSrc: './img/enemy2/attack.png',
             framesMax: 8
         },
         hit: {
              imageSrc: './img/enemy2/hit.png',
             framesMax: 4
         },
         dead: {
              imageSrc: './img/enemy2/Death.png',
             framesMax: 4
         },
        }}), new Enemy({position: {x: 1600, y:300},  imageSrc: './img/enemy/idle.png',
        framesMax: 4,
        offset:{
           x: 50,
            y: 0
        },
         sprites: {
         idle:{
             imageSrc: './img/enemy2/idle.png',
             framesMax: 4
         },
         run: {
             imageSrc: './img/enemy2/run.png',
             framesMax: 8
         },
         run1: {
             imageSrc: './img/enemy/run1.png',
             framesMax: 6
         },
         attack: {
              imageSrc: './img/enemy2/attack.png',
             framesMax: 8
         },
         hit: {
              imageSrc: './img/enemy2/hit.png',
             framesMax: 4
         },
         dead: {
              imageSrc: './img/enemy2/Death.png',
             framesMax: 4
         },
        }}),
        new Enemy({position: {x: 1400, y:300},  imageSrc: './img/enemy2/idle.png',
        framesMax: 4,
        offset:{
            x: 50,
            y: 0
        },
        sprites: {
         idle:{
             imageSrc: './img/enemy2/idle.png',
             framesMax: 4
         },
         run: {
             imageSrc: './img/enemy2/run.png',
             framesMax: 8
         },
         run1: {
             imageSrc: './img/enemy/run1.png',
             framesMax: 6
         },
         attack: {
              imageSrc: './img/enemy2/attack.png',
             framesMax: 8
         },
         hit: {
              imageSrc: './img/enemy2/hit.png',
             framesMax: 4
         },
         dead: {
              imageSrc: './img/enemy2/Death.png',
             framesMax: 4
         },
        }}),new Enemy({position: {x: 1300, y:300},  imageSrc: './img/enemy2/idle.png',
        framesMax: 4,
        offset:{
            x: 50,
            y: 0
        },
        sprites: {
         idle:{
             imageSrc: './img/enemy2/idle.png',
             framesMax: 4
         },
         run: {
             imageSrc: './img/enemy2/run.png',
             framesMax: 8
         },
         run1: {
             imageSrc: './img/enemy/run1.png',
             framesMax: 6
         },
         attack: {
              imageSrc: './img/enemy2/attack.png',
             framesMax: 8
         },
         hit: {
              imageSrc: './img/enemy2/hit.png',
             framesMax: 4
         },
         dead: {
              imageSrc: './img/enemy2/Death.png',
             framesMax: 4
         },
        }}),new Enemy({position: {x: 1250, y:0},  imageSrc: './img/enemy/idle.png',
        framesMax: 4,
        offset:{
            x: 0,
            y: 0
        },
        sprites: {
         idle:{
             imageSrc: './img/enemy/idle.png',
             framesMax: 4
         },
         run: {
             imageSrc: './img/enemy/run.png',
             framesMax: 12
         },
         run1: {
             imageSrc: './img/enemy/run1.png',
             framesMax: 6
         },
         attack: {
              imageSrc: './img/enemy/attack.png',
             framesMax: 13
         },
         hit: {
              imageSrc: './img/enemy/hit.png',
             framesMax: 1
         },
         dead: {
              imageSrc: './img/enemy/dead.png',
             framesMax: 13
         }
        }}), 
        new Enemy({position: {x: 1970, y:0},  imageSrc: './img/enemy/idle.png',
        framesMax: 4,
        offset:{
            x: 0,
            y: 0
        },
        sprites: {
         idle:{
             imageSrc: './img/enemy/idle.png',
             framesMax: 4
         },
         run: {
             imageSrc: './img/enemy/run.png',
             framesMax: 12
         },
         run1: {
             imageSrc: './img/enemy/run1.png',
             framesMax: 6
         },
         attack: {
              imageSrc: './img/enemy/attack.png',
             framesMax: 13
         },
         hit: {
              imageSrc: './img/enemy/hit.png',
             framesMax: 1
         },
         dead: {
              imageSrc: './img/enemy/dead.png',
             framesMax: 13
         }
        }}),
        new Enemy({position: {x: 1850, y:0},  imageSrc: './img/enemy/idle.png',
        framesMax: 4,
        offset:{
            x: 0,
            y: 0
        },
        sprites: {
         idle:{
             imageSrc: './img/enemy/idle.png',
             framesMax: 4
         },
         run: {
             imageSrc: './img/enemy/run.png',
             framesMax: 12
         },
         run1: {
             imageSrc: './img/enemy/run1.png',
             framesMax: 6
         },
         attack: {
              imageSrc: './img/enemy/attack.png',
             framesMax: 13
         },
         hit: {
              imageSrc: './img/enemy/hit.png',
             framesMax: 1
         },
         dead: {
              imageSrc: './img/enemy/dead.png',
             framesMax: 13
         }
        }})]
        
        
 enemy = new Enemy({position: {x: 2300, y:480},  imageSrc: './img/enemy1/idle.png',
        framesMax: 6,
        offset:{
            x: 100,
            y: 80
        },
        sprites: {
         idle:{
             imageSrc: './img/enemy1/idle.png',
             framesMax: 6
         },
         run: {
             imageSrc: './img/enemy1/run.png',
             framesMax: 12
         },
         run1: {
             imageSrc: './img/enemy/run1.png',
             framesMax: 6
         },
         attack: {
              imageSrc: './img/enemy1/attack.png',
             framesMax: 15
         },
         hit: {
              imageSrc: './img/enemy1/hit.png',
             framesMax: 5
         },
         dead: {
              imageSrc: './img/enemy1/dead.png',
             framesMax: 22
         }, 
        }})



 platform = [new Platform({position: {x: 3000, y: 430},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 2800, y: 410},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 2600, y: 460},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 1730, y: 270},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 1800, y: 270},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 1870, y: 270},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 1940, y: 270},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 1480, y: 300},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 1240, y: 280},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 1120, y: 280},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 1180, y: 280},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 800, y: 430},  imageSrc: './img/floor2.png'}), new Platform({position: {x: 960, y: 350},  imageSrc: './img/floor2.png'}), 
new Platform({position: {x: 0, y: 530},  imageSrc: './img/floor.png', width: 920}), new Platform({position: {x: 1300, y: 530},  imageSrc: './img/floor1.png', width: 520}), new Platform({position: {x: 2000, y: 530},  imageSrc: './img/floor1.png',  width: 520})]

 player1 = new Player({position: {x: 100, y:500}, imageSrc: './img/idle.png',
        framesMax: 4,
        offset:{
            x: 0,
            y: 0
        },
        sprites: {
         idle:{
             imageSrc: './img/idle.png',
             framesMax: 4
         },
         idle1:{
             imageSrc: './img/idle1.png',
             framesMax: 4
         },
         run: {
             imageSrc: './img/run.png',
             framesMax: 6
         },
         run1: {
             imageSrc: './img/run1.png',
             framesMax: 6
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
             framesMax: 10
         },
         attack1: {
              imageSrc: './img/attack1.png',
             framesMax: 10
         },
         walkAttack: {
              imageSrc: './img/walkAttack.png',
             framesMax: 3
         },
         walkAttack1: {
              imageSrc: './img/walkAttack1.png',
             framesMax: 6
         }
        }})
}


















function animiate(){
    if(platform[0].position.x >= 350){
    window.requestAnimationFrame(animiate)}else{
        document.getElementById('win').style.color = 'black'
    }
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    background.update()
    player1.update()
    enemy.update()
    enemy2.forEach(enemy => enemy.update())
    platform.forEach(platform => platform.update())
    
    if(player1.position.x > 400 && player1.key.d == true)
    {   
        enemy.position.x -= 3
        platform.forEach(platform =>
        platform.position.x -= 3)
        player1.velocity.x = .0001
        enemy2.forEach(enemy => enemy.position.x -= 3)
    }
    else if(player1.position.x < 100 && player1.key.a == true)
    {
        if(platform[13].position.x < 0)
        {
             enemy.position.x += 3
        platform.forEach(platform =>
        platform.position.x += 3)
        player1.velocity.x = .0001
        enemy2.forEach(enemy => enemy.position.x += 3)
        }
        platform.forEach(platform =>
        platform.position.x += 0)
        player1.velocity.x = .0001
        enemy2.forEach(enemy => enemy.position.x += 0)
    }
    
     platform.forEach(platform => {
        if(enemy.position.y + enemy.height <= platform.position.y + 16&&
        enemy.position.y + enemy.height + enemy.velocity.y
        >= platform.position.y + 16 && enemy.position.x + enemy.width >=
        platform.position.x + 30 && enemy.position.x <= platform.position.x + platform.width - 10)
        {
        enemy.velocity.y = 0
        }})
    
     platform.forEach(platform => { enemy2.forEach(enemy =>{
        if(enemy.position.y + enemy.height <= platform.position.y + 16&&
        enemy.position.y + enemy.height + enemy.velocity.y
        >= platform.position.y + 16 && enemy.position.x + enemy.width >=
        platform.position.x + 30 && enemy.position.x <= platform.position.x + platform.width - 10)
        {
        enemy.velocity.y = 0
        }})})
    
    enemy2.forEach(enemy =>{
    if(player1.position.x + 15+ player1.attackbox.width >= enemy.position.x &&
    player1.position.x <= enemy.position.x + enemy.width && 
    player1.position.y + 20 + player1.attackbox.height >= enemy.position.y &&
    player1.position.y + 20 <= enemy.position.y + enemy.height && player1.isAttack)
    {
        // console.log(enemy.health)
        if(player1.framesCurrent == 5){
        enemy.velocity.y = -1.5;
        enemy.velocity.x = 1.5;
        enemy.health -= 20;
        enemy.attacked = true
        enemy.framesCurrent = 0;
         setTimeout(() => {
            enemy.velocity.x = 0;}, 300)}
        if(enemy.attacked == true)
        {
            enemy.image = enemy.sprites.hit.image
            enemy.framesMax = enemy.sprites.hit.framesMax
             setTimeout(() => {
            enemy.attacked = false}, 600)
        }
    }})
    
    if(player1.position.x + 50 + player1.attackbox.width >= enemy.position.x &&
    player1.position.x + 50 <= enemy.position.x + enemy.width && 
    player1.position.y + 20 + player1.attackbox.height >= enemy.position.y &&
    player1.position.y + 20 <= enemy.position.y + enemy.height && player1.isAttack)
    {
        // console.log(enemy.attacked)
        enemy.velocity.y = -1.5;
        enemy.velocity.x = 1.5;
        enemy.health -= 1;
        enemy.attacked = true
        enemy.framesCurrent = 0;
        if(enemy.attacked == true)
        {
            enemy.image = enemy.sprites.hit.image
            enemy.framesMax = enemy.sprites.hit.framesMax
             setTimeout(() => {
            enemy.attacked = false}, 600)
        }
         setTimeout(() => {
            enemy.velocity.x = 0;}, 300)
    }
    
    enemy2.forEach(enemy => {
         if(enemy.position.y + enemy.height>= canvas.height)
    {
        enemy.health -= 115;
    }
    })
    
    if(enemy.position.y + enemy.height>= canvas.height)
    {
        enemy.health -= 115;
    }
    
    if(player1.position.y + player1.height>= canvas.height || player1.health <= 0)
    {
        init()
    }
}


animiate()
window.addEventListener('keydown', (event) =>
{
    switch(event.key)
    {
        case 'w':
        player1.velocity.y = -10
        break
        case 'd':
        player1.lastKey = 'd';
        player1.key.d = true;
        break
        case 'a':
        player1.lastKey = 'a';
        player1.key.a = true;
        break
        case ' ':
        player1.isAttack = true;
        player1.attackAn = true
        break;
        case 'e':
        player1.dash = true;
        break;
    }
})

window.addEventListener('keyup', (event) =>
{
    switch(event.key)
    {
        case 'd':
        player1.key.d = false;
        break
        case 'a':
        player1.key.a = false;
        break
        case ' ':
        player1.isAttack = false;
        break;
        case 'e':
        player1.dash = false;
        break;
    }
})

