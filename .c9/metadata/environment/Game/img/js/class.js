{"filter":false,"title":"class.js","tooltip":"/Game/img/js/class.js","undoManager":{"mark":50,"position":50,"stack":[[{"start":{"row":0,"column":0},"end":{"row":83,"column":1},"action":"insert","lines":["class Sprite {","    constructor({position}){","    this.position = position,","","    this.height = 50,","    this.width = 50","        ","    }","    ","    draw(){","","    }","    // this function adds the player in the game when called","    ","    update()","    {","        this.draw()","    }","    // currently makes the player fall if hes in the air","    ","    ","}","","class Player {","    constructor({position, velocity}){","    this.position = position,","    // postion is where the player spawns at","    this.velocity = velocity,","    // velocity is the player moving and falling","    this.height = 50,","    this.width = 50,","    // this is the height of the player","    this.lastKey,","    this.attack = {","        position: this.position,","        width: 100,","        height: 10","    },","    this.attacking = false;","    this.heath = 100;","        ","    }","    ","    draw(){","        c.fillStyle = 'red'","        c.fillRect(this.position.x, this.position.y, this.width, this.height)","        ","        //attack","        if(this.attacking == true)","        {","        c.fillStyle = 'blue'","        c.fillRect(this.attack.position.x, this.attack.position.y, this.attack.width, this.attack.height)","        }","    }","    // this function adds the player in the game when called","    ","    update()","    {","        this.draw()","        ","        this.position.x += this.velocity.x ","        this.position.y += this.velocity.y ","        ","        if(this.position.y + this.height + this.velocity.y >= canvas.height)","        {","            this.velocity.y = 0","        }","        else","        {","           this.velocity.y += gravity","        }","        // this makes the player fall if hes in the air till he hits the floor","    }","    // currently makes the player fall if hes in the air","    ","    ","    theAttack(){","        this.attacking = true","        setTimeout(() => {","            this.attacking = false","        }, 100)","    }","    ","}"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":33},"action":"insert","lines":["const canvas = document.querySelector('canvas')","const c = canvas.getContext('2d')"],"id":3}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":19},"action":"insert","lines":["const gravity = .9;"],"id":5}],[{"start":{"row":88,"column":1},"end":{"row":89,"column":0},"action":"insert","lines":["",""],"id":6},{"start":{"row":89,"column":0},"end":{"row":90,"column":0},"action":"insert","lines":["",""]},{"start":{"row":90,"column":0},"end":{"row":90,"column":1},"action":"insert","lines":["e"]}],[{"start":{"row":90,"column":0},"end":{"row":90,"column":1},"action":"remove","lines":["e"],"id":7}],[{"start":{"row":90,"column":0},"end":{"row":90,"column":1},"action":"insert","lines":["m"],"id":8},{"start":{"row":90,"column":1},"end":{"row":90,"column":2},"action":"insert","lines":["o"]},{"start":{"row":90,"column":2},"end":{"row":90,"column":3},"action":"insert","lines":["d"]},{"start":{"row":90,"column":3},"end":{"row":90,"column":4},"action":"insert","lines":["u"]},{"start":{"row":90,"column":4},"end":{"row":90,"column":5},"action":"insert","lines":["l"]},{"start":{"row":90,"column":5},"end":{"row":90,"column":6},"action":"insert","lines":["e"]},{"start":{"row":90,"column":6},"end":{"row":90,"column":7},"action":"insert","lines":["."]},{"start":{"row":90,"column":7},"end":{"row":90,"column":8},"action":"insert","lines":["e"]},{"start":{"row":90,"column":8},"end":{"row":90,"column":9},"action":"insert","lines":["x"]},{"start":{"row":90,"column":9},"end":{"row":90,"column":10},"action":"insert","lines":["p"]},{"start":{"row":90,"column":10},"end":{"row":90,"column":11},"action":"insert","lines":["o"]},{"start":{"row":90,"column":11},"end":{"row":90,"column":12},"action":"insert","lines":["r"]}],[{"start":{"row":90,"column":12},"end":{"row":90,"column":13},"action":"insert","lines":["t"],"id":9},{"start":{"row":90,"column":13},"end":{"row":90,"column":14},"action":"insert","lines":["s"]}],[{"start":{"row":90,"column":14},"end":{"row":90,"column":15},"action":"insert","lines":[" "],"id":10},{"start":{"row":90,"column":15},"end":{"row":90,"column":16},"action":"insert","lines":["="]}],[{"start":{"row":90,"column":16},"end":{"row":90,"column":17},"action":"insert","lines":[" "],"id":11}],[{"start":{"row":90,"column":17},"end":{"row":90,"column":19},"action":"insert","lines":["''"],"id":12}],[{"start":{"row":90,"column":17},"end":{"row":90,"column":19},"action":"remove","lines":["''"],"id":13}],[{"start":{"row":90,"column":17},"end":{"row":90,"column":18},"action":"insert","lines":["}"],"id":14}],[{"start":{"row":90,"column":17},"end":{"row":90,"column":18},"action":"remove","lines":["}"],"id":15}],[{"start":{"row":90,"column":17},"end":{"row":90,"column":18},"action":"insert","lines":["{"],"id":16},{"start":{"row":90,"column":18},"end":{"row":90,"column":19},"action":"insert","lines":["}"]}],[{"start":{"row":90,"column":18},"end":{"row":90,"column":19},"action":"insert","lines":["P"],"id":17},{"start":{"row":90,"column":19},"end":{"row":90,"column":20},"action":"insert","lines":["l"]},{"start":{"row":90,"column":20},"end":{"row":90,"column":21},"action":"insert","lines":["a"]},{"start":{"row":90,"column":21},"end":{"row":90,"column":22},"action":"insert","lines":["y"]},{"start":{"row":90,"column":22},"end":{"row":90,"column":23},"action":"insert","lines":["e"]},{"start":{"row":90,"column":23},"end":{"row":90,"column":24},"action":"insert","lines":["r"]},{"start":{"row":90,"column":24},"end":{"row":90,"column":25},"action":"insert","lines":[","]}],[{"start":{"row":90,"column":25},"end":{"row":90,"column":26},"action":"insert","lines":[" "],"id":18},{"start":{"row":90,"column":26},"end":{"row":90,"column":27},"action":"insert","lines":["s"]}],[{"start":{"row":90,"column":26},"end":{"row":90,"column":27},"action":"remove","lines":["s"],"id":19}],[{"start":{"row":90,"column":26},"end":{"row":90,"column":27},"action":"insert","lines":["S"],"id":20},{"start":{"row":90,"column":27},"end":{"row":90,"column":28},"action":"insert","lines":["p"]},{"start":{"row":90,"column":28},"end":{"row":90,"column":29},"action":"insert","lines":["t"]},{"start":{"row":90,"column":29},"end":{"row":90,"column":30},"action":"insert","lines":["i"]},{"start":{"row":90,"column":30},"end":{"row":90,"column":31},"action":"insert","lines":["r"]},{"start":{"row":90,"column":31},"end":{"row":90,"column":32},"action":"insert","lines":["e"]}],[{"start":{"row":90,"column":31},"end":{"row":90,"column":32},"action":"remove","lines":["e"],"id":21},{"start":{"row":90,"column":30},"end":{"row":90,"column":31},"action":"remove","lines":["r"]},{"start":{"row":90,"column":29},"end":{"row":90,"column":30},"action":"remove","lines":["i"]},{"start":{"row":90,"column":28},"end":{"row":90,"column":29},"action":"remove","lines":["t"]}],[{"start":{"row":90,"column":28},"end":{"row":90,"column":29},"action":"insert","lines":["r"],"id":22},{"start":{"row":90,"column":29},"end":{"row":90,"column":30},"action":"insert","lines":["i"]},{"start":{"row":90,"column":30},"end":{"row":90,"column":31},"action":"insert","lines":["t"]},{"start":{"row":90,"column":31},"end":{"row":90,"column":32},"action":"insert","lines":["e"]}],[{"start":{"row":90,"column":0},"end":{"row":90,"column":3},"action":"insert","lines":["// "],"id":23}],[{"start":{"row":0,"column":0},"end":{"row":4,"column":0},"action":"remove","lines":["const canvas = document.querySelector('canvas')","const c = canvas.getContext('2d')","","const gravity = .9;",""],"id":24}],[{"start":{"row":85,"column":0},"end":{"row":86,"column":0},"action":"insert","lines":["",""],"id":25},{"start":{"row":86,"column":0},"end":{"row":87,"column":0},"action":"insert","lines":["",""]},{"start":{"row":87,"column":0},"end":{"row":87,"column":1},"action":"insert","lines":["c"]},{"start":{"row":87,"column":1},"end":{"row":87,"column":2},"action":"insert","lines":["o"]},{"start":{"row":87,"column":2},"end":{"row":87,"column":3},"action":"insert","lines":["n"]},{"start":{"row":87,"column":3},"end":{"row":87,"column":4},"action":"insert","lines":["s"]},{"start":{"row":87,"column":4},"end":{"row":87,"column":5},"action":"insert","lines":["o"]},{"start":{"row":87,"column":5},"end":{"row":87,"column":6},"action":"insert","lines":["l"]},{"start":{"row":87,"column":6},"end":{"row":87,"column":7},"action":"insert","lines":["e"]},{"start":{"row":87,"column":7},"end":{"row":87,"column":8},"action":"insert","lines":["."]},{"start":{"row":87,"column":8},"end":{"row":87,"column":9},"action":"insert","lines":["l"]},{"start":{"row":87,"column":9},"end":{"row":87,"column":10},"action":"insert","lines":["o"]},{"start":{"row":87,"column":10},"end":{"row":87,"column":11},"action":"insert","lines":["g"]}],[{"start":{"row":87,"column":11},"end":{"row":87,"column":13},"action":"insert","lines":["()"],"id":26}],[{"start":{"row":87,"column":12},"end":{"row":87,"column":13},"action":"insert","lines":[";"],"id":27}],[{"start":{"row":87,"column":12},"end":{"row":87,"column":13},"action":"remove","lines":[";"],"id":28}],[{"start":{"row":87,"column":12},"end":{"row":87,"column":14},"action":"insert","lines":["''"],"id":29}],[{"start":{"row":87,"column":13},"end":{"row":87,"column":14},"action":"insert","lines":["h"],"id":30},{"start":{"row":87,"column":14},"end":{"row":87,"column":15},"action":"insert","lines":["i"]},{"start":{"row":87,"column":15},"end":{"row":87,"column":16},"action":"insert","lines":["i"]},{"start":{"row":87,"column":16},"end":{"row":87,"column":17},"action":"insert","lines":["i"]}],[{"start":{"row":87,"column":0},"end":{"row":87,"column":19},"action":"remove","lines":["console.log('hiii')"],"id":31},{"start":{"row":87,"column":0},"end":{"row":87,"column":1},"action":"insert","lines":["f"]},{"start":{"row":87,"column":1},"end":{"row":87,"column":2},"action":"insert","lines":["u"]},{"start":{"row":87,"column":2},"end":{"row":87,"column":3},"action":"insert","lines":["n"]},{"start":{"row":87,"column":3},"end":{"row":87,"column":4},"action":"insert","lines":["c"]},{"start":{"row":87,"column":4},"end":{"row":87,"column":5},"action":"insert","lines":["t"]},{"start":{"row":87,"column":5},"end":{"row":87,"column":6},"action":"insert","lines":["i"]},{"start":{"row":87,"column":6},"end":{"row":87,"column":7},"action":"insert","lines":["o"]},{"start":{"row":87,"column":7},"end":{"row":87,"column":8},"action":"insert","lines":["n"]}],[{"start":{"row":87,"column":8},"end":{"row":87,"column":10},"action":"insert","lines":["()"],"id":32}],[{"start":{"row":87,"column":9},"end":{"row":87,"column":10},"action":"remove","lines":[")"],"id":33},{"start":{"row":87,"column":8},"end":{"row":87,"column":9},"action":"remove","lines":["("]},{"start":{"row":87,"column":7},"end":{"row":87,"column":8},"action":"remove","lines":["n"]}],[{"start":{"row":87,"column":7},"end":{"row":87,"column":8},"action":"insert","lines":["n"],"id":34}],[{"start":{"row":87,"column":8},"end":{"row":87,"column":9},"action":"insert","lines":[" "],"id":35},{"start":{"row":87,"column":9},"end":{"row":87,"column":10},"action":"insert","lines":["h"]},{"start":{"row":87,"column":10},"end":{"row":87,"column":11},"action":"insert","lines":["i"]}],[{"start":{"row":87,"column":11},"end":{"row":87,"column":13},"action":"insert","lines":["()"],"id":36}],[{"start":{"row":87,"column":13},"end":{"row":88,"column":0},"action":"insert","lines":["",""],"id":37},{"start":{"row":88,"column":0},"end":{"row":88,"column":1},"action":"insert","lines":["}"]}],[{"start":{"row":88,"column":1},"end":{"row":89,"column":0},"action":"insert","lines":["",""],"id":38}],[{"start":{"row":88,"column":1},"end":{"row":89,"column":0},"action":"remove","lines":["",""],"id":39},{"start":{"row":88,"column":0},"end":{"row":88,"column":1},"action":"remove","lines":["}"]}],[{"start":{"row":88,"column":0},"end":{"row":88,"column":1},"action":"insert","lines":["{"],"id":40}],[{"start":{"row":88,"column":1},"end":{"row":90,"column":1},"action":"insert","lines":["","    ","}"],"id":41}],[{"start":{"row":89,"column":4},"end":{"row":89,"column":5},"action":"insert","lines":["c"],"id":42},{"start":{"row":89,"column":5},"end":{"row":89,"column":6},"action":"insert","lines":["o"]},{"start":{"row":89,"column":6},"end":{"row":89,"column":7},"action":"insert","lines":["n"]},{"start":{"row":89,"column":7},"end":{"row":89,"column":8},"action":"insert","lines":["s"]},{"start":{"row":89,"column":8},"end":{"row":89,"column":9},"action":"insert","lines":["o"]},{"start":{"row":89,"column":9},"end":{"row":89,"column":10},"action":"insert","lines":["l"]},{"start":{"row":89,"column":10},"end":{"row":89,"column":11},"action":"insert","lines":["e"]},{"start":{"row":89,"column":11},"end":{"row":89,"column":12},"action":"insert","lines":["."]},{"start":{"row":89,"column":12},"end":{"row":89,"column":13},"action":"insert","lines":["l"]},{"start":{"row":89,"column":13},"end":{"row":89,"column":14},"action":"insert","lines":["o"]},{"start":{"row":89,"column":14},"end":{"row":89,"column":15},"action":"insert","lines":["g"]}],[{"start":{"row":89,"column":15},"end":{"row":89,"column":17},"action":"insert","lines":["()"],"id":43}],[{"start":{"row":89,"column":16},"end":{"row":89,"column":17},"action":"insert","lines":["h"],"id":44}],[{"start":{"row":89,"column":16},"end":{"row":89,"column":17},"action":"remove","lines":["h"],"id":45}],[{"start":{"row":89,"column":16},"end":{"row":89,"column":18},"action":"insert","lines":["''"],"id":46}],[{"start":{"row":89,"column":17},"end":{"row":89,"column":18},"action":"insert","lines":["h"],"id":47},{"start":{"row":89,"column":18},"end":{"row":89,"column":19},"action":"insert","lines":["i"]}],[{"start":{"row":90,"column":1},"end":{"row":91,"column":0},"action":"insert","lines":["",""],"id":48},{"start":{"row":91,"column":0},"end":{"row":91,"column":1},"action":"insert","lines":["f"]},{"start":{"row":91,"column":1},"end":{"row":91,"column":2},"action":"insert","lines":["j"]}],[{"start":{"row":91,"column":1},"end":{"row":91,"column":2},"action":"remove","lines":["j"],"id":49},{"start":{"row":91,"column":0},"end":{"row":91,"column":1},"action":"remove","lines":["f"]}],[{"start":{"row":91,"column":0},"end":{"row":91,"column":1},"action":"insert","lines":["h"],"id":50},{"start":{"row":91,"column":1},"end":{"row":91,"column":2},"action":"insert","lines":["i"]}],[{"start":{"row":91,"column":2},"end":{"row":91,"column":4},"action":"insert","lines":["()"],"id":51}]]},"ace":{"folds":[],"scrolltop":627.5,"scrollleft":0,"selection":{"start":{"row":91,"column":3},"end":{"row":91,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":43,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1658608977708,"hash":"915b943417c19bfaa4879f0b920c236b8ab9ef39"}