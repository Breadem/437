<?php 
	header("Content-type: text/html;charset=utf-8");
	$hostname = "localhost"; 
	$username = "root"; 
	$password = "123456"; 
	$database = "garry"; 
	$arguments = "";
	$result = new StdClass;
	if (IsSet ($_POST['address'])) {
	    $dbh = new mysqli($hostname, $username, $password, $database); 
	    $dbh -> set_charset("utf8");
	    if (mysqli_connect_errno()) { 
	    	$result -> value = -1;
	    	$result -> message = "连接数据库失败";	    	
	        echo json_encode($result, JSON_UNESCAPED_UNICODE);
	        exit (); 
	    }
	    foreach ($_POST["arg"] as $value){
	    	$arguments .= ",'".$value."'";
	    }
	    $arguments = substr($arguments, 1);
	    if ($result_set = $dbh->query("call ".$_POST["address"]."(".$arguments.")")) { 
	    	$num = 0;
            $result -> value = "";
          	while ($row = $result_set->fetch_object()) { 
            	$result -> value[$num] = $row;
            	$num++;
          	}
          	$result -> message = "查询成功";
          	echo json_encode($result, JSON_UNESCAPED_UNICODE);
	    } else { 
	    	$result -> message = "未找到该函数";
	        echo json_encode($result, JSON_UNESCAPED_UNICODE);
	    } 
	    $dbh -> close(); 
	}
?>