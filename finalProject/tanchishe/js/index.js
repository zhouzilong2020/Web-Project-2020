const BoxWidth = 20,    //方块宽度
      BoxHeight = 20,   //方块高度
      Tr = 40,          //一共多少行
      Td = 40;          //一共多少列

var snake = null, // 蛇实例
    food = null,  // 食物的实实例
    game = null;  // 游戏主循环


/**
 * 方块的工厂函数，传入相对坐标(1, 1)--->（20， 20）
 * @param {*} x 方块的x坐标, 是相对坐标
 * @param {*} y 方块的y坐标，是相对坐标
 * @param {*} className 方块的样式(蛇头、身体、食物)
 */
function Square(x, y, className){
    // 建立真实坐标和考虑盒子大小坐标换算
    this.x = x * BoxWidth
    this.y = y * BoxHeight
    this.class = className;

    // 方块对应的真实dom-div元素, 赋予相应class的属性
    this.viewContent = document.createElement('div');
    this.viewContent.className = this.class;
    // 将方块设置的父集为snake, 游戏的主体部分
    this.parent = document.getElementById('snake');
}
/**
 * 创建方块dom元素，并添加到dom中 
 * */ 
Square.prototype.create = function(){
    // 方块对应的dom元素
    // 添加相应位置属性，哈哈
    this.viewContent.style.position = 'absolute'; 
    this.viewContent.style.width = `${BoxWidth}px`;
    this.viewContent.style.height = `${BoxHeight}px`;  
    this.viewContent.style.left = `${this.x}px`;
    this.viewContent.style.top = `${this.y}px`;
    // 将当前这个box添加到页面中
    this.parent.appendChild(this.viewContent);
}

/**
 * 销毁dom元素，删除掉蛇移动前的box
 */
Square.prototype.remove = function(){
    this.parent.removeChild(this.viewContent);
}

/**
 * 蛇，移动的时候实际上只需要控制蛇头和蛇尾即可
 */
function Snake(){
    this.head = null;       // 蛇头信息
    this.tail = null;       // 蛇尾信息
    this.pos = [ ];         // 蛇每一个身体的位置
    this.DIRC = {   // 方向数组
        left:{
            x : -1,
            y : 0,
            rotate:180 //蛇头调转180度
        },
        right:{
            x : 1,
            y : 0,
            rotate:0    //蛇头不掉转
        },
        up:{
            x : 0,
            y : -1,
            rotate: -90  //蛇头调转-90度
        },
        down:{
            x : 0,
            y : 1,
            rotate: 90  //蛇头调转90度
        }
    };
    // snake根据不同的移动类型决定下一步的strategies
    this.strategies={
        move:(nextPos, isEating = false) =>{ //实际上只需要挪动蛇头和蛇尾
            var newBody = new Square(
                this.head.x / BoxWidth , 
                this.head.y / BoxHeight,
                'snake-body'
            );

            // 修改链表关系
            newBody.next = this.head.next;
            this.head.next.last = newBody;
            newBody.last = null;
            
            this.head.remove()  //删除旧蛇头
            newBody.create()    //显示新身体

            // 创建新蛇头
            var newHead = new Square(
                nextPos[0],
                nextPos[1],
                'snake-head'
            )
            // 更新蛇头方向
            newHead.viewContent.style.transform = `rotate(${this.dir.rotate}deg)`;
            // 更新链表
            newHead.last = null;
            newHead.next = newBody;
            newBody.last = newHead;
            // 创建新蛇头
            this.head = newHead;
            newHead.create()

            // 更新蛇头pos坐标
            this.pos.splice(0, 0, [newHead.x / BoxHeight, newHead.y / BoxWidth])
            
            // 删除蛇尾,如果不是吃了一个东西的话
            if(!isEating){
                this.pos.pop();             //删除pos信息
                this.tail.last.next = null; //修改链表
                this.tail.remove()          //删除dom元素
                this.tail = this.tail.last; //更新新的tail
            }

        },
        eat:(nextPos)=>{
            // 删除旧元素 添加新元素
            createFood()
            // 不删除蛇尾巴的移动
            this.strategies.move(nextPos, true);
            game.score++;
        },
        die:(mes)=>{ // 注意使用箭头函数，正确处理this指向的对象
            console.log(mes)
            game.over(mes)
        }
    }
}
// 构造函数
Snake.prototype.init = function(){
    //创建头
    var snakeHead = new Square(2, 0, 'snake-head')
    snakeHead.create();
    this.head = snakeHead;
    this.pos.push([2,0]);       //存放坐标

    //创建身体1
    var snakeBody1 = new Square(1, 0, 'snake-body')
    snakeBody1.create();
    this.pos.push([1,0]);       //存放坐标

    //创建身体2 同时也是尾巴
    var snakeBody2 = new Square(0, 0, 'snake-body')
    snakeBody2.create();
    this.pos.push([0,0]);       //
    this.tail = snakeBody2;

    //构造蛇皮连链表
    snakeHead.last = null;
    snakeHead.next = snakeBody1;

    snakeBody1.last = snakeHead;
    snakeBody1.next = snakeBody2;

    snakeBody2.last = snakeBody1;
    snakeBody2.next = null;

    this.dir = this.DIRC.right;
}

/**
 * 判断下一个位置是否可行，并执行相应的更新策略
 */
Snake.prototype.getNextPos = function (){
    // 下一个位置
    var nextPos = [ //转换为相对坐标
        this.head.x / BoxWidth + this.dir.x,
        this.head.y / BoxWidth + this.dir.y
    ]

    // case1 下一个位置是蛇身体
    var isSelfCollied = false;    // 自己吃自己的标记
    this.pos.forEach(function(value) {
        if(value[0] == nextPos[0] && value[1] == nextPos[1]){
            isSelfCollied = true;
        }
    });
    if(isSelfCollied){
        this.strategies.die("你吃到了自己哈哈。")
        return;
    }
    // case2 下一个点是围墙
    if(nextPos[0] < 0 || nextPos[0] > Td-1 || nextPos[1] < 0 || nextPos[1] > Tr-1){
        this.strategies.die("哈哈，你吃墙干啥?")
        return;
    }
    // case3 下个点是食物，则吃掉，长身地
    if(food && food.pos[0] == nextPos[0] && food.pos[1] == nextPos[1]){
        this.strategies.eat(nextPos)
        return;
    }
    // case4 下一个位置是空位置
    this.strategies.move(nextPos)
    return;
}


function createFood(){
    var x = null;
    var y = null;
    var isInvalid = true;     //食物位置是否合法，（墙上or在蛇身体上）
    while(isInvalid){
        // 生成墙内的随机位置
        x = Math.round( Math.random()*(Td-1) );
        y = Math.round( Math.random()*(Tr-1) );
        
        // 不在蛇身体上
        snake.pos.forEach((value)=>{
            if(value[0] != x && value[1] != y){
                isInvalid = false;
            }
        });
    }
    // 生成dom元素
    food = new Square(x, y ,'food');
    food.pos = [x, y];

    var foodDom = document.querySelector('.food')
    if(foodDom){
        foodDom.style.left = `${x * BoxWidth}px`
        foodDom.style.top = `${y * BoxHeight}px`
    }else{
        food.create();
    }
}

function Game(){
    this.timer = null;
    this.score = 0;
}

Game.prototype.init = function(){
    snake = new Snake();
    snake.init();
    createFood()
    document.onkeydown = function(e) {
        // 按下左键
        if(e.which == 37 && snake.dir != snake.DIRC.right){
            snake.dir = snake.DIRC.left;
        }else if(e.which == 38 && snake.dir != snake.DIRC.down){
            snake.dir = snake.DIRC.up;
        }else if(e.which == 39 && snake.dir != snake.DIRC.left){
            snake.dir = snake.DIRC.right;
        }else if(e.which == 40 && snake.dir != snake.DIRC.up){
            snake.dir = snake.DIRC.down;
        }

    }
    this.start();
}
Game.prototype.start = function(){
    this.timer = setInterval(() => {
        // 每200ms处理一次动作
        snake.getNextPos()
    }, 200);
}
Game.prototype.over = function(mes){
    clearInterval(this.timer)
    alert(`${mes}你的得分为:${game.score}`);


    // restar game
    var snakeWrap = document.getElementById('snake');
    snakeWrap.innerHTML = '';

    snake = new Snake()
    game = new Game()

    var startBtn = document.querySelector('.start-btn')
    startBtn.style.display = 'block';
}
Game.prototype.pause = function (){
    clearInterval(this.timer);
}


// 开始游戏
game = new Game();

// 点击start-btn
var startBtn = document.querySelector('.start-btn button')
startBtn.onclick = ()=>{
    startBtn.parentNode.style.display = 'none'
    game.init()
}

// 暂停游戏
var snakeWrap = document.getElementById('snake')
var restartBtn = document.querySelector('.restart-btn button')
snakeWrap.onclick = ()=>{
    game.pause()
    restartBtn.parentNode.style.display = 'block';
}
restartBtn.onclick = ()=>{
    game.start();
    restartBtn.parentNode.style.display = 'none';
}
