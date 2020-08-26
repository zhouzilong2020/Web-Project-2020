const BoxWidth = 20,    //方块宽度
      BoxHeight = 20,   //方块高度
      Tr = 40,          //一共多少行
      Td = 40;          //一共多少列

var snake = null; //蛇实例


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
        },
        right:{
            x : 1,
            y : 0,
        },
        up:{
            x : 0,
            y : -1,
        },
        down:{
            x : 0,
            y : 1,
        }
    };
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
 * 判断下一个位置是否可行，若不行，则返回错误码
 */
Snake.prototype.getNextPos = function (){
    //蛇头当前坐标
    var headPos = [ //转换为相对坐标
        this.head.x / BoxWidth + this.dir.x,
        this.head.y / BoxWidth + this.dir.y
    ]
    //蛇头移动方向
    // var 
}

snake = new Snake();
snake.init();