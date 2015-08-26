<?php
/*   $json = $_POST['json'];

   if (json_decode($json) != null) { 
     $file = fopen('beers.json','w+');
     fwrite($file, $json);
     fclose($file);
     echo("success");
   } else {
     // handle error 
   	echo("fail");
   }*/
?>

<?php
  $json = file_get_contents("php://input");
  $file = fopen('beers.json','w+');
  fwrite($file, $json);
  fclose($file);
?>