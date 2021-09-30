<?php

namespace App\Http\TurbineComponents;

class Component
{
    /** @var int $id */
    private $id;
    /** @var string[] */
    private $damages = [];
    /** @var int $turbineId */
    private $turbineId;

    /**
     * @param int $id
     * @param int $turbineId
     */
    public function __construct(int $id = 0, int $turbineId)
    {
        $this->id = $id;
        $this->turbineId = $turbineId;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return int
     */
    public function getTurbineId()
    {
        return $this->turbineId;
    }

    /**
     * @param string $damage
     */
    public function recordDamage(string $damage)
    {
        if (!empty($damage)) array_push($this->damages, $damage);
    }

    /**
     * @return string
     */
    public function damagesAsString()
    {
        return implode(" and ", $this->damages);
    }

    /**
     * @return bool
     */
    public function hasDamage()
    {
        return empty($this->damages) ? false : true;
    }
}