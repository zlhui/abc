@charset "utf-8";
function $(id) {
		return document.getElementById(id);
	}
	var index=0; // 正在显示的图片的序号(0开始)
	var imgW=960; // 图片宽度
	var imgs=$('imgs');
	var buttons=$('buttons').getElementsByTagName('span');
	imgs.style.left=-imgW*index+'px'; // 指定第index个图像显示出来
	buttons[index].className='act'; // 指定第index个按钮为active状态（class="act"）
	var btnLen=buttons.length; // 按钮数量/图片数量
	for(var i=0;i<btnLen;i++) {
		buttons[i].i=i; //每个按钮设置js属性，保存序号
		buttons[i].onclick=function(){ // 设置每个按钮的点击事件
			imgs.style.left=-imgW*this.i+'px';
			// 设置轮播图向指定方向移动指定距离
			// 距离计算：一幅图片宽度x按钮的序号
			buttons[index].className=''; // 清除掉上一个act状态的按钮
			index=this.i; // 正在显示的图片的序号设置为被点击的按钮的序号
			this.className='act'; // 被点击的按钮设置为act状态
		}
	}