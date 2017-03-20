<?php
/*
 *
*/
class FormFactory {
    var $allowedFormIds = array(
        'contact_form',
        'request_form',
        'apply',
        'test_form'
    );

    var $userFooter = array(
        'web' => "
C наилучшими пожеланиями,
Команда Языковой Школы Together
<together-school.pl>

ul. Kępna 17a lok. 1
03-721 Warszawa Poland

Viber: +48 730 954 779
+48 22 111 50 64
+48 505 414 887
Skype: cj.together
[VK: https://vk.com/cj_together ]
[FB: https://www.facebook.com/together.school/ ]
[INSTAGRAM: https://www.instagram.com/cjtogether/ ]
        ",
        'pl' => "
<together-school.pl>
ul. Kępna 17a lok. 1
03-721 Warszawa Poland


Viber: +48 730 954 779
+48 22 111 50 64
+48 505 414 887
Skype: cj.together
[VK: https://vk.com/cj_together ]
[FB: https://www.facebook.com/together.school/ ]
[INSTAGRAM: https://www.instagram.com/cjtogether/ ]
        ",
        'en' => "
Best wishes,
Language School Together Team
<together-school.pl>
ul. Kępna 17a lok. 1
03-721 Warszawa Poland


Viber: +48 730 954 779
+48 22 111 50 64
+48 505 414 887
Skype: cj.together
[VK: https://vk.com/cj_together ]
[FB: https://www.facebook.com/together.school/ ]
[INSTAGRAM: https://www.instagram.com/cjtogether/ ]
    
"
    );


    var $subjs = array(
        'admin' => array(
            'test_form' => 'Тест %test_result_type$s %first_name$s %last_name$s',
            'contact_form' => 'Вопрос от %first-name$s',
            'request_form' => 'Запрос от %first-name$s',
            'apply' => 'Анкета %step2-contact-info-first-name$s'
        ),
        'user' => array(
            'test_form' => array(
                'web' => 'Ваш тест Together',
                'en' => 'Your Test Together',
                'pl' => 'Twój test Together'
            ),
            'contact_form' => array(
                'web' => 'Вы задали вопрос СJ Together',
                'en' => 'Your question for  Together School',
                'pl' => 'Twoje pytanie Together School'
            ),
            'request_form' => array(
                'web' => 'Вы задали вопрос СJ Together',
                'en' => 'Your question for  Together School',
                'pl' => 'Twoje pytanie Together School'
            ),
            'apply' => array(
                'web' => 'Ваша анкета Together',
                'en' => 'Your application Together',
                'pl' => 'Aplikacja Together'
            )
        )
    );

    var $templates = array(
        "admin" => array(
            'test_form' => '
%first_name$s %last_name$s %email$s %phone$s
прошел тест с результатом %test_result$s.

            ',
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

            'test_form' => array(
                'web' => '
Здравствуйте %first_name$s, вы воспользовались нашим бесплатным online тестом для примерного определения языкового уровня.

Ваш ориентировочный  уровень %test_result$s.
Дополнительно рекомендуем пройти устное собеседование.

Если вы заинтересованы в повышении уровня знаний, просим вас заполнить анкету:
(URL:calculator_uri)
После заполнения с вами свяжется Ваш менеджер CJ Together.

            ',
                'en'=>'
Dear %first_name$s you completed our free online test to your level
Your level is %test_result$s.
We recommend an oral test.
If you are interested in improving your level, please fill in application form
(URL:calculator_uri)
Your Manager will answer as soon as possible!

            ',
                'pl' =>'
Drogi %first_name$s, skorzystałeś z naszego bezpłatnego testu kompetencji językowej
Twój poziom to %test_result$s.
Zalecamy przejście rozmowy kwalifikacyjnej.
Jeśli chcesz podnieść swój poziom, wypełnij profil:
(URL:calculator_uri)
Nasz manager skontaktuje się wkrótce.
            '
            ),

            'contact_form' => array(
                'web' => '
Здравствуйте %first-name$s, спасибо за Ваш вопрос!

Ваш менеджер CJ Together ответит Вам как можно быстрее!
',
                'pl'=> '
Drogi %first-name$s, dziękujemy za pytanie!
Odpowiemy tak szybko jak to możliwe!
                ',
                'en'=>'
Dear %first-name$s, thank you for Your question!
Your Manager will answer as soon as possible!

                '),


            'request_form' => array(
                'web' => '
Здравствуйте %first-name$s, спасибо за Ваш вопрос!

Ваш менеджер CJ Together ответит Вам как можно быстрее!
',
                'pl'=> '
Drogi %first-name$s, dziękujemy za pytanie!
Odpowiemy tak szybko jak to możliwe!
                ',
                'en'=>'
Dear %first-name$s, thank you for Your question!
Your Manager will answer as soon as possible!

                '),



            'apply' => array(
                'web' =>'
Здравствуйте %step2-contact-info-first-name$s, спасибо за отправленную анкету!

Ваш менеджер CJ Together ответит Вам как можно быстрее, чтобы обсудить детали.
',
                'pl' => '
Drogi %step2-contact-info-first-name$s, dziękujemy za wysłaną ankietę!
Odpowiemy tak szybko jak to możliwe!

                ',
                'en' => '
Dear %step2-contact-info-first-name$s, thank you for the questionnaire!
Your Manager will answer you as soon as possible to discuss the details.

                ')
        )
    );

    var $formId = null;
    var $ajaxAnswer = false;

    var $adminMail = '';

    var $transport;
    var $modx;

    var $vars = array();

    var $applyPage = array('web' =>29, 'en' => 203, 'pl' =>223);

    public function __construct($mailAddress, $transport, $modx, $context) {
        $this->adminMail = $mailAddress;
        $this->transport = $transport;
        $this->modx = $modx;
        $this->context = $context;
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
        
        return ($type == 'admin')?
            $this->templates['admin'][$this->formId] :
            $this->templates['user'][$this->formId][$this->context];
        
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
            default:
                return $this->vars['email'];
                break;
        }
    }

    private function getSubject($type = 'admin') {
        $subject = ($type == 'admin')?
        $this->subjs['admin'][$this->formId] :
        $this->subjs['user'][$this->formId][$this->context] ;
        $text = $this->processTemplate($subject, $this->vars);
        return $text;
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
        $text = vsprintf($new_str, $args);;
        $calculator_uri = $this->modx->makeUrl($this->applyPage[$this->context], $this->context, '' , 'abs');
        
        
        return str_replace('URL:calculator_uri', $calculator_uri, $text);
    }

    function ajaxRoutine() {
        $adminMailTpl = $this->processTemplate($this->_getTemplate(), $this->vars);
        $userMailTpl = $this->processTemplate($this->_getTemplate('user'), $this->vars);
        $userMailTpl .= $this->userFooter[$this->context];
        $success = (
            $this->sendMail($this->adminMail, $this->getSubject(), $adminMailTpl) &&
            $this->sendMail($this->getUserEmail(), $this->getSubject('user'), $userMailTpl)
            );
        $message = '';
        $templates = compact('adminMailTpl', 'userMailTpl');
        $emails = array('user' => $this->getUserEmail(), 'admin' => $this->adminMail);
        return json_encode(compact('success', 'message', 'templates', 'emails'));
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

if (isset($_REQUEST['context']) && !empty($_REQUEST['context']) && in_array($_REQUEST['context'], array('web', 'pl', 'en'))) {
    $contextKey =  $_REQUEST['context'];
} else {
    $contextKey =  'web';
}
 

$ff = new FormFactory($biuroMail, $modx->mail, $modx, $contextKey);

/*
 echo "<pre>";
 print_r($_POST);
 echo "</pre>";
 die;
 */

echo $ff->route();