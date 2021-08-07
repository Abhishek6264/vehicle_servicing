<?php
header("Access-Control-Allow-Origin: *");
$mysql_host = "localhost:3306";
$mysql_database = "retail";
$mysql_user = "root";
$mysql_password = "";
// Create connection
$conn = new mysqli($mysql_host, $mysql_database $mysql_user, $mysql_password);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
// $sql = "SELECT userid,abhi FROM user";
// $result = $conn->query($sql);
// $outp = "";
// while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
//     if ($outp != "") {$outp .= ",";}
//     $outp .= '{"Username":"'  . $rs["userid"] . '",';
//     $outp .= '"Password":"'   . $rs["abhi"] . '"}'; 
       
// }
$outp ='{ "records":[ '.$outp.' ]}';
$conn->close();
echo($outp);
?>