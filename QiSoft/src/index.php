<?php

require "classes/Page.php";

if (!empty($_GET['content'])) {
    $content = $_GET['content'];
} else {
    $content = 'home';
}

$page = new Page();

$info = $page->getPage($content);
$fileName = $info['File'];
$title = $info['Title'];

ob_start();
include 'blocks/header.php';
$header = ob_get_clean();
ob_start();
include 'styles.php';
$styles = ob_get_clean();
ob_start();
include "pages/$fileName";
$content = ob_get_clean();
ob_start();
include 'blocks/footer.php';
$footer = ob_get_clean();

$html = file_get_contents('main.html');
$html = str_replace('{{TITLE}}', $title, $html);
$html = str_replace('{{HEADER}}', $header, $html);
$html = str_replace('{{CONTENT}}', $content, $html);
$html = str_replace('{{FOOTER}}', $footer, $html);
$html = str_replace('{{STYLES}}', $styles, $html);

echo $html;
