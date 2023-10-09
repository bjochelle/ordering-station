<?php

$environment = '';
if (App::environment('local','dev')) {
    $API_HACHI = 'https://localhost-ctl.challenger.sg/';
}
if (App::environment('staging','production')) {
    $API_HACHI = 'https://www.challenger.sg/';
}

?>