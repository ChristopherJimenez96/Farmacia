<?php
class Singleton {
    function __construct(){}
    public static function getInstance(){
        if (self::$instance==null){
           self::$instance = new QueryManager("root","","ArbitriosMunicipales");
        }
        return self::$instance;
    }
}
?>