<?php


$obects = [
    [0,2],
    [1,2],
    [0,4],
    [3,6],
    [7,4]
];

function map($items,$callback)
{
    $res = [];
    foreach ($items as $item) {
        $res[] = $callback($item);
    }
    return $res;
}

$result = map($obects,function($item){
    return $item[0];
});

print_r($result);