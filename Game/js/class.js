
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

class Player extends Sprite{
    constructor({position, velocity, imageSrc, scale = 1, framesMax = 1, offset = {x:0, y:0}, 
    sprites
    }){
    super({
        position,
        imageSrc,
        scale,
        framesMax,
        offset
    })
    // postion is where the player spawns at
    this.velocity = velocity,
    // velocity is the player moving and falling
    this.height = 50,
    this.width = 50,
    // this is the height of the player
    this.lastKey,
    this.attack = {
        position: this.position,
        offset,
        width: 100,
        height: 10
    },
    this.attacking = false,
    this.heath = 100,
      this.framesCurrent = 0,
    this.framesElapsed = 0,
    this.framesHold = 5
    this.sprites = sprites
    
    for(const sprite in this.sprites){
        sprites[sprite].image = new Image()
        sprites[sprite].image.src = sprites[sprite].imageSrc
        // sprites[sprite].framesMax = sprites[sprite].framesMax
    }
    
    }
    
    
    //boxes test
    // draw(){
    //     c.fillStyle = 'red'
    //     c.fillRect(this.position.x, this.position.y, this.width, this.height)
        
    //     //attack
    //     if(this.attacking == true)
    //     {
    //     c.fillStyle = 'blue'
    //     c.fillRect(this.attack.position.x, this.attack.position.y, this.attack.width, this.attack.height)
    //     }
    // }
    // this function adds the player in the game when called
    
    update()
    {
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
    
        this.position.x += this.velocity.x 
        this.position.y += this.velocity.y 
        
        if(this.position.y + this.height + this.velocity.y >= canvas.height - 100)
        {
            this.velocity.y = 0
        }
        else
        {
           this.velocity.y += gravity
        }
        // this makes the player fall if hes in the air till he hits the floor
    }
    // currently makes the player fall if hes in the air
    
    
    theAttack(){
        this.attacking = true
        setTimeout(() => {
            this.attacking = false
        }, 30000)
    }
    
}


// module.exports = {Player, Sprite}