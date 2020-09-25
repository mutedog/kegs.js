<?php
  $json = file_get_contents("php://input");
  $file = fopen('beers.json','w+');
  fwrite($file, $json);
  fclose($file);
?>