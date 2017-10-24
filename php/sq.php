<?php
	/**
	 * 发送post请求
	 * @param string $url 请求地址
	 * @param array $post_data post键值对数据
	 * @return string
	 */
	if(isset($_POST["arg"])){
		$post_data = array(
			'account' => $_POST["arg"][0],
		  	'password' => $_POST["arg"][1]
		);
  		$postdata = http_build_query($post_data);
  		$options = array(
    		'http' => array(
      			'method' => 'POST',
      			'header' => 'Content-type:application/x-www-form-urlencoded',
      			'content' => $postdata,
      			'timeout' => 15 * 60 // 超时时间（单位:s）
    		)
  		);
  		$context = stream_context_create($options);
  		$result = file_get_contents($_POST["address"], false, $context);

  		echo $result;
	}	
?>