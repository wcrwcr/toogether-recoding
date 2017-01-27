<?php
/*
 *  
 */
class FormFactory {
    var $allowedFormIds = array(
        'contact_form', 
        'request_form',
        'apply'
    );
    
    var $subjs = array(
        'admin' => array(
            'contact_form' => 'Вопрос от %first-name$s',
            'request_form' => 'Запрос от %first-name$s',
            'apply' => 'Анкета %step2-contact-info-first-name$s'
        ),
        'user' => array(
            'contact_form' => 'Вы задали вопрос СJ Together',
            'request_form' => 'Ваш вопрос СJ Together',
            'apply' => 'Ваша анкета СJ Together'
        )
    );
    
    var $templates = array(
        "admin" => array(
            'contact_form' => '
На странице <Контакты> был отправлен вопрос: 
%your-message$s
%first-name$s 
%second-name$s
%telephone$s
%email$s
            
            ',
            
            
            
            'request_form' => '
На странице <Задай вопрос> был отправлен запрос: 

%first-name$s
%last-name$s
%email$s
%phone$s
%address-a$s
%city$s
%postal_code$s
%country$s
%native-lang$s
%gender$s
%start-class$s
%question_text$s
            ',
            
            'apply' => '
Общие данные: 
%step1-choose-type$s
%step1-source$s 
%step1-lang-level$s
%step1-start-date$s
%step2-contact-info-first-name$s
%step2-contact-info-last-name$s
%step1$s
%step2-contact-info-passport$s
%step2-contact-info-gender$s
%step2-contact-info-email$s
%step2-contact-info-phone$s


Контактные данные: 
%step2-resid-address$s %step2-resid-city$s %step2-resid-postal-code$s%step2-resid-country$s

%step2-resid-address-b$s %step2-resid-city-b$s %step2-resid-postal-code-b$s%step2-resid-country-b$s

%step2-mail-address$s %step2-mail-city$s %step2-mail-postal-code$s%step2-mail-country$s

Дополнительно: 
%step2-visa$s
%step2-permit$s
%step2-native-lang$s
%step1-lang-level$s
%step2-hear-about$s
            
            '
        ),

        "user" => array(
        
            
            'contact_form' => '
Здравствуйте %first-name$s, спасибо за Ваш вопрос!

Ваш менеджер CJ Together ответит Вам как можно быстрее! 

C наилучшими пожеланиями,
Команда Языковой Школы Together
<together-school.pl>
            ',
            
            
            
            'request_form' => '
Здравствуйте %first-name$s, спасибо за Ваш вопрос!

Ваш менеджер CJ Together ответит Вам как можно быстрее! 

C наилучшими пожеланиями,
Команда Языковой Школы Together
<together-school.pl>',
            
            
            
            'apply' => '
Здравствуйте %step2-contact-info-first-name$s, спасибо за отправленную анкету!

Ваш менеджер CJ Together ответит Вам как можно быстрее, чтобы обсудить детали. 


C наилучшими пожеланиями,
Команда Языковой Школы Together
<together-school.pl>
                '
        )
    );
    
    var $formId = null;
    var $ajaxAnswer = false;
    
    var $adminMail = '';

    var $transport;
    var $modx;
    
    var $vars = array();
    
    public function __construct($mailAddress, $transport, $modx) {
        $this->adminMail = $mailAddress;
        $this->transport = $transport;
        $this->modx = $modx;
    }
    
    private function _isPost() {
        return !empty($_POST);
    }
    
    private function _isFormId() {
        if (isset($_POST['_a_form']) && !empty($_POST['_a_form'])) {
            $this->formId = $_POST['_a_form'];
            $this->ajaxAnswer = true;
        }
        if ($this->formId) {
            if (!in_array($this->formId, $this->allowedFormIds)){
                $this->formId = null;
            }
        }
        return !is_null($this->formId);
    }
    
    private function _getTemplate($type = 'admin') {
        $subArray = ($type == 'admin')? 'admin' : 'user';
        return $this->templates[$subArray][$this->formId];
    }
    
    private function getVars() {
        switch($this->formId) {
            case 'apply':
                    foreach ($_POST['data'] as $step => $frm) {
                        foreach ($frm as $field) {
                            $this->vars["{$step}-{$field['name']}"] = $field['value'];
                        }
                    }
                break;
            default:
                $this->vars = $_POST;
                break;
        }
    }
    
    private function getUserEmail() {
        switch ($this->formId) {
            case 'apply':
                return $this->vars['step2-contact-info-email'];
                break;
            case 'request_form':
            case 'contact_form':
                return $this->vars['email'];
                break;
        }
    }
    
    private function getSubject($type = 'admin') {
        $subArray = ($type == 'admin')? 'admin' : 'user';
        return $this->processTemplate($this->subjs[$subArray][$this->formId], $this->vars);
    }
    
    public function route(){
        if ($this->_isPost() && $this->_isFormId()) {
            $this->getVars();
            return ($this->ajaxAnswer)? $this->ajaxRoutine() : $this->normalRoutine();
        } else {
            echo 'failed';
        }
        return null; 
    }
    
    function processTemplate($str, $args) {
        if (is_object($args)) {
            $args = get_object_vars($args);
        }
        $map = array_flip(array_keys($args));
        $new_str = preg_replace_callback('/(^|[^%])%([a-zA-Z0-9_-]+)\$/',
            function($m) use ($map) { 
                return $m[1].'%'.($map[$m[2]] + 1).'$'; 
            },
            $str
        );
        return vsprintf($new_str, $args);
    }
        
    function ajaxRoutine() {
        $adminMailTpl = $this->processTemplate($this->_getTemplate(), $this->vars);
        
        $userMailTpl = $this->processTemplate($this->_getTemplate('user'), $this->vars);
        $success = (
            $this->sendMail($this->adminMail, $this->getSubject(), $adminMailTpl) &&
            $this->sendMail($this->getUserEmail(), $this->getSubject('user'), $userMailTpl)
        );
        $message = '';
        return json_encode(compact('success', 'message'));
    }
    
    function normalRoutine() {
        return false;
    }
    
    function sendMail($to, $subject, $message) {
        $from = 'noreply@together-school.pl';
        $this->transport->set(modMail::MAIL_BODY, $message);
        $this->transport->set(modMail::MAIL_FROM, $from);
        $this->transport->set(modMail::MAIL_FROM_NAME, 'Toogether Website Robot');
        $this->transport->set(modMail::MAIL_SUBJECT, $subject);
        $this->transport->address('to', $to);
        $this->transport->address('reply-to', $from);
        $this->transport->setHTML(false);
        if (!($res = $this->transport->send())) {
            $this->modx->log(
                modX::LOG_LEVEL_ERROR,
                "Письмо `{$subject}` для {$to} не было отправлено из-за ошибки PHPEmail"
            );
        }
        $this->transport->reset();
        return $res;
    }
}

$page = $modx->getObject('modResource', 1);
$biuroMail = $page->getTVValue('reception_mail');
$modx->getService('mail', 'mail.modPHPMailer');

$ff = new FormFactory($biuroMail, $modx->mail, $modx);

/*
echo "<pre>";
print_r($_POST);
echo "</pre>";
die;
*/

echo $ff->route();
