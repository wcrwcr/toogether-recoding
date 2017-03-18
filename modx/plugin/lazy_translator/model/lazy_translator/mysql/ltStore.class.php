<?php
/**
 * @package tagger
 */
require_once (strtr(realpath(dirname(dirname(__FILE__))), '\\', '/') . '/ltStore.class.php');
class ltStore_mysql extends ltStore {}
?>