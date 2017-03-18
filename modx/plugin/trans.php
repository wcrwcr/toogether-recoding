<?php
require_once $modx->getOption('core_path').'components/lazy_translator/languages.php';

if (!empty($_REQUEST['cultureKey']) && !empty($languages)) {
    $context = $_REQUEST['cultureKey'];
    $output = &$modx->resource->_output;
    foreach ($languages as $search => $variants) {
        if (isset($variants[$context])) {
            $output = str_replace($search, $variants[$context], $output);
        }
    }
}

