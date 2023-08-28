"use strict";
// 定义评论类
class Comment {
    text;
    reactions; // 使用字典存储各种反应及其计数
    constructor(text) {
        this.text = text;
        this.reactions = {};
    }
    // 添加反应
    addReaction(reaction) {
        if (this.reactions[reaction]) {
            this.reactions[reaction]++;
        }
        else {
            this.reactions[reaction] = 1;
        }
    }
    // 移除反应
    removeReaction(reaction) {
        if (this.reactions[reaction]) {
            this.reactions[reaction]--;
            if (this.reactions[reaction] === 0) {
                delete this.reactions[reaction];
            }
        }
    }
    // 获取所有反应及其计数
    getReactions() {
        return this.reactions;
    }
}
// 创建评论
const myComment = new Comment("这是一个很棒的文章！");
// 添加反应
myComment.addReaction("👍");
myComment.addReaction("❤️");
myComment.addReaction("😄");
myComment.addReaction("👍");
// 移除反应
myComment.removeReaction("👍");
// 获取所有反应
const reactions = myComment.getReactions();
// 打印结果
console.log(reactions);
