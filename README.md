# expressvue

> express+mongodb+vue实现增删改查

[原文地址链接](https://www.imooc.com/article/33830?block)

## Build Setup

``` bash
# 项目搭建 vue-cli
1 vue init webpack express-vue

# 添加项目框架 yarn add
2 yarn add element-ui express mongoose vue-resource

# 搭建数据库 mongo
1. 启动mong
2. db 查看当前数据库
3. use hero 创建hero数据库
4. db.createCollection("myhero")  创建myhero表
5. 表中插入数据 
db.myhero.insert({    "imgArr" : [ 
        "http://ossweb-img.qq.com/images/lol/web201310/skin/big157000.jpg", 
        "http://ossweb-img.qq.com/images/lol/web201310/skin/big157001.jpg", 
        "http://ossweb-img.qq.com/images/lol/web201310/skin/big157002.jpg",    
    ],    "name" : "亚索",    "age" : "22",    "sex" : "man",    "address" : "德玛西亚",    "dowhat" : "中单、刺客",    "favourite" : "死亡如风常伴吾身",    "explain" : "亚索是一个百折不屈的艾欧尼亚人，也是一名身手敏捷的剑客，能够运用风的力量对抗敌人。年少轻狂的他曾为了荣誉而一再地损失珍贵的东西，他的职位、他的导师、最后是他的亲兄弟。他因无法摆脱的嫌疑而身败名裂，如今已是被人通缉的罪犯。亚索在家园的土地上流浪，寻找对过去的救赎。苍茫间，只有疾风指引着他的利剑。",
    })
6.app.js 数据库链接 mongoose.connect('mongodb://localhost:27017/hero', { useNewUrlParser: true });

# 创建数据库模型 heroSchema

# 创建接口路由

#app.js 开启服务

#vue 组建构成 调用接口
