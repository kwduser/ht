
$(document).ready(function(){
	$('.login-btn').click(function(){
		var $name=$('input[name="username"]');
		var $password=$('input[name="password"]');
		var $verify=$('input[name="verify"]');

		var _name=$.trim($($name).val());
		var _password=$.trim($($password).val());
		var _verify=$.trim($($verify).val());

		if(_name==''){
			$('.waring').text('请输入用户名')
			$name.focus();
			return;
		}
		if(_password==''){
			$('.waring').text('请输入密码')
			$name.focus();
			return;
		}
		if(_verify==''){
			$('.waring').text('请输入验证码')
			$name.focus();
			return;
		}
		$('.waring').text('登陆成功，请稍后...')
	})
})