
# MOS

This is a complete VUE JS version 5 user management with Laravel Sunctum, Fortify, Spatie roles and permissions. This will help for the project starters that needs to have a complete user management template.


## Tech Stack

**Client:** Vue JS, Bootstrap 5, Vite

**Server:** Php 8, Laravel 9


## Installation

Install this project by cloning this repository.

Configure database

```bash
  composer install
  php artisan migrate --seed
  npm install
  cp .env.example .env
  npm run dev
  
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`SANCTUM_STATEFUL_DOMAINS=(virtual_host_here or ip or local ip)`

