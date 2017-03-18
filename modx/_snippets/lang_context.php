<?php
$context=$_REQUEST['cultureKey'];
$sitePrefix;
/*
<li><a href="#" class="ru-lang"></a></li>
<li><a href="#" class="polish-lang"></a></li>
<li><a href="#" class="english-lang"></a></li>
*/
$array = array(
    'web' => "ru-lang",
    'en' => "english-lang",
    'pl' => "polish-lang"
);
$tpl='<li><a href="%s" class="%s"></a></li>';

$output= array();
if(isset($array[$context])) {
    $output[] = sprintf($tpl, "{$sitePrefix}{$context}", $array[$context]);
    unset($array[$context]);
}

foreach ($array as $key => $val) {
    
    $output[] = sprintf($tpl, "{$sitePrefix}{$key}", $val);
}

return join(PHP_EOL, $output);