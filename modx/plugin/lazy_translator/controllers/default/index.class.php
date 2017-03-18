<?php
class Lazy_translatorIndexManagerController extends modExtraManagerController {
    public function process(array $scriptProperties = array()) {}
    public function getPageTitle() {
        return 'Переводы статики';
    }
    public function getTemplateFile() {
        return 'index.tpl';
    }
}