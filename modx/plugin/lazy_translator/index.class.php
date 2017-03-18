<?php
require_once dirname(__FILE__) . '/model/lazy_translator/lazy_translator.class.php';
/**
 * @package tagger
 */

abstract class Lazy_translatorBaseManagerController extends modExtraManagerController {
    /** @var Tagger $tagger */
    public $tagger;
    public function initialize() {
        $this->lazy_translator = new Lazy_translator$this->modx);

        return parent::initialize();
    }
    public function checkPermissions() { return true;}
}

class IndexManagerController extends Lazy_translatorBaseManagerController {
    public static function getDefaultController() { return 'index'; }
}