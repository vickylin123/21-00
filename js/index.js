$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 0)
            $('.navbar').addClass('navbar-top')
        else
        $('.navbar').removeClass('navbar-top')
    });
    $('.addcart').click(()=>{
        alert('已加入購物車');
        return false
    });
	$('.user').submit(function(){
		$(".modal").css("display","none");
		$(".modal-backdrop").css("display","none");
		$('body').css('padding-right','0');
		$('body').removeClass('modal-open');
		$('body').css('overflow-y','scroll');
		return false
	});
	$('.signup').submit(function(){
		$(".modal").css("display","none");
		$(".modal-backdrop").css("display","none");
		$('body').css('padding-right','0');
		$('body').removeClass('modal-open');
		$('body').css('overflow-y','scroll');
		return false
	});
	$('.reset').click(()=>{
		var content = prompt('請輸入註冊帳號之電子郵件。');
		if (content != '' && content != null){
			alert('已將重設密碼信件寄至您的電子郵件，請依信件內容進行密碼重設。')
		}
		else{
			return false
		}
	});
})
