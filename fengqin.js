// ��ȡ����containԪ��
let items=document.querySelectorAll('.contain');

// ����ѡ��̬��ʽ
function setActive(){
    // ��������.containԪ�أ��Ƴ�active��ʽ
    items.forEach((contain)=>{
        contain.classList.remove('active');
    })
    // Ϊ��ǰѡ�������active��ʽ
    this.classList.add('active');
}
// ��������.containԪ�أ��ֱ�Ϊ�����õ���¼�
items.forEach((contain)=>{
    contain.addEventListener('click',setActive);
})// JavaScript Document