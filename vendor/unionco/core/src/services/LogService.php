<?php
namespace union\core\services;

use Craft;

class LogService
{
    protected $fillable = [
        'key',
        'data',
        'url',
        'referer',
        'ip_address',
        'user_agent',
        'pid',
    ];
    protected $table = 'log_data';

    public function create($data)
    {
        return Craft::$app->db->createCommand()
            ->insert($this->table, $this->fill($data))
            ->execute();
    }

    protected function fill($data)
    {
        $fillable = [];

        foreach ($data as $key => $value) {
            if (in_array($key, $this->fillable)) {
                $fillable[$key] = $value;
            }
        }

        return $fillable;
    }
}