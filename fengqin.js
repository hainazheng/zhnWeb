// 获取所有contain元素
let items=document.querySelectorAll('.contain');

// 设置选中态样式
function setActive(){
    // 遍历所有.contain元素，移出active样式
    items.forEach((contain)=>{
        contain.classList.remove('active');
    })
    // 为当前选中项添加active样式
    this.classList.add('active');
}
// 遍历所有.contain元素，分别为其设置点击事件
items.forEach((contain)=>{
    contain.addEventListener('click',setActive);
})// JavaScript Document