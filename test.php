<?php
    $webLang = getUserLanguage();

    function getUserLanguage() {  
        $idioma =substr($_SERVER["HTTP_ACCEPT_LANGUAGE"],0,2); 
        return $idioma; 
    } //end getUserLanguage()

    $locale= getLocale($webLang);
    $text_domain = "es_ES";

    putenv("LC_ALL=$locale");
    setlocale(LC_ALL, $locale);
    bindtextdomain($text_domain, "./lib/locale");
    textdomain($text_domain);

    function getLocale($webLang){
      switch ($webLang) {
        case 'en':
          $locale='en_GB.UTF-8';
          break;

        case 'es':
          $locale='es_ES.UTF-8';
          break;

        case 'ca':
          $locale='ca_ES.UTF-8';
          break;

        case 'pl':
          $locale='pl.UTF-8';
          break;

        case 'pt':
        $locale='pt_PT.UTF-8';
          break;
            
        case 'de':
          $locale='de_DE.UTF-8';
          break;

        case 'fr':
          $locale='fr_FR.UTF-8';
          break;    

        default:
          $locale='en_GB.UTF-8';
        break;
      }
        return $locale;
    }// end getLocale()

    $translation = array('msg1' => _("message1"),'msg2' => _("message2"),'msg3' => _("message3"));
    return $translation;
?>