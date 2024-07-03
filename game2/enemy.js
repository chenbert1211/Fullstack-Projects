class Sprite {
    constructor({position, imageSrc, scale = 1, framesMax = 1, offset = {x:0, y:0}}){
    this.position = position,
    this.height = 50,
    this.width = 50,
    this.image = new Image(),
    this.image.src = imageSrc,
    this.scale = scale,
    this.framesMax = framesMax,
    this.framesCurrent = 0,
    this.framesElapsed = 0,
    this.framesHold = 5
    this.offset = offset
    
    }
    
    draw(){
        c.drawImage(this.image, 
        this.framesCurrent * (this.image.width / this.framesMax),
        0,
        this.image.width/this.framesMax,
        this.image.height,
        this.position.x - this.offset.x,
        this.position.y - this.offset.y,
        (this.image.width/this.framesMax) * this.scale,
        this.image.height * this.scale)
    }
    // this function adds the player in the game when called
    
    update()
    {
        this.draw()
        this.framesElapsed++
        
        if(this.framesElapsed % this.framesHold ===0)
        {
            if(this.framesCurrent < this.framesMax - 1){
                this.framesCurrent++
            }else{
                this.framesCurrent = 0
            }
        }
    }
    // currently makes the player fall if hes in the air
}

class Enemy extends Sprite {
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
    this.framesCurrent = 0,
    this.framesElapsed = 0,
    this.framesHold = 7
    this.attacked = false
    this.sprites = sprites;
    for(const sprite in this.sprites){
        sprites[sprite].image = new Image()
        sprites[sprite].image.src = sprites[sprite].imageSrc
        // sprites[sprite].framesMax = sprites[sprite].framesMax
    }
    }
    
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
        
     
        // if(player1.position.x + 100 >= this.position.x)
        // {
        //     this.velocity.x = -1;
        // }
        if(this.health > 0){
         if(this.position.x <= 500 && player1.position.y + 20 + player1.height >= this.position.y &&
    player1.position.y + 20 <= this.position.y + this.height)
    {if(this.attacked == true){
            this.image = this.sprites.hit.image
            this.framesMax = this.sprites.hit.framesMax}
            else
        if(player1.position.x >= this.position.x)
        {
            this.image = this.sprites.run.image
            this.framesMax = this.sprites.run.framesMax
            this.velocity.x = 1;
        
        }
        if(player1.position.x <= this.position.x)
        {
            // console.log(this.position)
            if(this.position.x - player1.position.x >= 1 && this.position.x - player1.position.x <= 20)
            {
                this.velocity.x = 0
                this.image = this.sprites.attack.image
                this.framesMax = this.sprites.attack.framesMax
                if(this.framesMax == 15)
                {   
                    if(this.framesCurrent == 12)
                {
                   this.framesCurrent = 0;
                    player1.hitted = true
                    if(player1.hitted == true){
                        player1.velocity.x = -40;
                    }
                    setTimeout(() => { player1.hitted = false}, 200)
                    player1.health -= 50;}
                    
                }else if(this.framesMax == 13 && this.framesCurrent == 6)
                {
                      player1.hitted = true
                    setTimeout(() => { player1.hitted = false}, 200)
                    player1.health -= 10;
                }else if(this.framesMax == 8 && this.framesCurrent == 2){
                     player1.hitted = true
                    setTimeout(() => { player1.hitted = false}, 200)
                    player1.health -= 5;
                }
            }
            else{
            this.image = this.sprites.run.image
            this.framesMax = this.sprites.run.framesMax
           this.velocity.x = -1;}
    }}else
        {
            this.velocity.x = 0
            this.image = this.sprites.idle.image
            this.framesMax = this.sprites.idle.framesMax
        }
    }else
        {
            this.image = this.sprites.dead.image
            this.framesMax = this.sprites.dead.framesMax
            // console.log(this.framesCurrent, this.framesElapsed, this.framesMax, this.framesHold)
            if(this.framesCurrent == this.framesMax -1)
            {
            this.framesElapsed = null
            }
        }
    }
}


class Platform extends Sprite{
   constructor({position, velocity = {x: 0, y:0}, imageSrc, scale = 1, framesMax = 1, offset = {x:0, y:0}, 
    sprites, height = 10, width = 100})
    {
        super({
        position,
        imageSrc,
        scale,
        framesMax,
        offset
    })
    this.width = width;
    this.height = height;
    this.scale = scale,
    this.framesMax = framesMax,
    this.framesCurrent = 0,
    this.framesElapsed = 0,
    this.framesHold = 5
    }
    
    update(){
        this.draw()
        this.framesElapsed++
        
        if(this.framesElapsed % this.framesHold === 0)
        {
            if(this.framesCurrent < this.framesMax - 1){
                this.framesCurrent++
            }else{
                this.framesCurrent = 0
            }
        }
    }
}

