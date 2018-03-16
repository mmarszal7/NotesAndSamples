<?php
    include 'config/APIconfig.php';	

    $method = $_SERVER['REQUEST_METHOD'];
    switch ($method) 
    {
        case 'GET':
        {
			$query = "SELECT * FROM wp_posts;";
			$response = DB::getConnection()->query($query)->fetch();
			
			echo json_encode($response);
            break;
        }
        
        case 'POST':
            break;

		case 'DELETE':
            break;
    }
