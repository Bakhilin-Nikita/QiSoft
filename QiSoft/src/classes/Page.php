<?php

class Page
{
    public function getPage($page): array
    {
        switch ($page) {
            case 'home':
                $fileName = 'home.php';
                $title = 'QiSoft | Software development';
                break;
            case 'about':
                $fileName = 'about.php';
                $title = 'QiSoft | About';
                break;
            case 'service':
                $fileName = 'service.php';
                $title = 'QiSoft | Service';
                break;
            case 'contact':
                $fileName = 'contact.php';
                $title = 'QiSoft | Contact us';
                break;
            default:
                $fileName = 'home.php';
                $title = 'QiSoft | Software development';
        }

        return [
            'File' => $fileName,
            'Title' => $title
        ];
    }
}